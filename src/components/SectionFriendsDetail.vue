<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="board_button_container">
            <input type="button" class="write_button" value="수정" />
            <input type="button" class="write_button" value="삭제" />
          </div>
          <div class="board_detail_title_container">
            <div class="detail_title">유성온천역에서 유성 자이까지 19시 출발 구합니다.</div>
            <div class="detail_member_info_container">
              <div class="member_info">gukss</div>
              <div class="member_info">2022-11-16</div>
              <img src="/img/views.svg" alt="안심귀가프렌즈신청" />
              <div class="member_info">131</div>
            </div>
          </div>
          <div class="board_detail_content_container">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                <td><input type="text" class="comment_input" /></td>
                <td>
                  <input type="button" class="comment_input_button" value="등록" />
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
    return {};
  },
  mounted() {
    this.$store.dispatch("asyncReqCommentList", this.$route.params.friendsArticleNo);
  },
  computed: {
    ...mapGetters([""]),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(["asyncReqCommentList"]),
  },
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsDetail.css";
</style>
