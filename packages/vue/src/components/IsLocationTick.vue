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
    content: `<path d="M20.619 8.7c-1.04-4.63-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.56 2.07-8.61 6.69-1.18 5.16 1.98 9.53 4.84 12.29a5.436 5.436 0 003.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28zm-5.34.83l-4 4c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.5-1.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 11.5l1.5 1.5 4-4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.98 4.3c4.37-4.11 12.84-2.7 14.4 4.21 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0C5.63 17.88 2.46 13.58 3.62 8.5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.62 8.7C19.58 4.07 15.54 2 12 2h-.01C8.46 2 4.43 4.07 3.38 8.69c-1.18 5.16 1.98 9.53 4.84 12.29A5.436 5.436 0 0012 22.51c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28z" opacity=".4"/>
  <path d="M10.75 13.75c-.19 0-.38-.07-.53-.22l-1.5-1.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-width="1.5" d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.194 5.194 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 11.5l1.5 1.5 4-4"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.76a5.97 5.97 0 01-4.13-1.67c-2.95-2.84-6.21-7.37-4.98-12.76C4 3.44 8.27 1.25 12 1.25h.01c3.73 0 8 2.19 9.11 7.09 1.22 5.39-2.04 9.91-4.99 12.75A5.97 5.97 0 0112 22.76zm0-20.01c-2.91 0-6.65 1.55-7.64 5.91C3.28 13.37 6.24 17.43 8.92 20a4.426 4.426 0 006.17 0c2.67-2.57 5.63-6.63 4.57-11.34-1-4.36-4.75-5.91-7.66-5.91z"/>
  <path d="M10.75 13.75c-.19 0-.38-.07-.53-.22l-1.5-1.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-width="1.5" d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 11.5l1.5 1.5 4-4" opacity=".4"/>`,
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
