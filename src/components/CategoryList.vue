<template>
  <div id="category-container">
    <div id="categories-slide" v-if="Object.keys(category).length !== 0">
      <h1>Other Categories</h1>
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
        <vueper-slide v-for="category in data.categories" :key="category.id">
          <template v-slot:content>
            <div class="category" @click="fetch(category)">
              <i v-bind:class="'fa fa-' + category.icon" aria-hidden="true"></i>
              <h1 class="title">{{ category.title }}</h1>
              <p class="article-count">{{ category.totalArticle }} articles</p>
              <p class="sub-text">Last Updated on{{ category.updatedOn }}</p>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <div id="category-list-wrapper" v-if="Object.keys(category).length === 0">
      <div id="category-list">
        <div
          @click="fetch(category)"
          :key="category.id"
          class="category"
          v-for="category in data.categories"
        >
          <i v-bind:class="'fa fa-' + category.icon" aria-hidden="true"></i>
          <h1 class="title">{{ category.title }}</h1>
          <p class="article-count">{{ category.totalArticle }} articles</p>
          <p class="sub-text">Last Updated on{{ category.updatedOn }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  components: { VueperSlides, VueperSlide },
  computed: mapState({
    data: (state) => state.categories,
    category: (state) => state.articles.category,
  }),
  methods: mapActions("articles", ["fetch"]),
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
      vueperSlideArrow[0].style.cssText = `
        border-radius: 50px;
        background: #ebeaea;
        color: #9e9ba8;
        font-size: 8px;
        margin: 20px;
        padding: 10px 15px;
      `;
      vueperSlideArrow[1].style.cssText = `
        border-radius: 50px;
        background: #ebeaea;
        color: #9e9ba8;
        font-size: 8px;
        margin: 20px;
        padding: 10px 15px;
      `;
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

    h1 {
      color: $text-gray;
      margin: $spacing-size-e 0 $spacing-size-c 0;
    }

    .category {
      @include flexCenter(column);
      @include card();
      height: 100%;
      width: 100%;
      margin: 0;
      i {
        color: $green;
        font-size: $icon-size-l;
        margin: $spacing-size-d;
      }
    }
  }

  #category-list-wrapper {
    @include flexCenter(column);
    background: #fafafa;

    #category-list {
      @include flexCenter(row);
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: $spacing-size-e 0;
      width: 990px;

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
