import axios from "axios";

const state = () => ({
  categories: [],
});

const getters = {};

const actions = {
  fetch: async ({ commit, state }) => {
    const { data } = await axios.get("/api/categories");
    commit("setCategories", data);
  },
};

const mutations = {
  setCategories(state, categories) {
    const compare = function(a, b) {
      const bandA = a.order;
      const bandB = b.order;

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    };

    categories.sort(compare);
    state.categories = categories;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
