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
    },
    UPDATE_TASK_STATUS({ tasks }, { id, completed }) {
      tasks.map(item => (item.id === id ? (item.completed = completed) : item));
    }
  },
  actions: {
    async getTasks({ commit }) {
      const response = await tasksApi.getTasks();
      if (await response) {
        commit("SET_TASKS", response);
      }
    },
    async toggleCompleted({ commit }, payload) {
      const response = await tasksApi.toggleCompleted(payload);
      if (response) {
        commit("UPDATE_TASK_STATUS", payload);
      }
    }
  },
  modules: {}
});
