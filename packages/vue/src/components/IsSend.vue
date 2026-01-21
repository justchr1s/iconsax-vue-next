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
    content: `<path d="M20.5 21.25h-17c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM5 14.52c.41 0 .75-.34.75-.75V5.31l12.72 12.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L6.81 4.25h8.46c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H5c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v10.27c0 .41.34.75.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.41 5.91L5 3.5M19 17.5l-8.38-8.38M19 7.23V17.5H8.73M3.5 22h17"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M9.51 4.23l8.56 4.28c3.84 1.92 3.84 5.06 0 6.98l-8.56 4.28c-5.76 2.88-8.11.52-5.23-5.23l.87-1.73c.25-.51.25-1.1 0-1.61l-.87-1.74C1.4 3.71 3.76 1.35 9.51 4.23z" opacity=".4"/>
  <path d="M14.84 12.75h-5.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 22h17M5 3.5l14 14M5 13.77V3.5h10.27"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75zM19 18.25c-.19 0-.38-.07-.53-.22l-14-14a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l14 14c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M5 14.52c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75h10.27c.41 0 .75.34.75.75s-.34.75-.75.75H5.75v9.52c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 22h17" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 3.5l14 14M5 13.77V3.5h10.27"/>`,
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
