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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.01 16.25c-1.13 0-2.05-.92-2.05-2.05 0-.66.32-1.24.81-1.62-.42-1.1-1.47-1.86-2.65-1.82l-2.06.01h-.01c-.61 0-1.19-.18-1.68-.49v2.02c.76.3 1.3 1.04 1.3 1.9 0 1.13-.92 2.05-2.05 2.05s-2.05-.92-2.05-2.05c0-.87.54-1.6 1.3-1.9V9.95a2.21 2.21 0 01-1.3-2c0-1.21.99-2.2 2.2-2.2 1.21 0 2.2.99 2.2 2.2 0 .98-.65 1.8-1.54 2.09.2.73.86 1.24 1.62 1.24h.01l2.06-.01h.02c1.84 0 3.49 1.17 4.09 2.91 1.03.11 1.84.97 1.84 2.03a2.066 2.066 0 01-2.06 2.04z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M7.8 10.2v4.2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.95 9.9a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9zM7.8 18a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM16.2 18a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.88 10.2a2.425 2.425 0 002.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M16.41 14.17a4.341 4.341 0 00-4.09-2.91h-.02l-2.06.01h-.01c-.76 0-1.42-.51-1.62-1.24.89-.28 1.54-1.11 1.54-2.09 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .89.54 1.66 1.3 2v4.34c-.76.3-1.3 1.04-1.3 1.9 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c0-.87-.54-1.6-1.3-1.9v-2.02c.49.31 1.07.49 1.68.49h.01l2.06-.01c1.18-.04 2.23.72 2.65 1.82-.49.38-.81.96-.81 1.62 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c.01-1.04-.8-1.9-1.83-2.01z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.8 10.2v4.2M7.95 9.9a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9zM7.8 18a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM16.2 18a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.88 10.2a2.425 2.425 0 002.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.8 15.15c-.41 0-.75-.34-.75-.75v-4.2c0-.41.34-.75.75-.75s.75.34.75.75v4.2c0 .41-.34.75-.75.75z"/>
  <path d="M7.95 10.65c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7zm0-3.9c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2zM7.8 18.75c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55zm0-3.6a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM16.2 18.75c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55zm0-3.6a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1z"/>
  <path d="M15.7 15.17a.75.75 0 01-.71-.5c-.4-1.14-1.47-1.9-2.68-1.9h-.01l-2.06.01h-.01c-1.45 0-2.72-.98-3.08-2.38-.1-.4.14-.81.54-.91.39-.1.81.14.91.54.19.74.86 1.26 1.63 1.26h.01l2.06-.01h.02c1.84 0 3.49 1.17 4.1 2.91.14.39-.07.82-.46.96-.09.01-.18.02-.26.02z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M7.8 10.2v4.2M7.95 9.9a1.95 1.95 0 100-3.9 1.95 1.95 0 000 3.9zM7.8 18a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM16.2 18a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z"/>
    <path d="M7.879 10.2a2.425 2.425 0 002.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
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
