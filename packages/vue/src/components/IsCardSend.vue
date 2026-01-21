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
    content: `<path d="M19.97 1.75h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03V3.78c0-1.27-.76-2.03-2.03-2.03zm.22 3.31a.62.62 0 01-.44.18.62.62 0 01-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63s-.63-.28-.63-.63V4.88l-.18.18c-.24.24-.64.24-.88 0a.628.628 0 010-.88l1.25-1.25c.05-.05.12-.09.19-.12.02-.01.04-.01.06-.02.05-.02.1-.03.16-.03h.06c.07 0 .13.01.2.04h.02c.07.03.13.07.18.12.01.01.01.01.02.01l1.25 1.25c.24.24.24.64-.01.88zM2 11.46v5c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-4.99c0-.67-.54-1.21-1.21-1.21H3.21c-.67 0-1.21.54-1.21 1.21zm6 5.79H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM13.5 4.608v2.93c0 .67-.54 1.21-1.21 1.21H3.21c-.68 0-1.21-.56-1.21-1.23.01-1.13.46-2.16 1.21-2.91S5 3.398 6.14 3.398h6.15c.67 0 1.21.54 1.21 1.21z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h12.5M6 16.5h2M10.5 16.5h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11.01V7.89c0-3.51.89-4.39 4.44-4.39h8.06M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.12M20 9.5v-6l2 2M20 3.5l-2 2"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1zm.22 3.31a.62.62 0 01-.44.18.62.62 0 01-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63s-.63-.28-.63-.63V4.13l-.18.18c-.24.24-.64.24-.88 0a.628.628 0 010-.88l1.25-1.25c.05-.05.12-.09.19-.12.02-.01.04-.01.06-.02.05-.02.1-.03.16-.03h.06c.07 0 .13.01.2.04h.02c.07.03.13.07.18.12.01.01.01.01.02.01l1.25 1.25c.24.24.24.64-.01.88z"/>
  <path d="M22 7.77V9H2V7.54C2 5.25 3.86 3.4 6.15 3.4H16v2.57C16 7.24 16.76 8 18.03 8h2.94c.4 0 .74-.07 1.03-.23z" opacity=".4"/>
  <path d="M2 9v7.46c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14V9H2zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h12.5M6 16.5h2M10.5 16.5h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06M20 9.5v-6l2 2M20 3.5l-2 2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14.5 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.5c.41 0 .75.34.75.75s-.34.75-.75.75zM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h8.06c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-2.08c0-.41.34-.75.75-.75s.75.34.75.75v2.08c.01 3.95-1.2 5.15-5.18 5.15z"/>
  <path d="M20 10.25c-.41 0-.75-.34-.75-.75v-6c0-.3.18-.58.46-.69.28-.11.6-.05.82.16l2 2c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-.72-.72V9.5c0 .41-.34.75-.75.75z"/>
  <path d="M18 6.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h12.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 16.5h2M10.5 16.5h4" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M20 9.5v-6l2 2M20 3.5l-2 2"/>
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
