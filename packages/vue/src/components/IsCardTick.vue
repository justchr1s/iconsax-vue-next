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
    content: `<path d="M19 15c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 0019 23c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4zm2.07 3.57l-2.13 1.97c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-.99-.99a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.77-.04 1.06zM22 7.548v.45c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-.46c0-2.29 1.85-4.14 4.14-4.14h11.71c2.29 0 4.15 1.86 4.15 4.15z"/>
  <path d="M2 11.498v4.96c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.03-1.07-.14-1.53.35-3.19 1.71-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.01a1 1 0 001.33-.94v-1.39c0-.55-.45-1-1-1H3c-.55.01-1 .46-1 1.01zm6 5.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 10h16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.55 20.5H6.44c-3.55 0-4.45-.88-4.45-4.39V7.89c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 16h4M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0118 22a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 0114 18c0-2.21 1.79-4 4-4s4 1.79 4 4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.44 18l.99.99 2.13-1.97"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 15c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 0019 23c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4zm2.07 3.57l-2.13 1.97c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-.99-.99a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.77-.04 1.06zM22 7.54V9H2V7.54C2 5.25 3.86 3.4 6.15 3.4h11.7C20.14 3.4 22 5.25 22 7.54z"/>
  <path d="M2 9v7.46c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.03-1.07-.14-1.53.35-3.19 1.71-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.01a1 1 0 001.33-.94V9H2zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M8.75 16.5c0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 10h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.548 20.5h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.89c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 16h4M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0118 22a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 0114 18c0-2.21 1.79-4 4-4s4 1.79 4 4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.441 18l.99.99 2.13-1.97"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.5 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.5c.41 0 .75.34.75.75s-.34.75-.75.75zM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h7.06c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64v-5.08c0-.41.34-.75.75-.75s.75.34.75.75v5.08c.01 3.95-1.2 5.15-5.18 5.15z"/>
  <path d="M18 8.25c-.19 0-.38-.07-.53-.22l-1.5-1.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 10h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.55 20.5H6.44c-3.55 0-4.45-.88-4.45-4.39V7.89c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 16h4M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0118 22a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 0114 18c0-2.21 1.79-4 4-4s4 1.79 4 4z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.44 18l.99.99 2.13-1.97" opacity=".4"/>`,
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
