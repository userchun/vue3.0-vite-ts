import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createAlias } from './src/utils/alias';
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
    hmr: { overlay: false },
    open: true,
  },

  alias: createAlias([
    // /@/xxxx => src/xxxx
    ['/@/', 'src'],
    // /#/xxxx => types/xxxx
    ['/#/', 'types'],
  ]),
  build: {
    outDir: 'dist',
    terserOptions: {
      compress: {
        keep_infinity: true,
      },
    },
    // Turning off brotliSize display can slightly reduce packaging time
    brotliSize: false,
    chunkSizeWarningLimit: 1200,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      less: {
        javascriptEnabled: true,
      },
    },
  },

  optimizeDeps: {
    include: [
      'axios',
      '@ant-design/icons-vue',
      'ant-design-vue/es/locale/zh_CN',
      'moment/dist/locale/zh-cn',
      'ant-design-vue/es/locale/en_US',
      'moment/dist/locale/eu',
    ],
  },
});
