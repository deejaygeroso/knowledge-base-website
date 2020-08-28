<template>
  <div class="category" @click="fetch(category)">
    <i v-bind:class="'fa fa-' + category.icon" aria-hidden="true"></i>
    <h1 class="title">{{ category.title }}</h1>
    <p class="article-count">{{ category.totalArticle }} articles</p>
    <p class="sub-text">Last Update {{ getRelativeDate(category.updatedOn) }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  methods: {
    ...mapActions("articles", ["fetch"]),
    getRelativeDate: (date) => moment(date).fromNow(),
  },
  props: ["category"],
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.category {
  @include categoryCard();
  height: 100%;
  width: 100%;
  margin: 0;
  white-space: nowrap;
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
