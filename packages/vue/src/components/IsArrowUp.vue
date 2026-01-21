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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 10.03c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.72-1.72v5.19c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.19l-1.72 1.72c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l3-3c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.07 9.57L12 3.5 5.93 9.57M12 12V3.67M12 20.5v-4.53"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M15.53 10.97l-3-3a.754.754 0 00-1.06 0l-3 3c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.72-1.72v5.19c0 .41.34.75.75.75s.75-.34.75-.75v-5.19l1.72 1.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.07 9.57L12 3.5 5.93 9.57M12 20.5V3.67"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14.67 18.75H9.33c-1.88 0-3.31-.68-4.02-1.91-.71-1.23-.58-2.81.36-4.44l2.67-4.63c.94-1.62 2.24-2.52 3.66-2.52s2.72.9 3.66 2.53l2.67 4.63c.94 1.63 1.07 3.21.36 4.44-.71 1.22-2.14 1.9-4.02 1.9zM12 6.75c-.86 0-1.7.63-2.36 1.78l-2.67 4.63c-.66 1.15-.79 2.19-.36 2.94.43.75 1.4 1.16 2.72 1.16h5.34c1.32 0 2.29-.41 2.72-1.16.43-.75.3-1.79-.36-2.94l-2.67-4.63c-.66-1.15-1.5-1.78-2.36-1.78z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.07 9.57L12 3.5 5.93 9.57"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 20.5V3.67" opacity=".4"/>`,
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
