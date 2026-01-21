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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.18 12.63l-2.22 2.22c-.54.54-1.24.8-1.94.8s-1.41-.27-1.94-.8a2.758 2.758 0 010-3.89l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.25 1.25 0 000 1.77c.49.49 1.28.49 1.77 0l2.22-2.22c.61-.61.95-1.43.95-2.3 0-.87-.34-1.68-.95-2.3-1.23-1.23-3.37-1.23-4.6 0L8.29 11.4a2.692 2.692 0 000 3.79c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a4.183 4.183 0 010-5.91l2.42-2.42c.9-.9 2.09-1.39 3.36-1.39s2.46.49 3.36 1.39c.9.9 1.39 2.09 1.39 3.36s-.49 2.46-1.39 3.35z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.76 8.81l-1.21 1.21c-2.34 2.34-2.34 6.14 0 8.49M12.33 12.15l-2.47 2.47a3.495 3.495 0 000 4.95 3.495 3.495 0 004.95 0l3.89-3.89a7.007 7.007 0 000-9.9 7.007 7.007 0 00-9.9 0"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M12.2 17.66c-.7 0-1.41-.27-1.94-.8a2.758 2.758 0 010-3.89l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.25 1.25 0 000 1.77c.49.49 1.28.49 1.77 0l2.22-2.22c.61-.61.95-1.43.95-2.3 0-.87-.34-1.68-.95-2.3-1.23-1.23-3.37-1.23-4.6 0L8.29 11.4a2.692 2.692 0 000 3.79c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a4.183 4.183 0 010-5.91l2.42-2.42c.9-.9 2.09-1.39 3.36-1.39s2.46.49 3.36 1.39c.9.9 1.39 2.09 1.39 3.36s-.49 2.46-1.39 3.36l-2.22 2.22c-.54.53-1.24.8-1.95.8z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.33 12.15l-2.47 2.47a3.495 3.495 0 000 4.95 3.495 3.495 0 004.95 0l3.89-3.89a7.007 7.007 0 000-9.9 7.007 7.007 0 00-9.9 0l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.33 21.34c-1.09 0-2.18-.41-3.01-1.24a4.249 4.249 0 010-6.01l2.48-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.48 2.47a2.758 2.758 0 000 3.89 2.758 2.758 0 003.89 0l3.89-3.89a6.21 6.21 0 001.83-4.42c0-1.67-.65-3.24-1.83-4.42a6.253 6.253 0 00-8.84 0l-4.24 4.24a5.22 5.22 0 00-1.54 3.71c0 1.4.55 2.72 1.54 3.71.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a6.736 6.736 0 01-1.98-4.77c0-1.8.7-3.5 1.98-4.77l4.24-4.24c3.02-3.02 7.94-3.02 10.96 0a7.709 7.709 0 012.27 5.48c0 2.07-.81 4.02-2.27 5.48l-3.89 3.89c-.83.83-1.91 1.24-3 1.24z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.33 12.15l-2.47 2.47a3.495 3.495 0 000 4.95 3.495 3.495 0 004.95 0l3.89-3.89a7.007 7.007 0 000-9.9 7.007 7.007 0 00-9.9 0l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49"/>`,
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
