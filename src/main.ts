import { createApp } from "vue";
import { createPinia } from "pinia";
import index from "./router/index";
import App from "~/index.vue";
import "~/styles/tailwind.css";


const app = createApp(App);

app.use(createPinia());

app.use(index);

app.mount("#app");
