import axios from "axios";

const state = () => ({
  lists: [],
  category: {},
});

const getters = {};

const actions = {
  fetch: async ({ commit, state }, category) => {
    const { data } = await axios.get(`/api/category/${category.id}`);
    commit("setArticles", data);
    commit("setCategory", category);
  },
  clearListsAndCategory: ({ commit }) => {
    commit("setArticles", []);
    commit("setCategory", {});
  },
};

const mutations = {
  setArticles(state, lists) {
    state.lists = lists;
  },
  setCategory(state, category) {
    state.category = category;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
