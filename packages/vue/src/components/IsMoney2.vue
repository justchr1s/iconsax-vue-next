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
    content: `<path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5zM7 19c0-2.82-.91-3.86-3.5-3.98V8.98C6.09 8.86 7 7.82 7 5h10c0 2.82.91 3.86 3.5 3.98V15.02c-2.59.12-3.5 1.16-3.5 3.98H7z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12.53v2.97c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5H7c-3 0-5 1.5-5 5V9h1c3 0 4-1 4-4V4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 9v6h-1c-3 0-4 1-4 4v1.5H7V19c0-3-1-4-4-4H2V9h1c3 0 4-1 4-4V3.5h10V5c0 3 1 4 4 4h1z" opacity=".4"/>
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6zM7 3.5V5c0 3-1 4-4 4H2v-.5c0-3.5 2-5 5-5zM22 8.5V9h-1c-3 0-4-1-4-4V3.5c3 0 5 1.5 5 5zM7 19v1.5c-3 0-5-1.5-5-5V15h1c3 0 4 1 4 4zM22 15v.5c0 3.5-2 5-5 5V19c0-3 1-4 4-4h1z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15a3 3 0 100-6 3 3 0 000 6zM2 9h1c3 0 4-1 4-4V4M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7z"/>
  <path d="M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75zM3 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c2.58 0 3.25-.67 3.25-3.25V4c0-.41.34-.75.75-.75s.75.34.75.75v1c0 3.42-1.33 4.75-4.75 4.75zM22 9.75h-1c-3.42 0-4.75-1.33-4.75-4.75V4c0-.41.34-.75.75-.75s.75.34.75.75v1c0 2.58.67 3.25 3.25 3.25h1c.41 0 .75.34.75.75s-.34.75-.75.75zM7 20.75c-.41 0-.75-.34-.75-.75v-1c0-2.58-.67-3.25-3.25-3.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c3.42 0 4.75 1.33 4.75 4.75v1c0 .41-.34.75-.75.75zM17 20.75c-.41 0-.75-.34-.75-.75v-1c0-3.42 1.33-4.75 4.75-4.75h1c.41 0 .75.34.75.75s-.34.75-.75.75h-1c-2.58 0-3.25.67-3.25 3.25v1c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 9h1c3 0 4-1 4-4V4M22 9h-1c-3 0-4-1-4-4V4M2 15h1c3 0 4 1 4 4v1M22 15h-1c-3 0-4 1-4 4v1" opacity=".4"/>`
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
