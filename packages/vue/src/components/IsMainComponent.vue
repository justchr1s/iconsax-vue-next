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
    content: `<path d="M16.51 5.01l-1.96-1.96c-1.4-1.4-3.7-1.4-5.1 0L7.49 5.01c-.39.39-.39 1.03 0 1.42l3.81 3.81c.39.39 1.02.39 1.41 0l3.81-3.81c.38-.39.38-1.03-.01-1.42zM5.01 7.492l-1.96 1.96c-1.4 1.4-1.4 3.7 0 5.1l1.96 1.96c.39.39 1.02.39 1.41 0l3.81-3.81a.996.996 0 000-1.41l-3.8-3.8c-.39-.39-1.03-.39-1.42 0zM20.95 9.452l-1.96-1.96a.996.996 0 00-1.41 0l-3.81 3.81a.996.996 0 000 1.41l3.81 3.81c.39.39 1.02.39 1.41 0l1.96-1.96c1.4-1.41 1.4-3.71 0-5.11zM7.49 18.99l1.96 1.96c1.4 1.4 3.7 1.4 5.1 0l1.96-1.96a.996.996 0 000-1.41l-3.81-3.81a.996.996 0 00-1.41 0l-3.81 3.81c-.38.38-.38 1.02.01 1.41z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.74 18.24l-3.68-3.68c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.4 1.4 3.7 0 5.11l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0M6.25 6.25l11.5 11.5M15.5 8.5l-9.25 9.25"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.95 14.55l-2.67 2.67-1.06 1.06-2.67 2.67c-1.4 1.4-3.7 1.4-5.1 0l-2.67-2.67-1.06-1.06-2.67-2.67c-1.4-1.4-1.4-3.7 0-5.1l2.67-2.67 1.06-1.06 2.67-2.67c1.4-1.4 3.7-1.4 5.1 0l2.67 2.67 1.06 1.06 2.67 2.67c1.4 1.4 1.4 3.7 0 5.1z" opacity=".4"/>
  <path d="M13.06 12l5.22 5.22-1.06 1.06L12 13.06l-5.22 5.22-1.06-1.06L10.94 12 5.72 6.78l1.06-1.06L12 10.94l5.22-5.22 1.06 1.06L13.06 12z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.95 14.55l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11zM6.25 6.25l11.5 11.5M17.75 6.25l-11.5 11.5"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-1.17 0-2.26-.45-3.08-1.27l-6.39-6.39a4.334 4.334 0 01-1.27-3.08c0-1.16.45-2.26 1.27-3.08l6.39-6.39c.82-.82 1.92-1.27 3.08-1.27 1.16 0 2.26.45 3.08 1.27l6.39 6.39c.82.82 1.27 1.92 1.27 3.08 0 1.16-.45 2.26-1.27 3.08l-6.39 6.39c-.82.82-1.91 1.27-3.08 1.27zm0-20c-.77 0-1.49.3-2.02.83L3.59 9.97c-.54.54-.83 1.26-.83 2.02s.3 1.49.83 2.02l6.39 6.39c1.07 1.07 2.97 1.07 4.04 0l6.39-6.39c.54-.54.83-1.25.83-2.02s-.3-1.49-.83-2.02l-6.39-6.39c-.53-.53-1.25-.83-2.02-.83z"/>
  <path d="M17.75 18.5c-.19 0-.38-.07-.53-.22L5.72 6.78a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l11.5 11.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M6.25 18.5c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06l11.5-11.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-11.5 11.5c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.95 14.55l-6.39 6.39c-1.4 1.4-3.7 1.4-5.11 0l-6.39-6.39c-1.4-1.4-1.4-3.7 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39c1.4 1.41 1.4 3.71 0 5.11z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M6.25 6.25l11.5 11.5M17.75 6.25l-11.5 11.5"/>
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
