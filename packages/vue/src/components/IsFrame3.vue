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
    content: `<path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1zM21.5 19.64v-4.28c0-1.3-1-2.36-2.23-2.36h-4.04C14 13 13 14.06 13 15.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36zM21.5 8.64V4.36c0-1.3-1-2.36-2.23-2.36h-4.04C14 2 13 3.06 13 4.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.27 22c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1H4.23C2.64 2 2 2.6 2 4.1v15.8c0 1.5.64 2.1 2.23 2.1M15.73 2c-1.59 0-2.23.6-2.23 2.1v8.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1V4.1c0-1.5-.64-2.1-2.23-2.1"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.8 9H7.2C4 9 2 11 2 14.2v2.59C2 20 4 22 7.2 22h9.59c3.2 0 5.2-2 5.2-5.2v-2.6C22 11 20 9 16.8 9z" opacity=".4"/>
  <path d="M15.88 12.43l-3.35 3.35c-.29.29-.77.29-1.06 0l-3.35-3.35a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.07 2.07V2.75c0-.41.34-.75.75-.75s.75.34.75.75v10.69l2.07-2.07c.15-.15.34-.22.53-.22s.38.07.53.22c.3.29.3.76 0 1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.23 20.77l3.54-3.54M20.77 20.77l-3.54-3.54M7 10.5v3M12 10.5v3M17 10.5v3M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.26 19.65c-.41 0-.75-.34-.75-.75V7.1c0-1.01-.21-1.35-1.48-1.35h-1.04c-1.27 0-1.48.34-1.48 1.35v11.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.1c0-1.92.98-2.85 2.98-2.85h1.04c2.01 0 2.98.93 2.98 2.85v11.8c0 .41-.34.75-.75.75zM10.76 19.65c-.41 0-.75-.34-.75-.75v-6.8c0-1.01-.21-1.35-1.48-1.35H7.49c-1.27 0-1.48.34-1.48 1.35v6.8c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.8c0-1.92.98-2.85 2.98-2.85h1.04c2.01 0 2.98.93 2.98 2.85v6.8c0 .41-.34.75-.75.75z"/>
  <path d="M22 19.75H2a.749.749 0 110-1.5h20a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 19h20"/>`,
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
