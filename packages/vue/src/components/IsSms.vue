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
    content: `<path d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5zm.47 6.09l-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.77.77 0 01-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.11 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 12.98v2.52c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z" opacity=".4"/>
  <path d="M12 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 01.93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v7c0 3.65-2.1 5.75-5.75 5.75zm-10-17c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-7c0-2.86-1.39-4.25-4.25-4.25H7z"/>
  <path d="M11.999 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 01.93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" opacity=".4"/>`,
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
