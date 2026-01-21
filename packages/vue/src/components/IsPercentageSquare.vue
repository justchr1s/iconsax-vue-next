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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM7.75 9.14c0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48 0 .81-.66 1.48-1.48 1.48a1.49 1.49 0 01-1.48-1.48zm1.07 6.88c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.35 15.8c-.15.15-.34.22-.53.22zm6.95.32c-.81 0-1.48-.66-1.48-1.48 0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48s-.66 1.48-1.48 1.48z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M8.32 15.27l6.54-6.54"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.73 10.37a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM15.269 16.09a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M8.82 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.35 15.8c-.15.15-.34.22-.53.22zM9.23 7.66c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48a1.49 1.49 0 00-1.48-1.48zM15.769 13.39c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48s-.66-1.48-1.48-1.48z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7zM8.57 15.27l6.54-6.54"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.98 10.37a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM15.52 16.09a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M8.57 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.1 15.8c-.15.15-.34.22-.53.22zM8.98 11.11C7.89 11.11 7 10.22 7 9.13c0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98zm0-2.45a.48.48 0 00-.48.48c0 .27.21.48.48.48s.48-.21.48-.48a.48.48 0 00-.48-.48zM15.519 16.84c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98zm0-2.45a.48.48 0 00-.48.48c0 .27.21.48.48.48s.48-.21.48-.48-.21-.48-.48-.48z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.32 15.27l6.54-6.54M8.73 10.37a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM15.269 16.09a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46z" opacity=".4"/>`,
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
