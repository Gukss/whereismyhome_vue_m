<template>
  <div>
    <div class="banner_info">
      <span class="nickname" v-show="$store.getters.isLogin">{{$store.state.loginId}} 님 </span>안녕하세요.
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionBannerTitle",
  data() {
    return {
      nickname: "",
    };
  },
  methods: {},
};
</script>
<style>
@import "../assets/css/sectionBanner.css";
</style>
