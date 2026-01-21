# Iconsax Vue Next

> Modern Iconsax icon library for Vue 3 & Nuxt 3 with full TypeScript support

![iconsax-vue-next](https://img.shields.io/badge/icons-1000+-blue)
![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen)
![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## Features

- 🎨 **1000+ Icons** - Complete Iconsax collection in 6 styles
- 🔷 **Full TypeScript** - Autocomplete for all icon names and props
- 🌳 **Tree-shakable** - Only bundle the icons you use
- ⚡ **Dynamic Loading** - Load icons by name at runtime
- 🧩 **Nuxt Module** - Auto-imports for Nuxt 3
- 📦 **Lightweight** - Optimized for minimal bundle size

## Packages

| Package | Version | Description |
|---------|---------|-------------|
| [@ratoufa/iconsax-vue](./packages/vue) | ![npm](https://img.shields.io/npm/v/@ratoufa/iconsax-vue) | Vue 3 components |
| [@ratoufa/iconsax-nuxt](./packages/nuxt) | ![npm](https://img.shields.io/npm/v/@ratoufa/iconsax-nuxt) | Nuxt 3 module |
| [@iconify-json/iconsax](./packages/iconify) | ![npm](https://img.shields.io/npm/v/@iconify-json/iconsax) | Iconify format (Nuxt Icon, UnoCSS) |

## Quick Start

### Vue 3

```bash
npm install @ratoufa/iconsax-vue
```

```vue
<script setup lang="ts">
import { IsHome, IsSetting, IsIcon } from '@ratoufa/iconsax-vue'
</script>

<template>
  <!-- Static import (tree-shakable) -->
  <IsHome variant="bold" size="24" color="#6366f1" />
  
  <!-- Dynamic import -->
  <IsIcon name="setting" variant="linear" />
</template>
```

### Nuxt 3

```bash
npm install @ratoufa/iconsax-nuxt
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@ratoufa/iconsax-nuxt'],
  iconsax: {
    prefix: 'Is',  // Component prefix
    global: false  // Register all icons globally
  }
})
```

```vue
<template>
  <!-- Auto-imported! -->
  <IsIcon name="home" variant="bold" />
</template>
```

### Nuxt Icon (Iconify)

```bash
npm install @iconify-json/iconsax
```

```vue
<template>
  <!-- Using Nuxt Icon module -->
  <Icon name="iconsax:home-bold" />
  <Icon name="iconsax:setting-linear" />
  <Icon name="iconsax:user-twotone" />
</template>
```

## Icon Variants

Each icon comes in 6 beautiful styles:

| Variant | Style |
|---------|-------|
| `linear` | Clean outline (default) |
| `bold` | Solid filled |
| `outline` | Detailed outline |
| `bulk` | Two-tone with opacity |
| `broken` | Dashed lines |
| `twotone` | Two-color style |

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repo
git clone https://github.com/ratoufa/iconsax-vue-next.git
cd iconsax-vue-next

# Install dependencies
pnpm install

# Fetch icons from source (requires git)
pnpm fetch:icons

# Generate Vue components
pnpm generate

# Generate Iconify JSON
pnpm generate:iconify

# Or generate all at once
pnpm generate:all

# Build all packages
pnpm build
```

### Project Structure

```
iconsax-vue-next/
├── packages/
│   ├── vue/          # @ratoufa/iconsax-vue
│   ├── nuxt/         # @ratoufa/iconsax-nuxt
│   └── iconify/      # @iconify-json/iconsax
├── scripts/
│   ├── fetch-icons.ts        # Download SVGs from source
│   ├── generate.ts           # Generate Vue components
│   └── generate-iconify.ts   # Generate Iconify JSON
├── icons/            # SVG source files (6 variants)
│   ├── bold/
│   ├── broken/
│   ├── bulk/
│   ├── linear/
│   ├── outline/
│   └── twotone/
└── package.json
```

## TypeScript

Full type safety with autocompletion:

```typescript
import type { IconName, IconVariant } from '@ratoufa/iconsax-vue'

// Autocomplete on icon names!
const icon: IconName = 'home'

// Type-safe variants
const variant: IconVariant = 'bold'
```

## Testing

The package includes comprehensive tests using Vitest:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Test Coverage

- **Component tests**: Verify icons render correctly with all props
- **Dynamic icon tests**: Test the `IsIcon` component
- **Type tests**: Validate TypeScript types
- **Snapshot tests**: Ensure visual consistency
- **Export tests**: Verify all exports are available

## Credits

- Icons by [Iconsax](https://iconsax.io/) / [Vuesax](https://vuesax.com/)
- Inspired by [vue-iconsax](https://github.com/JaxThePrime/vue-iconsax)

## License

MIT
