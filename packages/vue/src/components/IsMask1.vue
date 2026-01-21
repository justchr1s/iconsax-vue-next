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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  <path d="M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.97 11.86v4.53c-.02 1.65-1.25 2.05-2.4 1.59A6.439 6.439 0 015.53 12c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" opacity=".4"/>
  <path d="M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12c0 2.76-2.24 5-5 5V7c2.76 0 5 2.24 5 5zM12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5zM12 22v-5M12 7V2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M4.93 19.82a.75.75 0 01-.53-.22A10.681 10.681 0 011.25 12C1.25 6.07 6.07 1.25 12 1.25c2.87 0 5.57 1.12 7.6 3.15a.75.75 0 010 1.06L5.46 19.6a.75.75 0 01-.53.22zM12 2.75C6.9 2.75 2.75 6.9 2.75 12a9.2 9.2 0 002.2 5.99L17.99 4.95A9.2 9.2 0 0012 2.75z"/>
  <path d="M12 22.75c-2.87 0-5.57-1.12-7.6-3.15a.75.75 0 010-1.06L18.54 4.4c.29-.29.77-.29 1.06 0 2.03 2.03 3.15 4.73 3.15 7.6 0 5.93-4.82 10.75-10.75 10.75zm-5.99-3.7a9.2 9.2 0 005.99 2.2c5.1 0 9.25-4.15 9.25-9.25a9.2 9.2 0 00-2.2-5.99L6.01 19.05z"/>
  <path d="M13.41 22.65c-.19 0-.38-.07-.53-.22l-5.66-5.66a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06a.71.71 0 01-.53.22zM17.87 20.03c-.19 0-.38-.07-.53-.22l-6.58-6.58a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.58 6.58c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM21.12 16.22c-.19 0-.38-.07-.53-.22L14.3 9.71a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.29 6.29a.75.75 0 01-.53 1.28z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M17 12c0 2.76-2.24 5-5 5V7c2.76 0 5 2.24 5 5zM12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5zM12 22v-5M12 7V2"/>
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
