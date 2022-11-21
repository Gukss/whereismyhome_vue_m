<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="banner_title_container">
            <img src="@/assets/img/jam_write.svg" alt="aa" />
            <div class="banner_text_container">
              <div class="title">글쓰기</div>
              <div class="subtitle">안심귀가 프렌즈를 찾아보세요.</div>
            </div>
          </div>
        </div>
        <div class="banner_info">
          <div class="board_button_container">
            <input type="button" class="write_button" value="초기화" />
            <input type="button" class="write_button" value="저장" @click="writeArticle" />
          </div>
          <div class="board_write_container">
            <table class="board_write_table">
              <colgroup>
                <col width="5%" />
                <col width="95%" />
              </colgroup>
              <tr>
                <td class="board_write_title">제목</td>
                <td>
                  <input
                    class="board_write_title_input"
                    type="text"
                    v-model="title"
                    placeholder="제목을 입력하세요."
                  />
                </td>
              </tr>
              <tr>
                <td class="board_write_title">본문</td>
                <td>
                  <textarea
                    rows="20"
                    class="board_write_content_input"
                    type="text"
                    v-model="content"
                    placeholder="본문을 입력하세요."
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "SectionFriendsWrite",
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    writeArticle() {
      let article = {
        memberNo: this.$store.getters.getLoginInfo.member_no,
        memberName: this.$store.getters.getLoginInfo.name,
        title: this.title,
        content: this.content,
      };
      console.log(article);
      http.post("/friends", article);

      this.$router.push("/friends");
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsWrite.css";
</style>
