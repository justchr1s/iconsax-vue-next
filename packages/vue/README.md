# @ratoufa/iconsax-vue

> 940+ beautiful Iconsax icons for Vue 3 with full TypeScript support

[![npm version](https://img.shields.io/npm/v/@ratoufa/iconsax-vue.svg)](https://www.npmjs.com/package/@ratoufa/iconsax-vue)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@ratoufa/iconsax-vue)](https://bundlephobia.com/package/@ratoufa/iconsax-vue)
[![tests](https://img.shields.io/badge/tests-vitest-green.svg)](https://vitest.dev/)

## Features

- 🎨 **940+ Icons** - All Iconsax icons in 6 different styles
- 🔷 **TypeScript** - Full type safety with autocompletion
- 🌳 **Tree-shakable** - Only import what you use
- ⚡ **Dynamic Import** - Load icons dynamically by name
- 🎯 **Vue 3** - Built for Composition API
- 📦 **Lightweight** - Minimal bundle impact

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

### Static Import (Tree-shakable)

Import only the icons you need for optimal bundle size:

```vue
<script setup lang="ts">
import { IsHome, IsSetting, IsUser } from '@ratoufa/iconsax-vue'
</script>

<template>
  <IsHome />
  <IsSetting variant="bold" size="32" color="#6366f1" />
  <IsUser variant="twotone" />
</template>
```

### Dynamic Import

Use the `IsIcon` component when you need to load icons dynamically:

```vue
<script setup lang="ts">
import { IsIcon } from '@ratoufa/iconsax-vue'
import type { IconName } from '@ratoufa/iconsax-vue'

const menuItems: { icon: IconName; label: string }[] = [
  { icon: 'home', label: 'Home' },
  { icon: 'setting', label: 'Settings' },
  { icon: 'user', label: 'Profile' },
]
</script>

<template>
  <div v-for="item in menuItems" :key="item.icon">
    <IsIcon :name="item.icon" variant="linear" />
    <span>{{ item.label }}</span>
  </div>
</template>
```

## Props

### Icon Components (`IsHome`, `IsSetting`, etc.)

| Prop      | Type               | Default          | Description                      |
| --------- | ------------------ | ---------------- | -------------------------------- |
| `size`    | `number \| string` | `24`             | Icon size in pixels or CSS value |
| `color`   | `string`           | `'currentColor'` | Icon color                       |
| `variant` | `IconVariant`      | `'linear'`       | Icon style variant               |

### Dynamic Component (`IsIcon`)

| Prop      | Type               | Default          | Description                     |
| --------- | ------------------ | ---------------- | ------------------------------- |
| `name`    | `IconName`         | required         | Icon name (with autocompletion) |
| `size`    | `number \| string` | `24`             | Icon size                       |
| `color`   | `string`           | `'currentColor'` | Icon color                      |
| `variant` | `IconVariant`      | `'linear'`       | Icon style variant              |

## Variants

Each icon is available in 6 different styles:

| Variant   | Description                   |
| --------- | ----------------------------- |
| `linear`  | Clean outline style (default) |
| `bold`    | Filled solid style            |
| `outline` | Detailed outline              |
| `bulk`    | Two-tone with opacity         |
| `broken`  | Broken/dashed lines           |
| `twotone` | Two-color style               |

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

## TypeScript

Full TypeScript support with autocompletion:

```typescript
import type { IconName, IconVariant, IconProps } from '@ratoufa/iconsax-vue'

// IconName is a union of all available icon names
const icon: IconName = 'home' // ✅ Autocomplete works!
const icon2: IconName = 'invalid' // ❌ TypeScript error

// IconVariant is a union of all variants
const variant: IconVariant = 'bold'
```

## License

MIT © Your Name
