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
    content: `<path d="M20.89 5.179v11.3c0 1.98-1.61 3.59-3.59 3.59a3.6 3.6 0 01-3.59-3.59c0-1.97 1.62-3.58 3.59-3.58.84 0 1.59.29 2.2.77v-5.95l-9.21 2.62v8.07a3.6 3.6 0 01-3.59 3.59c-1.98 0-3.59-1.61-3.59-3.59 0-1.97 1.61-3.58 3.59-3.58.83 0 1.58.29 2.19.76v-8.84c0-1.47.89-2.61 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33.71.53 1.06 1.43 1.06 2.67z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.28 22a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.84 7.96V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7C10.18 4.1 9.4 5 9.4 6.3v12.57M20.84 16.8V12M17.72 19.92a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24zM9.4 9.52L20.84 6.4"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.29 10.34v8.07A3.6 3.6 0 016.7 22c-1.98 0-3.59-1.61-3.59-3.59 0-1.97 1.61-3.58 3.59-3.58.83 0 1.58.29 2.19.76v-4.85l1.4-.4zM20.89 7.32v9.16c0 1.98-1.61 3.59-3.59 3.59a3.6 3.6 0 01-3.59-3.59c0-1.97 1.62-3.58 3.59-3.58.84 0 1.59.29 2.2.77V7.72l1.39-.4z"/>
  <path d="M20.89 5.18v2.14l-12 3.42V6.75c0-1.47.89-2.61 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33.71.53 1.06 1.43 1.06 2.67z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.28 22a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.84 16.8V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7C10.18 4.1 9.4 5 9.4 6.3v12.57"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.72 19.92a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24zM9.4 9.52L20.84 6.4"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.28 22.75a3.88 3.88 0 01-3.87-3.87 3.88 3.88 0 013.87-3.87 3.88 3.88 0 013.87 3.87 3.88 3.88 0 01-3.87 3.87zm0-6.24c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37-1.06-2.37-2.37-2.37z"/>
  <path d="M9.4 19.63c-.41 0-.75-.34-.75-.75V6.3c0-1.58.95-2.82 2.47-3.23l6.24-1.7c1.27-.35 2.34-.22 3.09.36.76.58 1.14 1.55 1.14 2.88v12.2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.6c0-.58-.1-1.34-.55-1.68-.49-.38-1.33-.23-1.79-.1l-6.24 1.7c-.87.24-1.36.89-1.36 1.79v12.58c0 .4-.34.74-.75.74z"/>
  <path d="M17.72 20.67a3.88 3.88 0 01-3.87-3.87 3.88 3.88 0 013.87-3.87 3.88 3.88 0 013.87 3.87 3.88 3.88 0 01-3.87 3.87zm0-6.24c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37-1.06-2.37-2.37-2.37zM9.4 10.27a.755.755 0 01-.2-1.48l11.44-3.12a.75.75 0 11.39 1.45L9.6 10.24c-.07.02-.14.03-.2.03z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.28 22a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24zM17.72 19.92a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M20.84 16.8V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7C10.18 4.1 9.4 5 9.4 6.3v12.57M9.4 9.52L20.84 6.4"/>
  </g>`,
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
