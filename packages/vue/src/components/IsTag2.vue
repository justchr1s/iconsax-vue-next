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
    content: `<path d="M19.83 8.7L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.738 4.738 0 000-6.73zM9.5 12.38c-1.58 0-2.88-1.29-2.88-2.88 0-1.59 1.3-2.88 2.88-2.88 1.58 0 2.88 1.29 2.88 2.88 0 1.59-1.3 2.88-2.88 2.88zm8.03 1.15l-4 4c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l4-4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75L18.7 7.55"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M8.51 11.8c.3.13.64.2.99.2a2.5 2.5 0 000-5A2.5 2.5 0 007 9.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13 17l4-4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M4.17 15.3l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75L15.3 4.17a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61z" opacity=".4"/>
  <path d="M9.5 12.38a2.88 2.88 0 100-5.76 2.88 2.88 0 000 5.76zM13 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l4-4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.405 15.526l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75l-4.54-4.52a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61z"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M9.735 12.226a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.235 17.226l4-4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.07 21.98c-1.41 0-2.83-.54-3.9-1.61l-4.53-4.53a5.548 5.548 0 01-1.61-4.17l.24-5.01c.11-2.39 2-4.28 4.4-4.4l5-.24c1.56-.07 3.07.51 4.17 1.61l4.53 4.53a5.535 5.535 0 010 7.81l-4.39 4.39a5.504 5.504 0 01-3.91 1.62zM4.7 14.77l4.53 4.53a4.026 4.026 0 005.69 0l4.39-4.39a4.026 4.026 0 000-5.69L14.77 4.7a4.02 4.02 0 00-3.04-1.17l-5 .24a3.092 3.092 0 00-2.97 2.96l-.24 5.01c-.05 1.12.38 2.23 1.18 3.03z"/>
  <path d="M9.5 12.75c-1.79 0-3.25-1.46-3.25-3.25S7.71 6.25 9.5 6.25s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75zM13 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l4-4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.405 15.526l4.53 4.53a4.78 4.78 0 006.75 0l4.39-4.39a4.78 4.78 0 000-6.75l-4.54-4.52a4.75 4.75 0 00-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61z"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M9.734 12.227a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.234 17.227l4-4" opacity=".4"/>`
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
