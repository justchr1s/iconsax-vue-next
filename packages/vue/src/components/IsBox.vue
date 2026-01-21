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
    content: `<path d="M20.208 7.821l-7.7 4.46c-.31.18-.7.18-1.02 0l-7.7-4.46c-.55-.32-.69-1.07-.27-1.54.29-.33.62-.6.97-.79l5.42-3c1.16-.65 3.04-.65 4.2 0l5.42 3c.35.19.68.47.97.79.4.47.26 1.22-.29 1.54zM11.43 14.139v6.82c0 .76-.77 1.26-1.45.93-2.06-1.01-5.53-2.9-5.53-2.9-1.22-.69-2.22-2.43-2.22-3.86v-5.16c0-.79.83-1.29 1.51-.9l7.19 4.17c.3.19.5.53.5.9zM12.57 14.139v6.82c0 .76.77 1.26 1.45.93 2.06-1.01 5.53-2.9 5.53-2.9 1.22-.69 2.22-2.43 2.22-3.86v-5.16c0-.79-.83-1.29-1.51-.9l-7.19 4.17c-.3.19-.5.53-.5.9z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.39 9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.97c1.14-.63 3.01-.63 4.15 0l5.34 2.97c1.21.67 2.2 2.35 2.2 3.73v5.65c0 1.38-.99 3.06-2.2 3.73l-5.34 2.97c-1.14.63-3.01.63-4.15 0l-5.34-2.97c-1.21-.67-2.2-2.35-2.2-3.73V14"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 13.24V9.58l-6.07-3.51-1.05-.6L7.51 4.1"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.1 6.94c0 .54-.29 1.03-.75 1.28l-1.74.94-1.48.79-3.07 1.66c-.33.18-.69.27-1.06.27-.37 0-.73-.09-1.06-.27L4.65 8.22c-.46-.25-.75-.74-.75-1.28s.29-1.03.75-1.28L6.62 4.6l1.57-.85 2.75-1.48c.66-.36 1.46-.36 2.12 0l6.29 3.39c.46.25.75.74.75 1.28zM9.9 12.79L4.05 9.86c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.94-.52-1.8-1.38-2.23zM22.03 11.15v5.53c0 .95-.529 1.81-1.389 2.24l-5.85 2.93a1.433 1.433 0 01-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l2.15-1.07 1.5-.75 2.2-1.1c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22z" opacity=".4"/>
  <path d="M17.61 9.16l-1.48.79L6.62 4.6l1.57-.85 9.18 5.18c.1.06.18.14.24.23zM17.75 10.97v2.27c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.52l1.5-.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.93 2.48L4.59 5.45c-1.21.67-2.2 2.35-2.2 3.73v5.65c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.18c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.15-.64-3.01-.64-4.15 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 13.24V9.58L7.51 4.1"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 13.3c-.13 0-.26-.03-.38-.1L2.79 8.09a.752.752 0 01-.27-1.03.75.75 0 011.03-.27L12 11.68l8.4-4.86a.76.76 0 011.03.27c.21.36.08.82-.27 1.03l-8.77 5.08a.94.94 0 01-.39.1z"/>
  <path d="M12 22.36c-.41 0-.75-.34-.75-.75v-9.07c0-.41.34-.75.75-.75s.75.34.75.75v9.07c0 .41-.34.75-.75.75z"/>
  <path d="M12 22.75c-.88 0-1.75-.19-2.44-.57l-5.34-2.97c-1.45-.8-2.58-2.73-2.58-4.39V9.17c0-1.66 1.13-3.58 2.58-4.39l5.34-2.96c1.37-.76 3.51-.76 4.88 0l5.34 2.97c1.45.8 2.58 2.73 2.58 4.39v5.65c0 1.66-1.13 3.58-2.58 4.39l-5.34 2.96c-.69.38-1.56.57-2.44.57zm0-20c-.63 0-1.25.13-1.71.38L4.95 6.1c-.96.54-1.81 1.97-1.81 3.08v5.65c0 1.1.85 2.54 1.81 3.08l5.34 2.97c.91.51 2.51.51 3.42 0l5.34-2.97c.96-.54 1.81-1.97 1.81-3.08V9.18c0-1.1-.85-2.54-1.81-3.08l-5.34-2.97c-.46-.25-1.08-.38-1.71-.38z"/>
  <path d="M17.001 13.99c-.41 0-.75-.34-.75-.75v-3.22l-9.12-5.26a.742.742 0 01-.27-1.02.74.74 0 011.02-.27l9.49 5.48c.23.13.38.38.38.65v3.66c0 .39-.34.73-.75.73z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"/>
    <path d="M9.93 2.48L4.59 5.45c-1.21.67-2.2 2.35-2.2 3.73v5.65c0 1.38.99 3.06 2.2 3.73l5.34 2.97c1.14.63 3.01.63 4.15 0l5.34-2.97c1.21-.67 2.2-2.35 2.2-3.73V9.18c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97c-1.15-.64-3.01-.64-4.15 0z"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 13.24V9.58L7.51 4.1"/>`,
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
