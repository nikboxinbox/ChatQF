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


    //- TODO: не срабатывает сабмит по нажатию кнопки
  q-footer(elevated)
    q-toolbar
      q-form(@submit="sendMessage").full-width
        q-input(
          outlined
          label="Let's whrite ASS !"
          bg-color="white"
          rounded
          dense
          v-model="newMessage"
          )
          template(v-slot:after)
            q-btn(
              label="Submit"
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
      debugger;
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
    },
  },
});
</script>
