import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component:() => import('~/views/home/Home.vue')
  },
  
  {
    path: '/login',
    component:() => import('~/views/Auth/Login/Login.vue')
  },  

];

const index = createRouter({
  history: createWebHistory(),
  routes,
});

export default index;
