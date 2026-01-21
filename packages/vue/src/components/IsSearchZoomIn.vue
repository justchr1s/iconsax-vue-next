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
    content: `<path d="M11.01 2C6.04 2 2 6.04 2 11.01s4.04 9.01 9.01 9.01 9.01-4.04 9.01-9.01S15.98 2 11.01 2zm2.49 9.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V8.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75zM21.99 18.95c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79-.36.5-.44 1.17-.22 1.84.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 11h5M11 13.5v-5M11 2a9 9 0 11-4.07.97M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.01 20.02a9.01 9.01 0 100-18.02 9.01 9.01 0 000 18.02z" opacity=".4"/>
  <path d="M14.25 11c0 .41-.34.75-.75.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V8.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75zM21.99 18.95c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79-.36.5-.44 1.17-.22 1.84.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.2 11.7h5M11.7 14.2v-5M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14.2 12.45h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M11.7 14.95c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75z"/>
  <path d="M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75zM22 22.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M9.2 11.7h5M11.7 14.2v-5"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 22l-2-2" opacity=".4"/>`,
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
