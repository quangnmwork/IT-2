import { createApp } from 'vue';
import { createPinia } from 'pinia';
import index from './router/index';
import App from '~/App.vue';
import '~/styles/tailwind.css';
import '~/styles/nprogress.scss';
import { VueQueryPlugin } from 'vue-query';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);

app.use(Antd);
app.use(createPinia());
app.use(VueQueryPlugin);
app.use(index);

app.mount('#app');
