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
    content: `<path d="M2.71 17.02l1.74-3.48c.48-.97.48-2.1 0-3.07L2.71 6.98C1.22 4 4.43.85 7.38 2.41l1.54.82c.22.11.39.29.48.51l5.69 12.65c.23.52.02 1.13-.48 1.39l-7.24 3.81C4.43 23.15 1.22 20 2.71 17.02zM16.31 15.6l-3.73-8.28c-.42-.93.58-1.87 1.48-1.39l5.77 3.04c2.45 1.29 2.45 4.79 0 6.08l-2.04 1.07c-.55.28-1.22.05-1.48-.52z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66L12.32 5.5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M2.71 17.02l1.74-3.48c.48-.97.48-2.1 0-3.07L2.71 6.98C1.22 4 4.43.85 7.38 2.41l1.54.82c.22.11.39.29.48.51l5.69 12.65c.23.52.02 1.13-.48 1.39l-7.24 3.81C4.43 23.15 1.22 20 2.71 17.02z"/>
  <path d="M16.31 15.6l-3.73-8.28c-.42-.93.58-1.87 1.48-1.39l5.77 3.04c2.45 1.29 2.45 4.79 0 6.08l-2.04 1.07c-.55.28-1.22.05-1.48-.52z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.29 9.17L7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.19 22.06c-1 0-1.97-.39-2.74-1.14-1.25-1.22-1.55-3.02-.77-4.58L4.3 13.1c.34-.68.34-1.5 0-2.19L2.68 7.66C1.9 6.1 2.2 4.3 3.45 3.08c1.25-1.22 3.05-1.49 4.6-.67l11.59 6.1A3.93 3.93 0 0121.75 12c0 1.47-.81 2.81-2.11 3.49l-11.59 6.1c-.6.32-1.23.47-1.86.47zM6.2 3.44c-.69 0-1.29.32-1.7.72-.62.6-1.06 1.67-.48 2.84l1.62 3.24c.55 1.11.55 2.42 0 3.53l-1.62 3.24c-.59 1.17-.14 2.24.48 2.84.62.6 1.69 1.03 2.85.42l11.59-6.1c.82-.43 1.31-1.24 1.31-2.16 0-.92-.49-1.73-1.31-2.16L7.35 3.73c-.4-.21-.79-.29-1.15-.29z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.29 9.17L7.7 3.07C4.95 1.62 1.96 4.55 3.35 7.33l1.62 3.24c.45.9.45 1.96 0 2.86l-1.62 3.24c-1.39 2.78 1.6 5.7 4.35 4.26l11.59-6.1c2.28-1.2 2.28-4.46 0-5.66z"/>`,
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
