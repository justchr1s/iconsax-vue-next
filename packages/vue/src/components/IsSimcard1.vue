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
    content: `<path d="M19.54 6.54l-3.07-3.07A5.003 5.003 0 0012.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53zM11.5 18a.5.5 0 01-.5.5h-1c-1.65 0-3-1.35-3-3V15a.5.5 0 01.5-.5h3.75c.14 0 .25.11.25.25V18zm0-4.75c0 .14-.11.25-.25.25H7.5A.5.5 0 017 13v-.5c0-1.65 1.35-3 3-3h1a.5.5 0 01.5.5v3.25zM17 15.5c0 1.65-1.35 3-3 3h-1a.5.5 0 01-.5-.5v-3.25c0-.14.11-.25.25-.25h3.75a.5.5 0 01.5.5v.5zm0-2.5a.5.5 0 01-.5.5h-3.75c-.14 0-.25-.11-.25-.25V10a.5.5 0 01.5-.5h1c1.65 0 3 1.35 3 3v.5z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.54l-3.07-3.07A5.036 5.036 0 0012.93 2H8C5 2 3 4 3 7v5.98"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3zM12 9.5v9M7.5 14h9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.54 6.54l-3.07-3.07A5.003 5.003 0 0012.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53z" opacity=".4"/>
  <path d="M11.5 13.25V9.5H10c-1.65 0-3 1.35-3 3v1h4.25c.14 0 .25-.11.25-.25zM12.75 13.5H17v-1c0-1.65-1.35-3-3-3h-1.5v3.75c0 .14.11.25.25.25zM11.25 14.5H7v1c0 1.65 1.35 3 3 3h1.5v-3.75c0-.14-.11-.25-.25-.25zM12.5 14.75v3.75H14c1.65 0 3-1.35 3-3v-1h-4.25c-.14 0-.25.11-.25.25z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.54 6.54l-3.07-3.07A5.003 5.003 0 0012.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3zM12 9.5v9M7.5 14h9"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 22.75H8c-3.44 0-5.75-2.31-5.75-5.75V7c0-3.44 2.31-5.75 5.75-5.75h4.93c1.54 0 2.98.6 4.07 1.68L20.07 6a5.684 5.684 0 011.68 4.07V17c0 3.44-2.31 5.75-5.75 5.75zm-8-20C5.42 2.75 3.75 4.42 3.75 7v10c0 2.58 1.67 4.25 4.25 4.25h8c2.58 0 4.25-1.67 4.25-4.25v-6.93c0-1.14-.44-2.2-1.25-3L15.93 4c-.8-.8-1.87-1.24-3.01-1.24H8v-.01z"/>
  <path d="M9.5 18.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.56 16l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM14.5 18.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L15.44 16l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.54 6.54l-3.07-3.07A5.003 5.003 0 0012.93 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93c0-1.33-.53-2.6-1.46-3.53z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M10 18.5h4c1.65 0 3-1.35 3-3v-3c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v3c0 1.65 1.35 3 3 3zM12 9.5v9M7.5 14h9"/>
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
