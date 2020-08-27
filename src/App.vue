<template>
  <div class="app">
    <div class="app-container container">
      <div class="app-name">Todo app</div>
      <AppLoader v-if="!tasks" />
      <div v-else>
        <TodoList>
          <TodoListItem
            v-for="task in tasks"
            v-bind="task"
            :key="task.id"
            @click="toggleCompleted(task.id, task.completed)"
          />
        </TodoList>
        <TodoForm />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoListItem from "./components/TodoListItem";
import AppLoader from "./components/AppLoader";

export default {
  name: "App",

  components: {
    AppLoader,
    TodoList,
    TodoListItem,
    TodoForm
  },
  computed: mapState(["tasks"]),
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
.app {
  &-container.container {
    margin-top: 5%;
  }
  &-name {
    font-size: 6rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
  }
}

.container {
  margin: 0 auto;
  max-width: 600px;
}
</style>
