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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.75 14.14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9.86v4.29M9 8.43v7.14M12 14.99V17M12 7v4.95M15 8.43v7.14M18 9.86v4.29M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M6 14.89c-.41 0-.75-.34-.75-.75V9.85c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75zM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75zM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75zM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75zM18 14.89c-.41 0-.75-.34-.75-.75V9.85c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6 14.89c-.41 0-.75-.34-.75-.75V9.85c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75zM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75zM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75zM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75zM18 14.89c-.41 0-.75-.34-.75-.75V9.85c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75z"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
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
