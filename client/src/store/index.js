import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    logout({ commit }) {
      commit("setUser", null);
    },
  },
  getters: {
    user: (state) => state.user,
  },
});
