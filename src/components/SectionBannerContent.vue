<template>
  <div>
    <div class="banner_info">
      <div class="banner">
        <div class="banner_introduce">
          <h3 class="banner_introduce_title">{{ bannerTitle }}</h3>
          <h5 class="banner_introduce_subtitle">{{ bannerSubTitle }}</h5>
        </div>
      </div>
      <!-- <img src="../img/" alt="실거래가조회" class="banner_img" /> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "SectionBannerContent",
  data() {
    return {
      bannerTitle: "실거래가 조회",
      bannerSubTitle: "아파트의 실거래가 정보를 조회해보세요.",
    };
  },
};
</script>
<style>
@import "@/assets/css/sectionBannerContent.css";
</style>
