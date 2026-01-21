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
    content: `<path d="M16.588 7.41L6.309 17.69c-.48.48-1.3.37-1.59-.24a8.122 8.122 0 01-.82-3.55c-.02-5.52 5.58-10.24 7.48-11.69.37-.28.87-.28 1.23 0 .87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37zM20.1 13.91c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 01-4.81-1.58c-.49-.36-.53-1.08-.1-1.51L17.16 8.84c.47-.47 1.26-.37 1.58.21.82 1.51 1.37 3.15 1.36 4.86z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.9 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.03-5.43-5.6-10.24-7.49-11.7M12.61 2.21a.99.99 0 00-1.219 0c-1.38 1.05-4.72 3.83-6.43 7.39"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.59 7.41L6.31 17.69c-.48.48-1.3.37-1.59-.24a8.122 8.122 0 01-.82-3.55C3.88 8.38 9.48 3.66 11.38 2.21c.37-.28.87-.28 1.23 0 .87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37z"/>
  <path d="M20.1 13.91c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 01-4.81-1.58c-.49-.36-.53-1.08-.1-1.51L17.16 8.84c.47-.47 1.26-.37 1.58.21.82 1.51 1.37 3.15 1.36 4.86z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M12.61 2.21a.991.991 0 00-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7z"/>`,
    isStroke: true
  },
  outline: null,
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M12.61 2.21a.991.991 0 00-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7z"/>`,
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
