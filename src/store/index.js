import Vue from "vue";
import Vuex from "vuex";
import tasksApi from "../api/tasks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: null
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload;
    },
    UPDATE_TASK_STATUS({ tasks }, { id, completed }) {
      tasks.map(item => (item.id === id ? (item.completed = completed) : item));
    },
    ADD_TASK(state, payload) {
      state.tasks = [...state.tasks, payload];
    }
  },
  actions: {
    async getTasks({ commit }) {
      const response = await tasksApi.getTasks();
      if (await response) {
        setTimeout(() => {
          commit("SET_TASKS", response);
        }, 1200);
      }
    },
    async toggleCompleted({ commit }, payload) {
      const response = await tasksApi.toggleCompleted(payload);
      if (await response) {
        commit("UPDATE_TASK_STATUS", response);
      }
    },
    async addTask({ commit }, payload) {
      const response = await tasksApi.addTask(payload);
      if (await response) {
        console.log(response);
        commit("ADD_TASK", response);
      }
    }
  },
  modules: {}
});
