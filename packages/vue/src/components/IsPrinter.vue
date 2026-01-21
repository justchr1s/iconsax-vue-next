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
    content: `<path d="M7 5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1zM17.75 15c0 .41-.34.75-.75.75h-1V19c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3v-3.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75z"/>
  <path d="M18 7H6c-2 0-3 1-3 3v5c0 2 1 3 3 3h.375c.345 0 .625-.28.625-.625s-.289-.615-.612-.737A1.76 1.76 0 015.25 15c0-.96.79-1.75 1.75-1.75h10c.96 0 1.75.79 1.75 1.75a1.76 1.76 0 01-1.138 1.638c-.323.122-.612.392-.612.737s.28.625.625.625H18c2 0 3-1 3-3v-5c0-2-1-3-3-3zm-8 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2zM16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3zM17 15H7M7 11h3"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 15v4c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3v-4h8zM7 7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3v2H7z"/>
  <path d="M18 7H6c-2 0-3 1-3 3v5c0 2 1 3 3 3h2v-3h8v3h2c2 0 3-1 3-3v-5c0-2-1-3-3-3zm-8 4.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M10.75 11c0 .41-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75zM17 15.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2zM16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3zM17 15H7M7 11h3"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.75 7.75h-9.5c-.41 0-.75-.34-.75-.75V5c0-2.56 1.19-3.75 3.75-3.75h3.5c2.56 0 3.75 1.19 3.75 3.75v2c0 .41-.34.75-.75.75zM8 6.25h8V5c0-1.7-.55-2.25-2.25-2.25h-3.5C8.55 2.75 8 3.3 8 5v1.25zM13 22.75h-2c-2.42 0-3.75-1.33-3.75-3.75v-4c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v4c0 2.42-1.33 3.75-3.75 3.75zm-4.25-7V19c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25v-3.25h-6.5z"/>
  <path d="M18 18.75h-2c-.41 0-.75-.34-.75-.75v-2.25h-6.5V18c0 .41-.34.75-.75.75H6c-2.42 0-3.75-1.33-3.75-3.75v-5c0-2.42 1.33-3.75 3.75-3.75h12c2.42 0 3.75 1.33 3.75 3.75v5c0 2.42-1.33 3.75-3.75 3.75zm-1.25-1.5H18c1.58 0 2.25-.67 2.25-2.25v-5c0-1.58-.67-2.25-2.25-2.25H6c-1.58 0-2.25.67-2.25 2.25v5c0 1.58.67 2.25 2.25 2.25h1.25V15c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v2.25z"/>
  <path d="M17 15.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zM10 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 15v4c0 2-1 3-3 3h-2c-2 0-3-1-3-3v-4h8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 10v5c0 2-1 3-3 3h-2v-3H8v3H6c-2 0-3-1-3-3v-5c0-2 1-3 3-3h12c2 0 3 1 3 3zM17 15H7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 11h3" opacity=".4"/>`,
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
