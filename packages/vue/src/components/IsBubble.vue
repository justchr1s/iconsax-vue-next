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
    content: `<path d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38zM6.36 13.031a3.329 3.329 0 10-.002 6.662 3.329 3.329 0 00.001-6.662zM16.62 16.621c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.59 12.26c2.83 0 5.13-2.3 5.13-5.13S18.42 2 15.59 2s-5.13 2.3-5.13 5.13c0 1.3.48 2.48 1.28 3.38M3.28 16.36c0 1.7 1.38 3.08 3.08 3.08 1.7 0 3.08-1.38 3.08-3.08 0-1.7-1.38-3.08-3.08-3.08"/>
  <path stroke-miterlimit="10" stroke-width="1.5" d="M16.62 22a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38 0 2.97 2.41 5.38 5.38 5.38 2.97 0 5.38-2.41 5.38-5.38 0-2.97-2.41-5.38-5.38-5.38z"/>
  <path d="M6.36 13.03a3.329 3.329 0 103.33 3.33c0-1.84-1.5-3.33-3.33-3.33zM16.62 16.62c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M15.59 12.26a5.13 5.13 0 100-10.26 5.13 5.13 0 000 10.26zM6.36 19.44a3.08 3.08 0 100-6.16 3.08 3.08 0 000 6.16zM16.62 22a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.59 13.01a5.89 5.89 0 01-5.88-5.88 5.89 5.89 0 015.88-5.88 5.89 5.89 0 015.88 5.88 5.89 5.89 0 01-5.88 5.88zm0-10.26c-2.41 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38S18 2.75 15.59 2.75zM6.361 20.19c-2.11 0-3.83-1.72-3.83-3.83 0-2.11 1.72-3.83 3.83-3.83 2.11 0 3.83 1.72 3.83 3.83 0 2.11-1.72 3.83-3.83 3.83zm0-6.16c-1.28 0-2.33 1.04-2.33 2.33 0 1.28 1.04 2.33 2.33 2.33 1.28 0 2.33-1.04 2.33-2.33 0-1.28-1.05-2.33-2.33-2.33zM16.62 22.75c-1.83 0-3.31-1.49-3.31-3.31 0-1.83 1.49-3.31 3.31-3.31a3.32 3.32 0 013.31 3.31 3.32 3.32 0 01-3.31 3.31zm0-5.13a1.81 1.81 0 100 3.619 1.81 1.81 0 000-3.62z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M15.59 12.26A5.13 5.13 0 1015.592 2a5.13 5.13 0 000 10.26z"/>
  <path stroke-miterlimit="10" stroke-width="1.5" d="M6.36 19.44a3.08 3.08 0 100-6.16 3.08 3.08 0 000 6.16zM16.62 22a2.56 2.56 0 100-5.12 2.56 2.56 0 000 5.12z" opacity=".4"/>`
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
