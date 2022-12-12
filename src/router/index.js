import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView'),
    meta: {
      title: 'Login',
      layout: 'public-layout',
    },
  },
  {
    path: '/register',
    component: () => import('@/views/auth/RegisterView'),
    meta: {
      title: 'Register',
      layout: 'public-layout',
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/DashboardView'),
    meta: {
      title: 'Dashboard',
      layout: 'private-layout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
