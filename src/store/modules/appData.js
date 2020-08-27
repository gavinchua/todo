import axios from 'axios';

const state = {
  myListTodo: [],
  myListDone: []
};

const getters = {
  getMyListTodo: state => state.myListTodo,
  getMyListDone: state => state.myListDone
};

/* eslint-disable no-alert, no-console */
const mutations = {
  setMyListTodo: (state, payload) => {
    state.myListTodo = payload;
  },
  setMyListDone: (state, payload) => {
    state.myListDone = payload;
  },
  updateListItem: (state) => {
    console.log(state);
  }
};

const actions = {
  async updateMyList({ commit }) {
    await axios
      .get(process.env.VUE_APP_DATA)
      .catch(error => console.log(error))
      .then(response => response.data)
      .then(items => {
        commit('setMyListTodo', items.todo);
        commit('setMyListDone', items.done);
      });
  },
  updateListItem({ commit }) {
    commit('updateListItem');
  }
};
/* eslint-enable no-alert, no-console */

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
