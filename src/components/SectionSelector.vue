<template>
  <div>
    <div class="area_select_container">
      <div class="form_group">
        <select class="form_select" name="sido" id="sido" v-model="sidoVal">
          <!-- Todo: focus가면 시도선택 없어지게 하기 -->
          <option value="">시도선택</option>
          <option :value="item" v-for="(item, index) in sidoList" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="gugun" id="gugun" v-model="gugunVal">
          <option value="">구군선택</option>
          <option :value="item" v-for="(item, index) in gugunList" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="dong" id="dong" v-model="dongVal">
          <option value="">동선택</option>
          <option :value="item" v-for="(item, index) in dongList" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="year" id="year" v-model="yearVal">
          <option value="">매매년도선택</option>
          <option :value="item" v-for="(item, index) in yearList" :key="index">
            {{ item }} 년
          </option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="month" id="month">
          <option value="">매매월선택</option>
          <option :value="item" v-for="(item, index) in monthList" :key="index">
            {{ item }} 월
          </option>
        </select>
      </div>
      <div class="form_group">
        <div class="button_container">
          <router-link to="/search"
            ><input type="button" value="검색" id="list-btn"
          /></router-link>
          <input type="button" value="관심지역 등록" id="interest-btn2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "SectionSelector",
  data() {
    return {
      sidoList: [],
      gugunList: [],
      dongList: [],
      sidoVal: "",
      gugunVal: "",
      dongVal: "",
      yearList: [],
      monthList: [],
      yearVal: "",
      monthVal: "",
    };
  },
  mounted() {
    this.getSido();
    this.getYear();
  },
  methods: {
    getSido: async function () {
      const subUrl = "search/sido";
      let resSido = await http.get(`${subUrl}`);
      this.sidoList = resSido.data.data;
    },
    getYear: function () {
      let date = new Date();
      let year = date.getFullYear();
      for (let i = year; i > year - 10; i--) {
        this.yearList.push(i);
      }
    },
  },
  watch: {
    sidoVal: async function (sidoVal) {
      console.log(sidoVal);
      const subUrl = "search/gugun";
      const reqData = { sido: sidoVal };
      let resGugun = await http.get(`${subUrl}`, { params: reqData });
      this.gugunList = resGugun.data.data;
    },
    gugunVal: async function (gugunVal) {
      const subUrl = "search/dong";
      const reqData = { sido: this.sidoVal, gugun: gugunVal };
      console.log(reqData);
      let resDong = await http.get(`${subUrl}`, { params: reqData });
      this.dongList = resDong.data.data;
    },
    yearVal: function () {
      let date = new Date();
      let month = date.getMonth() + 1;
      let m = this.yearVal === date.getFullYear() ? month : 13;
      for (let i = 1; i < m; i++) {
        // let temp = i < 10 ? "0" + i : i;
        this.monthList.push(i);
      }
    },
  },
};
</script>

<style></style>
