import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: '/vue-mfe1/',
  build: {
    minify: false,
    cssCodeSplit: false,
    target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
  },
  server: {
    port: 5005,
  },
  preview: {
    port: 5005,
  },
  plugins: [
    vue(),
    federation({
      name: 'vue-mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],
  alias: {
    find: '@',
    replacement: path.resolve(__dirname, './src'),
  },
})
