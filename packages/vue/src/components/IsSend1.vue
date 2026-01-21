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
    content: `<path d="M18.07 8.509l-8.56-4.28c-5.75-2.88-8.11-.52-5.23 5.23l.87 1.74c.25.51.25 1.1 0 1.61l-.87 1.73c-2.88 5.75-.53 8.11 5.23 5.23l8.56-4.28c3.84-1.92 3.84-5.06 0-6.98zm-3.23 4.24h-5.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.07 8.51c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23l4.51 2.26M5.44 12h5.4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.5 22.8h-17c-.4 0-.8-.3-.8-.8s.3-.8.8-.8h17c.4 0 .8.3.8.8s-.4.8-.8.8z" opacity=".4"/>
  <path d="M18.998 18.2c-.2 0-.4-.1-.5-.2l-14-14c-.3-.3-.3-.7 0-1 .3-.3.8-.3 1.1 0l14 14c.3.3.3.8 0 1.1-.2.1-.4.1-.6.1z"/>
  <path d="M5 14.5c-.4 0-.8-.3-.8-.8V3.5c0-.4.3-.8.8-.8h10.3c.4 0 .8.3.8.8s-.3.8-.8.8H5.8v9.5c0 .4-.4.7-.8.7z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.51 4.23l8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23zM5.44 12h5.4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.41 21.75c-1.12 0-1.83-.38-2.28-.83-.88-.88-1.5-2.75.48-6.72l.87-1.73c.11-.23.11-.71 0-.94L3.61 9.8c-1.99-3.97-1.36-5.85-.48-6.72.87-.88 2.75-1.51 6.71.48l8.56 4.28c2.13 1.06 3.3 2.54 3.3 4.16s-1.17 3.1-3.29 4.16l-8.56 4.28c-1.94.97-3.38 1.31-4.44 1.31zm0-18c-.54 0-.96.13-1.22.39-.73.72-.44 2.59.76 4.98l.87 1.74c.32.65.32 1.63 0 2.28l-.87 1.73c-1.2 2.4-1.49 4.26-.76 4.98.72.73 2.59.44 4.99-.76l8.56-4.28c1.57-.78 2.46-1.81 2.46-2.82 0-1.01-.9-2.04-2.47-2.82L9.17 4.9c-1.52-.76-2.83-1.15-3.76-1.15z"/>
  <path d="M10.84 12.75h-5.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.51 4.23l8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.22-.44.22-1.17 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.44 12h5.4" opacity=".34"/>`
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
