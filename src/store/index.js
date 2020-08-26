import Vue from "vue";
import Vuex from "vuex";
import categories from "./modules/categories";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    categories,
  },
  strict: debug,
});
