import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import vitePluginImp from 'vite-plugin-imp';
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          style(name) {
            if (/popconfirm/.test(name)) {
              // support multiple style file path to import
              return [
                'ant-design-vue/es/button/style/index.css',
                'ant-design-vue/es/popover/style/index.css',
              ];
            }
            return `ant-design-vue/es/${name}/style/index.css`;
          },
        },
      ],
    }),
  ],
  server: {
    port: 4000,
    hmr: { overlay: false },
    open: true,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': '/src',
    },
  },
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
