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
    content: `<path d="M11.969 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10zm3 12.23l-2.9 1.67a2.284 2.284 0 01-2.3 0 2.285 2.285 0 01-1.15-2v-3.35c0-.83.43-1.58 1.15-2 .72-.42 1.58-.42 2.31 0l2.9 1.67c.72.42 1.15 1.16 1.15 2 0 .84-.43 1.59-1.16 2.01z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.91 14.12c1.8-1.04 1.8-2.74 0-3.78l-1.45-.84-1.45-.84c-1.8-1.04-3.27-.19-3.27 1.89v3.34c0 1.66.94 2.54 2.24 2.29"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10z" opacity=".4"/>
  <path d="M14.97 10.23l-2.9-1.67c-.72-.42-1.59-.42-2.31 0s-1.15 1.16-1.15 2v3.35c0 .83.43 1.58 1.15 2a2.285 2.285 0 002.3 0l2.9-1.67c.72-.42 1.15-1.16 1.15-2 .02-.84-.41-1.59-1.14-2.01z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.74 12.23v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89v-1.69z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.97 22.75C6.05 22.75 1.22 17.93 1.22 12S6.05 1.25 11.97 1.25 22.72 6.07 22.72 12 17.9 22.75 11.97 22.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"/>
  <path d="M10.56 16.99c-.44 0-.86-.11-1.23-.32-.86-.5-1.34-1.48-1.34-2.76v-3.35c0-1.28.47-2.26 1.33-2.76.86-.5 1.95-.42 3.06.22l2.9 1.67c1.11.64 1.72 1.54 1.72 2.54 0 .99-.61 1.9-1.72 2.54l-2.9 1.67c-.62.37-1.25.55-1.82.55zm0-8.02c-.18 0-.35.04-.48.12-.38.22-.59.75-.59 1.47v3.35c0 .71.21 1.25.59 1.46.37.22.94.13 1.56-.22l2.9-1.67c.62-.36.97-.81.97-1.24 0-.43-.36-.88-.97-1.24l-2.9-1.67c-.4-.24-.77-.36-1.08-.36z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.74 12.23v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89v-1.69z" opacity=".4"/>`,
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
