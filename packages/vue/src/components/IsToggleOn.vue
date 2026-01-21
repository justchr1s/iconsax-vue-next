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
    content: `<path d="M16.65 3.86h-9.3C3.25 3.86 2 5.11 2 9.21v5.58c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35V9.21c0-4.1-1.25-5.35-5.35-5.35zm2.09 9.26c0 2.25-1.05 3.3-3.3 3.3h-2.23c-2.25 0-3.3-1.05-3.3-3.3v-2.23c0-2.25 1.05-3.3 3.3-3.3h2.23c2.25 0 3.3 1.05 3.3 3.3v2.23z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 10.8v2.4c0 2-.8 2.8-2.8 2.8h-2.4c-2 0-2.8-.8-2.8-2.8v-2.4c0-2 .8-2.8 2.8-2.8h2.4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20h5c4 0 5-1 5-5V9c0-4-1-5-5-5H7C3 4 2 5 2 9v6c0 4 1 5 5 5"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.35 3.86h9.3c4.1 0 5.35 1.25 5.35 5.35v5.58c0 4.1-1.25 5.35-5.35 5.35h-9.3c-4.1 0-5.35-1.25-5.35-5.35V9.21c0-4.1 1.25-5.35 5.35-5.35z" opacity=".4"/>
  <path d="M13.21 7.58h2.23c2.25 0 3.3 1.05 3.3 3.3v2.23c0 2.25-1.05 3.3-3.3 3.3h-2.23c-2.25 0-3.3-1.05-3.3-3.3v-2.23c0-2.25 1.05-3.3 3.3-3.3z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.3 16h2.4c2 0 2.8-.8 2.8-2.8v-2.4c0-2-.8-2.8-2.8-2.8h-2.4c-2 0-2.8.8-2.8 2.8v2.4c0 2 .8 2.8 2.8 2.8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20H7c-4 0-5-1-5-5V9c0-4 1-5 5-5h10c4 0 5 1 5 5v6c0 4-1 5-5 5z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.7 16.75h-2.4c-2.42 0-3.55-1.13-3.55-3.55v-2.4c0-2.42 1.13-3.55 3.55-3.55h2.4c2.42 0 3.55 1.13 3.55 3.55v2.4c0 2.42-1.13 3.55-3.55 3.55zm-2.4-8c-1.59 0-2.05.46-2.05 2.05v2.4c0 1.59.46 2.05 2.05 2.05h2.4c1.59 0 2.05-.46 2.05-2.05v-2.4c0-1.59-.46-2.05-2.05-2.05h-2.4z"/>
  <path d="M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75zm-10-16c-3.58 0-4.25.68-4.25 4.25v6c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25V9c0-3.57-.67-4.25-4.25-4.25H7z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.3 16h2.4c2 0 2.8-.8 2.8-2.8v-2.4c0-2-.8-2.8-2.8-2.8h-2.4c-2 0-2.8.8-2.8 2.8v2.4c0 2 .8 2.8 2.8 2.8z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20H7c-4 0-5-1-5-5V9c0-4 1-5 5-5h10c4 0 5 1 5 5v6c0 4-1 5-5 5z"/>`
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
