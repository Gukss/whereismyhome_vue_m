import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import createPersistedState from "vuex-persistedstate";
// import { SectionSelector } from "../components/SectionSelector";
Vue.use(Vuex);

export const store = new Vuex.Store({
  //SectionSelector 의 변수만 저장
  modules: {
    // SectionSelector: SectionSelector,
  },
  plugins: [
    createPersistedState({
      // paths: [],
    }),
  ],

  state: {
    /* =========================== */
    /* =                         = */
    /* =     SectionSelector     = */
    /* =                         = */
    /* =========================== */
    /**
     * @type: number
     * @readOnly
     * 리랜더링할 때 사용할 변수
     */
    rerenderKey: 1,
    //listbox axios state
    /**
     * @type: string[]
     * mounted할 때 selector에 출력할 리스트
     */
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
    /* =========================== */
    /* =                         = */
    /* =      SectionSearch      = */
    /* =                         = */
    /* =========================== */
    //search state
    /**
     * 거래내역 조회할 때 표에 출력하고, 지도에 출력하는 리스트
     */
    aptList: [],
    //---
    // login
    /**
     * 로그인 확인을 위한 변수
     * @todo 로그인 할 때 객체로 받아서 모든 정보 저장해놓기, string => object
     * @type: string
     */
    loginInfo: "",
    // Interest
    /**
     * 관심지역 출력을 위한 리스트
     * @type: string[]
     */
    interestList: [],

    //comment
    /**
     * 댓글 출력을 위한 list
     * @type: string[]
     */
    commentList: [],

    //Article
    article: {},
  },
  getters: {
    /* =========================== */
    /* =                         = */
    /* =     SectionSelector     = */
    /* =                         = */
    /* =========================== */
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
    reqYearList(state) {
      let date = new Date();
      let year = date.getFullYear();
      state.yearList = [];
      // this.$store.commit("setYearList", []);
      for (let i = year; i > year - 10; i--) {
        state.yearList.push(i);
      }
      return state.yearList;
    },
    //---
    /* =========================== */
    /* =                         = */
    /* =      SectionSearch      = */
    /* =                         = */
    /* =========================== */
    getAptList(state) {
      return state.aptList;
    },
    getLoginInfo(state) {
      return state.loginInfo;
    },
    isLogin(state) {
      return state.loginInfo !== "";
    },

    getInterestList(state) {
      return state.interestList;
    },

    //comment
    getCommentList(state) {
      return state.commentList;
    },

    //article
    getArticle(state) {
      return state.article;
    },
    getRerenderKey(state) {
      return state.rerenderKey;
    },
  },
  //동기적 로직
  mutations: {
    /* =========================== */
    /* =                         = */
    /* =     SectionSelector     = */
    /* =                         = */
    /* =========================== */
    setSidoList(state, payload) {
      return (state.sidoList = payload);
    },
    setSidoVal(state, payload) {
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
      // this.$store.commit("setMonthList", []);
      for (let i = 1; i < m; i++) {
        // let temp = i < 10 ? "0" + i : i;
        state.monthList.push(i);
      }
      return state.monthList;
    },
    setLoginInfo(state, payload) {
      state.loginInfo = payload;
    },
    setLogout(state) {
      state.loginInfo = "";
    },
    setinterestList(state, payload) {
      state.interestList = payload;
    },
    //comment
    setCommentList(state, payload) {
      state.commentList = payload;
    },

    //article
    setArticle(state, payload) {
      state.article = payload;
    },
    /**
     * 리랜더링이 필요할 때 호출하는 함수
     * @param {*} state
     */
    addRerenderKey(state) {
      state.rerenderKey = (state.rerenderKey + 1) % 1000;
    },
  },
  //비동기적 로직
  actions: {
    /* =========================== */
    /* =                         = */
    /* =     SectionSelector     = */
    /* =                         = */
    /* =========================== */
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
    asyncReqInterests: async function (context) {
      const subUrl = "/search/interest";
      let resInterestsList = await http.get(`${subUrl}`, {
        params: { id: context.getters.getLoginInfo.id },
      });
      return context.commit("setinterestList", resInterestsList.data);
    },
    //comment
    asyncReqCommentList: async function (context, payload) {
      const subUrl = `/comment/${payload}`;
      let resCommentList = await http.get(`${subUrl}`);
      return context.commit("setCommentList", resCommentList.data);
    },
    //article
    asyncReqArticle: async function (context, payload) {
      const subUrl = `/friends/${payload}`;
      let resArticle = await http.get(`${subUrl}`);
      return context.commit("setArticle", resArticle.data);
    },
    /**
		 	articleNo을 pathVar로 사용해서 comment를 추가하는 함수
		 * @param {*} context store
		 * @param {Object} payload articleNo: 게시글 번호, memberNo: 사용자 번호, memberId: 사용자 아이디, commentText: 댓글 내용
		 * @returns 없어도 되는거 같은데??
		 */
    asyncReqAddComment: async function (context, payload) {
      const subUrl = `/comment/${payload.reqArticleNo}`;
      let reqData = {
        memberNo: `${payload.reqMemberNo}`,
        memberId: `${payload.reqMemberId}`,
        commentText: `${payload.reqCommentText}`,
      };
      let resArticle = await http.post(`${subUrl}`, reqData);
      return context.commit("setArticle", resArticle.data);
    },
  },
});

export default store;
