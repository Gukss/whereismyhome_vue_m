import Vue from "vue";
import Vuex from "vuex";
// import http from "@/util/http-common";

Vue.use(Vuex);

export const store = new Vuex.Store({
  /* =========================== */
  /* =                         = */
  /* =         state           = */
  /* =                         = */
  /* =========================== */
  state: {
    count: 0,
    //listbox axios state
    // sidoList: [],
    // gugunList: [],
    // dongList: [],
    // sidoVal: "",
    // gugunVal: "",
    // dongVal: "",
    // //---
    // //
    // yearList: [],
    // monthList: [],
    // yearVal: "",
    // monthVal: "",
    // //---
    // //search state
    // aptList: [],
  },
  /* =========================== */
  /* =                         = */
  /* =         getter          = */
  /* =                         = */
  /* =========================== */
  getters: {
    getCount(state) {
      return state.count;
    },
    //listbox getter
    // getSidoVal(state) {
    //   return state.sidoVal;
    // },
    // getSidoList(state) {
    //   return state.sidoList;
    // },
    // getGugunVal(state) {
    //   return state.gugunVal;
    // },
    // getGugunList(state) {
    //   return state.gugunList;
    // },
    // getDongVal(state) {
    //   return state.dongVal;
    // },
    // getDongList(state) {
    //   return state.dongList;
    // },
    // getYearVal(state) {
    //   return state.yearVal;
    // },
    // getYearList(state) {
    //   return state.yearList;
    // },
    // getMonthVal(state) {
    //   return state.monthVal;
    // },
    // getMonthList(state) {
    //   return state.monthList;
    // },
    // //---
    // getAptList(state) {
    //   return state.aptList;
    // },
  },
  //동기적 로직
  mutations: {
    addCounter: function (state, payload) {
      return (state.coun += payload);
    },
    // initSidoList(state, payload) {
    //   return (state.sidoList = payload);
    // },
  },
  //비동기적 로직
  actions: {
    // asyncReqSido: async function (context) {
    //   const subUrl = "search/sido";
    //   let resSido = await http.get(`${subUrl}`);
    //   //mutations불러서 사용하기
    //   return context.commit("initSidoList", resSido);
    //   // this.$store.getter.getSidoList = resSido.data;
    // },
  },
});
