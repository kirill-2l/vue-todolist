import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
  async getTasks() {
    try {
      const response = await axios.get("/tasks");
      return await response.data;
    } catch (e) {
      console.log(e);
    }
  },

  async toggleCompleted(data) {
    try {
      const resp = await axios.patch(`/tasks/${data.id}`, {
        completed: data.completed
      });
      return resp.data;
    } catch (e) {
      console.log(e);
    }
  }
};
