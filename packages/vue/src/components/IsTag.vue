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
    content: `<path d="M19.83 8.7L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.738 4.738 0 000-6.73zM9.5 12.38a2.88 2.88 0 11.002-5.762A2.88 2.88 0 019.5 12.38z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.83 15.45a4.78 4.78 0 000-6.75L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 006.75 0l1.52-1.52"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M7 9.5a2.5 2.5 0 005 0A2.5 2.5 0 009.5 7"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M4.17 15.3l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61z" opacity=".4"/>
  <path d="M9.5 12.38a2.88 2.88 0 100-5.76 2.88 2.88 0 000 5.76z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.17 15.3l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61z"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M9.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.07 21.98c-1.41 0-2.83-.54-3.9-1.61l-4.53-4.53a5.548 5.548 0 01-1.61-4.17l.24-5c.11-2.39 2-4.28 4.4-4.4l5-.24c1.55-.06 3.07.51 4.17 1.61l4.53 4.53a5.535 5.535 0 010 7.81l-4.39 4.39a5.535 5.535 0 01-3.91 1.61zM4.7 14.77l4.53 4.53c.76.76 1.77 1.18 2.84 1.18 1.07 0 2.08-.42 2.84-1.18l4.39-4.39c.76-.76 1.18-1.77 1.18-2.84 0-1.07-.42-2.08-1.18-2.84L14.77 4.7c-.8-.8-1.91-1.23-3.03-1.17l-5 .24c-1.63.07-2.9 1.34-2.98 2.96l-.24 5c-.05 1.13.38 2.24 1.18 3.04z"/>
  <path d="M9.5 12.75c-1.79 0-3.25-1.46-3.25-3.25S7.71 6.25 9.5 6.25s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.17 15.3l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61z"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M9.5 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" opacity=".4"/>`,
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
