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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.69 12.33c0 .09-.02.18-.05.27-.07.17-.21.31-.38.38-.09.04-.18.05-.27.05h-1.86c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h.18l-2.11-2.11-1.02 1.52c-.12.17-.3.29-.51.31a.688.688 0 01-.56-.2l-2.98-2.98a.706.706 0 010-.99c.27-.28.71-.27.99 0l2.38 2.38 1.02-1.52c.12-.17.3-.29.51-.31.22-.02.41.05.56.2l2.72 2.72v-.18c0-.39.31-.7.7-.7.39 0 .7.31.7.7v1.86h-.02z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.17 12l-.47.7-3.2-3.2M16.5 14.5l-1.51-1.51L14 12M14.5 14.5h2v-2"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M16.88 12.47c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v.18l-2.72-2.72a.688.688 0 00-.56-.2c-.21.02-.4.13-.51.31l-1.02 1.52-2.36-2.38a.706.706 0 00-.99 0c-.27.27-.27.71 0 .99l2.98 2.98c.15.15.35.22.56.2.21-.02.4-.13.51-.31l1.02-1.52 2.11 2.11h-.18c-.39 0-.7.31-.7.7 0 .39.31.7.7.7h1.86c.09 0 .18-.02.27-.05.17-.07.31-.21.38-.38.04-.09.05-.18.05-.27v-1.86z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 14.5l-4.2-4.2-1.6 2.4-3.2-3.2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 14.5h2v-2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.5 15.25c-.19 0-.38-.07-.53-.22l-3.55-3.55-1.09 1.64c-.12.19-.33.31-.55.33a.73.73 0 01-.6-.22l-3.2-3.2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.55 2.55 1.09-1.64c.12-.18.32-.3.55-.33.23-.02.45.06.6.22l4.2 4.2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M16.5 15.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V12.5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M16.5 14.5l-4.2-4.2-1.6 2.4-3.2-3.2"/>
    <path d="M14.5 14.5h2v-2"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
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
