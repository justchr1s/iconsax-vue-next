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
    content: `<path d="M19.36 4.64L5.83 18.17l-1.1-.82c-.65-.49-1.18-1.55-1.18-2.37V6.89c0-1.13.86-2.37 1.91-2.77l5.5-2.06c.57-.21 1.51-.21 2.08 0l5.5 2.06c.29.11.57.29.82.52zM20.449 14.979c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-1.76-1.31c-.49-.36-.54-1.08-.11-1.51l10.38-10.38c.63-.63 1.71-.18 1.71.71v6.01z"/>
  <path d="M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 001.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.84 20.02l1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12M3.41 11.04v3.52c0 1.18.78 2.73 1.73 3.44l.2.15M18.98 4.34c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01M22 2L2 22"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.36 4.64L5.83 18.17l-1.1-.82c-.65-.49-1.18-1.55-1.18-2.37V6.89c0-1.13.86-2.37 1.91-2.77l5.5-2.06c.57-.21 1.51-.21 2.08 0l5.5 2.06c.29.11.57.29.82.52zM20.45 6.89v8.09c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-2.69-2L20.42 6.58c.02.1.03.21.03.31z" opacity=".4"/>
  <path d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 001.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.84 20.02l1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12M18.98 4.34c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l.2.15M22 2L2 22"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.76c-1.09 0-2.17-.32-3.02-.95l-1.59-1.19a.75.75 0 01.9-1.2l1.59 1.19c1.15.86 3.1.86 4.25 0l4.3-3.21c.76-.57 1.42-1.9 1.42-2.84V7.12c0-.41.34-.75.75-.75s.75.34.75.75v7.43c0 1.42-.89 3.19-2.03 4.04l-4.3 3.21c-.85.64-1.93.96-3.02.96zM5.33 18.9a.76.76 0 01-.45-.15l-.2-.15c-1.14-.85-2.03-2.63-2.03-4.04V7.12c0-1.54 1.13-3.18 2.58-3.72l4.99-1.87c.99-.37 2.55-.37 3.54 0l5 1.87c.21.08.41.18.61.3a.747.747 0 11-.79 1.27c-.11-.07-.22-.13-.34-.17l-5-1.87c-.66-.25-1.83-.25-2.49 0L5.76 4.81c-.86.32-1.61 1.4-1.61 2.32v7.43c0 .95.67 2.28 1.42 2.84l.2.15c.33.25.4.72.15 1.05a.72.72 0 01-.59.3z"/>
  <path d="M2 22.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.84 20.02l1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.98 4.34c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l.2.15M22 2L2 22"/>`
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
