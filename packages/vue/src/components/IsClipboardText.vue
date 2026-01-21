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
    content: `<path d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2z"/>
  <path d="M17.24 4.82c0 1.59-1.3 2.89-2.89 2.89h-4.7c-1.59 0-2.89-1.3-2.89-2.89 0-.56-.6-.91-1.1-.65a4.472 4.472 0 00-2.37 3.95v9.41C3.29 19.99 5.3 22 7.76 22h8.48c2.46 0 4.47-2.01 4.47-4.47V8.12c0-1.71-.96-3.2-2.37-3.95-.5-.26-1.1.09-1.1.65zm-4.86 12.13H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.38c.41 0 .75.34.75.75s-.34.75-.75.75zm2.62-4H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12.2h7M8 16.2h4.38M10.96 2H10C9 2 8 2 8 4s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2M3 10c0-4.56 1.67-5.8 5-5.98"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-2.09"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.24 3.65H7.76c-2.47 0-4.47 2.01-4.47 4.47v9.41C3.29 19.99 5.3 22 7.76 22h8.47c2.47 0 4.47-2.01 4.47-4.47V8.12c.01-2.47-2-4.47-4.46-4.47z" opacity=".4"/>
  <path d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2zM15 12.95H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75zM12.38 16.95H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.38c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12.2h7M8 16.2h4.38M10 6h4c2 0 2-1 2-2 0-2-1-2-2-2h-4C9 2 8 2 8 4s1 2 2 2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-6c0-4.56 1.67-5.8 5-5.98"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 12.95H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75zM12.38 16.95H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.38c.41 0 .75.34.75.75s-.34.75-.75.75zM14 6.75h-4c-.96 0-2.75 0-2.75-2.75S9.04 1.25 10 1.25h4c.96 0 2.75 0 2.75 2.75 0 .96 0 2.75-2.75 2.75zm-4-4c-.99 0-1.25 0-1.25 1.25S9.01 5.25 10 5.25h4c1.25 0 1.25-.26 1.25-1.25 0-1.25-.26-1.25-1.25-1.25h-4z"/>
  <path d="M15 22.75H9c-5.62 0-6.75-2.58-6.75-6.75v-6c0-4.56 1.65-6.51 5.71-6.72.4-.02.77.29.79.71.02.42-.3.76-.71.78C5.2 4.93 3.75 5.78 3.75 10v6c0 3.7.73 5.25 5.25 5.25h6c4.52 0 5.25-1.55 5.25-5.25v-6c0-4.22-1.45-5.07-4.29-5.23a.757.757 0 01-.71-.79c.02-.41.38-.73.79-.71 4.06.22 5.71 2.17 5.71 6.72v6c0 4.18-1.13 6.76-6.75 6.76z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 12.2h7M8 16.2h4.38" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10 6h4c2 0 2-1 2-2 0-2-1-2-2-2h-4C9 2 8 2 8 4s1 2 2 2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-6c0-4.56 1.67-5.8 5-5.98"/>`,
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
