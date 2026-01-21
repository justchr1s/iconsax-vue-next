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
    content: `<path d="M5 8a3 3 0 100-6 3 3 0 000 6zM19 15a3 3 0 100-6 3 3 0 000 6zM5 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75c0 2.19 1.06 3.25 3.25 3.25h7c.41 0 .75.34.75.75s-.34.75-.75.75H9c-1.36 0-2.45-.35-3.25-1.01V16c0 .41-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8a3 3 0 100-6 3 3 0 000 6zM19 15a3 3 0 100-6 3 3 0 000 6zM5 22a3 3 0 100-6 3 3 0 000 6zM11.17 12H9c-2.2 0-4-1-4-4v8"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5 8a3 3 0 100-6 3 3 0 000 6zM19 15a3 3 0 100-6 3 3 0 000 6zM5 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path d="M5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75c0 2.19 1.06 3.25 3.25 3.25h7c.41 0 .75.34.75.75s-.34.75-.75.75H9c-1.36 0-2.45-.35-3.25-1.01V16c0 .41-.34.75-.75.75z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8a3 3 0 100-6 3 3 0 000 6zM19 15a3 3 0 100-6 3 3 0 000 6zM5 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12H9c-2.2 0-4-1-4-4v8"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75zM19 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S20.24 9.75 19 9.75zM5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19 6.24 16.75 5 16.75z"/>
  <path d="M5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75c0 2.19 1.06 3.25 3.25 3.25h7c.41 0 .75.34.75.75s-.34.75-.75.75H9c-1.36 0-2.45-.35-3.25-1.01V16c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8a3 3 0 100-6 3 3 0 000 6zM19 15a3 3 0 100-6 3 3 0 000 6zM5 22a3 3 0 100-6 3 3 0 000 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12H9c-2.2 0-4-1-4-4v8" opacity=".4"/>`
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
