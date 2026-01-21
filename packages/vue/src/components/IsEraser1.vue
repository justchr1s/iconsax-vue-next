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
    content: `<path d="M21.03 22h-7.04a.749.749 0 110-1.5h7.04a.749.749 0 110 1.5zM13.64 16.69c.39.39.39 1.02 0 1.42l-2.98 2.98a3.027 3.027 0 01-4.07.18c-.07-.06-.13-.12-.19-.18l-.87-.87-1.79-1.79-.86-.86c-.07-.07-.13-.14-.19-.21a3.01 3.01 0 01.19-4.04l2.98-2.98a.996.996 0 011.41 0l6.37 6.35zM21.12 10.641l-5 5a.996.996 0 01-1.41 0l-6.37-6.35c-.39-.39-.39-1.02 0-1.42l5-4.99a3.024 3.024 0 014.26 0l3.52 3.51a3.012 3.012 0 010 4.25z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h12M21.09 10.66a3 3 0 000-4.24l-3.51-3.51a3 3 0 00-4.24 0L2.91 13.34a3 3 0 000 4.24l3.51 3.51a3 3 0 004.24 0l7.08-7.08M7.12 9.13l7.75 7.75M3.52 17.66L9.17 12M6.34 20.49L12 14.83"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M13.58 14.69l-2.32 2.32c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.65-1.7 0-2.34l2.32-2.32 4.27 4.27z"/>
  <path d="M17.01 11.26l-3.43 3.43-4.27-4.27 3.43-3.43c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34z" opacity=".6"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h12M2.91 17.58l3.51 3.51a3 3 0 004.24 0l10.43-10.43a3 3 0 000-4.24l-3.51-3.51a3 3 0 00-4.24 0L2.91 13.34a3 3 0 000 4.24zM7.12 9.13l7.75 7.75M3.52 17.66L9.17 12M6.34 20.49L12 14.83"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 22.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M8.54 22.71c-1 0-1.95-.39-2.65-1.1L2.38 18.1a3.754 3.754 0 010-5.3L12.81 2.37c1.41-1.41 3.89-1.41 5.3 0l3.51 3.51a3.754 3.754 0 010 5.3L11.19 21.61c-.7.72-1.64 1.1-2.65 1.1zm-5.1-5.66l3.51 3.51c.85.85 2.34.85 3.18 0l10.43-10.43c.88-.88.88-2.3 0-3.18l-3.51-3.51c-.84-.84-2.33-.85-3.18 0L3.44 13.87c-.88.87-.88 2.3 0 3.18z"/>
  <path d="M14.87 17.63c-.19 0-.38-.07-.53-.22L6.59 9.66a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l7.75 7.75c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>
  <path d="M3.521 18.41c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.66-5.66c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.66 5.66c-.15.15-.34.22-.53.22zM6.34 21.24c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l5.66-5.66c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.66 5.66a.75.75 0 01-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h12M2.91 17.58l3.51 3.51a3 3 0 004.24 0l10.43-10.43a3 3 0 000-4.24l-3.51-3.51a3 3 0 00-4.24 0L2.91 13.34a3 3 0 000 4.24z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M7.12 9.13l7.75 7.75M3.52 17.66L9.17 12M6.34 20.49L12 14.83"/>
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
