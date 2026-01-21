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
    content: `<path d="M18.02 12.33l-1.22-1.22a1.39 1.39 0 01-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.9v-.86c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-4.88h10.45c1.44 0 2.41-.44 2.74-1.23.33-.79-.05-1.78-1.07-2.81z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.15 2v20M16.35 4c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15M5.15 4H12"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75z"/>
  <path d="M18.02 12.33l-1.22-1.22a1.39 1.39 0 01-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.15c-.21.01-.38.18-.38.39v12c0 .21.17.38.38.38h11.2c1.44 0 2.41-.44 2.74-1.23.33-.8-.05-1.79-1.07-2.82z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.15 2v20M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.15 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75z"/>
  <path d="M16.35 16.75H5.15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.2c1.09 0 1.6-.29 1.7-.54.1-.25-.05-.81-.83-1.58l-1.2-1.2c-.49-.43-.79-1.08-.82-1.8-.03-.76.27-1.51.82-2.06l1.2-1.2c.74-.74.97-1.34.86-1.6-.11-.26-.68-.52-1.73-.52H5.15a.749.749 0 110-1.5h11.2c2.19 0 2.89.91 3.12 1.45.22.54.37 1.68-1.19 3.24l-1.2 1.2c-.25.25-.39.6-.38.95.01.3.13.57.34.76l1.24 1.23c1.53 1.53 1.38 2.67 1.16 3.22-.23.53-.94 1.45-3.09 1.45z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.15 2v20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15" opacity=".34"/>`,
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
