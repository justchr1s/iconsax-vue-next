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
  linear: null,
  outline: null,
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.75 7.05C17.51 7.01 17.26 7 17 7H7c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 014.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 015 23a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 011 19c0-2.21 1.79-4 4-4s4 1.79 4 4zM6.49 18.98H3.51M5 17.52v2.99"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3" opacity=".4"/>`,
    isStroke: true
  }
}

const currentVariant = computed(() => svgData[props.variant] || svgData.twotone)
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
