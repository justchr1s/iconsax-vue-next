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
    content: `<path d="M18.54 4.12l-5.5-2.06c-.57-.21-1.5-.21-2.07 0l-5.5 2.06c-1.06.4-1.92 1.64-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c.01-1.13-.85-2.37-1.9-2.77zm-3.86 9.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.59-1.59-1.64 1.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.64-1.64-1.6-1.6a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.59 1.59 1.55-1.55c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.55 1.55 1.59 1.59c.3.3.3.77.01 1.07z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.15 13.44L9.9 9.19M14.1 9.24l-4.25 4.25"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.59 7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-3.52"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.96 2.06l-5.5 2.06c-1.05.4-1.91 1.64-1.91 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06c-.56-.22-1.5-.22-2.07-.01z" opacity=".4"/>
  <path d="M14.68 12.91l-1.59-1.59 1.55-1.55c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-1.55 1.55-1.59-1.59a.755.755 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.59 1.59-1.64 1.64c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.64-1.64 1.59 1.59c.15.15.34.22.53.22s.38-.07.53-.22c.29-.3.29-.77 0-1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.49 2.23L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.15 13.44L9.9 9.19M14.1 9.24l-4.25 4.25"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.76c-1.09 0-2.17-.32-3.02-.95l-4.3-3.21c-1.14-.85-2.03-2.63-2.03-4.04V7.12c0-1.54 1.13-3.18 2.58-3.72l4.99-1.87c.99-.37 2.55-.37 3.54 0l4.99 1.87c1.45.54 2.58 2.18 2.58 3.72v7.43c0 1.42-.89 3.19-2.03 4.04L15 21.8c-.83.64-1.91.96-3 .96zM10.75 2.94L5.76 4.81c-.85.32-1.6 1.4-1.6 2.32v7.43c0 .95.67 2.28 1.42 2.84l4.3 3.21c1.15.86 3.09.86 4.25 0l4.3-3.21c.76-.57 1.42-1.89 1.42-2.84V7.12c0-.91-.75-1.99-1.6-2.32l-4.99-1.87c-.68-.24-1.84-.24-2.51.01z"/>
  <path d="M14.15 14.19c-.19 0-.38-.07-.53-.22L9.37 9.72a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l4.25 4.25c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22z"/>
  <path d="M9.85 14.23c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l4.25-4.25c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4.25 4.25c-.14.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.49 2.23L5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M14.15 13.44L9.9 9.19M14.1 9.24l-4.25 4.25"/>
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
