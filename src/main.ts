import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import antd from "@/plugins/antd";
const app = createApp(App);
antd(app);
app
  .use(store)
  .use(router)
  .mount("#app");
