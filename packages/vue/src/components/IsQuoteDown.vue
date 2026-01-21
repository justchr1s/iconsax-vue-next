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
    content: `<path d="M15.908 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09zM5.09 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.77 0-3.1 1.33-3.1 3.09v3c0 1.76 1.33 3.09 3.09 3.09z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 47 46',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.63 3.86c0-1.42 1.05-2.58 2.58-2.58h3.21c1.42 0 2.58 1.16 2.58 2.58v5.8"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9.65h-5.8c-.96 0-1.72-.45-2.16-1.14M21 9.65c0 6.05-1.13 7.05-4.53 9.07M9.37 9.65h-5.8C2.04 9.65.99 8.49.99 7.07V3.85c0-1.42 1.05-2.58 2.58-2.58H6.8c1.42 0 2.58 1.16 2.58 2.58v5.8M9.371 9.65c0 6.05-1.13 7.05-4.53 9.07"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.91 12.37h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04V6.28c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09z"/>
  <path d="M5.09 12.37h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04V6.28c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8zM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22.001 12.4h-5.8c-1.9 0-3.33-1.43-3.33-3.33V5.85c0-1.9 1.43-3.33 3.33-3.33h3.22c1.83 0 3.33 1.49 3.33 3.33v5.8c0 .42-.34.75-.75.75zm-5.8-8.37c-1.06 0-1.83.77-1.83 1.83v3.22c0 1.06.77 1.83 1.83 1.83h5.05V5.86c0-1.01-.82-1.83-1.83-1.83h-3.22z"/>
  <path d="M17.47 21.47c-.26 0-.51-.13-.65-.37a.758.758 0 01.26-1.03c3.23-1.92 4.17-2.72 4.17-8.42 0-.41.34-.75.75-.75s.75.34.75.75c0 6.25-1.27 7.56-4.9 9.71a.67.67 0 01-.38.11zM10.37 12.4h-5.8c-1.9 0-3.33-1.43-3.33-3.33V5.85c0-1.9 1.43-3.33 3.33-3.33H7.8c1.83 0 3.33 1.49 3.33 3.33v5.8c-.01.42-.34.75-.76.75zM4.58 4.03c-1.06 0-1.83.77-1.83 1.83v3.22c0 1.06.77 1.83 1.83 1.83h5.05V5.86c0-1.01-.82-1.83-1.83-1.83H4.58z"/>
  <path d="M5.84 21.47c-.26 0-.51-.13-.65-.37a.758.758 0 01.26-1.03c3.23-1.92 4.17-2.72 4.17-8.42 0-.41.34-.75.75-.75s.75.34.75.75c0 6.25-1.27 7.56-4.9 9.71a.67.67 0 01-.38.11z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8zM21.999 11.65c0 6.05-1.13 7.05-4.53 9.07"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07"/>
  </g>`,
    isStroke: true
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
    :fill="currentVariant?.isStroke ? 'none' : 'currentColor'"
    :stroke="currentVariant?.isStroke ? 'currentColor' : 'none'"
    :style="{ color }"
    v-html="currentVariant?.content"
  />
</template>
