// src/store/index.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    followingTeams: [],
    userPreferences: [],
    isLoggedIn: false,
    showPreferencesModal: false,
  },
  mutations: {
    setUserPreferences(state, preferences) {
      state.userPreferences = preferences;
    },
    setLoginStatus(state, status) {
      state.isLoggedIn = status;
    },
    togglePreferencesModal(state, show) {
      state.showPreferencesModal = show;
    },
    followTeam(state, team) {
      if (!state.followingTeams.includes(team)) {
        state.followingTeams.push(team);
      }
    },
    unFollowTeam(state, team) {
      state.followingTeams = state.followingTeams.filter((t) => t !== team);
    },
  },
  actions: {
    updateUserPreferences({ commit }, preferences) {
      commit("setUserPreferences", preferences);
    },
    login({ commit }) {
      commit("setLoginStatus", true);
    },
    logout({ commit }) {
      commit("setLoginStatus", false);
      commit("setUserPreferences", []);
    },
  },
  getters: {
    getUserPreferences: (state) => state.userPreferences,
    isLoggedIn: (state) => state.isLoggedIn,
    showPreferencesModal: (state) => state.showPreferencesModal,
    getFollowingTeams: (state) => state.followingTeams,
  },
});

export default store;
