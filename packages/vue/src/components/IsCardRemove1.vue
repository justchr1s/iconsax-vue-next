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
    content: `<path d="M2 11.46v5c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-4.99c0-.67-.54-1.21-1.21-1.21H3.21c-.67 0-1.21.54-1.21 1.21zm6 5.79H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM13.5 4.608v2.93c0 .67-.54 1.21-1.21 1.21H3.21c-.68 0-1.21-.56-1.21-1.23.01-1.13.46-2.16 1.21-2.91S5 3.398 6.14 3.398h6.15c.67 0 1.21.54 1.21 1.21zM19.97 2h-2.94C15.76 2 15 2.76 15 4.03v2.94C15 8.24 15.76 9 17.03 9h2.94C21.24 9 22 8.24 22 6.97V4.03C22 2.76 21.24 2 19.97 2zm.37 4.49c.11.13.17.27.17.44 0 .14-.06.3-.17.41a.61.61 0 01-.85 0l-.99-.99-.98 1c-.23.23-.62.23-.86-.01a.61.61 0 010-.85l1-.98-.99-.99a.622.622 0 01-.01-.86c.23-.24.62-.23.86.01l.98.99 1-1a.61.61 0 01.85 0c.11.13.16.28.17.44 0 .14-.06.3-.16.42l-1 1 .98.97z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11.03V7.89c0-3.51.89-4.39 4.44-4.39h7.06M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.09"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M17.31 8.19l3.88-3.88M21.19 8.19l-3.88-3.88"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 7.77V9H2V7.54C2 5.25 3.86 3.4 6.15 3.4H16v2.57C16 7.24 16.76 8 18.03 8h2.94c.4 0 .74-.07 1.03-.23z" opacity=".4"/>
  <path d="M2 9v7.46c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14V9H2zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1zm.37 4.49c.11.13.17.27.17.44 0 .14-.06.3-.17.41a.61.61 0 01-.85 0l-.99-.99-.98 1c-.23.23-.62.23-.86-.01a.61.61 0 010-.85l1-.98-.99-.99a.622.622 0 01-.01-.86c.23-.24.62-.23.86.01l.98.99 1-1a.61.61 0 01.85 0c.11.13.16.28.17.44 0 .14-.06.3-.16.42l-1 1 .98.97z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M17.309 8.19l3.88-3.88M21.189 8.19l-3.88-3.88"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.5 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.5c.41 0 .75.34.75.75s-.34.75-.75.75zM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h7.06c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-4.08c0-.41.34-.75.75-.75s.75.34.75.75v4.08c.01 3.95-1.2 5.15-5.18 5.15z"/>
  <path d="M17.31 8.94c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.89-3.89c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.89 3.89c-.15.15-.34.22-.53.22z"/>
  <path d="M21.19 8.94c-.19 0-.38-.07-.53-.22l-3.89-3.89a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.89 3.89c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h11.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 16.5h2M10.5 16.5h4" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06"/>
  <g stroke-linecap="round" stroke-width="1.5" opacity=".4">
    <path d="M17.309 8.19l3.88-3.88M21.189 8.19l-3.88-3.88"/>
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
