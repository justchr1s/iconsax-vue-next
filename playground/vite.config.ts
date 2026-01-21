import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Lien vers le package local (pas besoin de npm link)
      '@ratoufa/iconsax-vue': resolve(__dirname, '../packages/vue/src')
    }
  }
})
