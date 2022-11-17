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
              <tr>
                <td>dddddddddddddddddddddddddddddddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
              <tr>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
                <td>ddd</td>
              </tr>
            </table>
          </div>
          <!-- <img src="../img/" alt="실거래가조회" class="banner_img" /> -->
        </div>
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
export default {
  name: "SectionFriends",
};
</script>

<style scoped>
@import "@/assets/css/SectionFriendsBoard.css";
</style>
