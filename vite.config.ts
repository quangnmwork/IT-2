import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  build: {},
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components({
      deep: true,
      dts: true,
      resolvers: [AntDesignVueResolver()],
      dirs: ['src/*'],
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', '@vueuse/core'],

      dirs: ['./src/*'],
      vueTemplate: true,
    }),
  ],
  resolve: {
    alias: {
      '~': `${path.resolve(__dirname, 'src')}`,
    },
  },
});

