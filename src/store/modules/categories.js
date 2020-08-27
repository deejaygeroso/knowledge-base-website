import axios from "axios";

const state = () => ({
  lists: [],
});

const getters = {};

const actions = {
  fetch: async ({ commit }) => {
    const { data } = await axios.get("/api/categories");
    commit("setCategories", data);
  },
};

const mutations = {
  setCategories(state, lists) {
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

    lists.sort(compare);
    state.lists = lists;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
