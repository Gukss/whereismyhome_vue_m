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
    },
  },
};
</script>

<style scoped>
@import "../assets/css/sectionSearch.css";
</style>
