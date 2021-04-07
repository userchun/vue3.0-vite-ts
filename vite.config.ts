import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import usePluginImport from 'vite-plugin-importer';
import styleImport from 'vite-plugin-style-import';
export default defineConfig({
  plugins: [
    vue(),
    usePluginImport({
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: 'css',
    }),

    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
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
