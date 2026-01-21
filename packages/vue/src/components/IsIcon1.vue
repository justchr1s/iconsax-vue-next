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
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.06 0-1.99-.55-2.52-1.37"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14h11c1.1 0 2-.9 2-2V5h1.84c.36 0 .71.1 1.01.27"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 2v10c0 1.1-.9 2-2 2H2V7.62c.73.87 1.85 1.41 3.09 1.38 1.01-.02 1.92-.41 2.6-1.06.31-.26.57-.59.77-.95.36-.61.56-1.33.54-2.08-.03-1.17-.55-2.2-1.36-2.91H15zM8 22a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4zM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 5c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 011 5c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 019 5zM6.069 6.04l-2.11-2.11M6.04 3.96L3.93 6.07"/>`,
    isStroke: true
  },
  bulk: null,
  linear: null,
  outline: null,
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 13.24v-1.73c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76h-5.48"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 012.57 1.78v3.8" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22.56 13.97v2.06c0 .55-.44 1-1 1.02H19.6c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12h7" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 16.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.22 15.28L3 16.5l1.22 1.22M9.5 21.78H4.16c-.64 0-1.16-.52-1.16-1.16v-1.28"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.28 23l1.22-1.22-1.22-1.22"/>`,
    isStroke: true
  }
}

const currentVariant = computed(() => svgData[props.variant] || svgData.broken)
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
