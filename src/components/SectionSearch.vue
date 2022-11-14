<template>
  <section class="section">
    <div class="search_container">
      <div class="search_map_container" ref="map_container"></div>
      <div class="search_list_container">
        <table class="search_list">
          <colgroup>
            <col width="35%" />
            <col width="15%" />
            <col width="25%" />
            <col width="25%" />
          </colgroup>
          <tr>
            <th>아파트이름</th>
            <th>층</th>
            <th>면적</th>
            <th>거래금액</th>
          </tr>
          <tr v-for="(item, index) in $store.getters.getAptList" :key="index">
            <td>{{ item.aptName }}</td>
            <td>{{ item.floor }} 층</td>
            <td>{{ item.area }} ㎡</td>
            <td>{{ item.dealAmount }}만 원</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "SectionSearch",
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;

      script.addEventListener("load", () => {
        // console.log("loaded", window.kakao);
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      // console.log("이미 로딩됨", window.kakao);
      this.initMap();
    }
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    initMap() {
      const container = this.$refs.map_container;
      const options = {
        // center: new kakao.maps.LatLng(35.837, 128.7156, 16),
        center: new kakao.maps.LatLng(
          this.$store.getters.getAptList[0].lat,
          this.$store.getters.getAptList[0].lng,
          16
        ),
        level: 4,
      };
      this.map = new kakao.maps.Map(container, options);
      /* =========================== */
      /* =    지도 컨트롤러 추가   = */
      /* =========================== */
      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      let mapTypeControl = new kakao.maps.MapTypeControl();
      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      this.map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);
      /* =========================== */
      /* =     지도 범위 설정      = */
      /* =========================== */
      // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
      let bounds = new kakao.maps.LatLngBounds();
      // 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다
      let points = [];
      for (let i = 0; i < this.$store.getters.getAptList.length; i++) {
        points.push(
          new kakao.maps.LatLng(
            this.$store.getters.getAptList[i].lat,
            this.$store.getters.getAptList[i].lng
          )
        );
      }
      let i, marker;
      for (i = 0; i < this.$store.getters.getAptList.length; i++) {
        // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
        marker = new kakao.maps.Marker({ position: points[i] });
        marker.setMap(this.map);

        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(points[i]);
      }
      this.map.setBounds(bounds);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/sectionSearch.css";
</style>
