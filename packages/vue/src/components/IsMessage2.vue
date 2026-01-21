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
    content: `<path d="M17 2.43H7c-3 0-5 2-5 5v6c0 3 2 5 5 5h4l4.45 2.96a.997.997 0 001.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5zm-1.5 8.82h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.5 10.5h7M2 11.56v1.87c0 3 2 5 5 5h4l4.45 2.96a.997.997 0 001.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5H7c-3 0-5 2-5 5"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7 18.43h4l4.45 2.96a.997.997 0 001.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5H7c-3 0-5 2-5 5v6c0 3 2 5 5 5z" opacity=".4"/>
  <path d="M15.5 11.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.5 10.5h7M7 18.43h4l4.45 2.96a.997.997 0 001.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5H7c-3 0-5 2-5 5v6c0 3 2 5 5 5z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.5 11.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M16 22.32c-.34 0-.68-.1-.97-.29l-4.26-2.84H7c-3.44 0-5.75-2.31-5.75-5.75v-6C1.25 4 3.56 1.69 7 1.69h10c3.44 0 5.75 2.31 5.75 5.75v6c0 3.18-1.98 5.4-5 5.71v1.42c0 .65-.35 1.24-.92 1.54-.26.14-.55.21-.83.21zM7 3.18c-2.58 0-4.25 1.67-4.25 4.25v6c0 2.58 1.67 4.25 4.25 4.25h4c.15 0 .29.04.42.13l4.45 2.96c.11.07.21.04.26.01.05-.03.13-.09.13-.22v-2.13c0-.41.34-.75.75-.75 2.58 0 4.25-1.67 4.25-4.25v-6c0-2.58-1.67-4.25-4.25-4.25H7z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.5 10.5h7" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 18.43h4l4.45 2.96a.997.997 0 001.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5H7c-3 0-5 2-5 5v6c0 3 2 5 5 5z"/>`
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
