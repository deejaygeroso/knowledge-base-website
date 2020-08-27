<template>
  <div id="article-wrapper" v-if="articles.length !== 0">
    <div>
      <div id="breadcrumbs">
        <p>
          <span @click="clearListsAndCategory()">All Categories</span> > Getting
          Started
        </p>
      </div>
      <div id="article-content">
        <div id="selected-category">
          <div class="content">
            <i v-bind:class="'fa fa-' + category.icon" aria-hidden="true"></i>
            <h1 class="title">{{ category.title }}</h1>
            <p class="sub-text">
              Updated {{ getRelativeDate(category.updatedOn) }}
            </p>
          </div>
          <div class="border-line"></div>
          <div class="description">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <p class="sub-text">{{ category.description }}</p>
          </div>
        </div>
        <div id="article-list-wrapper">
          <div id="article-list">
            <div :key="article.id" class="article" v-for="article in articles">
              <i v-bind:class="'fa fa-' + article.icon" aria-hidden="true"></i>
              <div class="article-content">
                <h1>{{ article.title }}</h1>
                <p class="sub-text">{{ article.updatedOn }}</p>
              </div>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  computed: mapState({
    articles: (state) =>
      state.articles.lists.filter((article) => article.status === "published"),
    category: (state) => state.articles.category,
  }),
  methods: {
    ...mapActions("articles", ["clearListsAndCategory"]),
    formatDate(date) {
      return moment(date).format("MMM Do YY");
    },
    getRelativeDate: (date) => moment(date).fromNow(),
  },
  updated() {
    const elem = this.$el;
    if (elem) {
      elem.scrollIntoView();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

#article-wrapper {
  @include flexCenter(column);
  background: $background-color-2;
  padding: 0 0 50px 0;

  div {
    #breadcrumbs {
      margin: 0;
      padding: $spacing-size-c 0;
      text-align: left;

      p {
        @include normalFont();
        color: $text-gray;
        font-size: $font-size-xs;

        span {
          color: $green;
          cursor: pointer;
        }
      }
    }

    #article-content {
      @include flex(row);
      margin: 0;
      padding: 0;
      width: 980px;

      #selected-category {
        @include flexCenter(column);
        @include card();
        @include normalFont();
        max-height: 320px;
        margin: 0;
        width: 280px;

        .content {
          @include flexCenter(column);
          flex: 1;
          padding: $spacing-size-d;

          i {
            font-size: $icon-size-l;
            margin: $spacing-size-e;
          }

          h1 {
            white-space: nowrap;
          }
        }

        .border-line {
          border-bottom: $border;
          width: 100%;
        }

        .description {
          @include flexCenter(column);
          margin: $spacing-size-d;

          i {
            padding: 0 0 $spacing-size-b 0;
          }

          p.sub-text {
            line-height: $font-size-sm;
            text-align: center;
          }
        }
      }

      #article-list-wrapper {
        flex: 1;
        margin: 0 0 0 60px;
        padding: 0;

        #article-list {
          margin: 0;
          padding: 0;

          .article {
            @include flex(row);
            @include card();
            align-items: center;
            margin: 0 0 $spacing-size-b 0;
            padding: $spacing-size-a $spacing-size-c;

            .article-content {
              cursor: pointer;
              flex: 1;
              margin: 0;
              padding: $spacing-size-b;

              p.sub-text {
                sfont-size: $font-size-xxs;
              }
            }
          }
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
