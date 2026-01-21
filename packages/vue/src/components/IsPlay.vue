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
    content: `<path d="M17.49 9.6L5.6 16.77c-.7.42-1.6-.08-1.6-.9v-8c0-3.49 3.77-5.67 6.8-3.93l4.59 2.64 2.09 1.2c.69.41.7 1.41.01 1.82zM18.089 15.46l-4.05 2.34-4.04 2.33c-1.45.83-3.09.66-4.28-.18-.58-.4-.51-1.29.1-1.65l12.71-7.62c.6-.36 1.39-.02 1.5.67.25 1.55-.39 3.22-1.94 4.11z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.13 7.98c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V8.44c0-4.42 3.13-6.23 6.96-4.02l2.25 1.3"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.7 8.98L4.14 17.71c-.09-.33-.14-.68-.14-1.04V7.33c0-3.08 3.33-5 6-3.46l4.04 2.33 4.05 2.34c.22.13.43.27.61.44z"/>
  <path d="M18.09 15.46l-4.05 2.34L10 20.13c-1.91 1.1-4.16.44-5.28-1.17l.42-.25 14.44-8.66c1 1.8.51 4.26-1.49 5.41z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.87 21.28c-.79 0-1.54-.19-2.2-.57-1.56-.9-2.42-2.73-2.42-5.14V8.44c0-2.42.86-4.24 2.42-5.14 1.56-.9 3.57-.73 5.67.48l6.17 3.56c2.09 1.21 3.25 2.87 3.25 4.67 0 1.8-1.15 3.46-3.25 4.67l-6.17 3.56c-1.21.69-2.39 1.04-3.47 1.04zm0-17.06c-.54 0-1.02.12-1.45.37-1.08.62-1.67 1.99-1.67 3.85v7.12c0 1.86.59 3.22 1.67 3.85 1.08.63 2.56.45 4.17-.48l6.17-3.56c1.61-.93 2.5-2.12 2.5-3.37s-.89-2.44-2.5-3.37l-6.17-3.56c-.98-.56-1.9-.85-2.72-.85z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12z"/>`,
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
