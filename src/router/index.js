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
    name: 'register',
    component: () => import('@/views/auth/RegisterView'),
    meta: {
      title: 'Register',
      layout: 'public-layout',
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/DashboardView'),
    name: 'dashboard',
    meta: {
      requiresAuth: true,
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

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
