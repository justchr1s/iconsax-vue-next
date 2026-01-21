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
    content: `<path d="M16 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5V7c0-3-2-5-5-5zm1.57 6.48l-2.18 3.5c-.06.09-.16.16-.26.17h-.05c-.09 0-.18-.03-.25-.09a4.244 4.244 0 00-5.64 0 .369.369 0 01-.56-.08l-2.18-3.5c-.12-.15-.09-.35.05-.48a8.274 8.274 0 0111 0c.14.13.17.33.07.48z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12.98V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.29a7.905 7.905 0 00-10.5 0l2.18 3.5a4.613 4.613 0 016.14 0"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M8 22h8c3 0 5-2 5-5V7c0-3-2-5-5-5H8C5 2 3 4 3 7v10c0 3 2 5 5 5z" opacity=".4"/>
  <path d="M17.5 8a8.274 8.274 0 00-11 0c-.14.13-.17.33-.07.48l2.18 3.5c.06.09.16.16.26.17.11.02.22-.02.3-.09a4.244 4.244 0 015.64 0c.07.06.16.09.25.09h.05c.11-.02.21-.08.26-.17l2.18-3.5c.12-.15.09-.35-.05-.48z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.29a7.905 7.905 0 00-10.5 0l2.18 3.5a4.613 4.613 0 016.14 0l2.18-3.5z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-4z"/>
  <path d="M15.07 12.54c-.18 0-.36-.07-.5-.19a3.875 3.875 0 00-5.14 0c-.16.15-.38.21-.61.18a.748.748 0 01-.53-.35l-2.18-3.5a.763.763 0 01.14-.96 8.666 8.666 0 0111.5 0c.27.24.33.65.14.96l-2.18 3.5a.78.78 0 01-.53.35c-.04 0-.08.01-.11.01zM12 9.87c1 0 1.99.28 2.86.83l1.4-2.25c-2.53-1.88-6-1.88-8.53 0l1.4 2.25c.88-.56 1.87-.83 2.87-.83z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.29a7.905 7.905 0 00-10.5 0l2.18 3.5a4.613 4.613 0 016.14 0l2.18-3.5z" opacity=".4"/>`,
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
