import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios';

const getInitialState = () => {
  return {
    card: {
      title: '',
      cardtype: '',
      callnum: '',
      cardtext: '',
      scribble1: '',
      scribble2: '',
      scribble3: '',
    },
    cardId: null,
    showCard: false,
    cardImage: null,
  };
};

const state = getInitialState();

const mutations = {
  updateField,
  createCard(state, payload) {
    state.card = payload;
  },
  setCardImage(state, value) {
    state.cardImage = value;
  },
  resetCard(state) {
    // state.card = Object.assign({}, initialState);
    Object.assign(state, getInitialState());
  },
};

const actions = {
  createCard({ commit }) {
    axios
      .post('http://localhost:3000/cards/create', state.card)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    commit(
      'setCardImage',
      'http://localhost:3000/cards/card/4fb2f581-fb45-42c3-9bb5-a0db39b68389'
    );
  },
  resetCard({ commit }) {
    commit('resetCard');
  },
};

const getters = {
  getField,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
