import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    content: [
      { name: "Raghavendra", id: "1" },
      { name: "Divya", id: "2" },
      { name: "Mahesh", id: "3" }
    ]
  },

  getters: {
    content(state) {
      return state.content;
    }
  },

  actions: {
    setValue: ({
      commit
    }, value) => {
      commit('SET_VALUE', value)
    },
  },

  mutations: {
    SET_VALUE(state, content) {
      state.content = content
    },
  }
});