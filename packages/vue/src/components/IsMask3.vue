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
  bold: null,
  broken: null,
  bulk: null,
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 12c0 2.94-1.28 5.6-3.32 7.41A9.836 9.836 0 0112 21.97c-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 2.56 0 4.89.96 6.65 2.56A9.89 9.89 0 0121.97 12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.97 16.39c-.02 1.65-1.25 2.05-2.4 1.59A6.439 6.439 0 015.53 12c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79z"/>`,
    isStroke: true
  },
  outline: null,
  twotone: null
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
