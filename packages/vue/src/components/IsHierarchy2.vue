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
    content: `<path d="M18.75 22a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM19 8a3 3 0 100-6 3 3 0 000 6zM5 8a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M4.83 8.02a6.929 6.929 0 006.54 4.65h.03l3.53-.01c1.52-.02 2.88 1.01 3.29 2.49V17c0 .42.34.76.77.76.42 0 .76-.34.76-.76V5.76a.76.76 0 00-.76-.76c-.42 0-.77.34-.77.76v6.62a4.941 4.941 0 00-3.28-1.26h-.02l-3.53.01h-.02c-2.29 0-4.34-1.45-5.09-3.62A.786.786 0 005.55 7c-.08 0-.17.02-.25.04a.77.77 0 00-.47.98z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15V8M5.25 22a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 8a3 3 0 100-6 3 3 0 000 6zM19 8a3 3 0 100-6 3 3 0 000 6zM5.13 15a4.058 4.058 0 013.94-3.04l3.43.01c.85 0 1.67-.17 2.4-.49"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.75 22a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM19 8a3 3 0 100-6 3 3 0 000 6zM5 8a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M4.83 8.02a6.929 6.929 0 006.54 4.65h.03l3.53-.01c1.52-.02 2.88 1.01 3.29 2.49V17a.76.76 0 101.52 0V5.78a.76.76 0 10-1.52 0v6.62a4.941 4.941 0 00-3.28-1.26h-.02l-3.53.01h-.02c-2.29 0-4.34-1.45-5.09-3.62a.76.76 0 00-.72-.51c-.08 0-.17.01-.25.04-.41.12-.62.56-.48.96z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 15V8M5.25 22a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 8a3 3 0 100-6 3 3 0 000 6zM19 8a3 3 0 100-6 3 3 0 000 6zM5.13 15a4.058 4.058 0 013.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5 15.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75z"/>
  <path d="M5.25 22.75c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75zM19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75z"/>
  <path d="M5.13 15.75c-.06 0-.12-.01-.19-.02a.75.75 0 01-.54-.91c.55-2.12 2.46-3.6 4.65-3.6h.02l3.43.01h.02c2.22 0 4.21-1.41 4.94-3.51.14-.39.56-.6.95-.46.39.14.6.56.46.95-.94 2.71-3.53 4.49-6.38 4.52l-3.43-.01h-.01c-1.51 0-2.82 1.02-3.2 2.48-.08.33-.39.55-.72.55z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 22a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 8a3 3 0 100-6 3 3 0 000 6zM19 8a3 3 0 100-6 3 3 0 000 6z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M5 15V8M5.129 15a4.058 4.058 0 013.94-3.04l3.43.01c2.62.01 4.85-1.67 5.67-4.01"/>
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
