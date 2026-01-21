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
    content: `<path d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2zm-1.81 7.75c-.97.35-1.99.53-3.01.53-1.02 0-2.04-.18-3.01-.53a.75.75 0 01-.45-.96c.15-.39.58-.59.97-.45 1.61.58 3.38.58 4.99 0a.75.75 0 11.51 1.41z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 9.05a8 8 0 005.5 0M3.32 10v9.95c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86c0-2.12-1.74-3.86-3.86-3.86H7.18C5.05 2 3.32 3.74 3.32 5.86"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2z" opacity=".4"/>
  <path d="M12 10.28c-1.02 0-2.04-.18-3.01-.53a.75.75 0 01-.45-.96c.15-.39.58-.59.97-.45 1.61.58 3.38.58 4.99 0a.75.75 0 11.51 1.41c-.97.35-1.99.53-3.01.53z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-8.78M5 2h14c2 0 3 1 3 3v2c0 2-1 3-3 3H5c-2 0-3-1-3-3V5c0-2 1-3 3-3zM10.18 14h3.64"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 10.28c-1.02 0-2.04-.18-3.01-.53a.75.75 0 01-.45-.96c.15-.39.58-.59.97-.45 1.61.58 3.38.58 4.99 0a.75.75 0 11.51 1.41c-.97.35-1.99.53-3.01.53z"/>
  <path d="M19.07 22.75c-.51 0-1.07-.15-1.61-.46l-4.88-2.71c-.29-.16-.86-.16-1.15 0l-4.88 2.71c-.99.55-2 .61-2.77.15-.77-.45-1.21-1.36-1.21-2.49V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c2.54 0 4.61 2.07 4.61 4.61v14.09c0 1.13-.44 2.04-1.21 2.49-.35.21-.75.31-1.16.31zM12 17.96c.47 0 .93.1 1.3.31l4.88 2.71c.51.29.98.35 1.28.17.3-.18.47-.61.47-1.2V5.86c0-1.71-1.4-3.11-3.11-3.11H7.18a3.12 3.12 0 00-3.11 3.11v14.09c0 .59.17 1.03.47 1.2.3.17.76.12 1.28-.17l4.88-2.71c.37-.21.83-.31 1.3-.31z"/>
  <path d="M19.07 22.75c-.51 0-1.07-.15-1.61-.46l-4.88-2.71c-.29-.16-.86-.16-1.15 0l-4.88 2.71c-.99.55-2 .61-2.77.15-.77-.45-1.21-1.36-1.21-2.49V5.86c0-2.54 2.07-4.61 4.61-4.61h9.65c2.54 0 4.61 2.07 4.61 4.61v14.09c0 1.13-.44 2.04-1.21 2.49-.35.21-.75.31-1.16.31zM12 17.96c.47 0 .93.1 1.3.31l4.88 2.71c.51.29.98.35 1.28.17.3-.18.47-.61.47-1.2V5.86c0-1.71-1.4-3.11-3.11-3.11H7.18a3.12 3.12 0 00-3.11 3.11v14.09c0 .59.17 1.03.47 1.2.3.17.76.12 1.28-.17l4.88-2.71c.37-.21.83-.31 1.3-.31z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-8.78M5 2h14c2 0 3 1 3 3v2c0 2-1 3-3 3H5c-2 0-3-1-3-3V5c0-2 1-3 3-3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.18 14h3.64" opacity=".34"/>`,
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
