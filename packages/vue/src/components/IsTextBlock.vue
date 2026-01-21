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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.48 7.22a.76.76 0 01-1.01.34c-1.23-.62-2.56-.96-3.91-1.06v7.79c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5c-1.35.1-2.68.44-3.91 1.06-.11.05-.23.07-.34.07a.75.75 0 01-.34-1.42c3.34-1.67 7.33-1.67 10.67 0 .38.19.53.64.34 1.01z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.94V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M7 8.89c3.15-1.57 6.85-1.57 10 0M12 16.3V7.93"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M17.34 8.21a11.989 11.989 0 00-10.67 0c-.38.19-.53.64-.34 1.01a.753.753 0 001.01.33c1.23-.61 2.56-.95 3.91-1.05v7.79c0 .41.34.75.75.75s.75-.34.75-.75V8.5c1.35.1 2.68.44 3.91 1.05.37.18.82.04 1.01-.34.19-.36.04-.81-.33-1z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7zM7 8.89c3.15-1.57 6.85-1.57 10 0M12 16.3V7.93"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M7 9.63a.75.75 0 01-.34-1.42c3.34-1.67 7.33-1.67 10.67 0 .37.19.52.64.34 1.01a.76.76 0 01-1.01.34 10.485 10.485 0 00-9.33 0c-.1.05-.22.07-.33.07z"/>
  <path d="M12 17.04c-.41 0-.75-.34-.75-.75V7.93c0-.41.34-.75.75-.75s.75.34.75.75v8.37c0 .41-.34.74-.75.74z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M7 8.89c3.15-1.57 6.85-1.57 10 0M12 16.3V7.93"/>
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
