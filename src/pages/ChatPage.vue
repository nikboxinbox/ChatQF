<template lang="pug">
q-page(class="flex flex-center")
  q-footer(elevated)
    q-toolbar
      q-input(outlined v-model="text" label="Let's Write" bg-color="white" rounded dense)
        template(v-slot:append)
          q-icon(v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer")
          q-icon(name="schedule")
        template(v-slot:after)
          <q-btn color="white" round dense flat icon="send" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
});
</script>
