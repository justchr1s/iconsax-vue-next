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
    content: `<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm3.92 10.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.99 12H16M8 12h4M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M15.92 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.92 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM7.92 12h8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.92 22.75C6 22.75 1.17 17.93 1.17 12S6 1.25 11.92 1.25 22.67 6.07 22.67 12s-4.82 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"/>
  <path d="M15.92 12.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.92 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.92 12h8" opacity=".34"/>`,
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
