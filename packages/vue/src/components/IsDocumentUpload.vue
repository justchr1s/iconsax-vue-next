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
    content: `<path d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1zm-8.97 3.34c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72V17c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.19l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2-2c.07-.06.14-.11.22-.15.02-.01.05-.02.07-.03.06-.02.12-.03.19-.04h.08c.08 0 .16.02.24.05h.02c.08.03.16.09.22.15.01.01.02.01.02.02l2 2c.29.29.29.77 0 1.06z"/>
  <path d="M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13.65V11l2 2M9 17v-1M9 11l-2 2M2 9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02M18 10c-3 0-4-1-4-4V2l8 8"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1z" opacity=".4"/>
  <path d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54zM11.53 12.47l-2-2c-.01-.01-.02-.01-.02-.02a.855.855 0 00-.22-.15h-.02c-.08-.03-.16-.04-.24-.05h-.08c-.06 0-.13.02-.19.04-.03.01-.05.02-.07.03-.08.04-.16.08-.22.15l-2 2c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.72-.72V17c0 .41.34.75.75.75s.75-.34.75-.75v-4.19l.72.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-6l-2 2M9 11l2 2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M9 17.75c-.41 0-.75-.34-.75-.75v-4.19l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2-2c.21-.21.54-.28.82-.16.28.11.46.39.46.69v6c0 .41-.34.75-.75.75z"/>
  <path d="M11 13.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z"/>
  <path d="M22 10.75h-4c-3.42 0-4.75-1.33-4.75-4.75V2c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 01-.53 1.28zm-7.25-6.94V6c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M9 17v-6l-2 2M9 11l2 2"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"/>`,
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
