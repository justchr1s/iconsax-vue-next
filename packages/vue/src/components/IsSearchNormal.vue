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
    content: `<path d="M11.5 21C16.75 21 21 16.75 21 11.5S16.75 2 11.5 2 2 6.25 2 11.5 6.25 21 11.5 21z"/><path d="M22 22l-2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<circle cx="11.5" cy="11.5" r="9.5" stroke-dasharray="5 3"/><path d="M22 22l-2-2"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<circle opacity=".4" cx="11.5" cy="11.5" r="9.5" fill="currentColor"/><path d="M22 22l-2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<circle cx="11.5" cy="11.5" r="9.5"/><path d="M22 22l-2-2"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<circle cx="11.5" cy="11.5" r="9.5"/><path d="M22 22l-2-2"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<circle cx="11.5" cy="11.5" r="9.5"/><path d="M22 22l-2-2"/>`
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
