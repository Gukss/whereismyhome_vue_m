<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="banner_title_container">
            <img src="@/assets/img/jam_home.svg" alt="aa" />
            <div class="banner_text_container">
              <div class="title">안심하우스</div>
              <div class="subtitle">안심하우스를 찾아보세요.</div>
            </div>
            <spinner-test v-if="this.$store.getters.getIsLoading"/>
          </div>
        </div>
        <div class="banner_info" style="padding-top: 0rem">
          <SectionSelector></SectionSelector>
        </div>
        <div class="banner_info" style="padding-top: 0rem">
          <div class="card_container">
            <div class="card">
              <img class="medal" src="@/assets/img/SilverMedal.svg" alt="silver" />
              <div class="card_table_container">
                <table class="card_table">
                  <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                  </colgroup>
                  <tr>
                    <td class="title">아파트이름</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].aptName}}</td>
                  </tr>
                  <tr>
                    <td class="title">주소</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].roadName + " " + Number($store.getters.getSafeHomeTop3List[0].roadNameBonbun)}}</td>
                  </tr>
                  <tr>
                    <td class="title">면적</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].area}} ㎡</td>
                  </tr>
                  <tr>
                    <td class="title">최근거래금액</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].dealAmount}} 만 원</td>
                  </tr>
                  <tr>
                    <td class="title">가로등개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].lampCount}} 개</td>
                  </tr>
                  <tr>
                    <td class="title">CCTV개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].cctvcount}} 개</td>
                  </tr>
                  <tr>
                    <td class="title">경찰서개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[1].policeCount}} 개</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card">
              <img class="medal" src="@/assets/img/GoldMedal.svg" alt="gold" />
              <div class="card_table_container">
                <table class="card_table">
                  <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                  </colgroup>
                  <tr>
                    <td class="title">아파트이름</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].aptName}}</td>
                  </tr>
                  <tr>
                    <td class="title">주소</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].roadName + " " + Number($store.getters.getSafeHomeTop3List[0].roadNameBonbun)}}</td>
                  </tr>
                  <tr>
                    <td class="title">면적</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].area}} ㎡</td>
                  </tr>
                  <tr>
                    <td class="title">최근거래금액</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].dealAmount}} 만 원</td>
                  </tr>
                  <tr>
                    <td class="title">가로등개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].lampCount}} 개</td>
                  </tr>
                  <tr>
                    <td class="title">CCTV개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].cctvcount}} 개</td>
                  </tr>
                  <tr>
                    <td class="title">경찰서개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[0].policeCount}} 개</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card">
              <img class="medal" src="@/assets/img/BronzeMedal.svg" alt="silver" />
              <div class="card_table_container">
                <table class="card_table">
                  <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                  </colgroup>
                  <tr>
                    <td class="title">아파트이름</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].aptName}}</td>
                  </tr>
                  <tr>
                    <td class="title">주소</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].roadName + " " + Number($store.getters.getSafeHomeTop3List[0].roadNameBonbun)}}</td>
                  </tr>
                  <tr>
                    <td class="title">면적</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].area}} ㎡</td>
                  </tr>
                  <tr>
                    <td class="title">최근거래금액</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].dealAmount}} 만 원</td>
                  </tr>
                  <tr>
                    <td class="title">가로등개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].lampCount}} 개</td>
                  </tr>
                  <tr>
                    <td class="title">CCTV개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].cctvcount}} 개</td>
                  </tr>
                  <tr>
                    <td class="title">경찰서개수</td>
                    <td>{{$store.getters.getSafeHomeTop3List[2].policeCount}} 개</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionSelector from "@/components/SectionSelector.vue";
import { mapGetters } from "vuex";
// import http from "@/util/http-common";
import SpinnerTest from '@/components/SpinnerTest';

export default {
  name: "SectionSafety",
  components: { SectionSelector, SpinnerTest },
  data(){
    return{
      isLoading: true,
    }
  },
  created(){
    // let nullhouse = {
    //   aptName : "",
    //   roadName : "",
    //   roadNameBonbun : "",
    //   area : "",
    //   dealAmount : "",
    //   lampCount : "",
    //   cctvcount : "",
    //   policeCount : "",
    // };
    let nullhouseList = [[], [], []];
    this.$store.commit("setSafeHomeTop3List", nullhouseList);
    console.log(this.$store.getters.getSafeHomeTop3List);
  },
  computed: {
    ...mapGetters([
      "getSafeHomeTop3List",
      "getIsLoading",
    ]),
  },
  methods:{
  },
};
</script>

<style scoped>
@import "@/assets/css/SectionSafety.css";
</style>
