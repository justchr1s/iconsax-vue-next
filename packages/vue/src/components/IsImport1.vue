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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm1.34 5.53l-7.72 7.72h3.02c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75v-4.83c0-.41.34-.75.75-.75s.75.34.75.75v3.02l7.72-7.72c.15-.15.34-.22.53-.22s.38.07.53.22c.29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 2l-8.2 8.2M13 6.17V11h4.83M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2M11 2H9C4 2 2 4 2 9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path d="M7.75 17.5h4.83c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.56l7.72-7.72c.29-.29.29-.77 0-1.06a.742.742 0 00-.53-.22c-.19 0-.38.07-.53.22L8.5 14.94v-3.02c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.83c0 .41.34.75.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 2l-8.2 8.2M13 6.17V11h4.83"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.26 22.25H8.74c-4.91 0-7.01-2.1-7.01-7.01v-.13c0-4.44 1.75-6.58 5.67-6.95.4-.03.78.27.82.68.04.41-.26.78-.68.82-3.14.29-4.31 1.77-4.31 5.46v.13c0 4.07 1.44 5.51 5.51 5.51h6.52c4.07 0 5.51-1.44 5.51-5.51v-.13c0-3.71-1.19-5.19-4.39-5.46a.75.75 0 01-.68-.81c.04-.41.39-.72.81-.68 3.98.34 5.76 2.49 5.76 6.96v.13c0 4.89-2.1 6.99-7.01 6.99z"/>
  <path d="M12 15.63c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v12.88c0 .42-.34.75-.75.75z"/>
  <path d="M12 16.75c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 14.94l2.82-2.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.35 3.35c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M22 2l-8.2 8.2M13 6.17V11h4.83"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"/>`,
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
