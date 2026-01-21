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
    content: `<path d="M19.73 16.1c0-.03.02-.06.02-.1V6.5c0-1.52-1.23-2.75-2.75-2.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 00-1.06-.1l-3 2.5a.761.761 0 000 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 00.48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .04.02.07.02.1-1.3.33-2.27 1.5-2.27 2.9 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.4-.97-2.57-2.27-2.9zM13.48 18.92l-3-2.5a.75.75 0 00-1.06.1.75.75 0 00.1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.04-.02-.07-.02-.1C7.03 7.57 8 6.4 8 5c0-1.66-1.34-3-3-3S2 3.34 2 5c0 1.4.97 2.57 2.27 2.9 0 .03-.02.06-.02.1v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 000-1.16z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2l-3 2.5L14 7M19 22a3 3 0 100-6 3 3 0 000 6zM5 12v5.5c0 1.1.9 2 2 2h5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 22l3-2.5-3-2.5M5 8a3 3 0 100-6 3 3 0 000 6z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 3.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 00-1.06-.1l-3 2.5a.761.761 0 000 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 00.48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .41.34.75.75.75s.75-.34.75-.75V6.5c0-1.52-1.23-2.75-2.75-2.75z" opacity=".4"/>
  <path d="M19 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M13.48 18.92l-3-2.5a.75.75 0 00-1.06.1.75.75 0 00.1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 000-1.16z" opacity=".4"/>
  <path d="M5 8a3 3 0 100-6 3 3 0 000 6z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2l-3 2.5L14 7M19 22a3 3 0 100-6 3 3 0 000 6zM5 8v9.5c0 1.1.9 2 2 2h5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 22l3-2.5-3-2.5M5 8a3 3 0 100-6 3 3 0 000 6z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 16.75c-.41 0-.75-.34-.75-.75V6.5c0-.69-.56-1.25-1.25-1.25h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.52 0 2.75 1.23 2.75 2.75V16c0 .41-.34.75-.75.75z"/>
  <path d="M14 7.75c-.17 0-.34-.06-.48-.17l-3-2.5a.761.761 0 010-1.16l3-2.5a.75.75 0 011.06.1c.27.32.22.79-.1 1.06L12.17 4.5l2.31 1.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27zM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zM12.5 20.25H7c-1.52 0-2.75-1.23-2.75-2.75V8c0-.41.34-.75.75-.75s.75.34.75.75v9.5c0 .69.56 1.25 1.25 1.25h5.5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M10 22.75a.75.75 0 01-.48-1.33l2.31-1.92-2.31-1.92a.758.758 0 01-.1-1.06c.27-.32.74-.36 1.06-.1l3 2.5a.761.761 0 010 1.16l-3 2.5c-.14.11-.31.17-.48.17zM5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 22a3 3 0 100-6 3 3 0 000 6z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"/>
    <path d="M14 2l-3 2.5L14 7M5 8v9.5c0 1.1.9 2 2 2h5.5"/>
    <path d="M10 22l3-2.5-3-2.5"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8a3 3 0 100-6 3 3 0 000 6z"/>`,
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
