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
    content: `<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4 10.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16V8M14.99 12H16M8 12h3.81M12 16V8M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M16 11.25h-3.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.25H8c-.41 0-.75.34-.75.75s.34.75.75.75h3.25V16c0 .41.34.75.75.75s.75-.34.75-.75v-3.25H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zM8 12h8M12 16V8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v8c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M8 12h8M12 16V8"/>
  </g>`,
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
