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
    content: `<path d="M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.74.75.74h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.08.05-.16.05-.25zM21 16.518H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.45-2.45H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.28 10.45L21 6.73l-3.72-3.72M10.01 6.73H21M3 6.73h2.99M6.72 13.55L3 17.27l3.72 3.72M3 17.27h11.09M21 17.27h-2.97"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.75 6.73c0-.2-.08-.39-.22-.53l-3.72-3.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.45 2.45H3c-.41 0-.75.34-.75.75s.34.75.75.75h16.19l-2.44 2.44c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.71-3.71c.07-.07.13-.16.17-.26 0-.01 0-.02.01-.03.03-.09.05-.17.05-.26z" opacity=".4"/>
  <path d="M21 16.52H4.81l2.44-2.44c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-3.71 3.71c-.07.07-.13.16-.17.26 0 .01 0 .02-.01.03-.03.08-.05.17-.05.26 0 .2.08.39.22.53l3.72 3.72c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06L4.8 18.02H21c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.28 10.45L21 6.73l-3.72-3.72M3 6.73h18M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.279 11.2c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.19-3.19-3.19-3.19a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.72 3.72a.75.75 0 010 1.06l-3.72 3.72c-.15.14-.34.22-.53.22z"/>
  <path d="M21 7.48H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM6.72 21.75c-.19 0-.38-.07-.53-.22l-3.72-3.72a.75.75 0 010-1.06l3.72-3.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.19 3.19 3.19 3.19c.29.29.29.77 0 1.06a.71.71 0 01-.53.22z"/>
  <path d="M21 18.02H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M17.281 10.45l3.72-3.72-3.72-3.72M3 6.73h18"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.72 13.55L3 17.27l3.72 3.72M21 17.27H3"/>`
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
