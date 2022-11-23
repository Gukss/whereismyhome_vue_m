import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {},
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
    /**
     * @group: listbox axios state
     * @type: string[]
     * @description mounted할 때 selector에 출력할 리스트
     */
    sidoList: [],
    /**
     * @group: listbox axios state
     * @type: string[]
     * @description mounted할 때 selector에 출력할 리스트
     */
    gugunList: [],
    /**
     * @group: listbox axios state
     * @type: string[]
     * @description mounted할 때 selector에 출력할 리스트
     */
    dongList: [],
    /**
     * @group: listbox axios state
     * @type: string
     * @description selector 선택하면 저장할 string
     */
    sidoVal: "",
    /**
     * @group: listbox axios state
     * @type: string
     * @description selector 선택하면 저장할 string
     */
    gugunVal: "",
    /**
     * @group: listbox axios state
     * @type: string
     * @description selector 선택하면 저장할 string
     */
    dongVal: "",
    /**
     * @group: listbox axios state
     * @type: string[]
     * @description mounted할 때 selector에 출력할 리스트
     */
    yearList: [],
    /**
     * @group: listbox axios state
     * @type: string[]
     * @description mounted할 때 selector에 출력할 리스트
     */
    monthList: [],
    /**
     * @group: listbox axios state
     * @type: string
     * @description selector 선택하면 저장할 string
     */
    yearVal: "",
    /**
     * @group: listbox axios state
     * @type: string
     * @description selector 선택하면 저장할 string
     */
    monthVal: "",
    /* =========================== */
    /* =                         = */
    /* =      SectionSearch      = */
    /* =                         = */
    /* =========================== */
    /**
     * @gourp: search state
     * 거래내역 조회할 때 표에 출력하고, 지도에 마커출력할 때 사용하는 리스트
     */
    aptList: [],
    /**
     * @type: string
     * @group: login
     * 로그인 확인을 위한 변수, 로그인 정보를 저장한다.
     */
    loginInfo: "",
    /**
     * 관심지역 출력을 위한 리스트, {sido, gugun, dong}을 요소로 한다.
     * @type: string[]
     * @group: interest
     */
    interestList: [],
    /**
     * 댓글 출력을 위한 list
     * @type: string[]
     * @group: comment
     */
    commentList: [],
    /**
     * @group: article
     * 게시글 하나 정보를 담고있는 객체
     */
    article: {},

    /**
     * 안심하우스 정보 객체를 담고있는 리스트
     * @group: safety
     * @type: Object[]
     */
    safeHomeList: [],
    /**
     * 안심하우스 Top3만 담은 리스트
     * @group: safety
     */
    safeHomeTop3List: [],
    /**
     * 로딩중인지 확인하는 변수
     * @group: safety
     */
    isLoading: false,

    /**
     * friendsBoard에 뿌려줄 리스트
     */
    articleList: [],
    /**
     * 페이징에 사용할 totalPageCount
     */
    totalPageCount: 0,
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
    /**
     * @param {*} state
     * @returns 현재 년도부터 10년 전 년도까지 담은 배열 반환
     */
    reqYearList(state) {
      let date = new Date();
      let year = date.getFullYear();
      state.yearList = [];
      for (let i = year; i > year - 10; i--) {
        state.yearList.push(i);
      }
      return state.yearList;
    },
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

    // safe house
    getSafeHomeList(state) {
      return state.safeHomeList;
    },
    getSafeHomeTop3List(state) {
      return state.safeHomeTop3List;
    },
    // 로딩
    getIsLoading(state) {
      return state.isLoading;
    },
    getArticleList(state) {
      return state.articleList;
    },
    getTotalPageCount(state) {
      return state.totalPageCount;
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
    /**
     *
     * @param {*} state
     * @returns 현재 년도와 선택된 년도가 같으면 현재월-1만큼 리스트에 넣어주고, 아니면 12월 까지 출려해 주기
     */
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

    // safeHome
    setSafeHomeList(state, payload) {
      state.safeHomeList = payload;
    },
    setSafeHomeTop3List(state, payload) {
      state.safeHomeTop3List = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setArticleList(state, payload) {
      state.articleList = payload;
    },
    setTotalPageCount(state, payload) {
      state.totalPageCount = payload;
    },
  },
  //비동기적 로직
  actions: {
    /* =========================== */
    /* =                         = */
    /* =     SectionSelector     = */
    /* =                         = */
    /* =========================== */
    /**
     * 백엔드에게 인자없이 sidoList를 요청해 받고, setting 해준다.
     * @param {*} context
     * @returns 시도 배열
     */
    asyncReqSido: async function (context) {
      const subUrl = "search/sido";
      let resSido = await http.get(`${subUrl}`);
      return context.commit("setSidoList", resSido.data);
      // this.$store.getter.getSidoList = resSido.data;
    },
    /**
     * 백엔드에게 sido값으로 gugunList를 요청해 받고, setting해준다.
     * @param {*} context
     * @param {*} payload sido 값이 string으로 담겨있다.
     * @returns 구군 배열
     */
    asyncReqGugun: async function (context, payload) {
      const subUrl = "search/gugun";
      const reqData = { sido: payload };
      let resGugun = await http.get(`${subUrl}`, { params: reqData });
      return context.commit("setGugunList", resGugun.data);
    },
    /**
     * 백엔드에게 sido, gugun 값으로 dongList를 요청해 받고, setting해준다.
     * @param {*} context
     * @param {*} payload sido, gugun 값이 string으로 담겨있다.
     * @returns 동 배열
     */
    asyncReqDong: async function (context, payload) {
      const subUrl = "search/dong";
      const sidoVal = context.getters.getSidoVal;
      const reqData = { sido: sidoVal, gugun: payload };
      let resDong = await http.get(`${subUrl}`, { params: reqData });
      return context.commit("setDongList", resDong.data);
    },
    /**
     * sido, gugun, dong, year, month 값으로 아파트 리스트를 요청한다.
     * @param {*} context
     * @returns 해당하는 아파트 정보 배열 setting
     * @todo 값이 없으면 요청 못하게 예외처리 필요하다.
     */
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
    /**
     * member_no에 해당하는 관심지역 배열 요청
     * @param {*} context
     * @returns member_no에 해당하는 관심지역 배열 반환
     */
    asyncReqInterests: async function (context) {
      const subUrl = "/search/interest";
      const pathVar = context.getters.getLoginInfo.member_no;
      let resInterestsList = await http.get(
        `${subUrl}` + "?member_no=" + pathVar
      );
      return context.commit("setinterestList", resInterestsList.data);
    },
    /**
     * 게시글에 달려있는 댓글을 모두 가져온다.
     * @param {*} context
     * @param {*} payload 게시글 번호 articleNo
     * @returns
     */
    asyncReqCommentList: async function (context, payload) {
      const subUrl = `/comment/${payload}`;
      let resCommentList = await http.get(`${subUrl}`);
      return context.commit("setCommentList", resCommentList.data);
    },
    /**
     * 멤버 번호에 해당하는 게시글을 모두 가져온다.
     * @param {*} context
     * @param {*} payload  member_no
     * @returns
     */
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
        memberName: `${payload.reqMemberName}`,
        commentText: `${payload.reqCommentText}`,
      };
      let resArticle = await http.post(`${subUrl}`, reqData);
      return context.commit("setArticle", resArticle.data);
    },

    /**
     *
     * 시도,구군,동 선택하고 검색하면 안심하우스 리스트를 저장한다.
     * Top3의 리스트도 별도로 저장한다.
     * 데이터를 불러오는 동안 로딩 스피너를 동작시키기 위해 setIsLoading을 세팅한다.
     *
     */
    asyncReqsafeHomeList: async function (context) {
      context.commit("setIsLoading", true);
      const subUrl = "search/safety";
      const reqData = {
        sido: context.getters.getSidoVal,
        gugun: context.getters.getGugunVal,
        dong: context.getters.getDongVal,
        year: context.getters.getYearVal,
        month: context.getters.getMonthVal,
      };
      let res = await http.get(`${subUrl}`, { params: reqData });
      if (res.data.length === 0) {
        res.data = [
          {
            aptName: "",
            roadName: "",
            roadNameBonbun: "",
            area: "",
            dealAmount: "",
            lampCount: "",
            cctvcount: "",
            policeCount: "",
          },

          {
            aptName: "",
            roadName: "",
            roadNameBonbun: "",
            area: "",
            dealAmount: "",
            lampCount: "",
            cctvcount: "",
            policeCount: "",
          },

          {
            aptName: "",
            roadName: "",
            roadNameBonbun: "",
            area: "",
            dealAmount: "",
            lampCount: "",
            cctvcount: "",
            policeCount: "",
          },
        ];
      }
      context.commit("setSafeHomeTop3List", res.data.slice(0, 3));
      context.commit("setIsLoading", false);
      return context.commit("setSafeHomeList", res.data);
    },
    /**
     * 토큰이 유효한지 검증
     * @param {*} context
     * @returns t,f
     */
    asyncValidateToken: async function (context) {
      const subUrl = "member/validation";
      const reqData = {
        id: context.getters.getLoginInfo.id,
        pw: context.getters.getLoginInfo.pw,
      };
      let res = await http
        .post(`${subUrl}`, reqData)
        .then(() => {
          return true;
        })
        .catch((e) => {
          console.log(e);
          return false;
        });
      return res;
    },
    /**
     * 게시판에 글을 받아온다. 글을 setting해주고, 페이징을 위해 전체 페이지 개수를 setting해준다.
     * @param {*} context
     * @param {*} payload
     */
    asyncReqArticleList: async function (context, payload) {
      const subUrl = "friends";
      let res = await http.get(`${subUrl}`, {
        params: { pgno: payload, key: "", word: "" },
      });
      context.commit("setArticleList", res.data.articles);
      context.commit("setTotalPageCount", res.data.navigation.totalPageCount);
    },
  },
});

export default store;
