import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';

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
  { name: 'forgot-password', path: '/forgot-password', component: () => import('~/views/Auth/ForgotPassword/ForgotPassword.vue') },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('~/views/UserProfile/UserProfile.vue'),
  },
  {
    name: 'create-post',
    path: '/create-post',
    component: () => import('~/views/createPost/CreatePost.vue'),
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});
index.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.configure({ showSpinner: false, easing: 'ease', speed: 1000 });

    NProgress.set(0.1);
    NProgress.inc(0.1);
    NProgress.start();
  }
});

index.afterEach((to, from) => {
  NProgress.done();
});
export default index;
