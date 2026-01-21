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
    content: `<path d="M20.098 6.94c0 .54-.29 1.03-.75 1.28l-1.74.94-1.48.79-3.07 1.66c-.33.18-.69.27-1.06.27-.37 0-.73-.09-1.06-.27l-6.29-3.39c-.46-.25-.75-.74-.75-1.28s.29-1.03.75-1.28l1.97-1.06 1.57-.85 2.75-1.48c.66-.36 1.46-.36 2.12 0l6.29 3.39c.46.25.75.74.75 1.28zM9.899 12.79l-5.85-2.92c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.95-.52-1.81-1.38-2.24zM22.03 11.15v5.53c0 .95-.53 1.81-1.39 2.24l-5.85 2.93a1.432 1.432 0 01-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l2.15-1.07 1.5-.75 2.2-1.1c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22z"/>
  <path d="M17.611 9.16l-1.48.79-9.51-5.35 1.57-.85 9.18 5.18c.1.06.18.14.24.23zM17.75 10.969v2.27c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.52l1.5-.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.39 13.25v1.58c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.14-.63-3.01-.63-4.15 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.04 7.19L12 12.42 2.96 7.19c.4-.74.98-1.39 1.63-1.75l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c.65.36 1.23 1.01 1.63 1.75z" opacity=".4"/>
  <path d="M12 12.42V22c-.75 0-1.5-.16-2.07-.48l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73V9.17c0-.64.22-1.34.57-1.98L12 12.42z" opacity=".6"/>
  <path d="M21.61 9.17v5.66c0 1.38-.99 3.06-2.2 3.73l-5.34 2.96c-.57.32-1.32.48-2.07.48v-9.58l9.04-5.23c.35.64.57 1.34.57 1.98z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.93 2.48L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73v5.65c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.15-.63-3.01-.63-4.15.01z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 13.3c-.13 0-.26-.03-.38-.1L2.79 8.09a.752.752 0 11.76-1.3L12 11.68l8.4-4.86a.76.76 0 011.03.27c.21.36.08.82-.27 1.03l-8.77 5.08a.94.94 0 01-.39.1z"/>
  <path d="M12 22.36c-.41 0-.75-.34-.75-.75v-9.07c0-.41.34-.75.75-.75s.75.34.75.75v9.07c0 .41-.34.75-.75.75z"/>
  <path d="M12 22.75c-.88 0-1.75-.19-2.44-.57l-5.34-2.97c-1.45-.8-2.58-2.73-2.58-4.39V9.17c0-1.66 1.13-3.58 2.58-4.39l5.34-2.96c1.37-.76 3.51-.76 4.88 0l5.34 2.97c1.45.8 2.58 2.73 2.58 4.39v5.65c0 1.66-1.13 3.58-2.58 4.39l-5.34 2.96c-.69.38-1.56.57-2.44.57zm0-20c-.63 0-1.25.13-1.71.38L4.95 6.1c-.96.53-1.81 1.97-1.81 3.07v5.65c0 1.1.85 2.54 1.81 3.08l5.34 2.97c.91.51 2.51.51 3.42 0l5.34-2.97c.96-.54 1.81-1.97 1.81-3.08V9.17c0-1.1-.85-2.54-1.81-3.08l-5.34-2.97c-.46-.24-1.08-.37-1.71-.37z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.93 2.48L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73v5.65c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.15-.63-3.01-.63-4.15.01z"/>`,
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
