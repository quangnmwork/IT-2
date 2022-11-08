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
   {
    path: '/register',
    component:() => import('~/views/Auth/Register/Register.vue')
  },  
   {
    path: '/forgot-password',
    component:() => import('~/views/Auth/ForgotPassword/ForgotPassword.vue')
  },  
  {
    path: '/userprofile',
    component:() => import('~/views/UserProfile/UserProfile.vue')
  },  

];

const index = createRouter({
  history: createWebHistory(),
  routes,
});

export default index;
