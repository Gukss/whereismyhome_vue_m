<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header_container">
          <router-link to="/" class="title"
            ><img
              style="height: 8rem; width: 14rem; image-rendering: -webkit-optimize-contrast"
              src="../../assets/img/logo.svg"
              alt="whereismyhome"
          /></router-link>
          <!-- <a href="#" class="title"><h1>title</h1></a> -->
          <div class="header_menu">
            <ul>
              <!-- <li><a href="#">Home</a></li> -->
              <li v-show="$store.getters.isLogin">
                <router-link to="/" id="trade">실거래가조회</router-link>
              </li>
              <li v-show="$store.getters.isLogin">
                <router-link to="/friends" id="friends">안심귀가프렌즈</router-link>
              </li>
              <li v-show="$store.getters.isLogin">
                <router-link to="/safety" id="safety">안심하우스조회</router-link>
              </li>
              <li v-show="$store.getters.isLogin">
                <router-link to="/interest" id="interest">관심목록</router-link>
              </li>
              <li v-show="!$store.getters.isLogin">
                <a href="#" class="btn_open_popup" @click="popupRegist">회원가입</a>
              </li>
              <li v-show="!$store.getters.isLogin">
                <a href="#" class="login_btn_open_popup" @click="popupLogin">로그인</a>
              </li>
              <li v-show="$store.getters.isLogin">
                <a href="#" class="mypage_btn_open_popup" @click="popupMypage">마이페이지</a>
              </li>
              <li v-show="$store.getters.isLogin">
                <a href="#" @click="logout">로그아웃</a>
              </li>
            </ul>
          </div>
          <div class="userinfo" v-show="$store.getters.isLogin">
            <a href="#"
              ><div class="nickname">{{ $store.state.loginInfo.name }}님</div></a
            >
          </div>
        </div>
      </div>
    </header>
    <div class="login_modal" @keyup.esc="loginModalDown">
      <div class="input_container">
        <div class="login_title">로그인</div>
        <div>
          <span ref="wrong_input" v-show="wrongLogin" class="login_wrong_input"
            >아이디/비밀번호를 확인해주세요.</span
          >
        </div>
        <div class="login_modal_container">
          <table class="form_table">
            <colgroup>
              <col style="width: 30%" />
              <col style="width: 70%" />
            </colgroup>
            <tr>
              <td>아이디</td>
              <td>
                <input type="text" v-model="loginId" ref="loginInputId" placeholder="아이디" />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  v-model="loginPw"
                  @keyup.enter="login()"
                  placeholder="비밀번호"
                />
              </td>
            </tr>
          </table>
        </div>

        <!-- <div class="login_id_remember">
          <input
            type="checkbox"
            id="remember_check"
            v-model="rememberId"
          /><label for="remember_check">아이디 기억하기</label>
        </div> -->
        <div class="login_btn_container_login">
          <input type="button" value="로그인" @click="login" />
        </div>
        <div class="login_btn_container_cancel">
          <input type="button" value="취소" @click="loginModalDown" />
        </div>
      </div>
    </div>
    <div class="reg_modal" @keyup.esc="regModalDown">
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
              <td>
                <input type="text" v-model="id" ref="regInputId" placeholder="아이디" />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input type="password" v-model="pw" placeholder="비밀번호" />
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td><input type="text" v-model="name" placeholder="이름" /></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input type="text" v-model="email" placeholder="xxxxx@xxxx.xxx" />
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <input type="text" v-model="phone" placeholder="010-1234-1234" />
              </td>
            </tr>
          </table>
          <div class="reg_btn_container">
            <input type="button" value="확인" @click="regist" />
            <input type="button" value="취소" class="reg_modal_close" @click="regModalDown" />
          </div>
        </div>
      </div>
    </div>
    <!-- <HeaderRegistModal class="reg_modal"></HeaderRegistModal>
    <HeaderLoginModal class="login_modal"></HeaderLoginModal> -->

    <!-- mypage modal -->
    <div class="mypage_modal" @keyup.esc="mypageModalDown">
      <div class="mypage_modal_body">
        <div class="mypage_title">마이페이지</div>
        <div class="mypage_modal_container">
          <table class="form_table">
            <colgroup>
              <col style="width: 20%" />
              <col style="width: 80%" />
            </colgroup>
            <tr>
              <td>아이디</td>
              <td><input type="text" v-model="id" readonly /></td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td><input type="text" v-model="pw" /></td>
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
          <div class="mypage_btn_container">
            <input type="button" value="수정" @click="update" />
            <input type="button" value="취소" class="mypage_modal_close" @click="mypageModalDown" />
            <input type="button" value="탈퇴" @click="deleteMember" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import HeaderRegistModal from "../components/HeaderRegistModal.vue";
// import HeaderLoginModal from "../components/HeaderLoginModal.vue";
import http from "@/util/http-common";
import { mapGetters } from "vuex";

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
      wrongLogin: false,
    };
  },
  computed: {
    ...mapGetters(["getLoginInfo"]),
  },
  methods: {
    /**
     *
     * 회원가입 모달 창을 띄운다.
     *
     */
    popupRegist() {
      const body = document.querySelector("body");
      const reg_modal = document.querySelector(".reg_modal");

      reg_modal.classList.toggle("show");
      if (reg_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
        this.$refs.regInputId.focus();
      }
    },

    /**
     *
     * 마이페이지 모달 창을 띄운다.
     * 현재 로그인된 사용자의 정보를 보여준다.
     *
     */
    popupMypage() {
      const body = document.querySelector("body");
      const mypage_modal = document.querySelector(".mypage_modal");

      mypage_modal.classList.toggle("show");
      if (mypage_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
      }
      // id로 회원정보 get해오게 했는데 토큰으로 되어있음
      console.log(this.$store.state.loginInfo.member_no);
      http
        .get("/member", {
          params: { member_no: this.$store.getters.getLoginInfo.member_no },
        })
        .then(({ data }) => {
          console.log(data);
          this.id = data.id;
          this.pw = data.pw;
          this.name = data.name;
          this.email = data.email;
          this.phone = data.phone;
          // this.regModalDown();
          // this.popupLogin();
        });
    },

    /**
     *
     * 로그인 모달 창을 띄운다.
     *
     */
    popupLogin() {
      this.loginId = "";
      this.loginPw = "";
      this.wrongLogin = false;
      const body = document.querySelector("body");
      const login_modal = document.querySelector(".login_modal");
      login_modal.classList.toggle("show");
      if (login_modal.classList.contains("show")) {
        body.style.overflow = "hidden";
        this.$refs.loginInputId.focus();
      }
    },

    /**
     *
     * 로그인 모달 창을 닫는다.
     *
     */
    loginModalDown() {
      const login_modal = document.querySelector(".login_modal");
      const body = document.querySelector("body");

      login_modal.classList.toggle("show");
      if (!login_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },

    /**
     *
     * 마이페이지 모달 창을 닫는다.
     *
     */
    mypageModalDown() {
      const mypage_modal = document.querySelector(".mypage_modal");
      const body = document.querySelector("body");

      mypage_modal.classList.toggle("show");
      if (!mypage_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },

    /**
     *
     * 회원가입 모달 창을 닫는다.
     *
     */
    regModalDown() {
      const reg_modal = document.querySelector(".reg_modal");
      const body = document.querySelector("body");

      reg_modal.classList.toggle("show");
      if (!reg_modal.classList.contains("show")) {
        body.style.overflow = "auto";
      }
    },

    /**
     *
     * 로그인
     * 아이디, 비밀번호를 입력받아 post 요청을 보낸다.
     * 성공했을 경우 로그인 정보를 vuex에 저장한다.
     * 실패했을 경우 실패했다는 메시지를 보여준다.
     *
     */
    login() {
      //   const baseUrl = "http://localhost:8080";
      const subUrl = "member/login";
      let userInfo = { id: this.loginId, pw: this.loginPw };

      http
        .post(`${subUrl}`, userInfo)
        .then((res) => {
          if (res.status == 200) {
            this.$refs.wrong_number = false;
            this.$store.commit("setLoginInfo", res.data);
            this.loginModalDown();
          } else {
            this.wrongLogin = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      this.loginId = "";
      this.loginPw = "";
      this.wrongLogin = false;
    },

    /**
     *
     * 회원가입
     * 아이디, 비밀번호, 이름, 이메일, 전화번호를 입력받아 post 요청을 보낸다.
     * 정상적으로 등록이 됐으면 회원가입 창을 닫고 로그인 창을 연다.
     *
     */
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

    /**
     *
     * 회원정보 수정
     * 아이디, 비밀번호, 이름, 이메일, 전화번호를 입력받아 put 요청을 보낸다.
     *
     */
    update() {
      let result = confirm("수정하시겠습니까?");

      if (!result) {
        return;
      }

      let member = {
        id: this.id,
        pw: this.pw,
        name: this.name,
        email: this.email,
        phone: this.phone,
      };

      http.put("/member", member).then(({ data }) => {
        console.log(data);
        this.$store.commit("setLoginInfo", member);
        this.mypageModalDown();
      });
    },

    /**
     *
     * 회원 탈퇴
     * 현재 로그인한 사용자의 id 값을 가지고 delete 요청을 보낸다.
     *
     */
    deleteMember() {
      let result = confirm("탈퇴하시겠습니까?");

      if (!result) {
        return;
      }

      http
        .delete("/member", {
          params: { member_no: this.$store.state.loginInfo.member_no },
        })
        .then((data) => {
          if (data.status == 200) {
            console.log(data.status);
            this.mypageModalDown();
            this.$store.commit("setLogout");

            alert("탈퇴되었습니다.");
          }
        });
    },

    /**
     *
     * 로그아웃
     * /logout 경로로 get 요청을 보낸다.
     * 성공했을 경우 vuex에 저장된 로그인 정보를 초기화한다.
     *
     */
    logout() {
      http.get("/member/logout").then(console.log("로그아웃"), this.$store.commit("setLogout"));
    },
  },
  components: {
    // HeaderRegistModal,
    // HeaderLoginModal,
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        let curPath = this.$route.fullPath;
        let friends = document.getElementById("friends");
        let interest = document.getElementById("interest");
        let safety = document.getElementById("safety");
        let trade = document.getElementById("trade");
        if (curPath === "/friends") {
          friends.style.color = "#0d47a1";
          interest.style.color = "#1e88e5";
          safety.style.color = "#1e88e5";
          trade.style.color = "#1e88e5";
        } else if (curPath === "/interest") {
          interest.style.color = "#0d47a1";
          friends.style.color = "#1e88e5";
          safety.style.color = "#1e88e5";
          trade.style.color = "#1e88e5";
        } else if (curPath === "/safety") {
          safety.style.color = "#0d47a1";
          interest.style.color = "#1e88e5";
          friends.style.color = "#1e88e5";
          trade.style.color = "#1e88e5";
        } else if (curPath === "/") {
          friends.style.color = "#1e88e5";
          interest.style.color = "#1e88e5";
          safety.style.color = "#1e88e5";
          trade.style.color = "#0d47a1";
        }
      }
    },
  },
};
</script>
<style scoped>
@import "@/assets/css/header.css";
</style>
