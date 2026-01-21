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
    content: `<path d="M19.512 5.85l-5.94-3.43c-.97-.56-2.17-.56-3.15 0l-5.93 3.43a3.15 3.15 0 00-1.57 2.73v6.84c0 1.12.6 2.16 1.57 2.73l5.94 3.43c.97.56 2.17.56 3.15 0l5.94-3.43a3.15 3.15 0 001.57-2.73V8.58a3.192 3.192 0 00-1.58-2.73zm-5.26 7.55l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4v-2.4c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.92 8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.56 1.57 1.6 1.57 2.73v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 01-1.57-2.73v-2.76"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.75 12v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4V12z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 01-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73z" opacity=".4"/>
  <path d="M9.75 12v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4V12z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 01-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.75 12v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4V12z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-.67 0-1.35-.17-1.95-.52L4.11 18.8c-1.2-.7-1.95-1.99-1.95-3.38V8.58c0-1.39.75-2.68 1.95-3.38l5.94-3.43c1.2-.7 2.69-.7 3.9 0l5.94 3.43c1.2.7 1.95 1.99 1.95 3.38v6.84c0 1.39-.75 2.68-1.95 3.38l-5.94 3.43c-.6.35-1.28.52-1.95.52zm0-20c-.41 0-.83.11-1.2.32L4.86 6.5c-.74.43-1.2 1.22-1.2 2.08v6.84c0 .85.46 1.65 1.2 2.08l5.94 3.43c.74.43 1.66.43 2.4 0l5.94-3.43c.74-.43 1.2-1.22 1.2-2.08V8.58c0-.85-.46-1.65-1.2-2.08L13.2 3.07c-.37-.21-.79-.32-1.2-.32z"/>
  <path d="M11.09 15.67c-.36 0-.7-.09-1.01-.26-.69-.4-1.09-1.21-1.09-2.22v-2.4c0-1.01.4-1.82 1.09-2.22.69-.4 1.59-.34 2.46.17l2.08 1.2c.87.5 1.38 1.25 1.38 2.05 0 .8-.5 1.54-1.38 2.05l-2.08 1.2c-.48.29-.98.43-1.45.43zm.01-5.85c-.1 0-.19.02-.26.06-.21.12-.34.46-.34.92v2.4c0 .45.13.79.34.92.21.12.57.06.96-.17l2.08-1.2c.39-.23.62-.51.62-.75s-.23-.52-.62-.75l-2.08-1.2c-.26-.15-.51-.23-.7-.23z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 01-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.75 12v-1.2c0-1.54 1.09-2.17 2.42-1.4l1.04.6 1.04.6c1.33.77 1.33 2.03 0 2.8l-1.04.6-1.04.6c-1.33.77-2.42.14-2.42-1.4V12z" opacity=".4"/>`,
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
