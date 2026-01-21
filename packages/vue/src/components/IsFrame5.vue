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
  bold: null,
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8M10.76 12.1v6.8M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1M2 19h20"/>`,
    isStroke: true
  },
  bulk: null,
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.26 18.9V7.1c0-1.5-.64-2.1-2.23-2.1h-1.04c-1.59 0-2.23.6-2.23 2.1v11.8M5.26 18.9v-6.8c0-1.5.64-2.1 2.23-2.1h1.04c1.59 0 2.23.6 2.23 2.1v6.8M2 19h20"/>`,
    isStroke: true
  },
  outline: null,
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M17.23 20.77l3.54-3.54M20.77 20.77l-3.54-3.54"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 10.5v3M12 10.5v3M17 10.5v3" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>`,
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
