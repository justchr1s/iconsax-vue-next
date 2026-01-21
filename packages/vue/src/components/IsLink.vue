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
    content: `<path d="M12.5 14.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-5c-2.62 0-4.75 2.13-4.75 4.75 0 1.1.39 2.17 1.09 3.02.26.32.22.79-.1 1.06-.32.26-.79.22-1.06-.1A6.283 6.283 0 011.25 8.5c0-3.45 2.8-6.25 6.25-6.25h5c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25z"/>
  <path d="M16.5 21.75h-5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h5c2.62 0 4.75-2.13 4.75-4.75 0-1.1-.39-2.17-1.09-3.02a.758.758 0 01.1-1.06.75.75 0 011.06.1 6.236 6.236 0 011.44 3.98c-.01 3.45-2.81 6.25-6.26 6.25z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.27 12A5.46 5.46 0 012 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.98 21h-.48C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14M20.73 12A5.46 5.46 0 0122 15.5c0 3.02-2.47 5.5-5.5 5.5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.5 14.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-5c-2.62 0-4.75 2.13-4.75 4.75 0 1.1.39 2.17 1.09 3.02.26.32.22.79-.1 1.06-.32.26-.79.22-1.06-.1A6.236 6.236 0 011.24 8.5c0-3.45 2.8-6.25 6.25-6.25h5c3.45 0 6.25 2.8 6.25 6.25s-2.79 6.25-6.24 6.25z"/>
  <path d="M16.5 21.75h-5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H14c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h5c2.62 0 4.75-2.13 4.75-4.75 0-1.1-.39-2.17-1.09-3.02a.758.758 0 01.1-1.06.75.75 0 011.06.1 6.236 6.236 0 011.44 3.98c-.01 3.45-2.81 6.25-6.26 6.25z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.27 12A5.46 5.46 0 012 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.73 12A5.46 5.46 0 0122 15.5c0 3.02-2.47 5.5-5.5 5.5h-5C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.75 18.5c-3.58 0-6.5-2.92-6.5-6.5s2.92-6.5 6.5-6.5c.41 0 .75.34.75.75S8.16 7 7.75 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5c0-.41.34-.75.75-.75s.75.34.75.75c0 3.58-2.92 6.5-6.5 6.5z"/>
  <path d="M16 18.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.89 0 5.25-2.36 5.25-5.25S18.89 6.75 16 6.75 10.75 9.11 10.75 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-3.72 3.03-6.75 6.75-6.75s6.75 3.03 6.75 6.75-3.03 6.75-6.75 6.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.27 12A5.46 5.46 0 012 8.5C2 5.48 4.47 3 7.5 3h5C15.52 3 18 5.48 18 8.5S15.53 14 12.5 14H10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.73 12A5.46 5.46 0 0122 15.5c0 3.02-2.47 5.5-5.5 5.5h-5C8.48 21 6 18.52 6 15.5S8.47 10 11.5 10H14" opacity=".4"/>`,
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
