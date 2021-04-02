import type { App } from 'vue';
import {
  Button,
  Menu,
  Layout,
  Result,
  ConfigProvider,
  Form,
  Input,
  Popover,
} from 'ant-design-vue';

import 'ant-design-vue/dist/antd.less';
export function setupAntd(app: App<Element>) {
  app.use(Button);
  app.use(Layout);
  app.use(Menu);
  app.use(ConfigProvider);
  app.use(Result);
  app.use(Form);
  app.use(Input);
  app.use(Popover);
}
