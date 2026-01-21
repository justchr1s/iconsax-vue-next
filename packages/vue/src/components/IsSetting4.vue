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
    content: `<path d="M21.3 7.58h-5.58c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7 0 .39-.31.7-.7.7zM6.42 7.58H2.7c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7 0 .39-.32.7-.7.7z"/>
  <path d="M10.14 10.83a3.95 3.95 0 100-7.9 3.95 3.95 0 000 7.9zM21.3 17.81h-3.72c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h3.72c.39 0 .7.31.7.7 0 .39-.31.7-.7.7zM8.28 17.81H2.7c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h5.58c.39 0 .7.31.7.7 0 .39-.32.7-.7.7z"/>
  <path d="M13.86 21.072a3.95 3.95 0 100-7.9 3.95 3.95 0 000 7.9z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 6.5h-6M6 6.5H2M13.5 6.5c0 1.93-1.57 3.5-3.5 3.5S6.5 8.43 6.5 6.5a3.504 3.504 0 014.48-3.36M22 17.5h-4M8 17.5H2M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.23 7.62h-5.54c-.38 0-.69-.31-.69-.7 0-.38.31-.69.69-.69h5.54c.38 0 .69.31.69.69 0 .39-.31.7-.69.7zM6.46 7.62H2.77c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69h3.69c.38 0 .69.31.69.69 0 .38-.31.69-.69.69z" opacity=".4"/>
  <path d="M10.15 10.84a3.92 3.92 0 100-7.84 3.92 3.92 0 000 7.84z"/>
  <path d="M21.23 17.77h-3.69c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69h3.69c.38 0 .69.31.69.69 0 .38-.31.69-.69.69zM8.31 17.77H2.77c-.38 0-.69-.31-.69-.69 0-.38.31-.69.69-.69h5.54c.38 0 .69.31.69.69 0 .38-.31.69-.69.69z" opacity=".4"/>
  <path d="M13.85 21a3.92 3.92 0 100-7.84 3.92 3.92 0 000 7.84z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 6.5h-6M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 17.5h-4M8 17.5H2M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 7.25h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zM6 7.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M10 10.75A4.26 4.26 0 015.75 6.5 4.26 4.26 0 0110 2.25a4.26 4.26 0 014.25 4.25A4.26 4.26 0 0110 10.75zm0-7c-1.52 0-2.75 1.23-2.75 2.75S8.48 9.25 10 9.25s2.75-1.23 2.75-2.75S11.52 3.75 10 3.75zM22 18.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM8 18.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M14 21.75a4.26 4.26 0 01-4.25-4.25A4.26 4.26 0 0114 13.25a4.26 4.26 0 014.25 4.25A4.26 4.26 0 0114 21.75zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 6.5h-6"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 17.5H2"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M22 17.5h-4M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"/>
  </g>`
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
    :fill="variant === 'bold' || variant === 'bulk' ? color : 'none'"
    :stroke="variant === 'linear' || variant === 'outline' || variant === 'broken' || variant === 'twotone' ? color : undefined"
    v-html="currentVariant?.content"
  />
</template>
