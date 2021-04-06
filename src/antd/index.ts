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
  Tabs,
  Breadcrumb,
} from 'ant-design-vue';

import 'ant-design-vue/dist/antd.less';
export function setupAntd(app: App<Element>) {
  app
    .use(Button)
    .use(Layout)
    .use(Menu)
    .use(ConfigProvider)
    .use(Result)
    .use(Form)
    .use(Input)
    .use(Popover)
    .use(Breadcrumb)
    .use(Tabs);
}
