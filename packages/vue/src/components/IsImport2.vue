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
    content: `<path d="M16.8 9h-4.05v4.44l2.07-2.07c.15-.15.34-.22.53-.22s.38.07.53.22c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0l-3.35-3.35a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.07 2.07V9H7.2C4 9 2 11 2 14.2v2.59C2 20 4 22 7.2 22h9.59c3.2 0 5.2-2 5.2-5.2v-2.6C22 11 20 9 16.8 9zM12.75 2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V9h1.5V2.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.44 11.68L12 14.24l2.56-2.56M12 9v5.17M12 4v1.96M17.52 18.01C16.16 19.25 14.29 20 12 20c-5 0-8-3.58-8-8M20 12c0 1.05-.17 2.05-.49 2.97"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M7.75 17.5h4.83c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.56l7.72-7.72c.29-.29.29-.77 0-1.06a.742.742 0 00-.53-.22c-.19 0-.38.07-.53.22L8.5 14.94v-3.02c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.83c0 .41.34.75.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.32 11.68l2.56 2.56 2.56-2.56M11.88 4v10.17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 12.18c0 4.42-3 8-8 8s-8-3.58-8-8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.8 10.95c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l8.2-8.2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-8.2 8.2a.75.75 0 01-.53.22z"/>
  <path d="M17.83 11.75H13c-.41 0-.75-.34-.75-.75V6.17c0-.41.34-.75.75-.75s.75.34.75.75v4.08h4.08c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.43-2.32 7.75-7.75 7.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M9.32 11.68l2.56 2.56 2.56-2.56M11.88 4v10.17"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 12.18c0 4.42-3 8-8 8s-8-3.58-8-8"/>`,
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
