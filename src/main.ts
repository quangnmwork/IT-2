import { createApp } from "vue";
import { createPinia } from "pinia";
import index from "./router";
import Home from "~/views/home/Home.vue";
import "~/styles/tailwind.css";


const app = createApp(Home);

app.use(createPinia());

app.use(index);

app.mount("#app");
