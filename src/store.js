import Vue from "vue";
import Vuex from "vuex";

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
    // getCounter: function (state) {
    //   return state.counter;
    // },
  },
  //동기적 로직
  mutations: {
    // addCounter: function (state, payload) {
    //   return state.counter++;
    // },
  },
  //비동기적 로직
  actions: {
    // addCounter: function (context) {
    //   // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
    //   return context.commit("addCounter");
    // },
  },
});
