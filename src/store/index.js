// src/store/index.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    followingTeams: [],
    userPreferences: [],
    freeDays: [],
    isLoggedIn: false,
    showPreferencesModal: false,
    showCalendarModal: false,
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
    toggleCalendarModal(state, show) {
      state.showCalendarModal = show;
    },
    followTeam(state, team) {
      if (!state.followingTeams.includes(team)) {
        state.followingTeams.push(team);
      }
    },
    unFollowTeam(state, team) {
      state.followingTeams = state.followingTeams.filter((t) => t !== team);
    },
    setFreeDays(state, days) {
      state.freeDays = days;
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
    isModalVisible: (state) => state.showPreferencesModal,
    isCalendarModalVisible: (state) => state.showCalendarModal,
    getFollowingTeams: (state) => state.followingTeams,
    getUserFreeDays: (state) => state.freeDays,
  },
});

export default store;
