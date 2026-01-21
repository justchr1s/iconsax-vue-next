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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-5.97 19H7.91C5.2 21 3 18.8 3 16.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31c0 1.88 1.53 3.41 3.41 3.41h2.31a.749.749 0 110 1.5zm0-16.5H7.91C6.03 4.5 4.5 6.03 4.5 7.91v2.31a.749.749 0 11-1.5 0V7.91C3 5.2 5.2 3 7.91 3h2.31a.749.749 0 110 1.5zM21 16.09C21 18.8 18.8 21 16.09 21H14.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.39c1.88 0 3.41-1.53 3.41-3.41V14.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39zm0-5.87c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.91c0-1.88-1.53-3.41-3.41-3.41h-2.31a.749.749 0 110-1.5h2.31C18.8 3 21 5.2 21 7.91v2.31z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M2.75 9.97c-.41 0-.75-.33-.75-.75V6.91C2 4.2 4.2 2 6.91 2h2.31a.749.749 0 110 1.5H6.91C5.03 3.5 3.5 5.03 3.5 6.91v2.31c0 .42-.34.75-.75.75zM21.25 9.97c-.41 0-.75-.34-.75-.75V6.91c0-1.88-1.53-3.41-3.41-3.41h-2.31a.749.749 0 110-1.5h2.31C19.8 2 22 4.2 22 6.91v2.31c0 .42-.34.75-.75.75zM17.09 22H15.7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.39c1.88 0 3.41-1.53 3.41-3.41V15.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39C22 19.8 19.8 22 17.09 22zM9.22 22H6.91C4.2 22 2 19.8 2 17.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31c0 1.88 1.53 3.41 3.41 3.41h2.31a.749.749 0 110 1.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M18 12v-2M6 12h12H6zm0 0v-2 2zm0 0v2-2zm12 0v2-2zM12 6h2m-2 12V6v12zm0 0h2-2zm0 0h-2 2zm0-12h-2 2z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v.98c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75z"/>
  <path d="M13 11.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.74-3.75H14a.749.749 0 110-1.5h4.01c.3 0 .58.18.69.46.12.28.05.6-.16.82l-5.01 5.03c-.15.15-.34.22-.53.22z"/>
  <path d="M18.01 10.74c-.41 0-.75-.34-.75-.75V5.97c0-.41.34-.75.75-.75s.75.34.75.75v4.01c0 .42-.34.76-.75.76zM7.85 22.75h-2.7c-2.66 0-3.9-1.24-3.9-3.9v-2.7c0-2.66 1.24-3.9 3.9-3.9h2.7c2.66 0 3.9 1.24 3.9 3.9v2.7c0 2.66-1.24 3.9-3.9 3.9zm-2.7-9c-1.84 0-2.4.56-2.4 2.4v2.7c0 1.84.56 2.4 2.4 2.4h2.7c1.84 0 2.4-.56 2.4-2.4v-2.7c0-1.84-.56-2.4-2.4-2.4h-2.7z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".54">
    <path d="M18 12v-2M6 12h12H6zm0 0v-2 2zm0 0v2-2zm12 0v2-2zM12 6h2m-2 12V6v12zm0 0h2-2zm0 0h-2 2zm0-12h-2 2z"/>
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
