<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from '../types'

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  variant: 'linear'
})

const svgSize = computed(() => 
  typeof props.size === 'number' ? `${props.size}px` : props.size
)

const svgData = {
  bold: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75z"/>
  <path d="M17.59 17.999H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33zM12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4h1.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.78 15.67c.93 1.28.39 2.33-1.19 2.33H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57L16.17 12M12 22v-4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75z" opacity=".4"/>
  <path d="M17.59 18H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33zM12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4h1.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33zM12 22v-4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.17 10.81H7.83c-.86 0-1.52-.34-1.82-.92-.3-.59-.18-1.32.32-2.01l4.17-5.84a1.827 1.827 0 013.02.01l4.17 5.83c.5.69.62 1.42.32 2.01-.32.58-.98.92-1.84.92zM12 2.7c-.09 0-.19.08-.28.2L7.55 8.75c-.2.27-.21.43-.2.46.01.02.15.1.49.1h8.34c.33 0 .47-.09.49-.11 0-.02-.01-.18-.2-.45L12.3 2.91c-.11-.14-.21-.21-.3-.21z"/>
  <path d="M17.59 18.75H6.42c-1.43 0-2-.69-2.21-1.1-.21-.41-.43-1.27.41-2.43l3.99-5.6c.14-.2.37-.31.61-.31h5.57c.24 0 .47.12.61.31l3.99 5.61c.84 1.15.61 2.01.4 2.42-.21.41-.77 1.1-2.2 1.1zM9.6 10.81L5.83 16.1c-.32.44-.35.74-.29.87.07.13.33.28.87.28h11.17c.54 0 .81-.15.87-.28.07-.13.03-.43-.29-.87l-3.77-5.3H9.6v.01z"/>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.79 0l4.17 5.84c.7.96.29 1.75-.89 1.75z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.59 18H6.42c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.57l3.99 5.61c.93 1.28.39 2.33-1.19 2.33z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-4" opacity=".4"/>`
  }
}

const currentVariant = computed(() => svgData[props.variant] || svgData.linear)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="currentVariant?.viewBox"
    :width="svgSize"
    :height="svgSize"
    :fill="variant === 'bold' || variant === 'bulk' ? color : 'none'"
    :stroke="variant === 'linear' || variant === 'outline' || variant === 'broken' || variant === 'twotone' ? color : undefined"
    v-html="currentVariant?.content"
  />
</template>
