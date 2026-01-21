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
    content: `<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.5 14.13c-1.45 0-2.62-1.18-2.62-2.62 0-3.1 2.52-5.62 5.62-5.62 1.45 0 2.62 1.18 2.62 2.62 0 3.09-2.52 5.62-5.62 5.62z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.09-4.85-4.1-4.1l-4.79 1.2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M14.325 14.326c1.882-1.882 2.366-4.45 1.082-5.734-1.285-1.285-3.853-.8-5.735 1.082-1.882 1.882-2.367 4.45-1.082 5.734 1.285 1.285 3.852.8 5.735-1.082z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.8 2.1L7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.1-4.85-4.1-4.1z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M4.91 22.82c-1.09 0-2.02-.35-2.7-1.03-.97-.97-1.27-2.45-.84-4.17l2.48-9.93c.43-1.72 2.11-3.39 3.82-3.82l9.93-2.48c1.72-.43 3.2-.13 4.17.84.97.97 1.27 2.45.84 4.17l-2.48 9.93c-.43 1.72-2.11 3.39-3.82 3.82l-9.93 2.48c-.51.12-1 .19-1.47.19zM17.98 2.83L8.05 5.32c-1.17.29-2.44 1.56-2.74 2.73l-2.48 9.93c-.3 1.19-.14 2.16.44 2.75.58.58 1.56.74 2.75.44l9.93-2.48c1.17-.29 2.44-1.57 2.73-2.73l2.48-9.93c.3-1.19.14-2.16-.44-2.75-.58-.59-1.55-.74-2.74-.45z"/>
  <path d="M12 16.25A4.26 4.26 0 017.75 12 4.26 4.26 0 0112 7.75 4.26 4.26 0 0116.25 12 4.26 4.26 0 0112 16.25zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75S13.52 9.25 12 9.25z"/>`
  },
  twotone: null
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
