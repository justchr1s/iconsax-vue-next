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
    content: `<path d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89zM21.002 19.11V4.89c0-1.35-.57-1.89-2.01-1.89h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.01 3C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.43 0 2.01-.54 2.01-1.89V4.89c0-1.35-.57-1.89-2.01-1.89M18.99 21c1.43 0 2.01-.54 2.01-1.89V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89z"/>
  <path d="M21 19.11V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89zM21 19.11V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8.64 21.75H5.01c-1.86 0-2.76-.86-2.76-2.64V4.89c0-1.78.9-2.64 2.76-2.64h3.63c1.86 0 2.76.86 2.76 2.64v14.22c0 1.78-.9 2.64-2.76 2.64zm-3.63-18c-1.08 0-1.26.27-1.26 1.14v14.22c0 .87.17 1.14 1.26 1.14h3.63c1.08 0 1.26-.27 1.26-1.14V4.89c0-.87-.17-1.14-1.26-1.14H5.01zM18.99 21.75h-3.63c-1.86 0-2.76-.86-2.76-2.64V4.89c0-1.78.9-2.64 2.76-2.64h3.63c1.86 0 2.76.86 2.76 2.64v14.22c0 1.78-.9 2.64-2.76 2.64zm-3.63-18c-1.08 0-1.26.27-1.26 1.14v14.22c0 .87.17 1.14 1.26 1.14h3.63c1.08 0 1.26-.27 1.26-1.14V4.89c0-.87-.17-1.14-1.26-1.14h-3.63z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19.11V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89z"/>`,
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
