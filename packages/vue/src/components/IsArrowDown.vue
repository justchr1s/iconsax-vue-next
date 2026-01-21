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
    content: `<path d="M17.919 8.18H6.079c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.5v6M9 12.5l3 3 3-3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M15.53 11.97a.754.754 0 00-1.06 0l-1.72 1.72V8.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.19l-1.72-1.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3 3c.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 21.25c-.19 0-.38-.07-.53-.22L5.4 14.96a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 19.44l5.54-5.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z"/>
  <path d="M12 21.08c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75s.75.34.75.75v16.83c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"/>`,
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
