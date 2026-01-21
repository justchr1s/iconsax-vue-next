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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.37 12.35l-2.22 2.22c-.54.54-1.24.8-1.94.8a2.75 2.75 0 01-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 00-4.6-4.6L8.3 11.11a2.657 2.657 0 000 3.78c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0A4.05 4.05 0 016 13.01c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.762 4.762 0 016.72 0 4.753 4.753 0 01.01 6.72z" opacity=".93"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 000-5.66 4.008 4.008 0 00-5.66 0l-2.42 2.42a3.428 3.428 0 000 4.85"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M12.2 17.38a2.75 2.75 0 01-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 00-4.6-4.6l-2.42 2.42a2.657 2.657 0 000 3.78c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0A4.151 4.151 0 016.01 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.762 4.762 0 016.72 0 4.762 4.762 0 010 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 000-5.66 4.008 4.008 0 00-5.66 0l-2.42 2.42a3.428 3.428 0 000 4.85"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.2 17.38a2.75 2.75 0 01-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 00-4.6-4.6l-2.42 2.42a2.657 2.657 0 000 3.78c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0A4.151 4.151 0 016.01 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.762 4.762 0 016.72 0 4.762 4.762 0 010 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82z"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 000-5.66 4.008 4.008 0 00-5.66 0l-2.42 2.42a3.428 3.428 0 000 4.85" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
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
