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
    content: `<path d="M16 8H8v8h8V8zM2 19c0 1.65 1.35 3 3 3s3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3zM5 2C3.35 2 2 3.35 2 5s1.35 3 3 3h3V5c0-1.65-1.35-3-3-3zM22 5c0-1.65-1.35-3-3-3s-3 1.35-3 3v3h3c1.65 0 3-1.35 3-3zM19 16h-3v3c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8H8v8h8V8zM2.17 19.99A3.009 3.009 0 005 22c1.65 0 3-1.35 3-3v-3H5M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3zM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3zM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 8H8v8h8V8z"/>
  <path d="M5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3zM5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3zM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3zM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8H8v8h8V8zM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3zM5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3zM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3zM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 16.75H8c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75zm-7.25-1.5h6.5v-6.5h-6.5v6.5z"/>
  <path d="M5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75h3c.41 0 .75.34.75.75v3c0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19v-2.25H5zM8 8.75H5C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75v3c0 .41-.34.75-.75.75zm-3-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25h2.25V5c0-1.24-1.01-2.25-2.25-2.25zM19 8.75h-3c-.41 0-.75-.34-.75-.75V5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm-2.25-1.5H19c1.24 0 2.25-1.01 2.25-2.25S20.24 2.75 19 2.75 16.75 3.76 16.75 5v2.25zM19 22.75c-2.07 0-3.75-1.68-3.75-3.75v-3c0-.41.34-.75.75-.75h3c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm-2.25-6V19c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25h-2.25z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8H8v8h8V8zM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3z" opacity=".4"/>`
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
