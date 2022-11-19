<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="banner_title_container">
            <img src="@/assets/img/jam_write.svg" alt="aa" />
            <div class="banner_text_container">
              <div class="title">글 수정</div>
              <!-- <div class="subtitle">안심귀가 프렌즈를 찾아보세요.</div> -->
            </div>
          </div>
        </div>
        <div class="banner_info">
          <div class="board_button_container">
            <input type="button" class="write_button" value="저장" @click="updateArticle"/>
          </div>
          <div class="board_write_container">
            <table class="board_write_table">
              <colgroup>
                <col width="5%" />
                <col width="95%" />
              </colgroup>
              <tr>
                <td class="board_write_title">제목</td>
                <td><input class="board_write_title_input" type="text" v-model="title"/></td>
              </tr>
              <tr>
                <td class="board_write_title">본문</td>
                <td>
                  <textarea
                    rows="20"
                    class="board_write_content_input"
                    type="text"
                    v-model="content"
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
import http from '@/util/http-common';

export default {
  name: "SectionFriendsUpdate",
  data(){
    return{
      title : "",
      content : "",
    };
  },
  created(){
    // 제목, 본문에 내용 넣어놓기
    this.title = this.$store.getters.getArticle.title;
    this.content = this.$store.getters.getArticle.content;
  },
  methods:{
    updateArticle(){
      let article = {
        memberNo : this.$store.getters.getLoginInfo.member_no,
        memberId : this.$store.getters.getLoginInfo.id,
        title : this.title,
        content : this.content,
      };
      // console.log(article);/
      http.put(`/friends/${this.$store.getters.getArticle.friendsArticleNo}`,article);
      this.$router.push(`/friendsDetail/${this.$store.getters.getArticle.friendsArticleNo}`);
      this.$store.commit("setArticle", article);
    },
  }
  
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsWrite.css";
</style>
