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
    Object.assign(state, getInitialState());
  },
};

const actions = {
  createCard({ commit }) {
    axios
      .post(process.env.API_SERVER + '/cards/create', state.card)
      .then(function(response) {
        commit(
          'setCardImage',
          process.env.API_SERVER + '/cards/card/' + response.data.id
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
  loadCard({ commit }, cardId) {
    axios
      .get(process.env.API_SERVER + '/cards/' + cardId)
      .then(function(response) {
        const card = {
          title: response.data.title,
          cardtype: response.data.cardtype,
          callnum: response.data.callnum,
          cardtext: response.data.cardtext,
          scribble1: response.data.scribble1,
          scribble2: response.data.scribble2,
          scribble3: response.data.scribble3,
        };
        commit('createCard', card);
        commit(
          'setCardImage',
          process.env.API_SERVER + '/cards/card/' + response.data.id
        );
        commit('setCardId', response.data.id);
      })
      .catch(function(error) {
        console.log(error);
      });
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
