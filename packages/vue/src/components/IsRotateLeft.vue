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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-1.14.33-2.25.97-3.19.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a4.26 4.26 0 003.54 6.61 4.26 4.26 0 004.25-4.25c0-2.24-1.74-4.08-3.94-4.24l.41.3c.33.24.41.71.16 1.05a.75.75 0 01-1.05.16L9.9 8.69a.769.769 0 01-.18-.18c-.01-.01-.02-.02-.03-.04a.917.917 0 01-.09-.23.942.942 0 01-.01-.29l.03-.12c.02-.07.06-.13.1-.2.02-.01.04-.03.06-.05l1.66-1.9c.27-.31.75-.34 1.06-.07.31.27.34.75.07 1.06l-.37.43a5.76 5.76 0 015.56 5.75c-.01 3.15-2.59 5.73-5.76 5.73z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.67 13.33c0 4.79-3.88 8.67-8.67 8.67s-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82m4.32-3.43c.87-.26 1.83-.43 2.89-.43 3.21 0 6.02 1.75 7.51 4.34M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.25 22h4.5C15.5 22 17 20.5 17 16.75v-4.5C17 8.5 15.5 7 11.75 7h-4.5C3.5 7 2 8.5 2 12.25v4.5C2 20.5 3.5 22 7.25 22z" opacity=".4"/>
  <path d="M21.25 10.5c-.41 0-.75-.34-.75-.75 0-2.96-2.06-5.44-4.83-6.09l.27.45c.21.36.1.82-.26 1.03-.36.21-.82.1-1.03-.26L13.6 3.13a.745.745 0 01-.01-.75c.14-.23.39-.38.66-.38C18.52 2 22 5.48 22 9.75c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.11 5.08c.87-.26 1.83-.43 2.89-.43 4.79 0 8.67 3.88 8.67 8.67s-3.88 8.67-8.67 8.67-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-5.2 0-9.42-4.23-9.42-9.42 0-1.87.55-3.68 1.59-5.24.23-.34.7-.44 1.04-.21.34.23.44.7.21 1.04a7.925 7.925 0 006.59 12.32c4.37 0 7.92-3.55 7.92-7.92S16.37 5.4 12 5.4c-.92 0-1.82.13-2.67.39a.75.75 0 01-.94-.5c-.12-.4.1-.82.5-.94 1-.3 2.04-.46 3.11-.46 5.2 0 9.42 4.23 9.42 9.42 0 5.19-4.22 9.44-9.42 9.44z"/>
  <path d="M7.87 6.07a.748.748 0 01-.57-1.24l2.89-3.32c.27-.31.75-.35 1.06-.07.31.27.34.75.07 1.06L8.43 5.81c-.15.17-.36.26-.56.26z"/>
  <path d="M11.24 8.53c-.15 0-.31-.05-.44-.14L7.42 5.92a.751.751 0 01.89-1.21l3.37 2.46c.33.24.41.71.16 1.05a.71.71 0 01-.6.31z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.11 5.08c.87-.26 1.83-.43 2.89-.43 4.79 0 8.67 3.88 8.67 8.67s-3.88 8.67-8.67 8.67-8.67-3.88-8.67-8.67c0-1.78.54-3.44 1.46-4.82" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.87 5.32L10.76 2M7.87 5.32l3.37 2.46"/>`,
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
