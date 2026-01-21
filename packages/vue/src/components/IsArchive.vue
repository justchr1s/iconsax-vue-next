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
    content: `<path d="M16 9.75H8c-.69 0-1.25.56-1.25 1.25v1.05c.03-.01.05-.02.08-.03.12-.06.25-.1.38-.14.06-.02.12-.04.19-.06.2-.04.4-.07.61-.07h8c.21 0 .41.03.61.07.06.01.12.04.19.06.13.04.26.08.38.14.03.01.06.02.08.03V11A1.28 1.28 0 0016 9.75zM16 13.25H8c-.69 0-1.25.56-1.25 1.25v.5H9.5c.41 0 .75.34.75.75 0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75c0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25zM16 6.5H8c-.69 0-1.25.56-1.25 1.25v.81c.38-.19.8-.31 1.25-.31h8c.45 0 .87.12 1.25.31v-.81c0-.69-.56-1.25-1.25-1.25z"/>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM19 16.5h-3.84A3.258 3.258 0 0112 19c-1.53 0-2.82-1.07-3.16-2.5H5c-.41 0-.75-.34-.75-.75S4.59 15 5 15h.25V7.75C5.25 6.23 6.48 5 8 5h8c1.52 0 2.75 1.23 2.75 2.75V15H19c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM19 15.75h-1M6 15.75H5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14.5v1.25h-3.5a2.5 2.5 0 01-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.5 9.97V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3V9.97c.16.02.33.03.5.03h14c.17 0 .34-.01.5-.03z" opacity=".4"/>
  <path d="M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5c0-2 1-3 3-3h14c2 0 3 1 3 3zM13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM19 15.75h-1M6 15.75H5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14.5v1.25h-3.5a2.5 2.5 0 01-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M18 15.25c-.41 0-.75-.34-.75-.75 0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.75C5.25 6.23 6.48 5 8 5h8c1.52 0 2.75 1.23 2.75 2.75v6.75c0 .41-.34.75-.75.75zm-10-3.5h8c.45 0 .88.11 1.25.3v-4.3c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v4.3c.37-.19.8-.3 1.25-.3z"/>
  <path d="M19 16.5h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75zM6 16.5H5c-.41 0-.75-.34-.75-.75S4.59 15 5 15h1c.41 0 .75.34.75.75s-.34.75-.75.75zM18 14.75c-.41 0-.75-.34-.75-.75v-3c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M12 19c-1.53 0-2.82-1.07-3.16-2.5H6c-.41 0-.75-.34-.75-.75V14.5c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v1.25c0 .41-.34.75-.75.75h-2.84A3.258 3.258 0 0112 19zm-5.25-4H9.5c.41 0 .75.34.75.75 0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75c0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v.5z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM19 15.75h-1M6 15.75H5"/>
    <path d="M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3"/>
    <path d="M18 14.5v1.25h-3.5a2.5 2.5 0 01-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2z"/>
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
