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
    content: `<path d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
  <path d="M22 8.5c0 3.26-2.4 5.95-5.52 6.42v-.06c-.31-3.88-3.46-7.03-7.37-7.34h-.03A6.495 6.495 0 0115.5 2 6.5 6.5 0 0122 8.5zM5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2zM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5zM4.68 20.76A6.5 6.5 0 118.5 22M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2zM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
  <path d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5z" opacity=".4"/>
  <path d="M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2zM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2zM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.5 15.75c-.18 0-.38-.01-.57-.02a.751.751 0 01-.7-.69c-.22-2.79-2.49-5.05-5.27-5.27a.751.751 0 01-.69-.7c-.01-.19-.02-.38-.02-.57 0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25zM9.75 8.36c2.98.52 5.37 2.91 5.89 5.89a5.755 5.755 0 005.61-5.75c0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.5-5.75 5.61z"/>
  <path d="M8.5 22.75c-4 0-7.25-3.25-7.25-7.25a7.255 7.255 0 017.82-7.23c3.53.28 6.39 3.14 6.66 6.65.01.2.02.39.02.58 0 4-3.25 7.25-7.25 7.25zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75a5.757 5.757 0 005.73-6.22c-.22-2.77-2.48-5.04-5.27-5.26-.14-.01-.3-.02-.46-.02zM3 7.34a1.737 1.737 0 01-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h2.59a1.752 1.752 0 011.24 2.99L4.24 6.83c-.34.33-.78.51-1.24.51zm0-4.59c-.14 0-.25.11-.25.25v2.59c0 .15.1.21.15.23.06.02.17.05.27-.05l2.59-2.59c.1-.1.08-.21.05-.27-.03-.06-.09-.15-.23-.15H3v-.01zM20.999 22.75h-2.59a1.752 1.752 0 01-1.24-2.99l2.59-2.59c.5-.5 1.25-.65 1.91-.38.66.27 1.08.91 1.08 1.62V21c0 .96-.79 1.75-1.75 1.75zm-.01-4.59a.24.24 0 00-.17.08l-2.59 2.59c-.1.1-.08.21-.05.27.03.06.09.15.23.15h2.59c.14 0 .25-.11.25-.25v-2.59c0-.15-.1-.21-.15-.23a.36.36 0 00-.11-.02z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2zM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z" opacity=".4"/>`,
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
