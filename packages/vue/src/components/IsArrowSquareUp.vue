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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-.13 12c-.15.15-.34.22-.53.22s-.38-.08-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.76 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.04V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.47 13.46L12 9.94l3.53 3.52"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M15.53 14.21c-.19 0-.38-.07-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.47 13.46L12 9.94l3.53 3.52"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M15.53 14.21c-.19 0-.38-.07-.53-.22l-3-3-3 3c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3.53-3.53c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.47 13.46L12 9.94l3.53 3.52" opacity=".4"/>`,
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
