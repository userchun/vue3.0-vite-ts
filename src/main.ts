import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store';
import router, { setupRouter } from './routes';
import { setupAntd } from './antd';

(async () => {
  const app = createApp(App);
  // 配置路由
  setupRouter(app);
  // 配置antd
  setupAntd(app);
  // 配置store
  setupStore(app);
  await router.isReady();
  app.mount('#app', true);
})();
