<template>
  <div>
    <tawk-header></tawk-header>
    <category-list></category-list>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CategoryList from "./components/CategoryList.vue";

export default {
  components: {
    "tawk-header": Header,
    "category-list": CategoryList,
  },
};
</script>

<style lang="scss" scoped>
@import "scss/main.scss";
</style>
