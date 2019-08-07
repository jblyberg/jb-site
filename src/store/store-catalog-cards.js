//import Vue from 'vue';

const state = {
  card: {},
  cardId: null,
  showCard: false,
  cardImage: null,
};

const mutations = {
  createCard(state, payload) {
    state.card = payload;
  },
  resetCard(state) {
    state.card = {};
  },
};

const actions = {
  createCard({ commit }, value) {
    console.log(value);
    commit('createCard', value);
  },
  resetCard({ commit }) {
    commit('resetCard');
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
