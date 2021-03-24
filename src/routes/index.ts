import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '/@/views/NotFound/index.vue';
import type { App } from 'vue';
import { getBaseUrl } from '../utils';
const Login = () => import('/@/views/Login/index.vue');
const Home = () => import('/@/views/Home/index.vue');
const User = () => import('/@/views/User/index.vue');
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'user',
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
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    // if (name && !WHITE_NAME_LIST.includes(name as string)) {
    //   router.hasRoute(name) && router.removeRoute(name);
    // }
  });
}
export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;
