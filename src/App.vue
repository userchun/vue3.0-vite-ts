<template>
  <aConfigProvider :locale="zhCN">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </aConfigProvider>
</template>

<script lang="ts">
import { defineComponent, ref, readonly, reactive } from 'vue';
import { TranslationOutlined } from '@ant-design/icons-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  name: 'App',
  components: {
    TranslationOutlined,
  },
  setup() {
    return {
      zhCN,
    };
  },
});
</script>

<style lang="less">
@import './App.less';
</style>
