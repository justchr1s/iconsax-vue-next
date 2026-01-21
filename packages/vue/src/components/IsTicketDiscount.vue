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
    content: `<path d="M21.3 10.84c.39 0 .7-.31.7-.7v-.93c0-4.1-1.25-5.35-5.35-5.35h-9.3C3.25 3.86 2 5.11 2 9.21v.47c0 .39.31.7.7.7.9 0 1.63.73 1.63 1.63 0 .9-.73 1.62-1.63 1.62-.39 0-.7.31-.7.7v.47c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35 0-.39-.31-.7-.7-.7a1.63 1.63 0 010-3.26zM9 8.88c.55 0 1 .45 1 1s-.44 1-1 1c-.55 0-1-.45-1-1s.44-1 1-1zm6 7c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zm.9-6.4l-6.73 6.73c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 010 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 01-2.5-2.5M8.63 15.68l6.73-6.73"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.995 14.75h.009M8.995 9.25h.008"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.3 10.84c.39 0 .7-.31.7-.7v-.93c0-4.1-1.25-5.35-5.35-5.35h-9.3C3.25 3.86 2 5.11 2 9.21v.47c0 .39.31.7.7.7.9 0 1.63.73 1.63 1.63 0 .9-.73 1.62-1.63 1.62-.39 0-.7.31-.7.7v.47c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35 0-.39-.31-.7-.7-.7a1.63 1.63 0 010-3.26z" opacity=".4"/>
  <path d="M15 15.88c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zM9 10.88c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zM8.63 16.43c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.73 6.73c-.14.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12.5A2.5 2.5 0 0122 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 010 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 01-2.5-2.5zM9 14.75l6-6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.995 14.75h.009M8.995 9.25h.008"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75v-.5c0-.41.34-.75.75-.75.96 0 1.75-.79 1.75-1.75S2.96 10.25 2 10.25c-.41 0-.75-.34-.75-.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75c.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75zM2.75 15.16c.02 3.44.73 4.09 4.25 4.09h10c3.34 0 4.15-.59 4.24-3.59a3.25 3.25 0 01-2.49-3.16c0-1.53 1.07-2.82 2.5-3.16V9c0-3.57-.68-4.25-4.25-4.25H7c-3.52 0-4.23.65-4.25 4.09 1.43.34 2.5 1.63 2.5 3.16 0 1.53-1.07 2.82-2.5 3.16z"/>
  <path d="M15 15.88c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zM9 10.88c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zM8.63 16.43c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.73 6.73c-.14.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12.5A2.5 2.5 0 0122 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 010 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 01-2.5-2.5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14.75l6-6" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.995 14.75h.009M8.995 9.25h.008" opacity=".4"/>`,
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
