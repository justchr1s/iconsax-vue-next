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
    content: `<path d="M21.97 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1zM14.41 5.18c.05-.2.08-.39.09-.6.03-1.16-.68-2.18-1.8-2.48a2.506 2.506 0 00-3.11 3.08A8.001 8.001 0 003.27 13v1.5c0 .55.45 1 1 1h15.45c.55 0 1-.45 1-1V13c0-3.84-2.7-7.04-6.31-7.82zm.59 6.57H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3zM4.62 8.56A8.015 8.015 0 0111.27 5h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82v4H3.27v-4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45c-.58 0-1.14.06-1.68.18-.06-.22-.09-.44-.09-.68a2.5 2.5 0 015 0zM15 11H9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.97 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1z"/>
  <path d="M20.72 13v4H3.27v-4a8.001 8.001 0 018-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82z" opacity=".4"/>
  <path d="M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45c-.58 0-1.14.06-1.68.18-.06-.22-.09-.44-.09-.68a2.5 2.5 0 015 0zM15 11.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3zM20.72 13v4H3.27v-4a8.001 8.001 0 018-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45c-.58 0-1.14.06-1.68.18-.06-.22-.09-.44-.09-.68a2.5 2.5 0 015 0zM15 11H9"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.97 22.75h-14c-3.75 0-3.75-2.08-3.75-3.75v-1c0-.96.79-1.75 1.75-1.75h18c.96 0 1.75.79 1.75 1.75v1c0 1.67 0 3.75-3.75 3.75zm-16-5c-.14 0-.25.11-.25.25v1c0 1.64 0 2.25 2.25 2.25h14c2.25 0 2.25-.61 2.25-2.25v-1c0-.14-.11-.25-.25-.25h-18z"/>
  <path d="M20.72 17.75H3.27c-.41 0-.75-.34-.75-.75v-4c0-4.1 2.91-7.7 6.91-8.55.59-.13 1.21-.2 1.84-.2h1.45c.64 0 1.26.07 1.85.2 4 .86 6.9 4.46 6.9 8.55v4c0 .41-.33.75-.75.75zm-16.7-1.5h15.95V13c0-3.39-2.4-6.37-5.72-7.09-.49-.11-1-.16-1.53-.16h-1.45c-.52 0-1.03.05-1.52.16C6.43 6.62 4.02 9.6 4.02 13v3.25z"/>
  <path d="M9.59 5.93c-.33 0-.63-.22-.72-.55A3.256 3.256 0 0112 1.25a3.256 3.256 0 013.13 4.13c-.1.38-.48.62-.88.53-.49-.11-1-.16-1.53-.16h-1.45c-.52 0-1.03.05-1.52.16-.05.01-.1.02-.16.02zm1.68-1.68h1.45c.34 0 .69.02 1.02.06-.09-.88-.84-1.56-1.74-1.56s-1.64.68-1.74 1.56c.34-.04.67-.06 1.01-.06zM15 11.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.97 22h-14c-3 0-3-1.35-3-3v-1c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v1c0 1.65 0 3-3 3zM20.72 13v4H3.27v-4a8.001 8.001 0 018-8h1.45c.58 0 1.15.06 1.69.18 3.61.78 6.31 3.98 6.31 7.82z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 4.5c0 .24-.03.46-.09.68-.54-.12-1.11-.18-1.69-.18h-1.45c-.58 0-1.14.06-1.68.18-.06-.22-.09-.44-.09-.68a2.5 2.5 0 015 0zM15 11H9" opacity=".34"/>`,
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
