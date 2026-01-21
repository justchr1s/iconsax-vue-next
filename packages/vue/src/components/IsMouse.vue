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
    content: `<path d="M13.298 2.115a.473.473 0 00-.548.477v2.86c0 .199.12.374.286.484.503.336.834.91.834 1.563v2c0 1.03-.84 1.88-1.87 1.88-1.04 0-1.88-.85-1.88-1.88v-2c0-.653.338-1.227.844-1.563.165-.11.286-.285.286-.483v-2.86a.473.473 0 00-.548-.478A7.498 7.498 0 006.7 4.2a7.484 7.484 0 00-2.2 5.3v5c0 4.13 3.37 7.5 7.5 7.5s7.5-3.37 7.5-7.5v-5c0-3.69-2.687-6.766-6.202-7.384z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 13.63v.87c0 4.12 3.37 7.5 7.5 7.5 4.12 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5zM12 6V2"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.5 9.5v5c0 4.13-3.37 7.5-7.5 7.5s-7.5-3.37-7.5-7.5v-5c0-2.06.84-3.94 2.2-5.3a7.499 7.499 0 014.55-2.16c.24-.03.5-.04.75-.04s.51.01.75.04c3.78.38 6.75 3.58 6.75 7.46z" opacity=".4"/>
  <path d="M13.87 7.5v2c0 1.03-.84 1.88-1.87 1.88-1.04 0-1.88-.85-1.88-1.88v-2c0-.77.47-1.43 1.13-1.72V2.04c.24-.03.5-.04.75-.04s.51.01.75.04v3.74c.66.29 1.12.95 1.12 1.72z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c4.13 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5v5c0 4.13 3.37 7.5 7.5 7.5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5zM12 6V2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-4.55 0-8.25-3.7-8.25-8.25v-5c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25v5c0 4.55-3.7 8.25-8.25 8.25zm0-20c-3.72 0-6.75 3.03-6.75 6.75v5c0 3.72 3.03 6.75 6.75 6.75s6.75-3.03 6.75-6.75v-5c0-3.72-3.03-6.75-6.75-6.75z"/>
  <path d="M12 11.75c-1.24 0-2.25-1.01-2.25-2.25v-2c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v2c0 1.24-1.01 2.25-2.25 2.25zm0-5c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75z"/>
  <path d="M12 6.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c4.13 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5v5c0 4.13 3.37 7.5 7.5 7.5z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5zM12 6V2"/>
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
