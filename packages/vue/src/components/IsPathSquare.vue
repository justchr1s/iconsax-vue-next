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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.47 9.25l-1.62 1.02.14 2.4c.13 1.34-.33 1.8-1.6 1.95l-5.07.6c-.278.038-.373-.277-.174-.476L9.88 15.2c.29-.29.29-.77 0-1.06a.767.767 0 00-1.07 0l-1.535 1.543c-.198.199-.513.105-.475-.173l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.75 9.12L14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.74 8.98l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39M7.49 16.52l1.85-1.85"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.03V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M16.66 11.25l-1.62 1.02-3.3-3.29 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13z"/>
  <path d="M13.58 16.62l-5.07.6c-.22.03-.42.02-.61-.04-.55-.12-.94-.51-1.06-1.06-.06-.19-.07-.39-.04-.61l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 3.3 3.29.14 2.4c.13 1.34-.33 1.8-1.6 1.95z" opacity=".6"/>
  <path d="M9.88 15.2L7.9 17.18c-.55-.12-.94-.51-1.06-1.06l1.97-1.98c.3-.29.77-.29 1.07 0 .29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.75 9.12L14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.74 8.98l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39M7.49 16.52l1.85-1.85"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.04 13.02c-.19 0-.39-.08-.53-.22l-3.29-3.29a.742.742 0 01-.1-.93l1.03-1.63c.33-.53.85-.86 1.44-.92.65-.07 1.33.19 1.85.71l1.85 1.85c.5.5.75 1.18.68 1.85-.07.6-.39 1.12-.89 1.44l-1.63 1.03c-.14.08-.28.11-.41.11zM12.7 8.87l2.45 2.45 1.12-.71c.14-.09.19-.23.2-.34a.813.813 0 00-.25-.63L14.37 7.8c-.2-.2-.43-.3-.62-.28-.14.02-.25.09-.34.23l-.71 1.12z"/>
  <path d="M8.29 17.98c-.62 0-1.2-.23-1.61-.64-.48-.48-.71-1.18-.62-1.92l.6-5.07c.2-1.69 1.02-2.37 2.74-2.26l2.39.14c.41.03.73.38.7.79-.03.41-.38.73-.79.7l-2.4-.13c-.97-.06-1.06.09-1.16.94l-.6 5.07c-.03.28.04.53.19.68.16.16.4.23.68.19l5.07-.6c.92-.11 1.03-.25.95-1.13l-.15-2.42c-.02-.41.29-.77.7-.79.41-.03.77.29.79.7l.14 2.39c.17 1.68-.53 2.54-2.26 2.74l-5.07.6c-.09.02-.19.02-.29.02z"/>
  <path d="M7.49 17.27c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.85-1.85c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.85 1.85a.71.71 0 01-.53.22z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M16.75 9.12L14.9 7.27c-.7-.7-1.66-.66-2.13.08l-1.03 1.63 3.29 3.29 1.63-1.03c.71-.44.75-1.47.09-2.12z"/>
    <path d="M11.74 8.98l-2.39-.14c-1.34-.08-1.8.33-1.95 1.6l-.6 5.07c-.13 1.07.64 1.83 1.71 1.71l5.07-.6c1.27-.15 1.73-.61 1.6-1.95l-.14-2.39M7.49 16.52l1.85-1.85"/>
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
