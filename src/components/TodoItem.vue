<template>
  <v-list-item
    active-class="deep-purple--text text--accent-4"
    @click="$emit('click')"
  >
    <v-list-item-content>
      <v-list-item-title v-text="title"></v-list-item-title>
      <v-list-item-subtitle v-text="description"></v-list-item-subtitle>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox color="success" />
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["title", "description", "createdAt", "_id"],
  data() {
    return {
      mutableCompleted: this.completed
    };
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &__createdAt {
    font-size: 0.8rem;
    color: #777;
    font-weight: 100;
  }
}
</style>
