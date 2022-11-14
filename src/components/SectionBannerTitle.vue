<template>
  <div>
    <div class="banner_info">
      <span class="nickname" v-show="$store.getters.isLogin">{{$store.state.loginId}} 님 안녕하세요.</span>
      <span class="nickname" v-show="!$store.getters.isLogin"> 어떤 집을 찾고 계세요? </span>
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
@import "@/assets/css/sectionBanner.css";
</style>
