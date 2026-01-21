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
    content: `<path d="M13.75 12.75H8.5v3.99c0 .28.23.51.51.51h4.74c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25zM14.5 9c0-1.24-1.01-2.25-2.25-2.25H9.01c-.28 0-.51.23-.51.51v3.99h3.75c1.24 0 2.25-1.01 2.25-2.25z"/>
  <path d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68zm-7.2 14.62H9.01c-1.11 0-2.01-.9-2.01-2.01V7.26c0-1.11.9-2.01 2.01-2.01h3.24C14.32 5.25 16 6.93 16 9c0 .96-.37 1.83-.97 2.49 1.43.53 2.47 1.89 2.47 3.51 0 2.07-1.68 3.75-3.75 3.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5zM4.88 13.98V12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2v-1.54"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68z" opacity=".4"/>
  <path d="M15.03 11.49c.6-.66.97-1.53.97-2.49 0-2.07-1.68-3.75-3.75-3.75H9.01C7.9 5.25 7 6.15 7 7.26v9.48c0 1.11.9 2.01 2.01 2.01h4.74c2.07 0 3.75-1.68 3.75-3.75 0-1.62-1.03-2.98-2.47-3.51zM8.5 7.26c0-.28.23-.51.51-.51h3.24c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25H8.5V7.26zm5.25 9.99H9.01c-.28 0-.51-.23-.51-.51v-3.99h5.25c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5zM4.88 12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2V12v0z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 12.75H4.88c-.41 0-.75-.34-.75-.75V4.5c0-1.52 1.23-2.75 2.75-2.75H12c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5zm-6.38-1.5H12c2.21 0 4-1.79 4-4s-1.79-4-4-4H6.88c-.69 0-1.25.56-1.25 1.25v6.75h-.01z"/>
  <path d="M14.38 22.25h-7.5c-1.52 0-2.75-1.23-2.75-2.75V12c0-.41.34-.75.75-.75h9.5c3.03 0 5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5zm-8.76-9.5v6.75c0 .69.56 1.25 1.25 1.25h7.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.62z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.88 4.5c0-1.1.9-2 2-2H12c2.62 0 4.75 2.13 4.75 4.75S14.62 12 12 12H4.88V4.5z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.88 12h9.5c2.62 0 4.75 2.13 4.75 4.75S17 21.5 14.38 21.5h-7.5c-1.1 0-2-.9-2-2V12v0z"/>`,
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
