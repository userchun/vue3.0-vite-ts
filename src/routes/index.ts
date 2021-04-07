import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import NotFound from '@/views/NotFound/index.vue';
import type { App } from 'vue';
import { getBaseUrl, getItem } from '@/utils';

const Login = () => import('@/views/Login/index.vue');
const Home = () => import('@/views/Home/index.vue');
const Student = () => import('@/views/Student/index.vue');
const Echarts = () => import('@/views/Echarts/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      transition: 'fade-slide',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/home/echarts',
    meta: {
      requiresAuth: true,
      transition: 'slide-fade',
    },
    children: [
      {
        path: 'student',
        name: 'student',
        component: Student,
        meta: {},
      },
      {
        path: 'echarts',
        name: 'echarts',
        component: Echarts,
        meta: {},
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { transition: 'fade' },
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
  const token = getItem('token');
  if (to.path === '/' || to.path === '/login') {
    next();
  } else {
    if (token) {
      next();
    } else {
      next({ path: '/' });
    }
  }
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
export default router;
