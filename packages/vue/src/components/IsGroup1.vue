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
  bold: null,
  broken: null,
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 14v3c0 1.66-1.34 3-3 3h-1c0-1.1-.9-2-2-2s-2 .9-2 2h-4c0-1.1-.9-2-2-2s-2 .9-2 2H5c-1.66 0-3-1.34-3-3v-3h11c1.1 0 2-.9 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3z" opacity=".4"/>
  <path d="M8 22a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4zM22 12.53V14h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.45 2.54c.17.3.26.64.26.99zM14 2H6C4.05 2 2.43 3.4 2.08 5.25H7c.41 0 .75.34.75.75s-.34.75-.75.75H2v1.5h3c.41 0 .75.34.75.75s-.34.75-.75.75H2v1.5h1c.41 0 .75.34.75.75s-.34.75-.75.75H2V14h11c1.1 0 2-.9 2-2V3c0-.55-.45-1-1-1z"/>
  <path d="M2.08 5.25H1c-.41 0-.75.34-.75.75s.34.75.75.75h1V6c0-.26.03-.51.08-.75zM1 8.25c-.41 0-.75.34-.75.75s.34.75.75.75h1v-1.5H1zM1 11.25c-.41 0-.75.34-.75.75s.34.75.75.75h1v-1.5H1z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 5.56h10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.22 2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2h-5.56c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 17.06h10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.22 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.22c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2zM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"/>`
  },
  outline: null,
  twotone: null
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
