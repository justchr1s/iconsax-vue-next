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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.73 7.66c.81 0 1.48.66 1.48 1.48 0 .81-.66 1.48-1.48 1.48-.81 0-1.48-.66-1.48-1.48s.66-1.48 1.48-1.48zm.12 8.14c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.85 15.8zm6.42.54c-.81 0-1.48-.66-1.48-1.48 0-.81.66-1.48 1.48-1.48.81 0 1.48.66 1.48 1.48s-.66 1.48-1.48 1.48z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.32 15.27l6.54-6.54M8.73 10.37a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM15.269 16.09a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M8.32 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.85 15.8c-.15.15-.34.22-.53.22zM8.73 7.66c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48a1.49 1.49 0 00-1.48-1.48zM15.269 13.39c-.81 0-1.48.66-1.48 1.48 0 .81.66 1.48 1.48 1.48.81 0 1.48-.66 1.48-1.48s-.66-1.48-1.48-1.48z"/>`,
    isStroke: false
  },
  linear: null,
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8.57 16.02c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l6.55-6.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.1 15.8c-.15.15-.34.22-.53.22zM8.98 11.11C7.89 11.11 7 10.22 7 9.13c0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98zm0-2.45a.48.48 0 00-.48.48c0 .27.21.48.48.48s.48-.21.48-.48a.48.48 0 00-.48-.48zM15.519 16.84c-1.09 0-1.98-.89-1.98-1.98 0-1.09.89-1.98 1.98-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98zm0-2.45a.48.48 0 00-.48.48c0 .27.21.48.48.48s.48-.21.48-.48-.21-.48-.48-.48z"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.32 15.27l6.54-6.54M8.73 10.37a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46zM15.269 16.09a1.23 1.23 0 100-2.46 1.23 1.23 0 000 2.46z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
    isStroke: true
  }
}

const currentVariant = computed(() => svgData[props.variant] || svgData.bold)
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
