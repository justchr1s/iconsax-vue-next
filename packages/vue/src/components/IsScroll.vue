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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-6.06 12.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.49-2.49c-.59-.59-.59-1.54 0-2.13l2.49-2.49c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.64 12l2.49 2.5zm7.29-1.44l-2.49 2.49c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L16.36 12l-2.49-2.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.49 2.49c.59.59.59 1.55 0 2.13z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.6 8.97l-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.97l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M9.6 15.78c-.19 0-.38-.07-.53-.22l-2.49-2.49c-.59-.59-.59-1.54 0-2.13l2.49-2.49c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.64 12l2.49 2.5c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22zM14.4 15.78c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.49-2.5-2.49-2.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.49 2.49c.59.59.59 1.54 0 2.13l-2.49 2.49c-.14.15-.34.23-.53.23z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.6 8.97l-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.97l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M9.6 15.78c-.19 0-.38-.07-.53-.22l-2.49-2.49c-.59-.59-.59-1.54 0-2.13l2.49-2.49c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.64 12l2.49 2.5c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22zM14.4 15.78c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.49-2.5-2.49-2.5a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.49 2.49c.59.59.59 1.54 0 2.13l-2.49 2.49c-.14.15-.34.23-.53.23z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.6 8.97l-2.49 2.49c-.29.29-.29.78 0 1.07l2.49 2.49M14.4 8.97l2.49 2.49c.29.29.29.78 0 1.07l-2.49 2.49" opacity=".4"/>`,
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
