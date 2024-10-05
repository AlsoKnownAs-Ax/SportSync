// src/plugins/vuetify.js
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Global Vuetify styles
import { aliases, mdi } from "vuetify/iconsets/mdi"; // For Material Design Icons (Optional)
import "@mdi/font/css/materialdesignicons.css"; // Ensure you import the material design icons

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
