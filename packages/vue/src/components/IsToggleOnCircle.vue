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
    content: `<path d="M13.86 3.86h-3.72C5.65 3.86 2 7.51 2 12s3.65 8.14 8.14 8.14h3.72c4.49 0 8.14-3.65 8.14-8.14s-3.65-8.14-8.14-8.14zm0 12.56c-2.44 0-4.42-1.98-4.42-4.42s1.98-4.42 4.42-4.42 4.42 1.98 4.42 4.42-1.98 4.42-4.42 4.42z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 20c4.42 0 8-3.58 8-8s-3.58-8-8-8h-4c-4.42 0-8 3.58-8 8 0 4.08 3.05 7.44 6.99 7.94"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.48-.09-.95-.24-1.38"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.14 3.86h3.72C18.35 3.86 22 7.51 22 12s-3.65 8.14-8.14 8.14h-3.72C5.65 20.14 2 16.49 2 12s3.65-8.14 8.14-8.14z" opacity=".4"/>
  <path d="M13.86 16.42a4.42 4.42 0 100-8.84 4.42 4.42 0 000 8.84z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4h4c4.42 0 8 3.58 8 8s-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8s3.58-8 8-8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 16a4 4 0 100-8 4 4 0 000 8z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14 20.75h-4c-4.83 0-8.75-3.93-8.75-8.75S5.17 3.25 10 3.25h4c4.83 0 8.75 3.93 8.75 8.75s-3.92 8.75-8.75 8.75zm-4-16C6 4.75 2.75 8 2.75 12S6 19.25 10 19.25h4c4 0 7.25-3.25 7.25-7.25S18 4.75 14 4.75h-4z"/>
  <path d="M14 16.75c-2.62 0-4.75-2.13-4.75-4.75S11.38 7.25 14 7.25s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S15.79 8.75 14 8.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4h4c4.42 0 8 3.58 8 8s-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8s3.58-8 8-8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 16a4 4 0 100-8 4 4 0 000 8z" opacity=".4"/>`
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
