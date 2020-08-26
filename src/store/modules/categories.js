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
