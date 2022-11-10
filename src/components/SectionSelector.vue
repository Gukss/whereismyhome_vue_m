<template>
  <div>
    <div class="area_select_container">
      <div class="form_group">
        <select class="form_select" name="sido" id="sido">
          <option value="">시도선택</option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="gugun" id="gugun">
          <option value="">구군선택</option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="dong" id="dong">
          <option value="">동선택</option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="year" id="year">
          <option value="">매매년도선택</option>
        </select>
      </div>
      <div class="form_group">
        <select class="form_select" name="month" id="month">
          <option value="">매매월선택</option>
        </select>
      </div>
      <div class="form_group">
        <div class="button_container">
          <input type="button" value="검색" id="list-btn" />
          <input type="button" value="관심지역 등록" id="interest-btn2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionSelector",
};
</script>

<style></style>
