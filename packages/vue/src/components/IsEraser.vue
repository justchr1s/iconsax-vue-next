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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-3.67 13.75l-1.26 1.26c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.64-1.69 0-2.34l1.27-1.26c.2-.19.51-.19.71 0l3.56 3.56c.19.2.19.52-.01.71zm4.49-4.49l-3.08 3.08c-.2.2-.51.2-.71 0l-3.56-3.56c-.2-.2-.2-.51 0-.71l3.08-3.08c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.99 15.08l1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34zM9.309 10.42l4.27 4.27"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.03 22h-7.04a.749.749 0 110-1.5h7.04a.749.749 0 110 1.5z"/>
  <path d="M15.41 16.34l-4.75 4.75a3.027 3.027 0 01-4.07.18c-.07-.06-.13-.12-.19-.18l-.87-.87-1.79-1.79-.86-.86c-.07-.07-.13-.14-.19-.21a3.01 3.01 0 01.19-4.04l3.69-3.68 1.06-1.06 7.78 7.76z" opacity=".4"/>
  <path d="M21.12 10.64l-5.71 5.7-7.78-7.76 5.71-5.7a3.024 3.024 0 014.26 0l3.52 3.51a3.012 3.012 0 010 4.25z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.99 15.08l1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34zM9.31 10.42l4.27 4.27"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M10.091 18.25c-.62 0-1.23-.23-1.7-.7l-1.94-1.94c-.94-.94-.94-2.46 0-3.4l5.75-5.75c.94-.94 2.46-.94 3.4 0l1.94 1.94c.94.94.94 2.46 0 3.4l-5.75 5.75c-.47.46-1.08.7-1.7.7zm-2.57-3.7l1.94 1.94c.35.35.93.35 1.28 0l5.75-5.75c.35-.35.35-.93 0-1.28l-1.94-1.94a.911.911 0 00-1.28 0l-5.75 5.75c-.35.35-.35.92 0 1.28z"/>
  <path d="M13.58 15.44c-.19 0-.38-.07-.53-.22l-4.28-4.28a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l4.28 4.28c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M6.99 15.08l1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34zM9.309 10.42l4.27 4.27"/>
  </g>`
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
