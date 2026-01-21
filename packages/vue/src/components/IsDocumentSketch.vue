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
    content: `<path d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1zm-8.1 5.39l-1.86 1.86c-.23.23-.55.36-.89.36-.34 0-.65-.13-.89-.36L6.9 15.58c-.41-.41-.48-1.1-.15-1.58l.85-1.28c.21-.33.65-.56 1.04-.56h2.01c.39 0 .82.23 1.04.56l.86 1.28c.31.48.25 1.17-.15 1.58z"/>
  <path d="M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.29 17.7c-.35.35-.93.35-1.28 0l-2.46-2.46a.935.935 0 01-.11-1.14l1.13-1.7c.15-.22.49-.4.75-.4h2.65c.27 0 .61.18.75.4l1.13 1.7c.23.34.18.85-.11 1.14"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9c0-5 2-7 7-7h5M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02M18 10c-3 0-4-1-4-4V2l8 8"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1z" opacity=".4"/>
  <path d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54zM12.55 14l-.85-1.28c-.21-.33-.65-.56-1.04-.56H8.64c-.39 0-.82.23-1.04.56L6.75 14c-.33.48-.26 1.17.15 1.58l1.86 1.86c.24.23.56.36.89.36.33 0 .65-.13.89-.36l1.86-1.86c.4-.41.46-1.1.15-1.58z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.32 12h2.65c.27 0 .61.18.75.4l1.13 1.7c.23.34.18.85-.11 1.14l-2.46 2.46c-.35.35-.93.35-1.28 0l-2.46-2.46a.935.935 0 01-.11-1.14l1.13-1.7c.16-.22.5-.4.76-.4z" clip-rule="evenodd"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z"/>
  <path d="M22 10.75h-4c-3.42 0-4.75-1.33-4.75-4.75V2c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8c.21.21.28.54.16.82a.74.74 0 01-.69.46zm-7.25-6.94V6c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44zM9.65 18.71c-.44 0-.86-.17-1.17-.48l-2.46-2.46c-.54-.54-.63-1.45-.21-2.09l1.13-1.7c.28-.43.86-.74 1.38-.74h2.65c.51 0 1.09.31 1.38.74l1.13 1.69c.42.63.33 1.55-.21 2.09l-2.46 2.46c-.3.32-.72.49-1.16.49zm-1.32-5.96c-.04.01-.12.05-.14.08l-1.12 1.69c-.03.04-.02.16.02.2l2.46 2.46c.05.05.17.05.22 0l2.46-2.46c.04-.04.05-.15.02-.2l-1.13-1.69a.458.458 0 00-.14-.07l-2.65-.01z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 22 22',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9v5c0 5-2 7-7 7H8c-5 0-7-2-7-7V8c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9h-4c-3 0-4-1-4-4V1l8 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.32 11h2.65c.27 0 .61.18.75.4l1.13 1.7c.23.34.18.85-.11 1.14L9.28 16.7c-.35.35-.93.35-1.28 0l-2.46-2.46a.935.935 0 01-.11-1.14l1.13-1.7c.16-.22.5-.4.76-.4z" clip-rule="evenodd" opacity=".4"/>`,
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
