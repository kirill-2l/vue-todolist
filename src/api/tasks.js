import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export default {
  async getTasks() {
    try {
      const response = await axios.get("/tasks");
      const data = await response.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  },

  async toggleCompleted(data) {
    const test = [
      {
        _id: "5f29271526e4711b3a910b59",
        title: "Собрать рюкзак",
        description: "Ad sunt irure sit ullamco aliquip minim incididunt.",
        createdAt: "Wed Feb 26 2003 11:24:01 GMT+0000 (UTC)",
        completed: true
      },
      {
        _id: "5f2927157bf5e9062860e8ff",
        title: "Купить билеты",
        description:
          "Do sit nostrud velit laborum dolore anim ex mollit do non anim ut commodo.",
        createdAt: "Tue Oct 29 2013 03:48:43 GMT+0000 (UTC)",
        completed: false
      },
      {
        _id: "5f2927153806682eb6beeff5",
        title: "Сесть в такси",
        description:
          "Nostrud nostrud ea ea labore exercitation aute commodo in aliqua ea.",
        createdAt: "Tue Jul 25 1978 05:17:03 GMT+0000 (UTC)",
        completed: true
      },
      {
        _id: "5f2927156672919a8e8cf24f",
        title: "Улететь из этого ада",
        description:
          "Dolore dolore cillum proident deserunt reprehenderit aute cupidatat do ullamco.",
        createdAt: "Wed Nov 14 2001 13:50:45 GMT+0000 (UTC)",
        completed: true
      },
      {
        _id: "5f292715a53bce130c27a409",
        title: "Вернуться",
        description:
          "Aliquip veniam enim laborum qui deserunt cupidatat deserunt.",
        createdAt: "Fri Jul 05 2013 07:20:55 GMT+0000 (UTC)",
        completed: false
      }
    ];
    console.log(test[1]);
    try {
      const res = axios.get(`/tasks?_id=${data.id}`, {
        completed: data.completed
      });
      const data2 = await res.data;
      console.log(data2);
    } catch (e) {
      console.log(e);
    }
  }
};
