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
    content: `<path d="M11.998 19.75h-2.68c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81h-2.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04l-7.99 6.99c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81h2.68c.41 0 .75.34.75.75s-.34.75-.75.75zM20 15h-3c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm-1.49 4.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1zM5.469 2c-1.93 0-3.5 1.57-3.5 3.5S3.539 9 5.469 9s3.5-1.57 3.5-3.5S7.409 2 5.469 2zm.04 4.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-width="1.5" d="M5.47 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.97 22h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2M12.002 5h2.68c1.85 0 2.71 2.29 1.32 3.51l-7.99 6.99c-1.39 1.21-.53 3.5 1.31 3.5h2.68"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.488 5.5h.011M18.488 18.5h.011"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.47 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM17 15h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z" opacity=".4"/>
  <path d="M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75zM18.51 19.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1zM5.51 6.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-width="1.5" d="M5.47 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM16.97 15h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.486 5.5h.012M18.486 18.5h.012"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.51 6.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1zM18.51 19.5c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1z"/>
  <path d="M5.47 9.75A4.26 4.26 0 011.22 5.5a4.26 4.26 0 014.25-4.25A4.26 4.26 0 019.72 5.5c0 2.34-1.9 4.25-4.25 4.25zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75S8.22 7.02 8.22 5.5 6.99 2.75 5.47 2.75zM19.97 22.75h-3c-1.52 0-2.75-1.23-2.75-2.75v-3c0-1.52 1.23-2.75 2.75-2.75h3c1.52 0 2.75 1.23 2.75 2.75v3c0 1.52-1.23 2.75-2.75 2.75zm-3-7c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-3zM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-width="1.5" d="M5.47 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM16.97 15h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.486 5.5h.011M18.486 18.5h.011"/>`,
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
