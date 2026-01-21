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
    content: `<path d="M20.04 6.822l-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.35-.87-3.01-1.97-3.78zm-3.16 9.37c0 .09-.02.18-.05.27-.07.17-.21.31-.38.38-.09.04-.18.05-.27.05h-1.86c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h.18l-2.11-2.11-1.02 1.52c-.12.17-.3.29-.51.31a.676.676 0 01-.56-.2l-2.98-2.98a.706.706 0 010-.99c.27-.28.71-.27.99 0l2.38 2.38 1.02-1.52c.12-.17.3-.29.51-.31.22-.02.41.05.56.2l2.72 2.72v-.18c0-.39.31-.7.7-.7.39 0 .7.31.7.7v1.86h-.02z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.17 14l-.47.7-3.2-3.2M16.5 16.5l-1.51-1.51L14 14M14.5 16.5h2v-2"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.04 6.82l-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13L3.78 6.83c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62V10.6c0-1.35-.87-3.01-1.97-3.78z" opacity=".4"/>
  <path d="M16.88 14.33c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v.18l-2.72-2.72a.688.688 0 00-.56-.2c-.21.02-.4.13-.51.31l-1.02 1.52-2.38-2.38a.706.706 0 00-.99 0c-.27.27-.27.71 0 .99l2.98 2.98c.15.15.35.22.56.2.21-.02.4-.13.51-.31l1.02-1.52 2.11 2.11h-.18c-.39 0-.7.31-.7.7 0 .39.31.7.7.7h1.86c.09 0 .18-.02.27-.05.17-.07.31-.21.38-.38.04-.09.05-.18.05-.27v-1.86h.02z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.02 2.84l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 16.5l-4.2-4.2-1.6 2.4-3.2-3.2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 16.5h2v-2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.79 22.74H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2c1.62-1.26 4.21-1.32 5.89-.14l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96zM9.48 3.43l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 003.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46V10.5c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09z"/>
  <path d="M16.5 17.25c-.19 0-.38-.07-.53-.22l-3.55-3.55-1.09 1.64c-.12.19-.33.31-.55.33a.73.73 0 01-.6-.22l-3.2-3.2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.55 2.55 1.09-1.64c.12-.19.33-.31.55-.33.23-.02.45.06.6.22l4.2 4.2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M16.5 17.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V14.5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.02 2.84l-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M16.5 16.5l-4.2-4.2-1.6 2.4-3.2-3.2"/>
    <path d="M14.5 16.5h2v-2"/>
  </g>`,
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
