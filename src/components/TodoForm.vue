<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group-error': $v.task.$error }">
      <input
        class="form-input"
        v-model="$v.task.$model"
        type="text"
        name="task"
        placeholder="Task name"
      />
      <AppLoader v-if="panding" />

      <div class="form-error" v-if="!$v.task.required">Task is required</div>
      <div class="form-error" v-if="!$v.task.minLength">
        Task name must have at least
        {{ $v.task.$params.minLength.min }} letters.
      </div>
    </div>
    {{ $v.task }}
  </form>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import AppLoader from "./AppLoader";

Vue.use(Vuelidate);

export default {
  name: "TodoForm",
  data: () => ({
    task: "",
    panding: false
  }),
  validations: {
    task: {
      required,
      minLength: minLength(4)
    }
  },
  methods: {
    submit() {
      if (this.$v.$invalid) return;
      this.panding = true;
      setTimeout(() => {
        this.$store.dispatch("addTask", {
          title: this.task,
          createdAt: new Date()
        });
        this.panding = false;
        this.task = "";
        this.$v.$reset();
      }, 500);
    }
  },
  components: {
    AppLoader
  }
};
</script>

<style lang="scss" scoped>
.form {
  &-input {
    display: grid;
    border: 1px solid #eee;
    border-radius: 2px;
    margin-top: 1em;
    padding: 1em;
    width: 100%;
    transition: all linear 0.3s;
    &:hover,
    &:focus,
    &:active {
      border-color: #1fab89;
    }
  }
  &-group-error {
    .form-input {
      border-color: #f57f6c;
    }
    .form-error {
      transform: translateY(0);
      opacity: 1;
    }
  }
  &-error {
    margin-top: 0.8em;
    transform: translateY(-10px);
    opacity: 0;
    font-size: 0.7em;
    color: #f57f6c;
    transition: all linear 0.3s;
  }
}
</style>
