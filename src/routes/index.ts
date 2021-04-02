import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NotFound from '/@/views/NotFound/index.vue';
import type { App } from 'vue';

import { getBaseUrl } from '../utils';

const Login = () => import('/@/views/Login/index.vue');
const Home = () => import('/@/views/Home/index.vue');
const User = () => import('/@/views/User/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { transition: 'slide-right' },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
      transition: 'slide-left',
    },
    children: [
      {
        path: 'user',
        name: 'user',
        component: User,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(getBaseUrl()),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});
// export function resetRouter() {
//   router.getRoutes().forEach((route) => {
//     const { name } = route;
//     // if (name && !WHITE_NAME_LIST.includes(name as string)) {
//     //   router.hasRoute(name) && router.removeRoute(name);
//     // }
//   });
// }
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.path === '/' || to.path === '/login') {
    next();
  } else {
    if (token) {
      next();
    } else {
      next({ path: '/' });
    }
  }

  // if (to.name !== 'login' && !store.state.token) next({ name: 'login' });
  // else next();
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;
