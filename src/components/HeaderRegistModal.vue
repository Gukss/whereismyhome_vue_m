<template>
  <div class="reg_modal">
    <div class="reg_modal_body">
      <div class="reg_title">회원가입</div>
      <div class="reg_modal_container">
        <table class="form_table">
          <colgroup>
            <col style="width: 20%" />
            <col style="width: 80%" />
          </colgroup>
          <tr>
            <td>아이디</td>
            <td><input type="text" v-model="id" /></td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="password" v-model="password" /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type="text" v-model="name" /></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><input type="text" v-model="email" /></td>
          </tr>
          <tr>
            <td>주소</td>
            <td><input type="text" v-model="address" /></td>
          </tr>
        </table>
        <div class="reg_btn_container">
          <input type="button" value="확인" />
          <input
            type="button"
            value="취소"
            class="reg_modal_close"
            @click="modalDown"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderRegistModal",
  data() {
    return {
      id: "",
      password: "",
      name: "",
      email: "",
      address: "",
    };
  },
  methods: {
    modalDown() {
      const reg_modal = document.querySelector(".reg_modal");
      const body = document.querySelector("body");

      reg_modal.classList.toggle("show");
      if (!reg_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/headerRegistModal.css";
</style>
