import Vue from "vue";
import Vuex from "vuex";
import articles from "./modules/articles";
import categories from "./modules/categories";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    articles,
    categories,
  },
  strict: debug,
});
