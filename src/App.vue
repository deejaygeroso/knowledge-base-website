<template>
  <div>
    <tawk-header></tawk-header>
    <article-list></article-list>
    <category-list></category-list>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ArticleList from "./components/ArticleList.vue";
import CategoryList from "./components/CategoryList.vue";

export default {
  components: {
    "tawk-header": Header,
    "article-list": ArticleList,
    "category-list": CategoryList,
  },
};
</script>

<style lang="scss" scoped>
@import "scss/main.scss";
</style>
