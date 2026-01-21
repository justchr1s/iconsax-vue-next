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
    content: `<path d="M21.97 12a6.005 6.005 0 01-8.118 5.614c-.319-.121-.378-.529-.157-.788A7.406 7.406 0 0015.471 12a7.41 7.41 0 00-1.772-4.825c-.223-.26-.164-.669.155-.79A6.005 6.005 0 0121.97 12z"/>
  <path d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 01-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 014-1.54c3.31 0 6 2.69 6 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.44 15.92A5.972 5.972 0 011.97 12c0-3.31 2.69-6 6-6 1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46s-.77 3.37-2 4.46a5.93 5.93 0 01-4 1.54"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 014-1.54c3.31 0 6 2.69 6 6z"/>
  <path d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 01-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 014-1.54c3.31 0 6 2.69 6 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 01-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.97 18.75c-1.67 0-3.27-.62-4.5-1.73a.75.75 0 010-1.12 5.2 5.2 0 001.75-3.9 5.2 5.2 0 00-1.75-3.9.75.75 0 010-1.12 6.683 6.683 0 014.5-1.73c3.72 0 6.75 3.03 6.75 6.75s-3.02 6.75-6.75 6.75zm-2.87-2.36c.85.56 1.84.86 2.88.86 2.89 0 5.25-2.36 5.25-5.25s-2.36-5.25-5.25-5.25c-1.03 0-2.03.3-2.88.86a6.73 6.73 0 010 8.78z"/>
  <path d="M7.97 18.75c-3.72 0-6.75-3.03-6.75-6.75s3.03-6.75 6.75-6.75c1.67 0 3.27.62 4.5 1.73A6.72 6.72 0 0114.72 12a6.7 6.7 0 01-2.25 5.02 6.713 6.713 0 01-4.5 1.73zm0-12c-2.89 0-5.25 2.36-5.25 5.25s2.36 5.25 5.25 5.25c1.3 0 2.54-.48 3.5-1.35a5.196 5.196 0 001.75-3.9c0-1.49-.64-2.92-1.75-3.9-.96-.87-2.2-1.35-3.5-1.35z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 12c0 3.31-2.69 6-6 6a5.93 5.93 0 01-4-1.54c1.23-1.09 2-2.69 2-4.46s-.77-3.37-2-4.46a5.93 5.93 0 014-1.54c3.31 0 6 2.69 6 6z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.97 12c0 1.77-.77 3.37-2 4.46a5.93 5.93 0 01-4 1.54c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.54 0 2.94.58 4 1.54 1.23 1.09 2 2.69 2 4.46z"/>`,
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
