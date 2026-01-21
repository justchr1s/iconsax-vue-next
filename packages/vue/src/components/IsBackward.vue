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
    content: `<path d="M21.998 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.83-3.17-1.83-.49-.28v-2.82l.49-.28 3.17-1.83 3.17-1.83c1.3-.75 2.93.19 2.93 1.69z"/>
  <path d="M12.241 8.34v7.32c0 1.5-1.63 2.44-2.92 1.69l-3.18-1.83-3.17-1.83c-1.29-.75-1.29-2.63 0-3.38l3.17-1.83 3.18-1.83c1.29-.75 2.92.19 2.92 1.69z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.32 6.65c1.3-.75 2.93.19 2.93 1.69v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l2.41-1.39"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.83-3.17-1.83-.49-.28v-2.82l.49-.28 3.17-1.83 3.17-1.83c1.3-.75 2.93.19 2.93 1.69z" opacity=".4"/>
  <path d="M12.24 8.34v7.32c0 1.5-1.63 2.44-2.92 1.69l-3.18-1.83-3.17-1.83c-1.29-.75-1.29-2.63 0-3.38l3.17-1.83 3.18-1.83c1.29-.75 2.92.19 2.92 1.69z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67zM12.24 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.05 18.36c-.46 0-.93-.12-1.35-.37l-6.34-3.66c-.29-.17-.52-.37-.69-.59a.733.733 0 01-.17-.47v-2.56c0-.17.06-.34.17-.47.18-.22.41-.42.69-.58l6.35-3.67c.84-.49 1.85-.49 2.7 0 .85.49 1.35 1.36 1.35 2.34v7.32c0 .98-.5 1.85-1.35 2.34-.43.25-.9.37-1.36.37zm-7.06-5.4c.04.03.08.06.12.08l6.33 3.65c.38.22.83.22 1.2 0 .38-.22.6-.61.6-1.04V8.33c0-.43-.22-.82-.6-1.04-.38-.22-.82-.22-1.2 0l-6.34 3.66c-.04.02-.08.05-.11.08v1.93z"/>
  <path d="M10.29 18.36c-.46 0-.93-.12-1.35-.37L2.6 14.33a2.684 2.684 0 01-1.35-2.34c0-.98.5-1.85 1.35-2.34l6.34-3.66c.84-.49 1.85-.49 2.7 0 .85.49 1.35 1.36 1.35 2.34v7.32c0 .98-.5 1.85-1.35 2.34-.42.25-.89.37-1.35.37zm0-11.22c-.21 0-.41.05-.6.16l-6.34 3.66c-.38.22-.6.61-.6 1.04 0 .43.22.82.6 1.04l6.34 3.66c.38.22.83.22 1.2 0 .38-.22.6-.6.6-1.04V8.34c0-.43-.22-.82-.6-1.04-.19-.11-.39-.16-.6-.16z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.24 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67z"/>`,
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
