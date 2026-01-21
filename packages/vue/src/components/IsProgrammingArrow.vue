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
    content: `<path d="M5.75 16.11V7.89A2.983 2.983 0 008 5c0-1.66-1.34-3-3-3S2 3.34 2 5c0 1.4.96 2.56 2.25 2.89v8.21A2.996 2.996 0 005 22c1.66 0 3-1.34 3-3 0-1.4-.96-2.56-2.25-2.89zM19.75 16.11V6.5c0-1.52-1.23-2.75-2.75-2.75h-2.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 00-1.06-.1l-3 2.5a.761.761 0 000 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 00.48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25v9.61A2.983 2.983 0 0016 19c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.4-.96-2.56-2.25-2.89z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 2l-3 2.5L15 7M5 9v7M5.25 2C3.46 2 2 3.46 2 5.25S3.46 8.5 5.25 8.5 8.5 7.04 8.5 5.25M5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.75 16.11V7.9A2.992 2.992 0 005 2.01c-1.66 0-3 1.34-3 3 0 1.4.96 2.56 2.25 2.89v8.21A2.992 2.992 0 005 22c1.66 0 3-1.34 3-3 0-1.4-.96-2.56-2.25-2.89z" opacity=".4"/>
  <path d="M19.75 16.11V6.5c0-1.52-1.23-2.75-2.75-2.75h-2.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 00-1.06-.1l-3 2.5a.761.761 0 000 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 00.48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25v9.61A2.992 2.992 0 0019 22c1.66 0 3-1.34 3-3 0-1.4-.96-2.56-2.25-2.89z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 2l-3 2.5L15 7M5 9v7M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 16.75c-.41 0-.75-.34-.75-.75V6.5c0-.69-.56-1.25-1.25-1.25h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.52 0 2.75 1.23 2.75 2.75V16c0 .41-.34.75-.75.75z"/>
  <path d="M15 7.75c-.17 0-.34-.06-.48-.17l-3-2.5a.761.761 0 010-1.16l3-2.5a.75.75 0 011.06.1c.27.32.22.79-.1 1.06L13.17 4.5l2.31 1.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27zM5 16.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75z"/>
  <path d="M5.25 9.25c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19 6.24 16.75 5 16.75zM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5"/>
    <path d="M15 2l-3 2.5L15 7"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9v7" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>`
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
    :fill="variant === 'bold' || variant === 'bulk' ? color : 'none'"
    :stroke="variant === 'linear' || variant === 'outline' || variant === 'broken' || variant === 'twotone' ? color : undefined"
    v-html="currentVariant?.content"
  />
</template>
