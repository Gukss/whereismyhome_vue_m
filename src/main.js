import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSession from "vue-session";

var sessionOptions = {
  persist: true,
};
Vue.use(VueSession, sessionOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
