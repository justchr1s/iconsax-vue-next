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
    content: `<path d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34zM11.762 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.68 6.65c-1.3-.75-2.93.19-2.93 1.69v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-2.18-1.26"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65C3.63 5.9 2 6.84 2 8.34z" opacity=".4"/>
  <path d="M11.76 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83c1.29-.75 1.29-2.63 0-3.38l-3.17-1.83-3.18-1.83c-1.29-.75-2.92.19-2.92 1.69z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34zM11.76 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-3.17-1.83-3.17-1.82c-1.3-.77-2.93.17-2.93 1.67z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M3.95 18.36c-.46 0-.93-.12-1.35-.37a2.663 2.663 0 01-1.35-2.34V8.33c0-.98.5-1.85 1.35-2.34.85-.49 1.86-.49 2.7 0l6.34 3.66c.29.17.52.37.7.59.11.13.17.3.17.47v2.56c0 .17-.06.34-.17.47-.18.22-.41.42-.68.58L5.3 18c-.42.24-.88.36-1.35.36zm0-11.22c-.21 0-.41.05-.6.16-.38.22-.6.61-.6 1.04v7.32c0 .43.22.82.6 1.04.38.22.82.22 1.2 0l6.34-3.66c.04-.02.08-.05.11-.08v-1.93a.834.834 0 00-.12-.08L4.55 7.3c-.19-.11-.39-.16-.6-.16z"/>
  <path d="M13.71 18.36c-.46 0-.93-.12-1.35-.37a2.663 2.663 0 01-1.35-2.34V8.33c0-.98.5-1.85 1.35-2.34.85-.49 1.86-.49 2.7 0l6.34 3.66c.84.49 1.35 1.36 1.35 2.34 0 .98-.5 1.85-1.35 2.34l-6.34 3.66c-.42.25-.89.37-1.35.37zm0-11.22c-.21 0-.41.05-.6.16-.38.22-.6.6-.6 1.04v7.32c0 .43.22.82.6 1.04.38.22.83.22 1.2 0l6.34-3.66c.38-.22.6-.61.6-1.04 0-.43-.22-.82-.6-1.04L14.31 7.3c-.19-.11-.39-.16-.6-.16z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.76 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-3.17-1.83-3.17-1.82c-1.3-.77-2.93.17-2.93 1.67z"/>`
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
