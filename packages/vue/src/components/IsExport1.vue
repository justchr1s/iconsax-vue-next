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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.25 10.33c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.31l-7.72 7.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l7.72-7.72h-3.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.83c.41 0 .75.34.75.75v4.83z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 11l8.2-8.2M22 6.8V2h-4.8M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2M11 2H9C4 2 2 4 2 9"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 10.76a.86.86 0 00-.86-.86H2.86c-.48 0-.86.38-.86.86 0 5.89 4.11 10 10 10s10-4.12 10-10z" opacity=".4"/>
  <path d="M12.53 3.46l2.85 2.84c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0L12.75 5.8v9.57c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.8L9.69 7.37c-.29.29-.77.29-1.06 0a.753.753 0 01-.23-.53c0-.19.07-.38.22-.53l2.85-2.84c.29-.3.77-.3 1.06-.01z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.32 6.5l2.56-2.56 2.56 2.56M11.88 14.18V4.01M4 12c0 4.42 3 8 8 8s8-3.58 8-8"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.26 22.25H8.74c-4.91 0-7.01-2.1-7.01-7.01v-.13c0-4.44 1.75-6.58 5.67-6.95.4-.03.78.27.82.68.04.41-.26.78-.68.82-3.14.29-4.31 1.77-4.31 5.46v.13c0 4.07 1.44 5.51 5.51 5.51h6.52c4.07 0 5.51-1.44 5.51-5.51v-.13c0-3.71-1.19-5.19-4.39-5.46a.75.75 0 01-.68-.81c.04-.41.39-.72.81-.68 3.98.34 5.76 2.49 5.76 6.96v.13c0 4.89-2.1 6.99-7.01 6.99z"/>
  <path d="M12 15.75c-.41 0-.75-.34-.75-.75V3.62c0-.41.34-.75.75-.75s.75.34.75.75V15c0 .41-.34.75-.75.75z"/>
  <path d="M15.35 6.6c-.19 0-.38-.07-.53-.22L12 3.56 9.18 6.38c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3.35-3.35c.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M9.32 6.5l2.56-2.56 2.56 2.56M11.88 14.18V4.01"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 12c0 4.42 3 8 8 8s8-3.58 8-8"/>`
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
