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
    content: `<path d="M17 4.96v7.12c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2h4c1.98 0 2.98.99 3 2.96z"/>
  <path d="M22 11.9v3.03c0 5.05-2 7.07-7 7.07H9c-5 0-7-2.02-7-7.07V11.9c0-2.69.57-4.52 1.85-5.64.65-.55 1.65-.07 1.65.78v5.04c0 1.49.61 2.69 1.67 3.29 1.07.61 2.43.5 3.75-.29l1.08-.65 1.09.65c.74.45 1.51.68 2.23.68.54 0 1.05-.13 1.51-.39 1.06-.6 1.67-1.8 1.67-3.29V7.03c0-.85 1.01-1.33 1.65-.77C21.43 7.38 22 9.21 22 11.9z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2c2 0 3 1.01 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2h4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14.93C2 19.98 4 22 9 22h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94M6.82 4.99C3.98 5.46 2.53 7 2.12 9.94"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 4.96v7.12c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V4.99C7.01 3 8.01 2 10 2h4c1.98 0 2.98.99 3 2.96z"/>
  <path d="M22 11.9v3.03c0 5.05-2 7.07-7 7.07H9c-5 0-7-2.02-7-7.07V11.9c0-4.24 1.41-6.34 4.82-6.91H7v7.09c0 1.99 1.41 2.76 3.14 1.72l1.32-.8c.3-.18.78-.18 1.08 0l1.32.8c1.73 1.04 3.14.27 3.14-1.72V4.96c3.54.52 5 2.63 5 6.94z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2c2 0 3 1.01 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2h4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.82 4.99C3.41 5.56 2 7.66 2 11.9v3.03C2 19.98 4 22 9 22h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.31 15.02c-.58 0-1.21-.19-1.84-.58l-1.32-.8c-.06-.04-.24-.04-.3 0l-1.32.8c-1.08.66-2.14.76-2.99.28-.83-.47-1.29-1.41-1.29-2.64V5.03c0-2.44 1.33-3.78 3.75-3.78h4c2.42 0 3.75 1.34 3.75 3.78v7.05c0 1.24-.46 2.18-1.29 2.64-.35.2-.74.3-1.15.3zM12 12.11c.33 0 .66.08.93.24l1.32.8c.59.36 1.13.45 1.47.26.33-.19.52-.68.52-1.34V5.03c0-1.6-.67-2.28-2.25-2.28h-4c-1.58 0-2.25.68-2.25 2.28v7.05c0 .66.19 1.15.52 1.34.34.19.88.1 1.47-.26l1.32-.8c.29-.17.62-.25.95-.25z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.34-7.75-7.82V11.9c0-4.66 1.68-7.02 5.44-7.65.4-.07.79.21.86.62.07.41-.21.79-.62.86-3.01.5-4.19 2.23-4.19 6.17v3.03c0 4.61 1.69 6.32 6.25 6.32h6c4.56 0 6.25-1.71 6.25-6.32V11.9c0-4-1.22-5.73-4.36-6.2a.747.747 0 01-.63-.85c.06-.41.44-.69.85-.63 3.9.58 5.64 2.94 5.64 7.68v3.03c.01 5.48-2.31 7.82-7.74 7.82z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2c2 0 3 1.01 3 3.03v7.05c0 1.99-1.41 2.76-3.14 1.72l-1.32-.8c-.3-.18-.78-.18-1.08 0l-1.32.8C8.41 14.84 7 14.07 7 12.08V5.03C7 3.01 8 2 10 2h4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.82 4.99C3.41 5.56 2 7.66 2 11.9v3.03C2 19.98 4 22 9 22h6c5 0 7-2.02 7-7.07V11.9c0-4.31-1.46-6.42-5-6.94" opacity=".4"/>`,
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
