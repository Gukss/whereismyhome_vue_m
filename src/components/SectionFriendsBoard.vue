<template>
  <section class="section">
    <div class="container">
      <div class="banner_container">
        <div class="banner_info">
          <div class="banner_title_container">
            <img src="@/assets/img/jam_write.svg" alt="aa" />
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
                <col width="10%" />
                <col width="45%" />
                <col width="15%" />
                <col width="20%" />
                <col width="10%" />
              </colgroup>
              <tr>
                <th>글번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
              <tr
            v-for="(item, index) in this.articleList"
            :key="index"
            @click="$router.push(`/friendsDetail/${item.friendsArticleNo}`)"
          >
            <td>{{ index+1 }}</td>
            <td >{{ item.title }}</td>
            <td>{{ item.memberId }}</td>
            <td>{{ item.registerTime }}</td>
            <td>{{ item.views }}</td>
          </tr>
            </table>
          </div>
          <!-- <img src="../img/" alt="실거래가조회" class="banner_img" /> -->
        </div>
          <div v-html="pgTemplate"></div>
          <!-- <div v-for="(item, index) in this.articleList"></div> -->
          <!-- https://onethejay.tistory.com/68 -->
        <div class="banner_info">
          <div class="page_button_container">
            <div class="page_button_content">&lt;</div>
            <div class="page_button_content">1</div>
            <div class="page_button_content">1</div>
            <div class="page_button_content">1</div>
            <div class="page_button_content">1</div>
            <div class="page_button_content">1</div>
            <div class="page_button_content">1</div>
            <div class="page_button_content">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "SectionFriends",
  data(){
    return{
      articleList : [],
      articleListSize : 0,
      pgNavigation : null,
      pgTemplate: null,
    };
  },
  created(){
    this.asyncReqArticleList();
  },
  methods:{
    asyncReqArticleList : async function (){
      const subUrl = "friends";
      let res = await http.get(`${subUrl}`,
        {params : { pgno : 1, key : "", word : ""}}
      );
      this.articleList = res.data.articles;
      this.articleListSize = this.articleList.length;
      // console.log("article 사이즈 " + this.articleListSize);
      // console.log(this.articleList);
      // console.log(res.data.navigation);
      this.pgNavigation = res.data.navigation;
      this.pgTemplate = this.pgNavigation.navigator;
    },

  }
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsBoard.css";
</style>
