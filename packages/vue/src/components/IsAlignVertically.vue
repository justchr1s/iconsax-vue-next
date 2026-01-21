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
    content: `<path d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23zM12.75 19.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2h1.5zM12.75 10.75h-1.5v3h1.5v-3zM12.75 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75zM15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23zM15.4 5.25H8.6c-1.5 0-2.1.64-2.1 2.23v1.04c0 1.59.6 2.23 2.1 2.23h6.8c1.5 0 2.1-.64 2.1-2.23M12 22v-2.4M12 13v-2M12 2v2.69"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23zM12.75 19.25v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2h1.5zM12.75 10.75h-1.5v3h1.5v-3zM12.75 2.75v2.5h-1.5v-2.5c0-.41.34-.75.75-.75s.75.34.75.75z"/>
  <path d="M15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23zM15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23zM12 22v-2.4M12 13v-2M12 2v2.69"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.4 20H6.6c-1.92 0-2.85-.98-2.85-2.98v-1.04c0-2 .93-2.98 2.85-2.98h10.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98zM6.6 14.5c-1.01 0-1.35.21-1.35 1.48v1.04c0 1.27.34 1.48 1.35 1.48h10.8c1.01 0 1.35-.21 1.35-1.48v-1.04c0-1.27-.34-1.48-1.35-1.48H6.6zM15.4 11.5H8.6c-1.92 0-2.85-.98-2.85-2.98V7.48c0-2.01.93-2.98 2.85-2.98h6.8c1.92 0 2.85.98 2.85 2.98v1.04c0 2-.93 2.98-2.85 2.98zM8.6 6c-1.01 0-1.35.21-1.35 1.48v1.04c0 1.27.34 1.48 1.35 1.48h6.8c1.01 0 1.35-.21 1.35-1.48V7.48c0-1.27-.34-1.48-1.35-1.48H8.6z"/>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75v-2.4c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75zM12 13.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75zM12 5.44c-.41 0-.75-.34-.75-.75V2a.749.749 0 111.5 0v2.69c0 .42-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.4 19.25H6.6c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h10.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23zM15.4 10.75H8.6c-1.5 0-2.1-.64-2.1-2.23V7.48c0-1.59.6-2.23 2.1-2.23h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-2.4M12 13v-2M12 2v2.69" opacity=".4"/>`
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
