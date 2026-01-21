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
    content: `<path d="M20.43 11.78l-2.2-8.08c-.25-.93-1.26-1.7-2.22-1.7H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.08c-.44 1.6.56 2.91 2.22 2.91h5.46v5.81H8c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.25v-5.81h5.46c1.66 0 2.66-1.31 2.22-2.91z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.94 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.6.56 2.91 2.23 2.91h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07c-.27-.93-1.28-1.7-2.24-1.7M12 15v7M8 22h8"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.21 14.69H5.79c-1.66 0-2.66-1.31-2.22-2.91l2.2-8.08C6.02 2.77 7.03 2 7.99 2h8.02c.96 0 1.97.77 2.22 1.7l2.2 8.08c.44 1.6-.56 2.91-2.22 2.91z" opacity=".4"/>
  <path d="M16.75 21.25c0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25v-5.81h1.5v5.81H16c.41 0 .75.34.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.79 14.69h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07C17.98 2.77 16.97 2 16.01 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.61.56 2.92 2.22 2.92zM12 15v7M8 22h8"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.21 15.44H5.79c-1.03 0-1.94-.42-2.5-1.15s-.72-1.72-.45-2.71l2.2-8.08c.34-1.26 1.64-2.25 2.95-2.25H16c1.31 0 2.6.99 2.95 2.25l2.2 8.08c.27.99.11 1.98-.45 2.71s-1.46 1.15-2.49 1.15zM7.99 2.75c-.63 0-1.34.54-1.5 1.15l-2.2 8.08c-.15.54-.08 1.04.2 1.41.28.37.74.56 1.3.56h12.42c.56 0 1.03-.2 1.3-.56.27-.36.35-.86.2-1.41l-2.2-8.08c-.17-.61-.87-1.15-1.5-1.15H7.99z"/>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75z"/>
  <path d="M16 22.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.79 14.69h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07C17.98 2.77 16.97 2 16.01 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.61.56 2.92 2.22 2.92z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M12 15v7M8 22h8"/>
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
