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
    name: 'search',
    path: '/search',
    props: (route) => ({ query: route.query.inp }),

    component: () => import('~/views/Search/SearchHome.vue'),
  },

  {
    name: 'login',
    path: '/login',
    component: () => import('~/views/Auth/Login/Login.vue'),
  },
  { name: 'register', path: '/register', component: () => import('~/views/Auth/Register/Register.vue') },

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
  {
    name: 'update-post',
    path: '/update-post/:id',
    component: () => import('~/views/updatePost/UpdatePost.vue'),
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: () => import('~/views/Detail/Detail.vue'),
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import('~/views/Admin/AdminHome.vue'),
  },
  {
    name: 'user-manager',
    path: '/admin/user-manager',
    component: () => import('~/views/Admin/AdminUserManager.vue'), // lam tuong tu
  },
  {
    name: 'dashboard',
    path: '/admin/dashboard',
    component: () => import('~/views/Admin/AdminDashboard.vue'), // lam tuong tu nhu blog manager
  },
  {
    name: 'blog-manager',
    path: '/admin/blog-manager',
    component: () => import('~/views/Admin/AdminBlogManager.vue'),
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
