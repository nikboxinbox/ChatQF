<template lang="pug">
q-form(@submit="submitForm")
  q-input(
    v-if="tab === 'register'"
    outline
    v-model='formData.name'
    label="Name"
  ).q-mb-md
  q-input(
    outline
    v-model='formData.email'
    type="email"
    label="Email"
  ).q-mb-md
  q-input(
    outline
    v-model='formData.password'
    type="password"
    label="Password"
  ).q-mb-md

  .btn__wrapp().row
    q-space
    q-btn(
      type="submit"
      color="primary"
      :label="tab"
    )
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tab: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    formData: {
      name: "",
      email: "",
      password: "",
    },
  }),
  methods: {
    submitForm() {
      debugger;
    },
  },
});
</script>
