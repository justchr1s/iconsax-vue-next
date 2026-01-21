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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM19 8.24c0 .55-.45 1-1 1h-2a.749.749 0 100 1.5h2c.55 0 1 .45 1 1v.51c0 .55-.45 1-1 1h-2c-.41 0-.75.34-.75.75s.34.75.75.75h2c.55 0 1 .45 1 1V16c0 1.66-1.34 3-3 3H8c-1.66 0-3-1.34-3-3v-.5c0-.55.45-1 1-1h1.48a2.5 2.5 0 002.49-2.76c-.13-1.3-1.32-2.24-2.63-2.24H6c-.55 0-1-.45-1-1V8c0-1.66 1.34-3 3-3h8c1.66 0 3 1.34 3 3v.24zM5 12c0-.55.45-1 1-1h1c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 19h8c2 0 3-1 3-3V8c0-2-1-3-3-3H8C6 5 5 6 5 8v8c0 2 1 3 3 3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9.5h2.48a2.5 2.5 0 010 5H5M19 9.99h-3M19 14h-3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.2 12h.1"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M16 9.24h2c.55 0 1-.45 1-1V8c0-1.66-1.34-3-3-3H8C6.34 5 5 6.34 5 8v.5c0 .55.45 1 1 1h1.34c1.31 0 2.5.94 2.63 2.25a2.5 2.5 0 01-2.49 2.76H6c-.55 0-1 .45-1 1v.5c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3v-.25c0-.55-.45-1-1-1h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.55 0 1-.45 1-1v-.51c0-.55-.45-1-1-1h-2c-.41 0-.75-.33-.75-.75s.34-.76.75-.76z"/>
  <path d="M7 13H6c-.55 0-1-.45-1-1s.45-1 1-1h1c.55 0 1 .45 1 1s-.45 1-1 1z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 19h8c2 0 3-1 3-3V8c0-2-1-3-3-3H8C6 5 5 6 5 8v8c0 2 1 3 3 3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9.5h2.48a2.5 2.5 0 010 5H5M19 9.99h-3M19 14h-3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.2 12h.1"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M16 19.75H8c-2.42 0-3.75-1.33-3.75-3.75V8c0-2.42 1.33-3.75 3.75-3.75h8c2.42 0 3.75 1.33 3.75 3.75v8c0 2.42-1.33 3.75-3.75 3.75zm-8-14c-1.58 0-2.25.67-2.25 2.25v8c0 1.58.67 2.25 2.25 2.25h8c1.58 0 2.25-.67 2.25-2.25V8c0-1.58-.67-2.25-2.25-2.25H8z"/>
  <path d="M7.48 15.25H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.48c.97 0 1.75-.79 1.75-1.75s-.79-1.75-1.75-1.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.48c1.79 0 3.25 1.46 3.25 3.25a3.25 3.25 0 01-3.25 3.25zM19 10.74h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM19 14.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M7.25 13c-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21a.99.99 0 01-.29-.71c0-.26.11-.52.29-.71.28-.27.72-.37 1.09-.21.13.05.24.12.33.21.18.19.29.45.29.71 0 .27-.1.52-.29.71-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M8 19h8c2 0 3-1 3-3V8c0-2-1-3-3-3H8C6 5 5 6 5 8v8c0 2 1 3 3 3z"/>
    <path d="M5 9.5h2.48a2.5 2.5 0 010 5H5M19 9.99h-3M19 14h-3"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M7.2 12h.1" opacity=".4"/>`,
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
