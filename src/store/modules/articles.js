import axios from "axios";

const state = () => ({
  category: {},
  lists: [],
  searchResult: [],
});

const getters = {};

const actions = {
  search: async ({ commit }, searchKeyInput) => {
    let output = [];
    const { data } = await axios.get(`/api/search/sdf`);

    if (data) {
      data.forEach((dataTemp) => {
        const isSearchMatched = dataTemp.title
          .toLowerCase()
          .includes(searchKeyInput.toLowerCase());
        if (isSearchMatched) {
          output.push(dataTemp);
        }
      });
    }

    commit("setSearched", output);
  },
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
  setSearched(state, searchResult) {
    state.searchResult = searchResult;
  },
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
