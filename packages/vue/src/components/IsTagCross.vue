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
    content: `<path d="M17 3.75h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a5.014 5.014 0 003.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5zm-.47 10.19c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.94-1.94L11.59 15c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L12.47 12l-1.94-1.94a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.94 1.94L15.47 9c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L14.59 12l1.94 1.94z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.92 3.75h-2.64c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a5.014 5.014 0 003.7 1.64H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M16 14.47l-4.94-4.94M15.21 10.32l.79-.79M11.06 14.47l2.28-2.29"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a4.978 4.978 0 003.7 1.64z" opacity=".4"/>
  <path d="M14.59 12l1.94-1.94c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.94 1.94L11.59 9a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06L12.47 12l-1.94 1.94c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.94-1.94L15.47 15c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L14.59 12z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a4.978 4.978 0 003.7 1.64z"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M16 14.47l-4.94-4.94M11.06 14.47L16 9.53"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 21h-6.72c-1.62 0-3.17-.69-4.25-1.88L2.5 15.24a4.783 4.783 0 010-6.47l3.53-3.88A5.727 5.727 0 0110.28 3H17c3.17 0 5.75 2.58 5.75 5.75v6.5c0 3.17-2.58 5.75-5.75 5.75zM10.28 4.5c-1.19 0-2.34.51-3.14 1.39L3.6 9.78a3.301 3.301 0 000 4.45l3.53 3.88c.8.88 1.95 1.39 3.14 1.39H17a4.26 4.26 0 004.25-4.25v-6.5A4.26 4.26 0 0017 4.5h-6.72z"/>
  <path d="M16 15.22c-.19 0-.38-.07-.53-.22l-4.94-4.95a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l4.94 4.95c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M11.06 15.22c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L15.47 9c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L11.59 15c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 000 5.46l3.53 3.88a4.978 4.978 0 003.7 1.64z"/>
  <g stroke-linecap="round" stroke-width="1.5" opacity=".4">
    <path d="M16 14.47l-4.94-4.94M11.06 14.47L16 9.53"/>
  </g>`,
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
