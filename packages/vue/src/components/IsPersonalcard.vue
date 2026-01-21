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
    content: `<path d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3zM8.5 7.17c1.27 0 2.31 1.04 2.31 2.31s-1.04 2.31-2.31 2.31-2.31-1.04-2.31-2.31S7.23 7.17 8.5 7.17zm3.87 9.49c-.09.1-.23.16-.37.16H5c-.14 0-.28-.06-.37-.16a.52.52 0 01-.13-.38 3.548 3.548 0 013.19-3.17 8.66 8.66 0 011.61 0c1.68.16 3.03 1.49 3.19 3.17.02.14-.03.28-.12.38zm6.63.09h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5H7c-4 0-5-1-5-5v-3.6M14 8h5M15 12h4M17 16h2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 11.29a1.81 1.81 0 100-3.62 1.81 1.81 0 000 3.62zM12 16.33a3.02 3.02 0 00-2.74-2.72 7.72 7.72 0 00-1.52 0A3.03 3.03 0 005 16.33"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3z" opacity=".4"/>
  <path d="M19 8.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75zM19 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM19 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM8.5 11.79a2.31 2.31 0 100-4.62 2.31 2.31 0 000 4.62zM9.3 13.11a8.66 8.66 0 00-1.61 0c-1.68.16-3.03 1.49-3.19 3.17-.01.14.03.28.13.38.1.1.23.17.37.17h7c.14 0 .28-.06.37-.16.09-.1.14-.24.13-.38a3.55 3.55 0 00-3.2-3.18z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5zM14 8h5M15 12h4M17 16h2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 11.29a1.81 1.81 0 100-3.62 1.81 1.81 0 000 3.62zM12 16.33a3.02 3.02 0 00-2.74-2.72 7.72 7.72 0 00-1.52 0A3.03 3.03 0 005 16.33"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 21.75H7c-4.41 0-5.75-1.34-5.75-5.75V8c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v8c0 4.41-1.34 5.75-5.75 5.75zm-10-18c-3.58 0-4.25.68-4.25 4.25v8c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25V8c0-3.57-.67-4.25-4.25-4.25H7z"/>
  <path d="M19 8.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75zM19 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM19 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM8.5 12.04c-1.41 0-2.56-1.15-2.56-2.56 0-1.41 1.15-2.56 2.56-2.56 1.41 0 2.56 1.15 2.56 2.56 0 1.41-1.15 2.56-2.56 2.56zm0-3.62c-.58 0-1.06.48-1.06 1.06 0 .58.48 1.06 1.06 1.06.58 0 1.06-.48 1.06-1.06 0-.58-.48-1.06-1.06-1.06zM12 17.08c-.38 0-.71-.29-.75-.68a2.301 2.301 0 00-2.07-2.05 7.95 7.95 0 00-1.38 0c-1.09.1-1.96.96-2.07 2.05-.04.41-.41.72-.82.67a.75.75 0 01-.67-.82c.18-1.8 1.61-3.23 3.42-3.39.55-.05 1.11-.05 1.66 0 1.8.17 3.24 1.6 3.42 3.39a.75.75 0 01-.67.82c-.02.01-.05.01-.07.01z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M14 8h5M15 12h4M17 16h2M8.5 11.29a1.81 1.81 0 100-3.62 1.81 1.81 0 000 3.62zM12 16.33a3.02 3.02 0 00-2.74-2.72 7.72 7.72 0 00-1.52 0A3.03 3.03 0 005 16.33"/>
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
