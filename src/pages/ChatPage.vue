<template lang="pug">
q-page(class="flex column")
  div(class="q-pa-md column col justify-end")
    q-chat-message(
      v-for="message in messages"
      :key="message.text"
      :name="message.from"
      :text="[message.text]"
      :sent="message .from === 'Me'"
      )
    //- q-chat-message(
    //-   name="Jane"
    //-   :text="[ass]"
    //-   )


  q-footer(elevated)
    q-toolbar
      q-form(
        @submit="sendMessage"
        ).full-width.flex
        q-input(
          outlined
          label="Let's whrite ASS !"
          bg-color="white"
          rounded
          dense
          v-model="newMessage"
          ).send-message__input
          //-  template(v-slot:after)
        .btn__wrapp.flex
          q-btn(
            type="submit"
            color="white"
            round
            dense
            flat
            icon="send")



</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatPage",
  data: () => ({
    newMessage: "",
    messages: [
      { text: "Hi", from: "Mike" },
      { text: "Hi Mike", from: "Me" },
      { text: "How are you", from: "Mike" },
    ],
  }),
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
    },
  },
});
</script>
<style lang="scss">
.send-message__input {
  max-width: 80%;
  width: inherit;
}
</style>
