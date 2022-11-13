import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export const store = new Vuex.Store({
  /* =========================== */
  /* =                         = */
  /* =         state           = */
  /* =                         = */
  /* =========================== */
  state: {
    //listbox axios state
    sidoList: [],
    gugunList: [],
    dongList: [],
    sidoVal: "",
    gugunVal: "",
    dongVal: "",
    //---
    //
    yearList: [],
    monthList: [],
    yearVal: "",
    monthVal: "",
    //---
    //search state
    aptList: [],
  },
  /* =========================== */
  /* =                         = */
  /* =         getter          = */
  /* =                         = */
  /* =========================== */
  getters: {
    //listbox getter
    getSidoVal(state) {
      return state.sidoVal;
    },
    getSidoList(state) {
      return state.sidoList;
    },
    getGugunVal(state) {
      return state.gugunVal;
    },
    getGugunList(state) {
      return state.gugunList;
    },
    getDongVal(state) {
      return state.dongVal;
    },
    getDongList(state) {
      return state.dongList;
    },
    getYearVal(state) {
      return state.yearVal;
    },
    getYearList(state) {
      return state.yearList;
    },
    getMonthVal(state) {
      return state.monthVal;
    },
    getMonthList(state) {
      return state.monthList;
    },
    //---
    getAptList(state) {
      return state.aptList;
    },
    reqYearList(state) {
      let date = new Date();
      let year = date.getFullYear();
      for (let i = year; i > year - 10; i--) {
        state.yearList.push(i);
      }
      return state.yearList;
    },
  },
  //동기적 로직
  mutations: {
    setSidoList(state, payload) {
      return (state.sidoList = payload);
    },
    setSidoVal(state, payload) {
      console.log(payload);
      return (state.sidoVal = payload);
    },
    setGugunList(state, payload) {
      return (state.gugunList = payload);
    },
    setGugunVal(state, payload) {
      return (state.gugunVal = payload);
    },
    setDongList(state, payload) {
      return (state.dongList = payload);
    },
    setDongVal(state, payload) {
      return (state.dongVal = payload);
    },
    setYearList(state, payload) {
      return (state.yearList = payload);
    },
    setYearVal(state, payload) {
      return (state.yearVal = payload);
    },
    setMonthList(state, payload) {
      return (state.monthList = payload);
    },
    setMonthVal(state, payload) {
      return (state.monthVal = payload);
    },

    setAptList(state, payload) {
      return (state.aptList = payload);
    },
    reqMonthList(state) {
      let date = new Date();
      let month = date.getMonth() + 1;
      let m = state.yearVal == date.getFullYear() ? month : 13;
      state.monthList = [];
      for (let i = 1; i < m; i++) {
        // let temp = i < 10 ? "0" + i : i;
        state.monthList.push(i);
      }
      return state.monthList;
    },
  },
  //비동기적 로직
  actions: {
    asyncReqSido: async function (context) {
      const subUrl = "search/sido";
      let resSido = await http.get(`${subUrl}`);
      //mutations불러서 사용하기
      return context.commit("setSidoList", resSido.data);
      // this.$store.getter.getSidoList = resSido.data;
    },
    asyncReqGugun: async function (context, payload) {
      const subUrl = "search/gugun";
      const reqData = { sido: payload };
      let resGugun = await http.get(`${subUrl}`, { params: reqData });
      return context.commit("setGugunList", resGugun.data);
    },
    asyncReqDong: async function (context, payload) {
      const subUrl = "search/dong";
      const sidoVal = context.getters.getSidoVal;
      console.log(sidoVal);
      const reqData = { sido: sidoVal, gugun: payload };
      let resDong = await http.get(`${subUrl}`, { params: reqData });
      return context.commit("setDongList", resDong.data);
    },
    asyncReqAptList: async function (context) {
      const subUrl = "search/aptlist";
      const reqData = {
        sido: context.getters.getSidoVal,
        gugun: context.getters.getGugunVal,
        dong: context.getters.getDongVal,
        year: context.getters.getYearVal,
        month: context.getters.getMonthVal,
      };
      let resAptList = await http.get(`${subUrl}`, { params: reqData });
      return context.commit("setAptList", resAptList.data);
    },
  },
});
