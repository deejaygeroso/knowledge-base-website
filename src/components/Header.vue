<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
    </div>
    <div id="search">
      <input placeholder="Search for answers" />
      <button>
        <i class="fa fa-search fa-lg" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#header-wrapper {
  @include flexCenter(column);
  margin: 0 0 100px 0;

  #header-text {
    text-align: center;
    font-family: $font-family;
    color: $text-black;
    padding: 20px;

    h1 {
      font-size: 34px;
      font-style: normal;
      font-weight: bold;
      line-height: 41px;
    }

    h3 {
      font-size: $font-size-m;
      font-style: normal;
      font-weight: normal;
      line-height: 24px;
    }
  }

  #search {
    @include flex(row);
    height: 60px;
    width: 720px;

    input {
      @include flexValue(1);
      border: 1px solid #eeeeee;
      border-bottom-left-radius: $border-radius;
      border-top-left-radius: $border-radius;
      color: $text-black;
      font-size: $font-size-m;
      padding: 22px;
    }

    button {
      background: $green;
      border: $green;
      border-bottom-right-radius: $border-radius;
      border-top-right-radius: $border-radius;
      color: white;
      cursor: pointer;
      font-size: $font-size-m;
      width: 80px;
    }
  }
}
</style>
