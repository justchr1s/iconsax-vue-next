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
    content: `<path d="M12.001 17.35a1.63 1.63 0 100-3.26 1.63 1.63 0 000 3.26z"/>
  <path d="M16.65 9.44H7.12V8.28c0-2.93.83-4.88 4.88-4.88 4.33 0 4.88 2.11 4.88 3.95 0 .39.31.7.7.7.39 0 .7-.31.7-.7C18.28 3.8 16.17 2 12 2 6.37 2 5.72 5.58 5.72 8.28v1.25C2.92 9.88 2 11.3 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35zM12 18.74c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 013.02 3.02c0 1.67-1.35 3.02-3.02 3.02z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 16a2.5 2.5 0 005 0 2.5 2.5 0 00-2.5-2.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 17v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 17.35a1.63 1.63 0 100-3.26 1.63 1.63 0 000 3.26z" opacity=".4"/>
  <path d="M16.65 9.44h-9.3C3.25 9.44 2 10.69 2 14.79v1.86C2 20.75 3.25 22 7.35 22h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-4.1-1.25-5.35-5.35-5.35zM12 18.74c-1.67 0-3.02-1.36-3.02-3.02S10.33 12.7 12 12.7s3.02 1.36 3.02 3.02-1.35 3.02-3.02 3.02z"/>
  <path d="M7.12 9.45V8.28c0-2.93.83-4.88 4.88-4.88 4.33 0 4.88 2.11 4.88 3.95 0 .39.31.7.7.7.39 0 .7-.31.7-.7C18.28 3.8 16.17 2 12 2 6.37 2 5.72 5.58 5.72 8.28v1.25c.42-.05.89-.08 1.4-.08z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5zM6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75v-2c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v2c0 4.41-1.34 5.75-5.75 5.75zm-10-12c-3.58 0-4.25.68-4.25 4.25v2c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-2c0-3.57-.67-4.25-4.25-4.25H7z"/>
  <path d="M6 10.75c-.41 0-.75-.34-.75-.75V8c0-2.9.7-6.75 6.75-6.75 4.48 0 6.75 1.93 6.75 5.75 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.98-.6-4.25-5.25-4.25-4.36 0-5.25 2.1-5.25 5.25v2c0 .41-.34.75-.75.75zM12 19.25c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 10V8c0-3.31 1-6 6-6 4.5 0 6 2 6 5M12 18.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" opacity=".4"/>`,
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
