import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: [
      'dist/',
      '**/dist/',
      'node_modules/',
      '**/node_modules/',
      'packages/vue/src/components/',
      'packages/vue/src/types.ts',
      'packages/vue/src/index.ts',
      'packages/iconify/icons.json',
      'packages/iconify/index.d.ts',
      'icons/',
      'coverage/',
      'playground/',
    ],
  }
)
