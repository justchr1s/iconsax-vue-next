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
    content: `<path d="M16.24 9.52l4.71 4.71c.28.28.77.13.85-.26.13-.64.2-1.3.2-1.97 0-2.29-.78-4.4-2.07-6.08-.18-.24-.54-.25-.75-.04l-2.94 2.94c-.19.19-.19.51 0 .7zM14.48 10.58l-1.77 1.77c-.2.2-.2.51 0 .71l5.82 5.82c.2.2.52.2.71 0 .62-.65 1.15-1.38 1.58-2.17.1-.19.06-.44-.09-.59l-5.54-5.54a.513.513 0 00-.71 0zM10.94 14.12l-1.76 1.76c-.2.2-.2.51 0 .71l4.92 4.93a.5.5 0 00.49.13c.93-.25 1.81-.63 2.61-1.13.27-.17.31-.55.08-.78l-5.63-5.63a.523.523 0 00-.71.01zM18.08 4.07a9.942 9.942 0 00-7.31-2c-4.51.54-8.16 4.2-8.7 8.7-.33 2.76.47 5.32 2 7.31.18.24.54.25.75.04l13.3-13.3c.21-.21.2-.57-.04-.75zM7.4 17.67l-1.52 1.52c-.21.21-.2.57.04.75a9.872 9.872 0 005.39 2.05c.43.03.64-.48.33-.79l-3.53-3.53c-.19-.2-.51-.2-.71 0z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0 2.76 1.12 5.26 2.93 7.07L19.07 4.93A9.969 9.969 0 0012 2C8.07 2 4.67 4.27 3.03 7.57"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.969 9.969 0 0122 12zM7.76 16.24l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.17l6.29 6.3"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 12c0 5.04-3.74 9.21-8.59 9.9-.46.07-.93.1-1.41.1-2.76 0-5.26-1.12-7.07-2.93A9.969 9.969 0 012 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93A9.969 9.969 0 0122 12z" opacity=".4"/>
  <path d="M14.83 10.23l-2.48 2.48 6.53 6.53c-.36.35-.75.67-1.16.96l-6.43-6.43-2.47 2.47 5.12 5.13c.11.11.18.25.21.39v.01c-.24.05-.49.1-.74.13-.32.05-.64.08-.97.09L7.76 17.3l-2.28 2.28a8.74 8.74 0 01-.55-.51 8.74 8.74 0 01-.51-.55l14.1-14.1c.19.16.37.33.55.51.18.18.35.36.51.55l-3.69 3.69 5.69 5.69c-.16.53-.36 1.03-.6 1.52l-6.15-6.15z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.07 4.93L4.93 19.07A9.969 9.969 0 012 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.969 9.969 0 0122 12zM7.76 16.24l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.17l6.29 6.3"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.72C6.09 22.72 1.28 17.91 1.28 12 1.28 6.09 6.09 1.28 12 1.28c2.65 0 5.19.98 7.15 2.75A10.65 10.65 0 0122.72 12c0 3.05-1.3 5.96-3.58 7.98A10.6 10.6 0 0112 22.72zm0-19.94c-5.09 0-9.22 4.14-9.22 9.22 0 5.08 4.14 9.22 9.22 9.22 2.28 0 4.46-.84 6.15-2.37a9.16 9.16 0 003.08-6.86c0-2.63-1.12-5.12-3.07-6.85A9.22 9.22 0 0012 2.78z"/>
  <path d="M10.44 18.91c-.37 0-.76-.08-1.14-.23A7.179 7.179 0 014.78 12c0-2.95 1.77-5.58 4.52-6.68.87-.35 1.75-.3 2.41.14.64.43 1 1.19 1.02 2.14V16.4c-.01.95-.37 1.72-1.02 2.14-.37.25-.81.37-1.27.37zm0-12.32c-.18 0-.38.04-.58.12A5.666 5.666 0 006.28 12c0 2.34 1.4 4.42 3.58 5.29.4.16.78.16 1.02.01.28-.19.34-.6.35-.91V7.61c0-.3-.07-.72-.35-.91a.87.87 0 00-.44-.11z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.93 19.07A9.969 9.969 0 012 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.07 4.93A9.969 9.969 0 0122 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M19.07 4.93L4.93 19.07M7.76 16.24l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.17l6.29 6.3"/>
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
