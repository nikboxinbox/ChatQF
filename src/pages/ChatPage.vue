<template lang="pug">
q-page(class="flex column")
  div(class="q-pa-md column col justify-end")
    q-chat-message(
      name="me"
      :text="['hey, how are you?']"
      sent
      )
    q-chat-message(
      name="Jane"
      :text="['doing fine, how r you?']"
      )



  q-footer(elevated)
    q-toolbar
      q-input(
        outlined
        label="Let's whrite ASS !"
        bg-color="white"
        rounded
        dense
        v-model="newMessage"
        ).full-width
        template(v-slot:after)
          q-btn(
            color="white"
            round
            dense
            flat
            icon="send")
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
  data: () => {
    newMessage: "";
  },
});
</script>
