# @ratoufa/iconsax-iconify

[Iconsax](https://iconsax.io) icons in [Iconify](https://iconify.design) JSON format, compatible with Nuxt Icon and UnoCSS.

## Installation

```bash
pnpm add -D @ratoufa/iconsax-iconify
# or
npm install -D @ratoufa/iconsax-iconify
```

## Usage with Nuxt Icon

```vue
<template>
  <Icon name="iconsax:home-bold" />
  <Icon name="iconsax:setting-linear" />
  <Icon name="iconsax:user-outline" />
</template>
```

## Usage with UnoCSS

```ts
// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import { icons as iconsaxIcons } from '@ratoufa/iconsax-iconify'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        iconsax: () => iconsaxIcons,
      },
    }),
  ],
})
```

```html
<div class="i-iconsax:home-bold" />
```

## Naming convention

Icons follow the pattern `{name}-{variant}`:

- `home-bold`
- `setting-linear`
- `user-outline`
- `arrow-right-twotone`

Available variants: `bold`, `broken`, `bulk`, `linear`, `outline`, `twotone`.

## License

MIT
