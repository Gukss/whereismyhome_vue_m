<template>
  <section class="section">
    <spinner-test v-if="this.$store.getters.getIsLoading" />
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="banner_title_container">
            <img
              src="@/assets/img/house.png"
              alt="aa"
              style="width: 4rem; margin-right: 2rem"
            />
            <div class="banner_text_container">
              <div class="title">안심하우스</div>
              <div class="subtitle">안심하우스를 찾아보세요.</div>
            </div>
          </div>
        </div>
        <div class="banner_info" style="padding-top: 0rem">
          <SectionSelector></SectionSelector>
        </div>
        <div class="banner_info" style="padding-top: 0rem">
          <div
            class="card_container"
            v-if="
              !this.isEmptyArr(this.$store.getters.getSafeHomeTop3List[0]) ||
              this.$store.getters.getIsLoading
            "
          >
            <div class="card" v-if="!this.$store.getters.getIsLoading">
              <img
                class="medal"
                src="@/assets/img/silver-medal.png"
                alt="silver"
              />
              <div class="card_table_container">
                <table class="card_table">
                  <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                  </colgroup>
                  <tr>
                    <td class="title">아파트이름</td>
                    <td>{{ $store.getters.getSafeHomeTop3List[1].aptName }}</td>
                  </tr>
                  <tr>
                    <td class="title">주소</td>
                    <td>
                      {{
                        $store.getters.getSafeHomeTop3List[1].roadName +
                        " " +
                        Number(
                          $store.getters.getSafeHomeTop3List[0].roadNameBonbun
                        )
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="title">면적</td>
                    <td>{{ $store.getters.getSafeHomeTop3List[1].area }} ㎡</td>
                  </tr>
                  <tr>
                    <td class="title">최근거래금액</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[1].dealAmount }} 만
                      원
                    </td>
                  </tr>
                  <tr>
                    <td class="title">가로등개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[1].lampCount }} 개
                    </td>
                  </tr>
                  <tr>
                    <td class="title">CCTV개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[1].cctvcount }} 개
                    </td>
                  </tr>
                  <tr>
                    <td class="title">경찰서개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[1].policeCount }} 개
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card" v-if="!this.$store.getters.getIsLoading">
              <img class="medal" src="@/assets/img/gold-medal.png" alt="gold" />
              <div class="card_table_container">
                <table class="card_table">
                  <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                  </colgroup>
                  <tr>
                    <td class="title">아파트이름</td>
                    <td>{{ $store.getters.getSafeHomeTop3List[0].aptName }}</td>
                  </tr>
                  <tr>
                    <td class="title">주소</td>
                    <td>
                      {{
                        $store.getters.getSafeHomeTop3List[0].roadName +
                        " " +
                        Number(
                          $store.getters.getSafeHomeTop3List[0].roadNameBonbun
                        )
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="title">면적</td>
                    <td>{{ $store.getters.getSafeHomeTop3List[0].area }} ㎡</td>
                  </tr>
                  <tr>
                    <td class="title">최근거래금액</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[0].dealAmount }} 만
                      원
                    </td>
                  </tr>
                  <tr>
                    <td class="title">가로등개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[0].lampCount }} 개
                    </td>
                  </tr>
                  <tr>
                    <td class="title">CCTV개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[0].cctvcount }} 개
                    </td>
                  </tr>
                  <tr>
                    <td class="title">경찰서개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[0].policeCount }} 개
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card" v-if="!this.$store.getters.getIsLoading">
              <img
                class="medal"
                src="@/assets/img/bronze-medal.png"
                alt="silver"
              />
              <div class="card_table_container">
                <table class="card_table">
                  <colgroup>
                    <col width="35%" />
                    <col width="65%" />
                  </colgroup>
                  <tr>
                    <td class="title">아파트이름</td>
                    <td>{{ $store.getters.getSafeHomeTop3List[2].aptName }}</td>
                  </tr>
                  <tr>
                    <td class="title">주소</td>
                    <td>
                      {{
                        $store.getters.getSafeHomeTop3List[2].roadName +
                        " " +
                        Number(
                          $store.getters.getSafeHomeTop3List[0].roadNameBonbun
                        )
                      }}
                    </td>
                  </tr>
                  <tr>
                    <td class="title">면적</td>
                    <td>{{ $store.getters.getSafeHomeTop3List[2].area }} ㎡</td>
                  </tr>
                  <tr>
                    <td class="title">최근거래금액</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[2].dealAmount }} 만
                      원
                    </td>
                  </tr>
                  <tr>
                    <td class="title">가로등개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[2].lampCount }} 개
                    </td>
                  </tr>
                  <tr>
                    <td class="title">CCTV개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[2].cctvcount }} 개
                    </td>
                  </tr>
                  <tr>
                    <td class="title">경찰서개수</td>
                    <td>
                      {{ $store.getters.getSafeHomeTop3List[2].policeCount }} 개
                    </td>
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
import SectionSelector from "@/components/section/SectionSelector.vue";
import { mapGetters } from "vuex";
// import http from "@/util/http-common";
import SpinnerTest from "@/components/LoadingSpinner";

export default {
  name: "SectionSafety",
  components: { SectionSelector, SpinnerTest },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    let nullhouseList = [[], [], []];
    this.$store.commit("setSafeHomeTop3List", nullhouseList);
    console.log(this.$store.getters.getSafeHomeTop3List);
    console.log(this.isEmptyArr(this.$store.getters.getSafeHomeTop3List[0]));
  },
  computed: {
    ...mapGetters(["getSafeHomeTop3List", "getIsLoading"]),
  },
  methods: {
    /**
     * 배열이 비어있으면 비어있는 값 넣어주도록
     * @todo: 비어있을 때 등수 카드말고 다른 화면 보여주도록 하기
     */
    isEmptyArr(arr) {
      if (Array.isArray(arr) && arr.length === 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/SectionSafety.css";
</style>
