import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "@/views/IndexView.vue";
import SearchView from "@/views/SearchView.vue";

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
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
