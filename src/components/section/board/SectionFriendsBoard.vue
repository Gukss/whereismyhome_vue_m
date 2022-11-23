<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="banner_title_container">
            <img src="@/assets/img/homework.png" alt="aa" style="width: 4rem; margin-right: 2rem" />
            <div class="banner_text_container">
              <div class="title">안심귀가프렌즈</div>
              <div class="subtitle">안심귀가 프렌즈를 찾아보세요.</div>
            </div>
          </div>
        </div>
        <div class="banner_info">
          <div class="board_button_container">
            <router-link to="/friendsWrite">
              <input type="button" class="write_button" value="글쓰기" />
            </router-link>
          </div>
          <div class="board_list_container">
            <table class="board_list">
              <colgroup>
                <col width="47.5%" />
                <col width="17.5%" />
                <col width="22.5%" />
                <col width="12.5%" />
              </colgroup>
              <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
              <tr
                v-for="(item, index) in this.$store.getters.getArticleList"
                :key="index"
                @click="$router.push(`/friendsDetail/${item.friendsArticleNo}`)"
              >
                <td>{{ item.title }}</td>
                <td>{{ item.memberName }}</td>
                <td>{{ item.registerTime }}</td>
                <td>{{ item.views }}</td>
              </tr>
            </table>
          </div>
          <!-- <img src="../img/" alt="실거래가조회" class="banner_img" /> -->
        </div>
        <!-- <div v-for="(item, index) in this.articleList"></div> -->
        <!-- https://onethejay.tistory.com/68 -->
        <div class="banner_info">
          <div class="page_button_container">
            <section-friends-board-paginate></section-friends-board-paginate>
            <!-- <div class="page_button_content">&lt;</div>
            <div
              class="page_button_content"
              v-for="(item, index) in this.totalPageCount"
              :key="index"
              @click="asyncReqArticleList(item)"
            >
              {{ item }}
            </div>
            <div class="page_button_content">&gt;</div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import http from "@/util/http-common";
import SectionFriendsBoardPaginate from "@/components/section/board/SectionFriendsBoardPaginate";
import { mapActions } from "vuex";
export default {
  name: "SectionFriends",
  components: { SectionFriendsBoardPaginate },
  data() {
    return {
      articleList: [],
      articleListSize: 0,
      pgNavigation: null,
      totalArticleCount: 0,
      totalPageCount: 0,
      currentPage: 0,
    };
  },
  created() {
    this.$store.dispatch("asyncReqArticleList", 1);
  },
  methods: {
    ...mapActions(["asyncReqArticleList"]),
  },
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsBoard.css";
</style>
