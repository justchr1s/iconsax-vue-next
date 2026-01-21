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
    content: `<path d="M15.609 5.5v10.16c0 .4-.12.79-.34 1.12l-2.73 4.06c-.43.65-1.5 1.11-2.41.77-.98-.33-1.63-1.43-1.42-2.41l.52-3.27c.04-.3-.04-.57-.21-.78a.93.93 0 00-.69-.31h-4.11c-.79 0-1.47-.32-1.87-.88-.38-.54-.45-1.24-.2-1.95l2.46-7.49c.31-1.24 1.66-2.25 3-2.25h3.9c.67 0 1.61.23 2.04.66l1.28.99a2 2 0 01.78 1.58zM18.79 17.608h1.03c1.55 0 2.18-.6 2.18-2.08V5.478c0-1.48-.63-2.08-2.18-2.08h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2.52 12.05c-.5 1.4.4 2.6 1.9 2.6h4c.6 0 1.1.5 1 1.2l-.5 3.2c-.2.9.4 1.9 1.3 2.2.8.3 1.8-.1 2.2-.7l4.1-6.1M16.52 5.65l-3.1-2.4c-.4-.4-1.3-.6-1.9-.6h-3.8c-1.2 0-2.5.9-2.8 2.1L3.78 8.22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.62 5.65v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M2.349 13.96c.39.56 1.08.88 1.87.88h4.1c.27 0 .52.11.69.31.18.2.25.48.21.77l-.51 3.28c-.22.98.43 2.08 1.41 2.41.91.34 1.98-.12 2.41-.77l4.21-6.27.12-.2V5.53l-.15-.15-3.17-2.45c-.42-.42-1.37-.65-2.04-.65h-3.9c-1.34 0-2.69 1.01-2.99 2.24l-2.46 7.49c-.25.71-.18 1.41.2 1.95z" opacity=".4"/>
  <path d="M18.79 17.61h1.03c1.55 0 2.18-.6 2.18-2.08V5.48C22 4 21.37 3.4 19.82 3.4h-1.03c-1.55 0-2.18.6-2.18 2.08v10.06c0 1.47.63 2.07 2.18 2.07z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M16.52 5.65l-3.1-2.4c-.4-.4-1.3-.6-1.9-.6h-3.8c-1.2 0-2.5.9-2.8 2.1l-2.4 7.3c-.5 1.4.4 2.6 1.9 2.6h4c.6 0 1.1.5 1 1.2l-.5 3.2c-.2.9.4 1.9 1.3 2.2.8.3 1.8-.1 2.2-.7l4.1-6.1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.62 5.65v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.8 22.1c-.29 0-.58-.05-.85-.15-1.25-.41-2.05-1.79-1.77-3.07l.49-3.15c.01-.07.01-.17-.06-.25a.28.28 0 00-.2-.08h-4c-.98 0-1.83-.41-2.33-1.12-.49-.69-.59-1.6-.27-2.48L4.2 4.52C4.57 3.07 6.12 1.9 7.72 1.9h3.8c.56 0 1.78.17 2.43.82l3.03 2.34-.92 1.19-3.1-2.4c-.25-.25-.88-.45-1.44-.45h-3.8c-.9 0-1.87.72-2.07 1.53l-2.42 7.35c-.16.44-.13.84.08 1.13.22.31.62.49 1.11.49h4c.52 0 1 .22 1.33.6.34.39.49.91.41 1.45l-.5 3.21c-.12.56.26 1.19.8 1.37.48.18 1.12-.08 1.34-.4l4.1-6.1 1.24.84-4.1 6.1c-.47.7-1.36 1.13-2.24 1.13z"/>
  <path d="M19.62 18.1h-1c-1.85 0-2.75-.87-2.75-2.65v-9.8c0-1.78.9-2.65 2.75-2.65h1c1.85 0 2.75.87 2.75 2.65v9.8c0 1.78-.9 2.65-2.75 2.65zm-1-13.6c-1.09 0-1.25.26-1.25 1.15v9.8c0 .89.16 1.15 1.25 1.15h1c1.09 0 1.25-.26 1.25-1.15v-9.8c0-.89-.16-1.15-1.25-1.15h-1z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M16.52 5.65l-3.1-2.4c-.4-.4-1.3-.6-1.9-.6h-3.8c-1.2 0-2.5.9-2.8 2.1l-2.4 7.3c-.5 1.4.4 2.6 1.9 2.6h4c.6 0 1.1.5 1 1.2l-.5 3.2c-.2.9.4 1.9 1.3 2.2.8.3 1.8-.1 2.2-.7l4.1-6.1" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.62 5.65v9.8c0 1.4-.6 1.9-2 1.9h-1c-1.4 0-2-.5-2-1.9v-9.8c0-1.4.6-1.9 2-1.9h1c1.4 0 2 .5 2 1.9z"/>`,
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
