import axios from "axios";

const state = () => ({
  articles: [],
});

const getters = {};

const actions = {
  fetch: async ({ commit, state }) => {
    const id = 1;
    const { data } = await axios.get(`/api/category/${id}`);
    commit("setArticles", data);
  },
};

const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
