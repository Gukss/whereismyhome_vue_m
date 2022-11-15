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
          <tr
            v-for="(item, index) in $store.getters.getAptList"
            :key="index"
            @mouseover="mouseOverTr(index)"
            @mouseout="mouseOutTr(index)"
          >
            <td>{{ item.aptName }}</td>
            <td>{{ item.floor }} 층</td>
            <td>{{ item.area }} ㎡</td>
            <td>{{ item.dealAmount }} 만 원</td>
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
      overlayList: [],
      markerList: [],
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
    mouseOverTr(index) {
      this.overlayList[index].setMap(this.map);
    },
    mouseOutTr(index) {
      this.overlayList[index].setMap(null);
    },
    initMap() {
      const container = this.$refs.map_container;
      const options = {
        center: new kakao.maps.LatLng(
          // this.$store.getters.getAptList[0].lat,
          // this.$store.getters.getAptList[0].lng,
          35.8371,
          128.7156,
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
      let positions = [];
      for (let i = 0; i < this.$store.getters.getAptList.length; i++) {
        positions.push({
          content: `<div>${this.$store.getters.getAptList[i].aptName}</div>`,
          latlng: new kakao.maps.LatLng(
            this.$store.getters.getAptList[i].lat,
            this.$store.getters.getAptList[i].lng
          ),
        });
      }

      let i;
      this.overlayList = [];
      this.markerList = [];
      for (i = 0; i < positions.length; i++) {
        // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
        let marker = new kakao.maps.Marker({
          map: this.map,
          position: positions[i].latlng,
        });
        this.markerList.push(marker);
        let content = `<div class="overlay_wrap" style="position: relative;top:-52px;">
                        <div
                          class="overlay_container"
                          style="border-radius: 0.4rem; background-color: #fff; text-align: center"
                        >
                          <div class="overlay_title" style="color: #1e88e5; padding: 0.2rem 0.4rem">${this.$store.getters.getAptList[i].aptName}</div>
                        </div>
                      </div>`;
        marker.setMap(this.map);
        // 인포윈도우를 생성합니다
        let overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: this.map,
          position: marker.getPosition(),
        });
        this.overlayList.push(overlay);
        overlay.setMap(null);
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(this.map, marker, overlay)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(overlay)
        );
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(positions[i].latlng);
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      }
      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      function makeOverListener(map, overlay) {
        return function () {
          overlay.setMap(map);
        };
      }
      // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      function makeOutListener(overlay) {
        return function () {
          overlay.setMap(null);
        };
      }
      this.map.setBounds(bounds);
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/sectionSearch.css";
</style>
