<template>
  <div class="home">
    <a-layout>
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        breakpoint="lg"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo"></div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
          <a-menu-item key="/home/echarts">
            <RouterLink to="/home/echarts">
              <user-outlined />
              <span>echart</span>
            </RouterLink>
          </a-menu-item>
          <a-menu-item key="/home/student">
            <RouterLink to="/home/student">
              <video-camera-outlined />
              <span>student</span>
            </RouterLink>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          style="background: #fff; padding: 0; padding-left: 20px"
        >
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>

        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item
              v-show="item"
              v-for="item in selectedKeyArr"
              :key="item"
              >{{ item }}</a-breadcrumb-item
            >
          </a-breadcrumb>
          <div
            :style="{
              padding: '15px',
              background: '#fff',
              height: '100%',
            }"
          >
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          winabc后台管理
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

import { RouterLink, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Home',
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    RouterLink,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const route = useRoute();
    const collapsed = ref<boolean>(false);
    const selectedKeys = ref<string[]>([route.path]);
    let selectedKeyArr = ref(selectedKeys.value[0].split('/'));
    watch(selectedKeys, (selectedKeys) => {
      selectedKeyArr.value = selectedKeys[0].split('/');
    });
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys,
      selectedKeyArr,
      collapsed,
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
