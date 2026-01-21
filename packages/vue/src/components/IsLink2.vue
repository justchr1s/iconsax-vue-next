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
    content: `<path d="M7.25 12c0-.41.34-.75.75-.75h3V7.5c0-.55-.45-1-1-1H7.77C4.62 6.5 1.88 9.08 2 12.22a5.5 5.5 0 001.61 3.67c1 .99 2.37 1.61 3.89 1.61H10c.55 0 1-.45 1-1v-3.75H8c-.41 0-.75-.34-.75-.75zM20.39 8.11c-1-.99-2.37-1.61-3.89-1.61H14c-.55 0-1 .45-1 1v3.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3v3.75c0 .55.45 1 1 1h2.23c3.15 0 5.89-2.58 5.76-5.72a5.49 5.49 0 00-1.6-3.67zM13 11.25h-2v1.5h2v-1.5z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.99 17.5h1.51c3.02 0 5.5-2.47 5.5-5.5 0-3.02-2.47-5.5-5.5-5.5h-1.51M2.37 10.01C2.13 10.63 2 11.3 2 12c0 3.02 2.47 5.5 5.5 5.5H9M9 6.5H7.5c-.83 0-1.61.18-2.32.51M8 12h8"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.41 18.59c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73 2.82 0 5.12-2.3 5.12-5.12 0-2.82-2.3-5.12-5.12-5.12a5.13 5.13 0 00-5.12 5.12c0 .4-.33.73-.73.73-.4 0-.73-.33-.73-.73 0-3.63 2.95-6.59 6.59-6.59C19.06 5.42 22 8.37 22 12s-2.95 6.59-6.59 6.59z"/>
  <path d="M22 12a6.59 6.59 0 01-6.59 6.59c-1.25 0-2.42-.35-3.41-.96A6.57 6.57 0 0015.17 12 6.57 6.57 0 0012 6.37c1-.6 2.17-.96 3.41-.96A6.59 6.59 0 0122 12z" opacity=".4"/>
  <path d="M8.59 5.41c.4 0 .73.33.73.73 0 .4-.33.73-.73.73a5.13 5.13 0 00-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12 2.82 0 5.12-2.3 5.12-5.12 0-.4.33-.73.73-.73.4 0 .73.33.73.73 0 3.63-2.95 6.59-6.59 6.59C4.94 18.58 2 15.63 2 12s2.95-6.59 6.59-6.59z"/>
  <path d="M15.17 12A6.57 6.57 0 0112 17.63c-1 .6-2.17.96-3.41.96A6.59 6.59 0 012 12a6.59 6.59 0 016.59-6.59c1.24 0 2.41.36 3.41.96A6.57 6.57 0 0115.17 12z" opacity=".5"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8.99 21.5c-1.66 0-3.33-.63-4.6-1.9-2.53-2.54-2.53-6.66 0-9.19.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06a5.003 5.003 0 000 7.07 5.003 5.003 0 007.07 0c.94-.94 1.46-2.2 1.46-3.54 0-1.33-.52-2.59-1.46-3.54a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0a6.45 6.45 0 011.9 4.6c0 1.74-.68 3.37-1.9 4.6a6.432 6.432 0 01-4.59 1.9z"/>
  <path d="M19.07 14.16c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06c2.05-2.05 2.05-5.38 0-7.42-2.05-2.05-5.38-2.05-7.42 0a5.22 5.22 0 00-1.54 3.71c0 1.4.55 2.72 1.54 3.71.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0a6.719 6.719 0 01-1.98-4.77c0-1.8.7-3.5 1.98-4.77 2.63-2.63 6.91-2.63 9.55 0 2.63 2.63 2.63 6.92 0 9.55-.15.14-.35.21-.54.21z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" opacity=".4"/>`,
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
