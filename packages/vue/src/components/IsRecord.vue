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
    content: `<path d="M19.63 7.238c.3.47.14 1.1-.34 1.39l-.59.35-13.11 7.86c-.48.29-1.11.13-1.39-.36-1-1.74-1.45-3.86-1.06-6.08.66-3.77 3.76-6.77 7.55-7.31a9.003 9.003 0 018.94 4.15zM20.89 13.43c-.68 4.25-4.44 7.5-8.75 7.57-1.9.03-3.66-.52-5.12-1.51-.62-.41-.6-1.33.04-1.71l12.41-7.29c.65-.38 1.45.06 1.51.81.05.7.02 1.41-.09 2.13z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 6.04A8.997 8.997 0 003 12a9 9 0 106.94-8.76"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.12 8.13l-1.42.85-13.94 8.36A8.973 8.973 0 013 12a9 9 0 019-9c3.58 0 6.68 2.1 8.12 5.13z"/>
  <path d="M21 12a9 9 0 01-9 9c-2.47 0-4.7-.99-6.33-2.61l.09-.05L19.7 9.98l.93-.55c.24.82.37 1.68.37 2.57z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21a9 9 0 100-18 9 9 0 000 18z"/>`,
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
