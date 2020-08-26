<template>
  <div id="category-list-container">
    <div id="category-list">
      <div class="category" v-for="category in data.categories">
        <i v-bind:class="'fa fa-' + category.icon" aria-hidden="true"></i>
        <p class="title">
          {{ category.title }}
        </p>
        <p class="article-count">{{ category.totalArticle }} articles</p>
        <p class="updated-on">Last Updated on{{ category.updatedOn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: mapState({
    data: (state) => state.categories,
  }),
  created(abc) {
    this.$store.dispatch("categories/fetch");
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#category-list-container {
  @include flexCenter(column);

  background: #fafafa;

  #category-list {
    @include flexCenter(row);

    flex-wrap: wrap;
    margin: 55px 10%;

    .category {
      @include flexCenter(column);
      @include card() cursor: pointer;

      flex: 1 0 315px;
      height: 220px;

      i {
        color: $green;
        font-size: 40px;
      }

      p.title {
        font-family: Lato;
        font-size: $font-size-m;
        font-style: normal;
        font-weight: bold;
        line-height: 24px;
        text-align: center;
      }
      p.article-count {
        color: $green;
      }

      p.article-count,
      p.updated-on {
        font-family: Lato;
        font-size: $font-size-xs;
        font-style: normal;
        font-weight: normal;
        line-height: 16px;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }
}
</style>
