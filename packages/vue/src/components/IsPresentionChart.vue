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
    content: `<path d="M22 2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM16.67 22.34c-.13.26-.4.41-.67.41-.11 0-.23-.03-.33-.08L12 20.84l-3.67 1.83c-.1.05-.22.08-.33.08-.27 0-.54-.15-.67-.41a.74.74 0 01.34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01z"/>
  <path d="M3 2v12.1C3 16 4 17 5.9 17h12.2c1.9 0 2.9-1 2.9-2.9V2H3zm13.98 6.58l-3.15 2.63c-.29.24-.66.34-1.01.28-.36-.06-.67-.28-.86-.6l-1.05-1.75-2.93 2.44c-.14.12-.31.17-.48.17a.75.75 0 01-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28.36.06.67.28.86.6l1.05 1.75 2.93-2.44a.75.75 0 011.06.1c.26.32.22.79-.1 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 10V2H3v12.1c0 .71.14 1.3.42 1.76.46.76 1.3 1.15 2.49 1.15H18.1c1.9 0 2.9-1 2.9-2.9M2 2h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 22l4-2v-3M16 22l-4-2M7.5 11l3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 2v12.1c0 1.9-1 2.9-2.9 2.9H5.9C4 17 3 16 3 14.1V2h18z" opacity=".4"/>
  <path d="M22 2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM16.67 22.34c-.13.26-.4.41-.67.41-.11 0-.23-.03-.33-.08L12 20.84l-3.67 1.83c-.1.05-.22.08-.33.08-.27 0-.54-.15-.67-.41a.74.74 0 01.34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01zM7.5 11.75a.75.75 0 01-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28.36.06.67.28.86.6l1.05 1.75 2.93-2.44a.75.75 0 011.06.1c.27.32.22.79-.1 1.06l-3.15 2.63c-.29.24-.66.34-1.01.28-.36-.06-.67-.28-.86-.6l-1.05-1.75-2.93 2.44c-.14.11-.31.17-.48.17z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.9 17h12.19c1.9 0 2.9-1 2.9-2.9V2h-18v12.1C3 16 4 17 5.9 17zM2 2h20M8 22l4-2v-3M16 22l-4-2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.5 11l3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.1 17.75H5.9c-2.32 0-3.65-1.33-3.65-3.65V2c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75v12.1c0 2.32-1.33 3.65-3.65 3.65zm-14.35-15V14.1c0 1.49.66 2.15 2.15 2.15h12.19c1.49 0 2.15-.66 2.15-2.15V2.75H3.75z"/>
  <path d="M22 2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM8 22.75c-.28 0-.54-.15-.67-.41a.745.745 0 01.34-1.01l3.58-1.79V17c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .28-.16.54-.42.67l-4 2c-.1.05-.22.08-.33.08z"/>
  <path d="M16 22.75c-.11 0-.23-.03-.33-.08l-4-2a.763.763 0 01-.34-1.01c.19-.37.64-.52 1.01-.34l4 2c.37.19.52.64.34 1.01a.77.77 0 01-.68.42zM7.5 11.75a.75.75 0 01-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28.36.06.67.28.86.6l1.05 1.75 2.93-2.44c.32-.26.79-.22 1.06.1s.22.79-.1 1.06l-3.15 2.63c-.29.24-.66.34-1.01.28-.36-.06-.67-.28-.86-.6l-1.05-1.75-2.93 2.44c-.14.11-.31.17-.48.17z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.9 17h12.19c1.9 0 2.9-1 2.9-2.9V2h-18v12.1C3 16 4 17 5.9 17zM2 2h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 22l4-2m0 0v-3m0 3l4 2M7.5 11l3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8" opacity=".4"/>`,
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
