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
    content: `<path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm4.35 13.57a.746.746 0 01-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.5 12a6.5 6.5 0 1113 0c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 015.5 12z" opacity=".4"/>
  <path d="M8.03 17.15h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47C15 21.5 13.9 22 12.55 22h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44zM8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44zM13.4 14.6c-.19 0-.38-.07-.53-.22l-1.4-1.4a.75.75 0 01-.22-.53V9.66c0-.41.34-.75.75-.75s.75.34.75.75v2.48l1.18 1.18c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9.66v2.79l1.4 1.4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 12a6.5 6.5 0 1113 0c0 2.08-.98 3.94-2.5 5.13h-.01c-1.1.86-2.48 1.37-3.99 1.37-1.49 0-2.86-.5-3.96-1.35h-.01A6.486 6.486 0 015.5 12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.03 17.15h.01c1.1.85 2.47 1.35 3.96 1.35 1.51 0 2.89-.51 3.99-1.37H16l-.51 2.47C15 21.5 13.9 22 12.55 22h-1.09c-1.35 0-2.46-.5-2.94-2.41l-.49-2.44zM8.03 6.85h.01C9.14 6 10.51 5.5 12 5.5c1.51 0 2.89.51 3.99 1.37H16l-.51-2.47C15 2.5 13.9 2 12.55 2h-1.09C10.11 2 9 2.5 8.52 4.41l-.49 2.44z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M15.71 15.93a.67.67 0 01-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 01-.65.37z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1" opacity=".4"/>`,
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
