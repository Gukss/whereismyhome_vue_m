<template>
  <div>
    <div>
      <!-- 현재 선택된 페이지 : {{ selectPage }} -->
      <PaginateComp
        :page-count="this.$store.getters.getTotalPageCount"
        :page-range="3"
        :margin-pages="2"
        :click-handler="changePage"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      >
      </PaginateComp>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Paginate from "vuejs-paginate";
Vue.component("PaginateComp", Paginate);

export default {
  data() {
    return {
      selectPage: 1,
      pageCount: 15,
    };
  },
  methods: {
    /**
     * 페이징 번호를 누르면 pageNum이 바뀌고 이 함수가 실행된다.
     */
    changePage: function (pageNum) {
      this.selectPage = pageNum;
      this.$store.dispatch("asyncReqArticleList", this.selectPage);
    },
  },
};
</script>
<style lang="css">
.pagination {
  margin: 24px;
  display: flex;
}
.pagination li {
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  border-bottom: 1px solid #90caf9;
  line-height: 2rem;
  box-shadow: 0 1px 0px 0 rgba(34, 36, 38, 0.15);
}
.pagination li:hover {
  background: #d1eaff;
}
.page-item a {
  color: #000;
  text-decoration: none;
}
.pagination li.active {
  background-color: #90caf9;
  color: #fff;
}
.pagination li.active a {
  color: #fff;
}
</style>
