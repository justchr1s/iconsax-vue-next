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
    content: `<path d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36l-1.93-1.08a.509.509 0 01-.26-.44V8.99c0-2.54-2.07-4.61-4.61-4.61H8.82c-.37 0-.63-.39-.46-.71C8.88 2.68 9.92 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11z"/>
  <path d="M12.89 5.879H5.11A3.12 3.12 0 002 8.989v11.36c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.989c0-1.71-1.4-3.11-3.11-3.11zM11 12.749H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 20.35c0 1.45 1.04 2.06 2.31 1.36l3.93-2.19c.42-.23 1.1-.23 1.52 0l3.93 2.19c1.27.7 2.31.09 2.31-1.36V8.99c0-1.71-1.4-3.11-3.11-3.11H5.11A3.12 3.12 0 002 8.99v6.52"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11zM7 12h4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11z" opacity=".4"/>
  <path d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11zM11 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11zM7 12h4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14.69 22.75c-.44 0-.9-.13-1.37-.38l-3.93-2.19c-.19-.1-.6-.1-.79 0l-3.92 2.19c-.85.47-1.72.51-2.38.12-.67-.39-1.05-1.17-1.05-2.13V9c0-2.13 1.73-3.86 3.86-3.86h7.78c2.13 0 3.86 1.73 3.86 3.86v11.36c0 .96-.38 1.74-1.05 2.13-.3.17-.64.26-1.01.26zM9 18.6c.4 0 .79.09 1.12.27l3.93 2.19c.36.2.69.25.89.13.19-.11.31-.43.31-.84V8.99c0-1.3-1.06-2.36-2.36-2.36H5.11c-1.3 0-2.36 1.06-2.36 2.36v11.36c0 .41.12.73.31.84.19.11.53.06.89-.14l3.93-2.19c.32-.17.72-.26 1.12-.26z"/>
  <path d="M20.69 18.87c-.44 0-.9-.13-1.37-.38l-3.69-2.06a.732.732 0 01-.38-.65V9c0-1.3-1.06-2.36-2.36-2.36H8c-.41 0-.75-.34-.75-.75v-.77c0-2.13 1.73-3.86 3.86-3.86h7.78c2.13 0 3.86 1.73 3.86 3.86v11.36c0 .96-.38 1.74-1.05 2.13-.3.17-.64.26-1.01.26zm-3.94-3.54l3.3 1.85c.36.2.69.25.89.13.19-.11.31-.43.31-.84V5.11c0-1.3-1.06-2.36-2.36-2.36h-7.78c-1.3 0-2.36 1.06-2.36 2.36v.02h4.14c2.13 0 3.86 1.73 3.86 3.86v6.34z"/>
  <path d="M11 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8.99v11.36c0 1.45-1.04 2.06-2.31 1.36l-3.93-2.19c-.42-.23-1.1-.23-1.52 0l-3.93 2.19c-1.27.7-2.31.09-2.31-1.36V8.99c0-1.71 1.4-3.11 3.11-3.11h7.78c1.71 0 3.11 1.4 3.11 3.11z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 5.11v11.36c0 1.45-1.04 2.06-2.31 1.36L16 15.77V8.99c0-1.71-1.4-3.11-3.11-3.11H8v-.77C8 3.4 9.4 2 11.11 2h7.78C20.6 2 22 3.4 22 5.11zM7 12h4" opacity=".4"/>`
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
