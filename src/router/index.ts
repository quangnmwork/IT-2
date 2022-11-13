import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',

    component: () => import('~/views/home/Home.vue'),
  },

  {
    name: 'login',
    path: '/login',
    component: () => import('~/views/Auth/Login/Login.vue'),
  },
  { name: 'register', path: '/register', component: () => import('~/views/Auth/Register/Register.vue') },
  { name: 'forgotpassword', path: '/forgot-password', component: () => import('~/views/Auth/ForgotPassword/ForgotPassword.vue') },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('~/views/UserProfile/UserProfile.vue'),
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});

export default index;
