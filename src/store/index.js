import Vue from "vue";
import Vuex from "vuex";
import tasksApi from "../api/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: null
  },
  mutations: {
    SET_TASKS(state, data) {
      state.tasks = data;
    }
  },
  actions: {
    async getTasks({ commit }) {
      const response = await tasksApi.getTasks();
      commit("SET_TASKS", response);
    },
    async toggleCompleted({ commit }, data) {
      const response = await tasksApi.toggleCompleted(data);
      commit("SET_TASKS", response);
    }
  },
  modules: {}
});
