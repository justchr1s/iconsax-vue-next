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
    content: `<path d="M16.8 2h-2.6C11 2 9 4 9 7.2v4.05h4.44l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H9v4.05C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2zM2.75 11.25c-.41 0-.75.34-.75.75s.34.75.75.75H9v-1.5H2.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11.68 14.56L14.24 12l-2.56-2.56M9 12h5.17M4 12h1.96M18.01 6.48C19.25 7.84 20 9.71 20 12c0 5-3.58 8-8 8M12 4c1.05 0 2.05.17 2.97.49"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z" opacity=".4"/>
  <path d="M12.43 8.12l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.69l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.3.76-.3 1.06 0z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.68 15.37c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.03-2.03-2.03-2.03a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56c-.14.15-.34.22-.53.22z"/>
  <path d="M14.17 12.81H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.17c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12 20.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.25-2.98 7.25-7.25S16.27 4.75 12 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.15 0 8.75 3.6 8.75 8.75s-3.6 8.75-8.75 8.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M11.68 14.62l2.56-2.56-2.56-2.56M4 12.06h10.17"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"/>`,
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
