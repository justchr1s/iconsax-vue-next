# Iconsax Vue

Iconsax icon library for Vue 3 & Nuxt 3 with full TypeScript support.

**942 icons** available in **6 styles**: bold, broken, bulk, linear, outline, twotone.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Static Import](#static-import)
  - [Dynamic Import](#dynamic-import)
- [API Reference](#api-reference)
  - [Props](#props)
  - [Variants](#variants)
  - [TypeScript Types](#typescript-types)
  - [Exports](#exports)
- [Nuxt 3](#nuxt-3)
- [Iconify Format](#iconify-format)
- [Examples](#examples)
- [Development](#development)
- [License](#license)

## Installation

```bash
# npm
npm install @ratoufa/iconsax-vue

# pnpm
pnpm add @ratoufa/iconsax-vue

# yarn
yarn add @ratoufa/iconsax-vue
```

## Usage

### Static Import

Static imports are **tree-shakable** - only the icons you use are included in your bundle.

```vue
<script setup lang="ts">
import { IsHome, IsSetting, IsUser, IsHeart } from '@ratoufa/iconsax-vue'
</script>

<template>
  <IsHome />
  <IsSetting variant="bold" />
  <IsUser variant="twotone" :size="32" />
  <IsHeart variant="bulk" color="#ef4444" />
</template>
```

Each icon is exported as `Is{PascalCaseName}`. For example:

- `home` → `IsHome`
- `arrow-left` → `IsArrowLeft`
- `search-normal` → `IsSearchNormal`

### Dynamic Import

Use the `IsIcon` component to load icons by name at runtime. This is useful when the icon name comes from a variable or API.

```vue
<script setup lang="ts">
import { IsIcon } from '@ratoufa/iconsax-vue'
import type { IconName } from '@ratoufa/iconsax-vue'

const currentIcon = ref<IconName>('home')
</script>

<template>
  <IsIcon :name="currentIcon" variant="linear" :size="24" />
</template>
```

> **Note**: Dynamic imports include all icons in your bundle. Use static imports when possible for smaller bundle sizes.

## API Reference

### Props

All icon components accept the following props:

| Prop      | Type               | Default          | Description                      |
| --------- | ------------------ | ---------------- | -------------------------------- |
| `variant` | `IconVariant`      | `'linear'`       | The icon style variant           |
| `size`    | `number \| string` | `24`             | Icon size in pixels              |
| `color`   | `string`           | `'currentColor'` | Icon color (any valid CSS color) |

The `IsIcon` component also accepts:

| Prop   | Type       | Required | Description                                    |
| ------ | ---------- | -------- | ---------------------------------------------- |
| `name` | `IconName` | Yes      | The icon name (e.g., `'home'`, `'arrow-left'`) |

### Variants

Each icon is available in 6 different styles:

| Variant   | Description                         | Example                      |
| --------- | ----------------------------------- | ---------------------------- |
| `linear`  | Clean single-line outline (default) | Minimal, modern look         |
| `bold`    | Solid filled shape                  | High visual weight           |
| `outline` | Detailed outline with inner lines   | More detailed than linear    |
| `bulk`    | Two-tone with fill and opacity      | Depth and dimension          |
| `broken`  | Dashed/broken line style            | Unique, stylized look        |
| `twotone` | Two distinct colors                 | Primary and secondary colors |

```vue
<template>
  <IsHome variant="linear" />
  <IsHome variant="bold" />
  <IsHome variant="outline" />
  <IsHome variant="bulk" />
  <IsHome variant="broken" />
  <IsHome variant="twotone" />
</template>
```

### TypeScript Types

The package exports TypeScript types for full type safety:

```typescript
import type { IconName, IconVariant } from '@ratoufa/iconsax-vue'

// IconName is a union of all 942 icon names
const icon: IconName = 'home' // ✓ Valid
const icon: IconName = 'invalid-icon' // ✗ Type error

// IconVariant is the union of all 6 variants
const variant: IconVariant = 'bold' // ✓ Valid
const variant: IconVariant = 'invalid' // ✗ Type error
```

### Exports

The package provides several exports for different use cases:

```typescript
import {
  // Static icon components (tree-shakable)
  IsHome,
  IsSetting,
  IsUser,
  // ... 939 more icons

  // Dynamic icon component
  IsIcon,

  // Lists for iteration
  iconNames, // string[] - All 942 icon names
  iconVariants, // string[] - ['bold', 'broken', 'bulk', 'linear', 'outline', 'twotone']

  // Types
  type IconName,
  type IconVariant,
} from '@ratoufa/iconsax-vue'
```

## Nuxt 3

For Nuxt 3 projects, use the dedicated module for auto-imports:

```bash
pnpm add @ratoufa/iconsax-nuxt
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@ratoufa/iconsax-nuxt'],
  iconsax: {
    // Options (all optional)
    prefix: 'Is', // Component prefix (default: 'Is')
    global: false, // Register all icons globally (default: false)
  },
})
```

Then use icons directly in your templates without imports:

```vue
<template>
  <!-- Auto-imported, no script needed -->
  <IsIcon name="home" variant="bold" />
  <IsHome variant="linear" />
</template>
```

## Iconify Format

For use with [Nuxt Icon](https://github.com/nuxt-modules/icon), [UnoCSS Icons](https://unocss.dev/presets/icons), or other Iconify-compatible tools:

```bash
pnpm add @iconify-json/iconsax
```

```vue
<template>
  <!-- Nuxt Icon -->
  <Icon name="iconsax:home-bold" />
  <Icon name="iconsax:setting-linear" />
  <Icon name="iconsax:user-twotone" />
</template>
```

Icon names follow the format: `iconsax:{name}-{variant}`

## Examples

### Basic Usage

```vue
<script setup lang="ts">
import { IsHome, IsNotification, IsMessage } from '@ratoufa/iconsax-vue'
</script>

<template>
  <nav>
    <IsHome :size="20" />
    <IsNotification :size="20" />
    <IsMessage :size="20" />
  </nav>
</template>
```

### With Reactive Props

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { IsHeart } from '@ratoufa/iconsax-vue'
import type { IconVariant } from '@ratoufa/iconsax-vue'

const liked = ref(false)
const variant = computed<IconVariant>(() => (liked.value ? 'bold' : 'linear'))
const color = computed(() => (liked.value ? '#ef4444' : 'currentColor'))
</script>

<template>
  <button @click="liked = !liked">
    <IsHeart :variant="variant" :color="color" />
  </button>
</template>
```

### Dynamic Icon Menu

```vue
<script setup lang="ts">
import { IsIcon } from '@ratoufa/iconsax-vue'
import type { IconName } from '@ratoufa/iconsax-vue'

interface MenuItem {
  icon: IconName
  label: string
  href: string
}

const menu: MenuItem[] = [
  { icon: 'home', label: 'Home', href: '/' },
  { icon: 'user', label: 'Profile', href: '/profile' },
  { icon: 'setting', label: 'Settings', href: '/settings' },
  { icon: 'logout', label: 'Logout', href: '/logout' },
]
</script>

<template>
  <nav>
    <a v-for="item in menu" :key="item.href" :href="item.href">
      <IsIcon :name="item.icon" :size="18" />
      {{ item.label }}
    </a>
  </nav>
</template>
```

### Listing All Icons

```vue
<script setup lang="ts">
import { IsIcon, iconNames, iconVariants } from '@ratoufa/iconsax-vue'
import type { IconVariant } from '@ratoufa/iconsax-vue'

const selectedVariant = ref<IconVariant>('linear')
</script>

<template>
  <div>
    <select v-model="selectedVariant">
      <option v-for="v in iconVariants" :key="v" :value="v">{{ v }}</option>
    </select>

    <div class="icon-grid">
      <div v-for="name in iconNames" :key="name">
        <IsIcon :name="name" :variant="selectedVariant" :size="24" />
        <span>{{ name }}</span>
      </div>
    </div>
  </div>
</template>
```

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/ratoufa/iconsax-vue.git
cd iconsax-vue

# Install dependencies
pnpm install

# Fetch icons from source
pnpm fetch:icons

# Generate Vue components from SVGs
pnpm generate

# Generate Iconify JSON
pnpm generate:iconify

# Build all packages
pnpm build

# Run the playground
pnpm --filter iconsax-playground dev
```

### Project Structure

```
iconsax-vue/
├── packages/
│   ├── vue/              # @ratoufa/iconsax-vue - Vue 3 components
│   ├── nuxt/             # @ratoufa/iconsax-nuxt - Nuxt 3 module
│   └── iconify/          # @iconify-json/iconsax - Iconify format
├── playground/           # Development playground
├── scripts/
│   ├── fetch-icons.ts    # Download SVGs from source
│   ├── generate.ts       # Generate Vue components
│   └── generate-iconify.ts
└── icons/                # SVG source files
    ├── bold/
    ├── broken/
    ├── bulk/
    ├── linear/
    ├── outline/
    └── twotone/
```

## Credits

Icons designed by [Iconsax](https://iconsax.io/) / [Vuesax](https://vuesax.com/)

## License

MIT
