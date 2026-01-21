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
    content: `<path d="M14.54 13.672c-.36 0-.65.29-.65.65 0 .36.29.65.65.65.36 0 .65-.29.65-.65a.662.662 0 00-.65-.65zM9.06 14.66c-.36 0-.65.29-.65.65 0 .36.29.65.65.65.36 0 .65-.29.65-.65 0-.36-.29-.65-.65-.65z"/>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.69 7.55v4.76c0 1.29-1.05 2.34-2.34 2.34-1.29 0-2.34-1.05-2.34-2.34 0-1.29 1.05-2.34 2.34-2.34.23 0 .44.04.65.1v-1.42l-3.78 1.03v3.62c0 .01-.01.02-.01.03a2.337 2.337 0 01-2.34 2.31c-1.29 0-2.34-1.05-2.34-2.34 0-1.29 1.05-2.34 2.34-2.34.23 0 .44.04.65.1V9.29c0-.97.6-1.76 1.54-2.01l2.99-.82c.96-.26 1.56-.01 1.9.25.33.26.74.77.74 1.77v1.07z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.42 17.11a1.57 1.57 0 100-3.14 1.57 1.57 0 000 3.14z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.18 16.06a1.57 1.57 0 100-3.14 1.57 1.57 0 000 3.14zM9.99 11.04l5.76-1.57"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M16.14 6.71c-.34-.26-.94-.51-1.9-.25l-2.99.82c-.93.25-1.54 1.04-1.54 2.01v3.78c-.21-.06-.42-.1-.65-.1-1.29 0-2.34 1.05-2.34 2.34 0 1.29 1.05 2.34 2.34 2.34a2.35 2.35 0 002.34-2.31c0-.01.01-.02.01-.03v-3.62l3.78-1.03v1.42c-.21-.06-.42-.1-.65-.1-1.29 0-2.34 1.05-2.34 2.34 0 1.29 1.05 2.34 2.34 2.34 1.29 0 2.34-1.05 2.34-2.34V8.49c0-1-.41-1.52-.74-1.78zm-7.08 9.25c-.36 0-.65-.29-.65-.65 0-.36.29-.65.65-.65.36 0 .65.29.65.65 0 .36-.29.65-.65.65zm5.48-1c-.36 0-.65-.29-.65-.65 0-.36.29-.65.65-.65.36 0 .65.29.65.65-.01.36-.3.65-.65.65z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.42 17.11a1.57 1.57 0 100-3.14 1.57 1.57 0 000 3.14z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.18 16.06a1.57 1.57 0 100-3.14 1.57 1.57 0 000 3.14zM9.99 11.04l5.76-1.57"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M8.42 17.86c-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32 0 1.28-1.04 2.32-2.32 2.32zm0-3.14c-.45 0-.82.37-.82.82 0 .45.37.82.82.82.45 0 .82-.37.82-.82 0-.45-.37-.82-.82-.82z"/>
  <path d="M9.99 16.29c-.41 0-.75-.34-.75-.75V9.21c0-.96.6-1.74 1.52-1.99l3.14-.86c.95-.26 1.55-.01 1.88.24.48.37.72.95.72 1.74v6.14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.34c0-.33-.07-.51-.13-.55-.05-.04-.23-.08-.58.01l-3.14.86c-.28.08-.41.25-.41.54v6.33c0 .42-.34.76-.75.76z"/>
  <path d="M14.18 16.81c-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32 0 1.28-1.04 2.32-2.32 2.32zm0-3.14c-.45 0-.82.37-.82.82 0 .45.37.82.82.82.45 0 .82-.37.82-.82 0-.45-.37-.82-.82-.82zM9.989 11.79a.747.747 0 01-.19-1.47l5.76-1.57a.75.75 0 11.39 1.45l-5.76 1.57c-.07.01-.14.02-.2.02z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M8.42 17.11a1.57 1.57 0 100-3.14 1.57 1.57 0 000 3.14z"/>
    <path d="M15.75 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34"/>
    <path d="M14.18 16.06a1.57 1.57 0 100-3.14 1.57 1.57 0 000 3.14zM9.99 11.04l5.76-1.57"/>
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
