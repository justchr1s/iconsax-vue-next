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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.53 13.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 12l1.47 1.47zm5.16-3.51l-2 4.67a.752.752 0 01-.98.39.745.745 0 01-.39-.99l2-4.67c.16-.38.6-.56.98-.39.38.17.55.61.39.99zm4.84 2.57l-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L16.94 12l-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10l-2 2 2 2M16 10l2 2-2 2M13 9.67l-2 4.66"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M8 14.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 12l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16 14.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L16.94 12l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22zM11 15.08a.745.745 0 01-.68-1.05l2-4.67c.16-.38.6-.56.98-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10l-2 2 2 2M16 10l2 2-2 2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM13 9.67l-2 4.66"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8 14.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 12l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16 14.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L16.94 12l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M11 15.08a.745.745 0 01-.68-1.05l2-4.67c.16-.38.6-.56.98-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10l-2 2 2 2M16 10l2 2-2 2" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13 9.67l-2 4.66" opacity=".4"/>`,
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
