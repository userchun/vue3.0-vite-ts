<template>
  <div class="home">
    <a-layout>
      <a-layout-sider
        v-model:collapsed="collapsed"
        :trigger="null"
        breakpoint="lg"
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
          <MenuUnfoldOutlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <MenuFoldOutlined
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
              >{{ item }}
            </a-breadcrumb-item>
          </a-breadcrumb>
          <div
            :style="{
              padding: '15px',
              background: '#fff',
              height: '100%',
            }"
          >
            <RouterView v-slot="{ Component, route }">
              <transition :name="route.meta.transition">
                <keep-alive> <component :is="Component" /></keep-alive>
              </transition>
            </RouterView>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          winabc后台管理
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const route = useRoute();
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>([route.path]);
const selectedKeyArr = ref(selectedKeys.value[0].split('/'));

watch(selectedKeys, (selectedKeys) => {
  selectedKeyArr.value = selectedKeys[0].split('/');
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
