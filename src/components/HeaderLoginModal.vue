<template>
  <div class="login_modal">
    <div class="input_container">
      <div class="login_title">로그인</div>
      <div class="login_modal_container">
        <table class="form_table">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <tr>
            <td>아이디</td>
            <td><input type="text" v-model="id" /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="password" v-model="pw" /></td>
          </tr>
        </table>
      </div>
      <div class="login_id_remember">
        <input type="checkbox" id="remember_check" v-model="rememberId" /><label
          for="remember_check"
          >아이디 기억하기</label
        >
      </div>
      <div class="login_btn_container">
        <input type="button" value="로그인" @click="login" />
      </div>
      <div class="login_btn_container">
        <input type="button" value="취소" @click="modalDown" />
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "HeaderLoginModal",
  data() {
    return {
      id: "",
      pw: "",
      rememberId: "",
    };
  },
  methods: {
    modalDown() {
      const login_modal = document.querySelector(".login_modal");
      const body = document.querySelector("body");

      login_modal.classList.toggle("show");
      if (!login_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },
    login() {
      //   const baseUrl = "http://localhost:8080";
      const subUrl = "member/login";
      let userInfo = { id: this.id, pw: this.pw };
      http
        .post(`${subUrl}`, userInfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/headerLoginModal.css";
</style>
