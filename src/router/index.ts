import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
// import NProgress from 'nprogress';
import Home from '~/views/home/Home.vue';
import Register from '~/views/Auth/Register/Register.vue';
import Login from '~/views/Auth/Login/Login.vue';
import SearchHome from '~/views/Search/SearchHome.vue';
import UserProfile from '~/views/UserProfile/UserProfile.vue';
import CreatePost from '~/views/createPost/CreatePost.vue';
import UpdatePost from '~/views/updatePost/UpdatePost.vue';
import Detail from '~/views/Detail/Detail.vue';
import AdminHome from '~/views/Admin/AdminHome.vue';
import AdminUserManager from '~/views/Admin/AdminUserManager.vue';

import AdminBlogManager from '~/views/Admin/AdminBlogManager.vue';
import AdminDashboard from '~/views/Admin/AdminDashboard.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',

    component: () => Home,
  },
  {
    name: 'search',
    path: '/search',
    props: (route) => ({ query: route.query.inp }),

    component: () => SearchHome,
  },

  {
    name: 'login',
    path: '/login',
    component: () => Login,
  },
  { name: 'register', path: '/register', component: () => Register },

  {
    name: 'profile',
    path: '/profile',
    component: () => UserProfile,
  },
  {
    name: 'create-post',
    path: '/create-post',
    component: () => CreatePost,
  },
  {
    name: 'update-post',
    path: '/update-post/:id',
    component: () => UpdatePost,
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: () => Detail,
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => AdminHome,
  },
  {
    name: 'user-manager',
    path: '/admin/user-manager',
    component: () => AdminUserManager, // lam tuong tu
  },
  {
    name: 'dashboard',
    path: '/admin/dashboard',
    component: () => AdminDashboard, // lam tuong tu nhu blog manager
  },
  {
    name: 'blog-manager',
    path: '/admin/blog-manager',
    component: () => AdminBlogManager,
  },
];

const index = createRouter({
  history: createWebHistory(),
  routes,
});
// index.beforeEach((to, from) => {
//   if (!NProgress.isStarted()) {
//     NProgress.configure({ showSpinner: false, easing: 'ease', speed: 1000 });

//     NProgress.set(0.1);
//     NProgress.inc(0.1);
//     NProgress.start();
//   }
// });

// index.afterEach((to, from) => {
//   NProgress.done();
// });
export default index;
