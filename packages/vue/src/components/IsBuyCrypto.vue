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
    content: `<path d="M22 8.5c0 3.26-2.4 5.95-5.52 6.42v-.06c-.31-3.88-3.46-7.03-7.37-7.34h-.03A6.495 6.495 0 0115.5 2 6.5 6.5 0 0122 8.5z"/>
  <path d="M14.98 14.98A6.509 6.509 0 008.5 9a6.5 6.5 0 106.48 5.98zm-5.6 1.4L8.5 18l-.88-1.62L6 15.5l1.62-.88L8.5 13l.88 1.62 1.62.88-1.62.88z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5zM4.68 20.76A6.5 6.5 0 118.5 22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.62 14.62L8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5l1.62-.88z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5z"/>
  <path d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" opacity=".4"/>
  <path d="M7.62 14.62L8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5l1.62-.88z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.62 14.62L8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5l1.62-.88z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.5 15.75c-.18 0-.38-.01-.56-.02a.752.752 0 01-.7-.69c-.22-2.79-2.49-5.05-5.27-5.27a.751.751 0 01-.69-.7 7.255 7.255 0 017.23-7.81c4 0 7.25 3.25 7.25 7.25s-3.26 7.24-7.26 7.24zM9.75 8.36c2.98.53 5.37 2.91 5.89 5.89a5.755 5.755 0 005.61-5.75c0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.5-5.75 5.61z"/>
  <path d="M8.5 22.75c-4 0-7.25-3.25-7.25-7.25a7.255 7.255 0 017.81-7.23c3.53.28 6.39 3.14 6.66 6.65.01.2.02.4.02.58.01 4-3.24 7.25-7.24 7.25zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75c0-.16-.01-.32-.02-.48-.22-2.77-2.49-5.04-5.27-5.26-.14 0-.3-.01-.46-.01z"/>
  <path d="M8.5 18.75c-.27 0-.53-.15-.66-.39l-.78-1.42-1.42-.78a.745.745 0 01-.39-.66c0-.28.15-.53.39-.66l1.42-.78.78-1.42c.26-.48 1.05-.48 1.32 0l.78 1.42 1.42.78c.24.13.39.38.39.66s-.15.53-.39.66l-1.42.78-.78 1.42c-.13.24-.39.39-.66.39zm-.94-3.25l.41.23c.13.07.23.17.3.3l.23.41.23-.41c.07-.13.17-.23.3-.3l.41-.23-.41-.23a.723.723 0 01-.3-.3l-.23-.41-.23.41c-.07.13-.17.23-.3.3l-.41.23z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5a6.5 6.5 0 01-7.02 6.48 6.509 6.509 0 00-5.96-5.96A6.5 6.5 0 1122 8.5z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.62 14.62L8.5 13l.88 1.62 1.62.88-1.62.88L8.5 18l-.88-1.62L6 15.5l1.62-.88z" opacity=".4"/>`
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
