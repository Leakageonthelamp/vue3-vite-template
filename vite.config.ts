import Vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/assets/scss/main.scss";
        @import "@/assets/scss/variables.scss";
        @import "@/assets/scss/mixins.scss";
        `
      }
    }
  },
})
