<template>
  <div class="text-center pa-4">
    <v-dialog v-model="show" width="auto">
      <v-card
        min-width="400"
        max-width="600"
        prepend-icon="mdi-creation"
        title="AI suggestions"
      >
        <v-card-text v-html="getModalText()" class="px-8"></v-card-text>
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="hideModal()"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VDialog, VCard, VBtn } from "vuetify/components";

export default {
  components: {
    VDialog,
    VCard,
    VBtn,
  },
  name: "CalendarModal",
  props: {},
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    show() {
      return this.$store.getters.isCalendarModalVisible;
    },
  },
  methods: {
    hideModal() {
      this.$store.commit("toggleCalendarModal", false);
    },
    getModalText() {
      return `
            <p>We think you might like:</p>
            <br />
            <ul>
            <li class="mb-2">Chelsea vs Manchester United (15.10.2024)
                <button class="ml-4 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                Add it to calendar
                </button>
            </li>
            <li class="mb-2">Juventus vs Barcelona (12.10.2024)
                <button class="ml-4 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                Add it to calendar
                </button>
            </li>
            <li class="mb-2">Real Madrid vs Liverpool (16.10.2024)
                <button class="ml-4 px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
                Add it to calendar
                </button>
            </li>
            </ul>
      `;
    },
  },
  mounted() {},
};
</script>
