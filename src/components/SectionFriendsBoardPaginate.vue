<template>
  <div>
    <div>
      현재 선택된 페이지 : {{ selectPage }}
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
  min-width: 32px;
  padding: 2px 6px;
  text-align: center;
  margin: 0 3px;
  border-radius: 6px;
  border: 1px solid #eee;
  color: #666;
}
.pagination li:hover {
  background: #e4dbd6;
}
.page-item a {
  color: #666;
  text-decoration: none;
}
.pagination li.active {
  background-color: #e7aa8d;
  color: #fff;
}
.pagination li.active a {
  color: #fff;
}
</style>
