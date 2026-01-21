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
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2zM8.5 15.5l7-7M15.5 15.5l-7-7"/>`,
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
