<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view :key="$store.getters.getRerenderKey"></router-view>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "@/components/header/HeaderComp.vue";
import FooterComp from "@/components/footer/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FooterComp,
  },
};
</script>

<style>
@import "@/assets/css/main.css";
</style>
