// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
// import "material-design-icons/iconfont/material-icons.css";

createApp(App).use(router).use(store).use(vuetify).mount("#app");
