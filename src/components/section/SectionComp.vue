<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="banner_container">
          <section-banner-title></section-banner-title>
          <section-banner-content></section-banner-content>
          <section-selector></section-selector>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SectionBannerTitle from "@/components/section/SectionBannerTitle.vue";
import SectionBannerContent from "@/components/section/SectionBannerContent.vue";
import SectionSelector from "@/components/section/SectionSelector.vue";

export default {
  name: "SectionComp",
  components: {
    SectionBannerTitle,
    SectionBannerContent,
    SectionSelector,
  },
};
</script>
<style scope>
@import "@/assets/css/section.css";
</style>
