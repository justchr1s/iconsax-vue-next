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
    content: `<path d="M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  <path d="M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  <path d="M20.72 9.31c-.7.22-1.47.26-2.27.06a3.977 3.977 0 01-2.8-2.76c-.18-.65-.19-1.29-.08-1.87.13-.64-.32-1.24-.96-1.24H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-5.24c0-.66-.64-1.16-1.28-.95zm-5.2 1.84l-1.18.94c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 01-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5c0-3.5 2-5 5-5h7M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-2.52"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 9l3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  <path d="M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  <path d="M20.72 9.31c.63-.2 1.28.29 1.28.96v5.24c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7.61c.65 0 1.09.6.97 1.23-.12.59-.1 1.22.08 1.87a3.977 3.977 0 002.8 2.76c.79.2 1.56.16 2.26-.06z" opacity=".4"/>
  <path d="M12 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 01.93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-1.18.94c-.64.53-1.49.79-2.33.79z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 9l3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h7c.41 0 .75.34.75.75s-.34.75-.75.75H7c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 3.65-2.1 5.75-5.75 5.75z"/>
  <path d="M11.999 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 01.93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-1.18.94c-.64.53-1.49.79-2.33.79zM19.5 8.75c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 9l3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" opacity=".4"/>`
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
