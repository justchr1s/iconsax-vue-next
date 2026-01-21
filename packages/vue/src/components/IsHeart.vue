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
    content: `<path d="M16.44 3.1c-1.8 0-3.46.88-4.44 2.34A5.09 5.09 0 0 0 7.56 3.1C4.49 3.1 2 5.65 2 8.85c0 1.04.16 2.01.46 2.89 1.37 4.06 5.73 6.63 8.59 8.01.63.3 1.27.3 1.9 0 2.86-1.38 7.22-3.95 8.59-8.01.3-.88.46-1.85.46-2.89 0-3.2-2.49-5.75-5.56-5.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-dasharray="5 3" d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69"/><path d="M2 8.69C2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path opacity=".4" d="M16.44 3.1c-1.8 0-3.46.88-4.44 2.34A5.09 5.09 0 0 0 7.56 3.1C4.49 3.1 2 5.65 2 8.85c0 1.04.16 2.01.46 2.89 1.37 4.06 5.73 6.63 8.59 8.01.63.3 1.27.3 1.9 0 2.86-1.38 7.22-3.95 8.59-8.01.3-.88.46-1.85.46-2.89 0-3.2-2.49-5.75-5.56-5.75z" fill="currentColor"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12z"/>`
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
