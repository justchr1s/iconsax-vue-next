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
    content: `<path d="M17.54 8.81a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM6.46 8.81a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM17.54 21.111a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM6.46 21.111a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.54 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM8.92 5.85c0-1.36-1.1-2.46-2.46-2.46C5.1 3.39 4 4.49 4 5.85c0 1.36 1.1 2.46 2.46 2.46M17.54 20.62c1.36 0 2.46-1.1 2.46-2.46 0-1.36-1.1-2.46-2.46-2.46-1.36 0-2.46 1.1-2.46 2.46M6.46 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M17 8.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zM17 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zM17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-width="1.5" d="M3 7h18M3 12h18M3 17h18"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.54 9.06c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.77-1.71-1.71-1.71zM6.46 9.06c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.76-1.71-1.71-1.71zM17.54 21.37c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.77-1.71-1.71-1.71zM6.46 21.37c-1.77 0-3.21-1.44-3.21-3.21s1.44-3.21 3.21-3.21 3.21 1.44 3.21 3.21-1.44 3.21-3.21 3.21zm0-4.93c-.94 0-1.71.77-1.71 1.71s.77 1.71 1.71 1.71 1.71-.77 1.71-1.71-.76-1.71-1.71-1.71z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.54 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.46 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM17.54 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.46 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z"/>`
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
