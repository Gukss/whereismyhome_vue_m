import Vue from "vue";
import VueRouter from "vue-router";
// import IndexView from "@/views/IndexView.vue";
import SectionComp from "@/components/SectionComp.vue";
import SectionSearch from "@/components/SectionSearch.vue";
import SectionInterest from "@/components/SectionInterest.vue";
import SectionFriendsBoard from "@/components/SectionFriendsBoard.vue";
import SectionFriendsWrite from "@/components/SectionFriendsWrite.vue";
import SectionFriendsDetail from "@/components/SectionFriendsDetail.vue";
import SectionFriendsUpdate from "@/components/SectionFriendsUpdate.vue";
import SectionSafety from "@/components/SectionSafety.vue";

import store from "@/store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SectionComp",
    component: SectionComp,
  },
  {
    path: "/search",
    name: "SectionSearch",
    component: SectionSearch,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
  {
    path: "/interest",
    name: "SectionInterest",
    component: SectionInterest,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
  {
    path: "/friends",
    name: "SectionFriendsBoard",
    component: SectionFriendsBoard,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
  {
    path: "/friendsWrite",
    name: "SectionFriendsWrite",
    component: SectionFriendsWrite,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
  {
    path: `/friendsDetail/:friendsArticleNo`,
    name: "SectionFriendsDetail",
    component: SectionFriendsDetail,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
  {
    path: `/friendsUpdate/:friendsArticleNo`,
    name: "SectionFriendsUpdate",
    component: SectionFriendsUpdate,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
  {
    path: `/safety`,
    name: "SectionSafety",
    component: SectionSafety,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
];

const isLogin = async (to, from, next) => {
  let valResult = await store.dispatch("asyncValidateToken");
  console.log(valResult);
  if (valResult) {
    next();
  } else {
    alert("로그인이 필요합니다.");
    next("/");
  }
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
