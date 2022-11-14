<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header_container">
          <router-link to="/" class="title"
            ><img src="../assets/img/fabicon_medium.svg" alt="whereismyhome"
          /></router-link>
          <!-- <a href="#" class="title"><h1>title</h1></a> -->
          <div class="header_menu">
            <ul>
              <!-- <li><a href="#">Home</a></li> -->
              <li>
                <router-link to="/">공지사항</router-link>
              </li>
              <li v-show="$store.getters.isLogin">
                <router-link to="/">실거래가조회</router-link>
              </li>
              <li v-show="$store.getters.isLogin">
                <router-link to="/">관심목록</router-link>
              </li>
              <li v-show="!$store.getters.isLogin">
                <a href="#" class="btn_open_popup" @click="popupRegist"
                  >회원가입</a
                >
              </li>
              <li v-show="!$store.getters.isLogin">
                <a href="#" class="login_btn_open_popup" @click="popupLogin"
                  >로그인</a
                >
              </li>
              <li v-show="$store.getters.isLogin">
                <a href="#" @click="logout">로그아웃</a>
              </li>
            </ul>
          </div>
          <div class="userinfo" v-show="$store.getters.isLogin">
            <a href="#"
              ><div class="nickname">{{ $store.state.loginId }}님</div></a
            >
          </div>
        </div>
      </div>
    </header>
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
              <td>
                <input type="text" v-model="loginId" ref="loginInputId" />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  v-model="loginPw"
                  @keyup.enter="login()"
                />
              </td>
            </tr>
          </table>
        </div>
        <div class="login_id_remember">
          <input
            type="checkbox"
            id="remember_check"
            v-model="rememberId"
          /><label for="remember_check">아이디 기억하기</label>
        </div>
        <div class="login_btn_container_login">
          <input type="button" value="로그인" @click="login" />
        </div>
        <div class="login_btn_container_cancel">
          <input type="button" value="취소" @click="loginModalDown" />
        </div>
      </div>
    </div>
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
              <td><input type="text" v-model="id" ref="regInputId" /></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="password" v-model="pw" /></td>
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
              <td>전화번호</td>
              <td><input type="text" v-model="phone" /></td>
            </tr>
          </table>
          <div class="reg_btn_container">
            <input type="button" value="확인" @click="regist" />
            <input
              type="button"
              value="취소"
              class="reg_modal_close"
              @click="regModalDown"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <HeaderRegistModal class="reg_modal"></HeaderRegistModal>
    <HeaderLoginModal class="login_modal"></HeaderLoginModal> -->
  </div>
</template>
<script>
// import HeaderRegistModal from "../components/HeaderRegistModal.vue";
// import HeaderLoginModal from "../components/HeaderLoginModal.vue";
import http from "@/util/http-common";

export default {
  name: "HeaderComp",
  data() {
    return {
      id: "",
      pw: "",
      rememberId: "",
      name: "",
      email: "",
      phone: "",
      loginId: "",
      loginPw: "",
    };
  },

  methods: {
    popupRegist() {
      const body = document.querySelector("body");
      const reg_modal = document.querySelector(".reg_modal");

      reg_modal.classList.toggle("show");
      if (reg_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
        this.$refs.regInputId.focus();
      }
    },

    popupLogin() {
      const body = document.querySelector("body");
      const login_modal = document.querySelector(".login_modal");
      login_modal.classList.toggle("show");
      if (login_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
        this.$refs.loginInputId.focus();
      }
    },

    loginModalDown() {
      const login_modal = document.querySelector(".login_modal");
      const body = document.querySelector("body");

      login_modal.classList.toggle("show");
      if (!login_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },

    regModalDown() {
      const reg_modal = document.querySelector(".reg_modal");
      const body = document.querySelector("body");

      reg_modal.classList.toggle("show");
      if (!reg_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },

    login() {
      //   const baseUrl = "http://localhost:8080";
      const subUrl = "member/login";
      let userInfo = { id: this.loginId, pw: this.loginPw };
      http
        .post(`${subUrl}`, userInfo)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$store.commit("setLoginId", res.data.id);
            this.loginModalDown();
          } else {
            // 로그인 정보가 틀렸습니다. => 비밀번호 밑에 v-show해서 아이디/비밀번호가 틀렸습니다 띄워주기
          }
        })
        .catch((err) => {
          console.log(err);
        });

      this.loginId = "";
      this.loginPw = "";
    },

    regist() {
      let member = {
        id: this.id,
        pw: this.pw,
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      http.post("/member", member).then(({ data }) => {
        console.log(data);
        this.regModalDown();
        this.popupLogin();
      });

      this.id = "";
      this.pw = "";
      this.rememberId = "";
      this.name = "";
      this.email = "";
      this.phone = "";
    },

    logout() {
      http
        .get("/member/logout")
        .then(console.log("로그아웃"), this.$store.commit("setLogout"));
    },
  },
  components: {
    // HeaderRegistModal,
    // HeaderLoginModal,
  },
};
</script>
<style scoped>
@import "@/assets/css/header.css";
</style>
