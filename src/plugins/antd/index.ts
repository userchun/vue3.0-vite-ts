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
  Spin,
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
    Spin,
  ];
  antd.forEach((plugin) => {
    app.use(plugin);
  });
}
