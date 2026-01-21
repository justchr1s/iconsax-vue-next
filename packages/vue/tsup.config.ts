import { defineConfig } from 'tsup'
import vue from 'unplugin-vue/esbuild'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: false,
  clean: true,
  external: ['vue'],
  esbuildPlugins: [vue()],
  treeshake: true,
  splitting: true,
  sourcemap: true,
})
