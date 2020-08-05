<template>
  <div class="app">
    <v-container class="app-container">
      <div class="app-name">Todo app</div>
      <TodoList>
        <TodoItem
          v-for="task in tasks"
          v-bind="task"
          :key="task.id"
          @click="toggleCompleted(task._id, task.completed)"
        />
      </TodoList>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

export default {
  name: "App",

  computed: mapState(["tasks"]),
  components: {
    TodoList,
    TodoItem
  },
  methods: {
    toggleCompleted(id, completed) {
      this.$store.dispatch("toggleCompleted", { id, completed: !completed });
    }
  },
  created() {
    this.$store.dispatch("getTasks");
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100vh;
}
.app-name {
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
.app-container.container {
  max-width: 600px;
  margin-top: 5%;
}
</style>
