<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="board_button_container">
            <!-- <input type="button" class="write_button" value="수정" />
            <input type="button" class="write_button" value="삭제" /> -->
            <router-link to="/friends">
              <input type="button" class="write_button" value="목록" />
            </router-link>
          </div>
          <div class="board_detail_title_container">
            <div class="detail_title">{{ this.$store.getters.getArticle.title }}</div>
            <div class="detail_member_info_container">
              <div class="member_info">{{ this.$store.getters.getArticle.memberId }}</div>
              <div class="member_info">{{ this.$store.getters.getArticle.registerTime }}</div>
              <img src="@/assets/img/views.svg" alt="안심귀가프렌즈신청" />
              <div class="member_info">{{ this.$store.getters.getArticle.views }}</div>
            </div>
          </div>
          <div class="board_detail_content_container">
            {{ this.$store.getters.getArticle.content }}
          </div>
          <div class="board_detail_comment_container">
            <div class="board_detail_comment_info_container">
              <table class="board_detail_comment_info">
                <colgroup>
                  <col width="10%" />
                  <col width="72%" />
                  <col width="18%" />
                </colgroup>
                <tr v-for="(item, index) in $store.getters.getCommentList" :key="index">
                  <td class="color">{{ item.memberId }}</td>
                  <td>{{ item.commentText }}</td>
                  <td class="color">{{ item.memoTime }}</td>
                </tr>
              </table>
            </div>
          </div>

          <div class="board_detail_comment_input_container">
            <table class="board_detail_comment_table">
              <colgroup>
                <col width="80%" />
                <col width="20%" />
              </colgroup>
              <tr>
                <td>
                  <input
                    type="text"
                    class="comment_input"
                    v-model="curcomment"
                    @keyup.enter="addComment"
                    placeholder="댓글을 입력하세요."
                  />
                </td>
                <td>
                  <input
                    type="button"
                    class="comment_input_button"
                    value="등록"
                    @click="addComment"
                  />
                </td>
              </tr>
            </table>
          </div>
          <!-- <img src="../img/" alt="실거래가조회" class="banner_img" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "SectionFriendsDetail",
  data() {
    return {
      curcomment: "",
    };
  },
  mounted() {
    this.$store.dispatch("asyncReqCommentList", this.$route.params.friendsArticleNo);
    this.$store.dispatch("asyncReqArticle", this.$route.params.friendsArticleNo);
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    ...mapMutations(["addRerenderKey"]),
    ...mapActions(["asyncReqCommentList", "asyncReqArticle", "asyncReqAddComment"]),
    addComment: async function () {
      //로그인할 때 memberNo도 받아서 저장하기
      let reqData = {
        reqArticleNo: this.$route.params.friendsArticleNo,
        reqMemberNo: this.$store.getters.getLoginInfo.member_no,
        reqMemberId: this.$store.getters.getLoginInfo.id,
        reqCommentText: this.curcomment,
      };
      await this.$store.dispatch("asyncReqAddComment", reqData);
      this.$store.commit("addRerenderKey");
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsDetail.css";
</style>
