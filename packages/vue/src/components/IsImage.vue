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
    content: `<path d="M22.019 16.82l-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76zM6.97 8.381a3.38 3.38 0 100-6.76 3.38 3.38 0 000 6.76z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.33 12.84c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45c-1.2 2.4.55 5.23 3.23 5.23h12.76c2.59 0 4.34-2.65 3.32-5.04l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22M9.97 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.36 0 .7.06 1.01.18"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22.02 16.82L18.89 9.5c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9L12 12.66c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72L2.02 16.6c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76z" opacity=".4"/>
  <path d="M6.97 8.38a3.38 3.38 0 100-6.76 3.38 3.38 0 000 6.76z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.68 16.96l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22l-1.89 3.41c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45C1.16 19.17 2.91 22 5.59 22h12.76c2.6 0 4.35-2.65 3.33-5.04zM6.97 8a3 3 0 100-6 3 3 0 000 6z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.36 22.75H5.59c-1.52 0-2.91-.77-3.71-2.07a4.35 4.35 0 01-.19-4.25l1.72-3.45c.56-1.12 1.46-1.82 2.47-1.93 1.01-.11 2.04.39 2.82 1.36l.22.28c.44.54.95.83 1.45.78.5-.04.96-.4 1.3-1.01l1.89-3.41c.78-1.41 1.82-2.14 2.95-2.09 1.12.06 2.08.9 2.72 2.38l3.13 7.31a4.35 4.35 0 01-.37 4.12 4.284 4.284 0 01-3.63 1.98zm-12.2-10.2c-.04 0-.08 0-.12.01-.5.05-.96.45-1.29 1.1l-1.72 3.45c-.45.89-.4 1.94.12 2.79.52.85 1.44 1.36 2.44 1.36h12.76c.98 0 1.85-.47 2.39-1.29.54-.82.63-1.8.24-2.7l-3.13-7.31c-.38-.9-.91-1.45-1.42-1.47-.47-.03-1.08.47-1.56 1.32l-1.89 3.41c-.58 1.04-1.49 1.69-2.48 1.78-.99.08-2-.4-2.75-1.34l-.22-.28c-.42-.55-.9-.83-1.37-.83zM6.97 8.75C4.91 8.75 3.22 7.07 3.22 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6C5.73 2.75 4.72 3.76 4.72 5s1.01 2.25 2.25 2.25S9.22 6.24 9.22 5 8.21 2.75 6.97 2.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.68 16.96l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22l-1.89 3.41c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45C1.16 19.17 2.91 22 5.59 22h12.76c2.6 0 4.35-2.65 3.33-5.04z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.97 8a3 3 0 100-6 3 3 0 000 6z" opacity=".4"/>`,
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
