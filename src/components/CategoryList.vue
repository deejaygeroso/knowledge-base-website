<template>
  <div id="category-container">
    <div id="categories-slide" v-if="Object.keys(category).length !== 0">
      <h1 id="categories-slide-title">Other Categories</h1>
      <vueper-slides
        class="no-shadow"
        slide-multiple
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        :bullets="false"
        :dragging-distance="200"
        :gap="3"
        :visible-slides="3"
        :slide-ratio="1 / 4"
      >
        <vueper-slide v-for="category in categoriesFiltered" :key="category.id">
          <template v-slot:content>
            <category :category="category"></category>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <div id="category-list-wrapper" v-if="Object.keys(category).length === 0">
      <div id="category-list">
        <category :category="category" :key="category.id" v-for="category in categories"></category>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import Category from "./Category.vue";
import moment from "moment";

export default {
  components: { category: Category, VueperSlides, VueperSlide },
  computed: mapState({
    categoriesFiltered: (state) =>
      state.categories.lists.filter(
        (category) => category.id !== state.articles.category.id
      ),
    categories: (state) => state.categories.lists,
    category: (state) => state.articles.category,
  }),
  methods: {
    ...mapActions("articles", ["fetch"]),
    getRelativeDate: (date) => moment(date).fromNow(),
  },
  created(abc) {
    this.$store.dispatch("categories/fetch");
  },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide content.",
      },
    ],
  }),
  updated() {
    // Hacky way of updating vueperslides style.
    const vueperSlide = this.$el.querySelector(".vueperslides__inner");
    if (vueperSlide) {
      vueperSlide.style.padding = "20px 90px";
    }

    // Hacky way of updating vueperslides arrow style.
    const vueperSlideArrow = this.$el.querySelectorAll(".vueperslides__arrow");
    if (vueperSlideArrow[0] && vueperSlideArrow[1]) {
      const cssText = `
        border-radius: 50px;
        background: #ebeaea;
        color: #9e9ba8;
        font-size: 8px;
        height: 50px;
        margin: 0;
        padding: 0;
        width: 50px;
      `;
      vueperSlideArrow[0].style.cssText = cssText;
      vueperSlideArrow[1].style.cssText = cssText;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
@import "../../node_modules/vueperslides/dist/vueperslides.css";

#category-container {
  @include flexCenter(column);
  background: $background-color-2;

  #categories-slide {
    border-top: $border;
    padding: 0 0 0 70px;
    text-align: center;
    width: 90%;

    h1#categories-slide-title {
      color: $text-gray;
      margin: $spacing-size-e 0 $spacing-size-c 0;
    }

    .category {
      @include categoryCard();
      height: 100%;
      width: 100%;
      margin: 0;
    }
  }

  #category-list-wrapper {
    @include flexCenter(column);
    background: #fafafa;

    #category-list {
      @include flex(row);
      @include flexWrap();
      @include flexJustifyContent(flex-start);

      margin: $spacing-size-e 0;
      width: 990px;

      .category {
        @include categoryCard();
        @include flexValue(1 0 310px);
        height: 260px;
        max-width: 310px;
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
