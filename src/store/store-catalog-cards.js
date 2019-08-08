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
  setCardId(state, value) {
    state.cardId = value;
  },
  resetCard(state) {
    // state.card = Object.assign({}, initialState);
    Object.assign(state, getInitialState());
  },
};

const actions = {
  createCard({ commit }) {
    axios
      .post('http://192.168.23.157:3000/cards/create', state.card)
      .then(function(response) {
        commit(
          'setCardImage',
          'http://192.168.23.157:3000/cards/card/' + response.data.id
        );
        commit('setCardId', response.data.id);
      })
      .catch(function(error) {
        console.log(error);
      });
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
