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
    content: `<path d="M7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25v4.5C2 20.5 3.5 22 7.25 22zM21.25 10.5c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45c.21.36.1.82-.26 1.03-.36.21-.82.1-1.03-.26L13.6 3.13a.745.745 0 01-.01-.75c.14-.23.39-.38.66-.38C18.52 2 22 5.48 22 9.75c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 16.75C2 20.5 3.5 22 7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25M22 9c0-3.87-3.13-7-7-7l1.05 1.75"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z" opacity=".4"/>
  <path d="M12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-1.14.33-2.25.97-3.19.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a4.26 4.26 0 003.54 6.61 4.26 4.26 0 004.25-4.25c0-2.24-1.74-4.08-3.94-4.24l.41.3c.33.24.41.71.16 1.05a.75.75 0 01-1.05.16L9.9 8.69a.769.769 0 01-.18-.18c-.01-.01-.02-.02-.03-.04a.917.917 0 01-.09-.23.942.942 0 01-.01-.29l.03-.12c.02-.07.06-.13.1-.2.02-.01.04-.03.06-.05l1.66-1.9c.27-.31.75-.34 1.06-.07.31.27.34.75.07 1.06l-.37.43a5.76 5.76 0 015.56 5.75c-.01 3.15-2.59 5.73-5.76 5.73z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25v4.5C2 20.5 3.5 22 7.25 22zM22 9c0-3.87-3.13-7-7-7l1.05 1.75"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.75 22.75h-4.5c-4.15 0-6-1.85-6-6v-4.5c0-4.15 1.85-6 6-6h4.5c4.15 0 6 1.85 6 6v4.5c0 4.15-1.85 6-6 6zm-4.5-15c-3.32 0-4.5 1.18-4.5 4.5v4.5c0 3.32 1.18 4.5 4.5 4.5h4.5c3.32 0 4.5-1.18 4.5-4.5v-4.5c0-3.32-1.18-4.5-4.5-4.5h-4.5zM22 9.75c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45c.21.36.1.82-.26 1.03-.36.21-.82.1-1.03-.26l-1.05-1.75a.745.745 0 01-.01-.75c.14-.23.39-.38.66-.38 4.27 0 7.75 3.48 7.75 7.75 0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25v4.5C2 20.5 3.5 22 7.25 22z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9c0-3.87-3.13-7-7-7l1.05 1.75" opacity=".4"/>`,
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
