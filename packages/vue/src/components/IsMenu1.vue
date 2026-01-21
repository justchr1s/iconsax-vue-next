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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-width="1.5" d="M3 7h18M9.49 12H21M3 12h2.99M3 17h18"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.54 8.81a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92z" opacity=".4"/>
  <path d="M6.46 8.81a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM17.54 21.11a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92z"/>
  <path d="M6.46 21.11a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.54 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM6.46 8.31a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM17.54 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92zM6.46 20.61a2.46 2.46 0 100-4.92 2.46 2.46 0 000 4.92z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-width="1.5" d="M3 7h18"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M3 12h18" opacity=".34"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M3 17h18"/>`,
    isStroke: true
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
    :fill="currentVariant?.isStroke ? 'none' : 'currentColor'"
    :stroke="currentVariant?.isStroke ? 'currentColor' : 'none'"
    :style="{ color }"
    v-html="currentVariant?.content"
  />
</template>
