import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/iconsax-vue-next/',
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@ratoufa/iconsax-vue': resolve(__dirname, '../packages/vue/src'),
    },
  },
})
