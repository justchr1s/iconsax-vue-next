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
    content: `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.53 11.23l-5.18 3.59c-.76.53-1.2.22-.98-.67l.95-3.84-1.65-.41c-.75-.18-.84-.7-.21-1.14l5.18-3.59c.76-.53 1.2-.22.98.67l-.95 3.84 1.65.41c.75.19.84.7.21 1.14z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.68 11.91l1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10z" opacity=".4"/>
  <path d="M15.25 11.3h-1.7V7.34c0-.92-.5-1.11-1.11-.42l-.44.5-3.72 4.23c-.51.58-.3 1.05.47 1.05h1.7v3.96c0 .92.5 1.11 1.11.42l.44-.5 3.72-4.23c.51-.58.3-1.05-.47-1.05z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.68 11.91l1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M9.71 17.84c-.29 0-.51-.1-.64-.2-.27-.18-.68-.64-.42-1.67l.77-3.11-.92-.23c-.93-.23-1.14-.82-1.18-1.06-.04-.24-.06-.87.72-1.42l5.18-3.59c.87-.6 1.44-.38 1.71-.2s.68.64.42 1.67l-.77 3.11.92.23c.93.23 1.14.82 1.18 1.07.04.25.06.87-.72 1.42l-5.18 3.59c-.43.29-.78.39-1.07.39zm-.6-6.6l1.4.35c.4.1.65.51.55.91l-.88 3.54 4.71-3.27-1.4-.35c-.4-.1-.65-.51-.55-.91l.88-3.54-4.71 3.27z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.68 11.91l1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14z" opacity=".4"/>`,
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
