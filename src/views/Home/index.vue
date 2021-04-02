<template>
  <div class="home">
    <a-layout>
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo" />
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="1">
            <user-outlined />
            <span class="nav-text">nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <video-camera-outlined />
            <span class="nav-text">nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <upload-outlined />
            <span class="nav-text">nav 3</span>
          </a-menu-item>
          <a-menu-item key="4">
            <user-outlined />
            <span class="nav-text">nav 4</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff' }">content</div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  name: 'Home',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(['4']),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
