<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header_container">
          <a href="#" class="title"><h1>title</h1></a>
          <div class="header_menu">
            <ul>
              <!-- <li><a href="#">Home</a></li> -->
              <li><a href="#">공지사항</a></li>
              <li><a href="#">실거래가조회</a></li>
              <li><a href="#">관심목록</a></li>
              <li>
                <a href="#" class="btn_open_popup" @click="popupRegist"
                  >회원가입</a
                >
              </li>
              <li>
                <a href="#" class="login_btn_open_popup" @click="popupLogin"
                  >로그인</a
                >
              </li>
              <li><a href="#">로그아웃</a></li>
            </ul>
          </div>
          <div class="userinfo">
            <a href="#"><div class="nickname">x님</div></a>
          </div>
        </div>
      </div>
    </header>
    <HeaderRegistModal class="reg_modal"></HeaderRegistModal>
    <HeaderLoginModal class="login_modal"></HeaderLoginModal>
  </div>
</template>
<script>
import HeaderRegistModal from "../components/HeaderRegistModal.vue";
import HeaderLoginModal from "../components/HeaderLoginModal.vue";

export default {
  name: "HeaderComp",
  methods: {
    popupRegist() {
      const body = document.querySelector("body");
      const reg_modal = document.querySelector(".reg_modal");

      reg_modal.classList.toggle("show");
      if (reg_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
      }
    },

    popupLogin() {
      const body = document.querySelector("body");
      const login_modal = document.querySelector(".login_modal");
      login_modal.classList.toggle("show");
      if (login_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
      }
    },
  },
  components: {
    HeaderRegistModal,
    HeaderLoginModal,
  },
};
</script>
<style scoped>
@import "../assets/css/header.css";
</style>
