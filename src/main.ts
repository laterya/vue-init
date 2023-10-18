import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVue from "@arco-design/web-vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(ArcoVue);
app.use(router);
app.mount("#app");
