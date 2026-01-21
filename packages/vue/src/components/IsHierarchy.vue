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
    content: `<path d="M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M19.17 15.98a6.929 6.929 0 00-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49V7.01c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62a.781.781 0 00.98.48c.4-.14.61-.58.47-.98z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9v7M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6zM5.13 9a4.058 4.058 0 003.94 3.04l3.43-.01c.84 0 1.63.17 2.36.47"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M19.17 15.98a6.929 6.929 0 00-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49V7c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76V11.6c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62.11.32.41.51.72.51.08 0 .17-.01.25-.04.41-.12.62-.56.48-.96z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9v7M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.13 9a4.058 4.058 0 003.94 3.04l3.43-.01a5.989 5.989 0 015.67 4.01"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5 16.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75z"/>
  <path d="M5.25 9.25c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6.5a2.5 2.5 0 000 5 2.5 2.5 0 000-5zM5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19 6.24 16.75 5 16.75zM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25z"/>
  <path d="M18.17 16.79a.75.75 0 01-.71-.5 5.227 5.227 0 00-4.94-3.51h-.02l-3.43.01h-.02c-2.19 0-4.1-1.48-4.65-3.6a.75.75 0 011.45-.37 3.305 3.305 0 003.2 2.48h.01l3.43-.01h.03a6.72 6.72 0 016.35 4.52.74.74 0 01-.46.95c-.08.01-.16.03-.24.03z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 8.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5 22a3 3 0 100-6 3 3 0 000 6zM19 22a3 3 0 100-6 3 3 0 000 6z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M5 9v7M5.129 9a4.058 4.058 0 003.94 3.04l3.43-.01a5.989 5.989 0 015.67 4.01"/>
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
