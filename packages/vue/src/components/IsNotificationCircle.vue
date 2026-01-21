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
  bold: null,
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.02 16.4A9.976 9.976 0 0012 22c5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-1.99M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 8a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.91.27-1.75.74-2.45A9.971 9.971 0 0012 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10c0-1.13-.2-2.22-.55-3.24-.7.47-1.54.74-2.45.74z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 8a3 3 0 100-6 3 3 0 000 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.68-.07-1.35-.2-1.99"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75z"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.58.89-.08.41-.48.67-.88.58A8.99 8.99 0 0012 2.75C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25c0-.62-.06-1.24-.18-1.84-.08-.41.18-.8.59-.88.41-.09.8.18.88.59.14.7.21 1.42.21 2.14 0 5.92-4.82 10.74-10.75 10.74z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 8a3 3 0 100-6 3 3 0 000 6z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.02 2.2C13.36 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.68-.07-1.35-.2-1.99"/>`
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
