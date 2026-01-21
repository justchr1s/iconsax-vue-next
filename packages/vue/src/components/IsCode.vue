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
    content: `<path d="M21 10H3c-.55 0-1 .45-1 1v5.19c0 .2.01.4.03.6.2 3.08 2.1 4.98 5.18 5.18.2.02.4.03.6.03h8.38c.2 0 .4-.01.6-.03 3.08-.2 4.98-2.1 5.18-5.18.02-.2.03-.4.03-.6V11c0-.55-.45-1-1-1zM8 16.15c.34.5.8.91 1.33 1.18.38.18.53.63.34 1.01-.13.26-.4.41-.67.41-.11 0-.23-.03-.33-.08-.78-.38-1.44-.97-1.91-1.68-.4-.6-.4-1.38 0-1.98.47-.71 1.13-1.3 1.91-1.68.37-.19.82-.04 1 .33.19.38.04.83-.34 1.01-.53.27-.99.68-1.33 1.18-.06.09-.06.21 0 .3zm9.45.84c-.48.71-1.14 1.3-1.91 1.68a.742.742 0 01-1-.33.745.745 0 01.33-1.01c.54-.27 1-.68 1.33-1.18a.24.24 0 000-.3c-.33-.5-.79-.91-1.33-1.18a.745.745 0 01-.33-1.01c.18-.37.63-.52 1-.33.77.38 1.43.97 1.91 1.68.4.6.4 1.38 0 1.98zM22 7.81V8c0 .55-.45 1-1 1L3 9.01c-.55 0-1-.45-1-1v-.2c0-.2.01-.4.03-.6.2-3.08 2.1-4.98 5.18-5.18.2-.02.4-.03.6-.03h8.38c.2 0 .4.01.6.03 3.08.2 4.98 2.1 5.18 5.18.02.2.03.4.03.6z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13c-.66.33-1.21.82-1.62 1.43-.23.35-.23.79 0 1.14.41.61.96 1.1 1.62 1.43M15.21 13c.66.33 1.21.82 1.62 1.43.23.35.23.79 0 1.14-.41.61-.96 1.1-1.62 1.43"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M2.23 8.01L21.45 8"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M6.89 15.75c-.28 0-.54-.15-.67-.41a.745.745 0 01.34-1.01c.87-.43 1.61-1.09 2.14-1.89.18-.27.18-.61 0-.88-.54-.8-1.28-1.46-2.14-1.89a.74.74 0 01-.34-1.01c.18-.37.63-.52 1-.33 1.1.55 2.04 1.38 2.72 2.4a2.3 2.3 0 010 2.54 7.077 7.077 0 01-2.72 2.4c-.1.05-.22.08-.33.08zM17 15.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13c-.66.33-1.21.82-1.62 1.43-.23.35-.23.79 0 1.14.41.61.96 1.1 1.62 1.43M15.21 13c.66.33 1.21.82 1.62 1.43.23.35.23.79 0 1.14-.41.61-.96 1.1-1.62 1.43"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7zM2.23 8.01L21.45 8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.89 15.75c-.28 0-.54-.15-.67-.41a.745.745 0 01.34-1.01c.87-.43 1.61-1.09 2.14-1.89.18-.27.18-.61 0-.88-.54-.8-1.28-1.46-2.14-1.89a.74.74 0 01-.34-1.01c.18-.37.63-.52 1-.33 1.1.55 2.04 1.38 2.72 2.4a2.3 2.3 0 010 2.54 7.077 7.077 0 01-2.72 2.4c-.1.05-.22.08-.33.08zM17 15.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13c-.66.33-1.21.82-1.62 1.43-.23.35-.23.79 0 1.14.41.61.96 1.1 1.62 1.43M15.21 13c.66.33 1.21.82 1.62 1.43.23.35.23.79 0 1.14-.41.61-.96 1.1-1.62 1.43" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.23 8.01L21.45 8" opacity=".4"/>`,
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
