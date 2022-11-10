<template>
  <div id="app">
    <header-comp></header-comp>
    <section-comp></section-comp>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import SectionComp from "./components/SectionComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    SectionComp,
    FooterComp,
  },
};
</script>

<style>
@import "./assets/css/main.css";
</style>
