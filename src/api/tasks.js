import axios from "axios";
import { errorLogger } from "./../utils/errorLogger";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
  async getTasks() {
    try {
      const response = await axios.get("/tasks");
      const data = await response.data;
      return data;
    } catch (e) {
      errorLogger(e);
    }
  },

  async toggleCompleted({ completed, id }) {
    try {
      const response = await axios.patch(`/tasks/${id}`, {
        completed
      });

      const data = await response.data;

      return data;
    } catch (e) {
      errorLogger(e);
    }
  },

  async addTask({ title, createdAt }) {
    try {
      const response = await axios.post(`/tasks/`, {
        title,
        createdAt,
        completed: false
      });
      const data = await response.data;
      return data;
    } catch (e) {
      errorLogger(e);
    }
  }
};
