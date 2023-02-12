<template lang="pug">
q-page.flex.q-pa-md
  q-card.full-width
    q-tabs(
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
      )
      q-tab(name="login" label="Login")
      q-tab(name="register" label="Register")

    q-separator

    q-tab-panels(v-model="tab" animated)
      q-tab-panel(name="login")
        LoginRegister(:tab="tab")
      q-tab-panel(name="register")
        LoginRegister(:tab="tab")


</template>
<script lang="ts">
import { defineComponent } from "vue";
// Components
import LoginRegister from "../components/LoginRegister.vue";

export default defineComponent({
  data: () => ({
    tab: "login",
  }),
  components: {
    LoginRegister,
  },
});
</script>
<style>

</style>
