# @ratoufa/iconsax-nuxt

Nuxt 3 module for [Iconsax](https://iconsax.io) icons with auto-imports.

## Installation

```bash
pnpm add @ratoufa/iconsax-nuxt
# or
npm install @ratoufa/iconsax-nuxt
```

## Setup

Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['@ratoufa/iconsax-nuxt'],
})
```

## Usage

The `IsIcon` dynamic component is auto-imported:

```vue
<template>
  <IsIcon name="home" variant="bold" size="24" color="red" />
</template>
```

## Options

```ts
export default defineNuxtConfig({
  modules: ['@ratoufa/iconsax-nuxt'],
  iconsax: {
    // Register all icons globally (increases bundle size)
    global: false,
    // Component prefix (default: 'Is')
    prefix: 'Is',
  },
})
```

### Global registration

With `global: true`, all icon components are auto-imported:

```vue
<template>
  <!-- No import needed -->
  <IsHome variant="bold" />
  <IsUser variant="twotone" size="32" />
</template>
```

## License

MIT
