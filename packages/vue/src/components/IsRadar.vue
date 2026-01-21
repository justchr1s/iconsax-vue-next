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
    content: `<path d="M12.001 14.381a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76zM20 18.75a.75.75 0 01-.6-1.2A9.17 9.17 0 0021.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 011.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3zM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 011.2.9A9.17 9.17 0 002.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 01-.6 1.2zM16.801 16.349a.75.75 0 01-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 011.2-.9 6.73 6.73 0 011.35 4.05c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3zM7.2 16.349c-.23 0-.45-.1-.6-.3a6.709 6.709 0 01-1.35-4.05c0-1.47.47-2.88 1.35-4.05a.75.75 0 011.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 01-.6 1.2z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.32 6.46A9.945 9.945 0 0122 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12M6 4c1.67-1.25 3.75-2 6-2 1.93 0 3.73.54 5.25 1.49"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 14.38a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z"/>
  <path d="M20 18.75a.75.75 0 01-.6-1.2A9.17 9.17 0 0021.25 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 011.2-.9c1.41 1.87 2.15 4.1 2.15 6.45 0 2.35-.74 4.58-2.15 6.45-.15.2-.37.3-.6.3zM4 18.75c-.23 0-.45-.1-.6-.3-1.41-1.87-2.15-4.1-2.15-6.45 0-2.35.74-4.58 2.15-6.45a.75.75 0 011.2.9A9.17 9.17 0 002.75 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 01-.6 1.2zM16.8 16.35a.75.75 0 01-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 011.2-.9A6.73 6.73 0 0118.75 12c0 1.47-.47 2.88-1.35 4.05-.15.2-.37.3-.6.3zM7.2 16.35c-.23 0-.45-.1-.6-.3A6.73 6.73 0 015.25 12c0-1.47.47-2.88 1.35-4.05a.75.75 0 011.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 01-.6 1.2z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-1.88.49-3.73 1.43-5.36.21-.36.66-.48 1.02-.28l8.67 4.98c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28l-8-4.59a9.218 9.218 0 00-.88 3.94c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25S17.1 2.74 12 2.74c-2.02 0-3.94.64-5.55 1.85a.75.75 0 01-.9-1.2c1.87-1.4 4.1-2.15 6.45-2.15 5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12"/>`
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
