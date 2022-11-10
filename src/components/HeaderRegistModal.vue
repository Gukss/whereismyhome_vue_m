<template>
  <dir>
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
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="password" /></td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <td>주소</td>
              <td><input type="text" /></td>
            </tr>
          </table>
          <div class="reg_btn_container">
            <input type="button" value="확인" />
            <input type="button" value="취소" class="reg_modal_close" />
          </div>
        </div>
      </div>
    </div>
  </dir>
</template>

<script>
export default {
  name: "HeaderRegistModal",
};
</script>

<style scoped>
@import "../assets/css/headerRegistModal.css";
</style>
