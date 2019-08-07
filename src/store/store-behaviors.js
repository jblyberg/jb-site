const state = {
  menuDrawerState: false,
};

const mutations = {
  setMenuDrawerState(state, value) {
    state.menuDrawerState = value;
  },
};

const actions = {
  setMenuDrawerState({ commit }, value) {
    commit('setMenuDrawerState', value);
  },
};

const getters = {
  menuDrawerState: state => {
    return state.menuDrawerState;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
