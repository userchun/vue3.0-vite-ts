import { Button, Menu } from 'ant-design-vue';
import type { App } from 'vue';
import 'ant-design-vue/dist/antd.less';
export function setupAntd(app: App<Element>) {
  app.use(Button);
  app.use(Menu);
}
