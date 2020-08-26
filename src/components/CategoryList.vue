<template>
  <div id="category-list-wrapper">
    <div id="category-list">
      <div
        class="category"
        v-for="category in data.categories"
        @click="fetch(category)"
      >
        <i v-bind:class="'fa fa-' + category.icon" aria-hidden="true"></i>
        <h1 class="title">
          {{ category.title }}
        </h1>
        <p class="article-count">{{ category.totalArticle }} articles</p>
        <p class="sub-text">Last Updated on{{ category.updatedOn }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    data: (state) => state.categories,
  }),
  methods: mapActions("articles", ["fetch"]),
  created(abc) {
    this.$store.dispatch("categories/fetch");
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#category-list-wrapper {
  @include flexCenter(column);
  background: #fafafa;

  #category-list {
    @include flexCenter(row);
    flex-wrap: wrap;
    margin: 55px 10%;
    justify-content: flex-start;

    .category {
      @include flexCenter(column);
      @include card();
      cursor: pointer;
      flex: 1 0 310px;
      height: 260px;
      max-width: 310px;

      i {
        color: $green;
        font-size: $icon-size-l;
        margin: $spacing-size-d;
      }

      p.article-count {
        color: $green;
        margin: $spacing-size-e 0 0 0;
      }

      p.sub-text {
        margin: 0 0 $spacing-size-e 0;
      }
    }
  }
}

i {
  @include icon();
}

h1,
p {
  @include normalFont();
}

h1 {
  @include title();
}

p.sub-text {
  @include subText();
}
</style>
