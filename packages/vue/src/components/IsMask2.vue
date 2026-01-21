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
    content: `<path d="M18.65 4.591A9.836 9.836 0 0012 2.031c-5.5 0-9.97 4.47-9.97 9.97 0 5.5 4.47 9.97 9.97 9.97 2.56 0 4.89-.96 6.65-2.56a9.89 9.89 0 003.32-7.41c0-2.94-1.28-5.6-3.32-7.41zm-6.68 11.8c-.02 1.65-1.25 2.05-2.4 1.59a6.439 6.439 0 01-4.04-5.98c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12c0 2.76-2.24 5-5 5V7c1.32 0 2.52.51 3.42 1.35M12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5zM12 22v-5M12 7V2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.97 12c0 2.94-1.28 5.6-3.32 7.41A9.836 9.836 0 0112 21.97c-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 2.56 0 4.89.96 6.65 2.56A9.89 9.89 0 0121.97 12z" opacity=".4"/>
  <path d="M11.97 16.39c-.02 1.65-1.25 2.05-2.4 1.59A6.439 6.439 0 015.53 12c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 12c0 2.76-2.24 5-5 5V7c2.76 0 5 2.24 5 5zM12 7v10c-2.76 0-5-2.24-5-5s2.24-5 5-5zM12 22v-5M12 7V2"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75 3.17 0 5.75 2.58 5.75 5.75s-2.58 5.75-5.75 5.75zm.75-9.93v8.37c1.99-.35 3.5-2.1 3.5-4.18 0-2.08-1.51-3.84-3.5-4.19z"/>
  <path d="M12 17.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 6.25 12 6.25c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75zm-.75-9.93c-1.99.35-3.5 2.1-3.5 4.18 0 2.08 1.51 3.83 3.5 4.18V7.82z"/>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM12 7.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 12c0 2.94-1.28 5.6-3.32 7.41A9.836 9.836 0 0112 21.97c-5.5 0-9.97-4.47-9.97-9.97 0-5.5 4.47-9.97 9.97-9.97 2.56 0 4.89.96 6.65 2.56A9.89 9.89 0 0121.97 12z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.97 16.39c-.02 1.65-1.25 2.05-2.4 1.59A6.439 6.439 0 015.53 12c0-2.71 1.67-5.03 4.04-5.99 1.15-.46 2.38-.05 2.4 1.59v8.79z" opacity=".4"/>`
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
