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
              <li><a href="#" class="btn_open_popup">회원가입</a></li>
              <li><a href="#" class="login_btn_open_popup">로그인</a></li>
              <li><a href="#">로그아웃</a></li>
            </ul>
          </div>
          <div class="userinfo">
            <a href="#"><div class="nickname">x님</div></a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "HeaderComp",
  methods: {},
};
</script>
<style scoped>
@import "../assets/css/header.css";
</style>
