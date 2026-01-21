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
    content: `<path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM16.742 10.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75zM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM16.742 20.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.26 9.5h9.48M3 14.5h18M7.26 19.5h9.48M10.05 4.5H21M3 4.5h2.98"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M16.74 10.25H7.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75z" opacity=".4"/>
  <path d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M16.74 20.25H7.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.5h18M7.26 9.5h9.48M3 14.5h18M7.26 19.5h9.48"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM16.74 10.25H7.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75zM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM16.74 20.25H7.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.5h18" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.26 9.5h9.48"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 14.5h18" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.26 19.5h9.48"/>`,
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
