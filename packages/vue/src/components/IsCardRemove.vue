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
    content: `<path d="M18.898 15.031c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.6 5.65c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.755.755 0 010-1.06l.55-.55-.53-.53a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.77 0 1.06zM22 7.548v.45c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-.46c0-2.29 1.85-4.14 4.14-4.14h11.71c2.29 0 4.15 1.86 4.15 4.15z"/>
  <path d="M2 11.498v4.96c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.03-1.07-.14-1.53.35-3.19 1.71-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.01a1 1 0 001.33-.94v-1.39c0-.55-.45-1-1-1H3c-.55.01-1 .46-1 1.01zm6 5.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10.03h15.9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.46 20.53H6.35c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.9 22.03a4 4 0 100-8 4 4 0 000 8zM18.97 19.15l-2.11-2.12M18.95 17.06l-2.12 2.11M5.9 16.03h4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.9 15.03c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.6 5.65c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.55-.55-.53-.53a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.77 0 1.06zM22 7.54V9H2V7.54C2 5.25 3.86 3.4 6.15 3.4h11.7C20.14 3.4 22 5.25 22 7.54z"/>
  <path d="M2 9v7.46c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.03-1.07-.14-1.53.35-3.19 1.71-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.01a1 1 0 001.33-.94V9H2zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M8.75 16.5c0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1.898 10.03h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.458 20.53h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.898 22.03a4 4 0 100-8 4 4 0 000 8zM18.97 19.15l-2.11-2.12M18.948 17.06l-2.12 2.11M5.898 16.03h4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.9 10.78h-20c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20a.749.749 0 110 1.5z"/>
  <path d="M11.46 21.28H6.35c-3.98 0-5.2-1.2-5.2-5.14V7.92c0-3.15.67-4.9 4.24-5.11.31-.01.62-.02.96-.02h11.11c3.98 0 5.2 1.2 5.2 5.14v4.41c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.93c0-3.09-.55-3.64-3.7-3.64H6.35c-.32 0-.61.01-.89.02-2.17.13-2.81.62-2.81 3.62v8.22c0 3.09.55 3.64 3.7 3.64h5.11c.41 0 .75.34.75.75s-.34.74-.75.74z"/>
  <path d="M17.9 22.78c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25-1.46-3.25-3.25-3.25z"/>
  <path d="M18.97 19.9c-.19 0-.38-.07-.53-.22l-2.11-2.11a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.11 2.11c.29.29.29.77 0 1.06-.14.14-.34.22-.53.22z"/>
  <path d="M16.83 19.92c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.11-2.11c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.11 2.11a.71.71 0 01-.53.22zM9.9 16.78h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4a.749.749 0 110 1.5z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1.9 10.03h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.46 20.53H6.35c-3.55 0-4.45-.88-4.45-4.39V7.92c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.9 22.03a4 4 0 100-8 4 4 0 000 8z" opacity=".4"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M18.97 19.15l-2.11-2.12M18.95 17.06l-2.12 2.11"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.9 16.03h4" opacity=".4"/>`
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
