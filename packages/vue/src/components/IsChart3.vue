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
    content: `<path d="M22 22H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2zM3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10zM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 10.74v3.2M12 15.68v-2.92M12 9v1.01M17 10.74v3.2M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75z"/>
  <path d="M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.02 5.97A9.966 9.966 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-2.36.75-4.6 2.17-6.48.25-.33.72-.39 1.05-.14.33.25.4.72.15 1.05A9.16 9.16 0 002.75 12c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75z"/>
  <path d="M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75z"/>
  <path d="M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.02 5.97A9.966 9.966 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7" opacity=".34"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4" opacity=".34"/>`,
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
