<template>
  <div>
    <form action="submit" class="area_select_container">
      <div class="form_group">
        <select
          class="form_select"
          name="sido"
          id="sido"
          v-model="sidoName"
          @change="
            [
              $store.commit('setSidoVal', $event.target.value),
              $store.dispatch('asyncReqGugun', $event.target.value),
            ]
          "
        >
          <!-- Todo: focus가면 시도선택 없어지게 하기 -->
          <option value="">시도선택</option>
          <option
            :value="item"
            v-for="(item, index) in $store.getters.getSidoList"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form_group">
        <select
          class="form_select"
          name="gugun"
          id="gugun"
          v-model="gugunName"
          @change="
            [
              $store.commit('setGugunVal', $event.target.value),
              $store.dispatch('asyncReqDong', $event.target.value),
            ]
          "
        >
          <option value="">구군선택</option>
          <option
            :value="item"
            v-for="(item, index) in $store.getters.getGugunList"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form_group">
        <select
          class="form_select"
          name="dong"
          id="dong"
          v-model="dongName"
          @change="$store.commit('setDongVal', $event.target.value)"
        >
          <option value="">동선택</option>
          <option
            :value="item"
            v-for="(item, index) in $store.getters.getDongList"
            :key="index"
            :dongName="dongName"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form_group">
        <select
          class="form_select"
          name="year"
          id="year"
          @change="
            [
              $store.commit('setYearVal', $event.target.value),
              $store.commit('reqMonthList'),
            ]
          "
        >
          <option value="">매매년도선택</option>
          <option
            :value="item"
            v-for="(item, index) in $store.getters.getYearList"
            :key="index"
          >
            {{ item }} 년
          </option>
        </select>
      </div>
      <div class="form_group">
        <select
          class="form_select"
          name="month"
          id="month"
          @change="$store.commit('setMonthVal', $event.target.value)"
        >
          <option value="">매매월선택</option>
          <option
            :value="item"
            v-for="(item, index) in $store.getters.getMonthList"
            :key="index"
          >
            {{ item }} 월
          </option>
        </select>
      </div>
      <div class="form_group">
        <div class="button_container">
          <input
            type="button"
            value="검색"
            id="list-btn"
            @click="asyncReqAptList"
            v-show="this.$route.fullPath !== `/safety`"
          />
          <input
            type="button"
            value="관심지역 등록"
            id="interest-btn2"
            @click="asyncReqInsertInterest"
            v-show="this.$route.fullPath !== `/safety`"
          />
          <router-link to="/safety" v-show="this.$route.fullPath === `/safety`">
            <input
              type="button"
              value="안심하우스검색"
              id="interest-btn3"
              @click="asyncReqsafeHomeList"
            />
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "SectionSelector",
  data() {
    return {
      id: "",
      sidoName: "",
      gugunName: "",
      dongName: "",
    };
  },
  mounted() {
    this.getSido();
    this.getYear();
  },
  computed: {
    ...mapGetters([
      "getSidoVal",
      "getSidoList",
      "getGugunVal",
      "getGugunList",
      "getDongVal",
      "getDongList",
      "getYearVal",
      "getYearList",
      "getMonthVal",
      "getMonthList",
      "getAptList",
      "reqYearList",
    ]),
  },
  methods: {
    ...mapMutations([
      "setSidoList",
      "setSidoVal",
      "setGugunList",
      "setGugunVal",
      "setDongList",
      "setDongVal",
      "setYearList",
      "setYearVal",
      "setMonthList",
      "setMonthVal",
      "setAptList",
      "reqMonthList",
    ]),
    ...mapActions([
      "asyncReqSido",
      "asyncReqGugun",
      "asyncReqDong",
      "asyncReqAptList",
      "asyncReqsafeHomeList",
      "asyncReqInsertInterest",
    ]),
    getSido: function () {
      this.$store.dispatch("asyncReqSido");
    },
    getYear: function () {
      this.$store.getters.reqYearList;
    },
  },
};
</script>

<style></style>
