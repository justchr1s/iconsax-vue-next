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
    content: `<path d="M22.531 13.42l-1.45-1.45 1.4-1.4c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.4 1.4-1.45-1.45a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.45 1.45-1.49 1.49c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.49-1.49 1.45 1.45c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06zM14.02 3.782c-1.12-.62-2.55-.46-4.01.45l-2.92 1.83c-.2.12-.43.19-.66.19H5c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H6.43c.23 0 .46.07.66.19l2.92 1.83c.88.55 1.74.82 2.54.82a3 3 0 001.47-.37c1.11-.62 1.73-1.91 1.73-3.63v-9.18c0-1.72-.62-3.01-1.73-3.63z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L7.49 6.7c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 13.96L18.04 10M19.89 12.11L18 14M21.96 10.04l-.54.54"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22.53 13.42l-1.45-1.45 1.4-1.4c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.4 1.4-1.45-1.45a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.45 1.45-1.49 1.49c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.49-1.49 1.45 1.45c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06z"/>
  <path d="M15.75 7.41v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 01-1.47.37c-.8 0-1.66-.27-2.54-.82l-2.92-1.83c-.2-.12-.43-.19-.66-.19H5.5V6.25h.93c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45 1.11.62 1.73 1.91 1.73 3.63z" opacity=".4"/>
  <path d="M5.5 6.25v11.5H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-width="1.5" d="M2 10.16v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.57c0-2.98-2.07-4.12-4.59-2.54L7.49 6.86c-.32.19-.69.3-1.06.3H5c-2 0-3 1-3 3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 14.12l-3.96-3.96M21.96 10.2L18 14.16"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.55 20.59c-.79 0-1.66-.28-2.53-.83L7.1 17.93c-.2-.12-.43-.19-.66-.19H5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75h1.43c.23 0 .46-.07.66-.19l2.92-1.83c1.46-.91 2.88-1.08 4-.46 1.12.62 1.73 1.91 1.73 3.64v9.17c0 1.72-.62 3.02-1.73 3.64-.44.26-.94.38-1.46.38zM5 7.75c-1.58 0-2.25.67-2.25 2.25v4c0 1.58.67 2.25 2.25 2.25h1.43c.52 0 1.02.14 1.46.42l2.92 1.83c.97.6 1.87.76 2.48.42.61-.34.96-1.19.96-2.32V7.41c0-1.14-.35-1.99-.96-2.32-.61-.34-1.52-.19-2.48.42L7.88 7.33c-.43.28-.94.42-1.45.42H5zM22 14.71c-.19 0-.38-.07-.53-.22l-3.96-3.96a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.96 3.96c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"/>
  <path d="M18 14.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.96-3.96c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.96 3.96c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 22 18',
    content: `<path stroke-width="1.5" d="M1 7v4c0 2 1 3 3 3h1.43c.37 0 .74.11 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V4.41c0-2.98-2.07-4.12-4.59-2.54L6.49 3.7c-.32.19-.69.3-1.06.3H4C2 4 1 5 1 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M21 10.961l-3.96-3.96M20.96 7.041L17 11.001"/>
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
