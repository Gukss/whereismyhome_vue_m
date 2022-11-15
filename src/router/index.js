import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "@/views/IndexView.vue";
import SearchView from "@/views/SearchView.vue";
import store from "@/store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "IndexView",
    component: IndexView,
  },
  {
    path: "/search",
    name: "SearchView",
    component: SearchView,
    beforeEnter: (to, from, next) => {
      isLogin(to, from, next);
    },
  },
];

const isLogin = (to, from, next) => {
  if (store.getters.isLogin) {
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
