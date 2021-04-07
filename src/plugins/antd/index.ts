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

export function setupAntd(app: App<Element>) {
  const antd = [
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
  ];
  antd.forEach((plugin) => {
    app.use(plugin);
  });
}
