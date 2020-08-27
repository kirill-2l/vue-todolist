<template>
  <li
    @click="$emit('click')"
    v-bind:class="[completed ? isCompleted : '', 'list-item']"
  >
    <div class="list-item__content">
      <div class="list-item__title">{{ title }}</div>
      <div class="list-item__created">{{ formattedDate }}</div>
    </div>
    <div class="list-item__status">
      <svg
        class="list-item__status-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 288.579 288.579"
      >
        <path
          d="M283.127 57.184l-22.871-22.131c-7.101-6.874-18.438-6.683-25.311.424L113.442 161.085c-6.88 7.107-19.404 8.879-27.985 3.962l-42.824-24.542c-8.568-4.917-19.512-1.951-24.428 6.629l-15.83 27.615c-4.917 8.58-1.951 19.518 6.623 24.434 0 0 103.889 59.46 103.931 59.376.048-.084 137.25-141.57 170.617-176.058 6.873-7.112 6.682-18.449-.419-25.317z"
        />
      </svg>
    </div>
  </li>
</template>

<script>
import moment from "moment";
export default {
  name: "TodoListItem",
  props: ["title", "createdAt", "completed"],
  data: () => ({
    isCompleted: "list-item--active"
  }),
  computed: {
    formattedDate() {
      return moment(new Date(this.createdAt)).format("D.MM.YYYY HH:mm");
    },
    mutableCompleted: {
      get() {
        return this.completed;
      },
      set() {
        return this.completed;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 1em;
  align-items: center;
  background-color: #eee;
  padding: 1em;
  border-radius: 2px;
  cursor: pointer;
  transition: all linear 0.15s;
  &.list-item--active {
    background-color: #f9f9f9;
    .list-item__status-icon {
      width: 1.5em;
      fill: #1fab89;
    }
  }
  &__content {
    display: grid;
    row-gap: 0.3em;
  }
  &__title {
    font-size: 1em;
    font-weight: 600;
  }
  &__created {
    font-size: 0.5rem;
    color: #777;
    font-weight: 100;
  }
  &__status {
    margin: 0 auto;
    &-icon {
      width: 1.2em;
      fill: #76958d;
      transition: all linear 0.15s;
    }
  }
}
</style>
