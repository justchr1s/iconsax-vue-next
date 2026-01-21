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
    content: `<path d="M12 2C6.5 2 2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89C22 6.58 17.5 2 12 2zm0 4.62c1.31 0 2.38 1.07 2.38 2.38 0 1.31-1.07 2.38-2.38 2.38-1.31 0-2.38-1.07-2.38-2.38 0-1.31 1.07-2.38 2.38-2.38zm4.45 7.98A7.423 7.423 0 0112 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 01.9-1.2 5.94 5.94 0 007.1 0 .75.75 0 01.9 1.2z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 16.07v4.01c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89c0-5.6-4.5-10.18-10-10.18s-10 4.58-10 10.18M8 14a6.66 6.66 0 008 0"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11a2 2 0 100-4 2 2 0 000 4z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76z" opacity=".4"/>
  <path d="M12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 01.9-1.2 5.94 5.94 0 007.1 0 .75.75 0 01.9 1.2A7.423 7.423 0 0112 16.07zM12 11.38a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76zM8 14a6.66 6.66 0 008 0"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11a2 2 0 100-4 2 2 0 000 4z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.33 22.75c-.42 0-.85-.15-1.18-.45l-2-1.83c-.08-.07-.24-.07-.33 0L9.83 22.3c-.66.61-1.69.6-2.35 0l-2-1.83c-.08-.07-.24-.07-.33 0l-.99.91c-.91.83-1.63.7-1.98.54-.35-.16-.94-.6-.94-1.85v-7.89c0-6.03 4.82-10.93 10.75-10.93s10.75 4.9 10.75 10.93v7.89c0 1.25-.59 1.7-.94 1.85-.35.15-1.07.29-1.98-.54l-1-.91c-.08-.07-.24-.07-.32 0l-2 1.83c-.32.3-.74.45-1.17.45zM12 18.91c.42 0 .85.15 1.17.45l2 1.83c.08.07.24.07.32 0l2-1.83c.66-.6 1.69-.6 2.35 0l1 .91c.17.15.28.22.35.24.03-.07.06-.21.06-.45v-7.89c0-5.2-4.15-9.43-9.25-9.43s-9.25 4.23-9.25 9.43v7.89c0 .24.04.38.06.45.07-.03.19-.09.35-.24l1-.91c.66-.6 1.69-.6 2.35 0l2 1.83c.08.07.24.07.32 0l2-1.83c.32-.3.75-.45 1.17-.45z"/>
  <path d="M12 16.07c-1.57 0-3.14-.49-4.45-1.47a.75.75 0 01.9-1.2 5.94 5.94 0 007.1 0 .75.75 0 01.9 1.2A7.423 7.423 0 0112 16.07zM12 11.75c-1.52 0-2.75-1.23-2.75-2.75S10.48 6.25 12 6.25 14.75 7.48 14.75 9s-1.23 2.75-2.75 2.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14a6.66 6.66 0 008 0M12 11a2 2 0 100-4 2 2 0 000 4z" opacity=".4"/>`
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
