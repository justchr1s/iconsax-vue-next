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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.57 12.68a.75.75 0 01-.9 1.2l-3.95-2.95-2.41 1.8c.01.1.03.2.03.3a2.3 2.3 0 11-2.3-2.3c.62 0 1.17.25 1.58.64l1.84-1.38-1.83-1.37a2.3 2.3 0 11.7-1.65c0 .1-.02.19-.03.28l2.4 1.8 3.95-2.95a.75.75 0 01.9 1.2l-3.6 2.69 3.62 2.69z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.42 10.9a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84zM8.42 16.94a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84zM17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
  <path d="M15.25 11.98l7.2-5.38a.75.75 0 00-.9-1.2L14 11.05 8.45 6.9a.75.75 0 00-.9 1.2l5.2 3.89-5.9 4.42a.75.75 0 00.9 1.2l6.26-4.68 7.55 5.65c.13.1.29.15.45.15a.75.75 0 00.45-1.35l-7.21-5.4z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 6L8.65 15.98M22 17.97L8.65 7.98"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M8.42 11.65c-1.47 0-2.67-1.2-2.67-2.67S6.95 6.3 8.42 6.3s2.67 1.2 2.67 2.68c0 1.48-1.19 2.67-2.67 2.67zm0-3.85c-.65 0-1.17.53-1.17 1.18 0 .65.53 1.17 1.17 1.17.64 0 1.17-.53 1.17-1.17 0-.64-.52-1.18-1.17-1.18zM8.42 17.7c-1.47 0-2.67-1.2-2.67-2.68a2.67 2.67 0 115.34 0c0 1.47-1.19 2.68-2.67 2.68zm0-3.85c-.65 0-1.17.53-1.17 1.17 0 .64.53 1.18 1.17 1.18.64 0 1.17-.53 1.17-1.18 0-.65-.52-1.17-1.17-1.17z"/>
  <path d="M10.16 14.94a.75.75 0 01-.45-1.35l7.34-5.49a.75.75 0 01.9 1.2l-7.34 5.49a.76.76 0 01-.45.15z"/>
  <path d="M17.5 16.03a.76.76 0 01-.45-.15l-7.34-5.49a.75.75 0 01.9-1.2l7.34 5.49a.75.75 0 01-.45 1.35z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M8.42 10.9a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84zM8.42 16.94a1.92 1.92 0 100-3.84 1.92 1.92 0 000 3.84zM17.5 8.7l-7.34 5.49M17.5 15.28l-7.34-5.49"/>
  </g>`,
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
