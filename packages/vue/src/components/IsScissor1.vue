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
    content: `<path d="M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
  <path d="M15.25 11.98l7.2-5.38a.75.75 0 00-.9-1.2L14 11.05 8.45 6.89a.76.76 0 00-1.05.15c-.25.33-.18.8.15 1.05l5.2 3.89-5.9 4.42a.75.75 0 00.9 1.2L14 12.92l7.55 5.65c.13.1.29.15.45.15a.75.75 0 00.45-1.35l-7.2-5.39z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 3C7.43 3 9 4.57 9 6.5S7.43 10 5.5 10 2 8.43 2 6.5M5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 6L8.65 15.98M22 17.97L8.65 7.98"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M14.17 11.99l3.6-2.69a.75.75 0 00-.9-1.2l-3.95 2.95-2.4-1.8c.01-.09.03-.18.03-.28a2.3 2.3 0 10-2.3 2.3c.62 0 1.18-.25 1.6-.65l1.83 1.37-1.84 1.38a2.3 2.3 0 00-1.58-.64 2.3 2.3 0 102.3 2.3c0-.1-.02-.2-.03-.3l2.41-1.8 3.95 2.95c.13.1.29.15.45.15a.75.75 0 00.45-1.35l-3.62-2.69z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 6L8.65 15.98M22 17.97L8.65 7.98"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5.5 10.75A4.26 4.26 0 011.25 6.5 4.26 4.26 0 015.5 2.25 4.26 4.26 0 019.75 6.5a4.26 4.26 0 01-4.25 4.25zm0-7c-1.52 0-2.75 1.23-2.75 2.75S3.98 9.25 5.5 9.25 8.25 8.02 8.25 6.5 7.02 3.75 5.5 3.75zM5.5 21.75a4.26 4.26 0 01-4.25-4.25 4.26 4.26 0 014.25-4.25 4.26 4.26 0 014.25 4.25 4.26 4.26 0 01-4.25 4.25zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75z"/>
  <path d="M8.65 16.73a.75.75 0 01-.45-1.35L21.55 5.4a.75.75 0 01.9 1.2L9.1 16.58c-.13.1-.29.15-.45.15z"/>
  <path d="M22 18.72a.76.76 0 01-.45-.15L8.2 8.59a.75.75 0 01.9-1.2l13.35 9.98a.75.75 0 01-.45 1.35z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M22 6L8.65 15.98M22 17.97L8.65 7.98"/>
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
