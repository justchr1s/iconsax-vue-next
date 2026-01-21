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
    content: `<path d="M17.02 2.718l-3.48 1.74c-.97.48-2.1.48-3.07 0l-3.49-1.75C4 1.218.85 4.438 2.41 7.388l.82 1.54c.11.21.29.38.51.48l12.65 5.69c.52.23 1.13.02 1.39-.48l3.81-7.24c1.55-2.94-1.59-6.16-4.57-4.66zM15.6 16.31l-8.28-3.73c-.93-.42-1.87.58-1.39 1.48l3.04 5.77c1.29 2.45 4.79 2.45 6.08 0l1.07-2.04c.28-.55.04-1.22-.52-1.48z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0L5.5 12.32"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.02 2.72l-3.48 1.74c-.97.48-2.1.48-3.07 0L6.98 2.71C4 1.22.85 4.44 2.41 7.39l.82 1.54c.11.21.29.38.51.48l12.65 5.69c.52.23 1.13.02 1.39-.48l3.81-7.24c1.55-2.94-1.59-6.16-4.57-4.66z"/>
  <path d="M15.6 16.31l-8.28-3.73c-.93-.42-1.87.58-1.39 1.48l3.04 5.77c1.29 2.45 4.79 2.45 6.08 0l1.07-2.04c.28-.55.04-1.22-.52-1.48z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.17 19.29L3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 21.75a3.93 3.93 0 01-3.49-2.11L2.41 8.05c-.82-1.55-.55-3.35.67-4.6C4.3 2.2 6.1 1.9 7.66 2.68L10.9 4.3c.68.34 1.5.34 2.19 0l3.24-1.62c1.57-.78 3.37-.48 4.59.77 1.22 1.25 1.49 3.05.67 4.6l-6.1 11.59A3.93 3.93 0 0112 21.75zm-6.12-18c-.71 0-1.33.34-1.73.75-.6.62-1.03 1.69-.42 2.85l6.1 11.59c.43.82 1.24 1.31 2.16 1.31.92 0 1.73-.49 2.16-1.31l6.1-11.59c.61-1.16.19-2.24-.42-2.85-.6-.61-1.66-1.06-2.84-.48l-3.24 1.62c-1.11.55-2.42.55-3.53 0L6.99 4.02c-.38-.19-.76-.27-1.11-.27z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.17 19.29L3.07 7.7C1.62 4.95 4.55 1.96 7.33 3.35l3.24 1.62c.9.45 1.96.45 2.86 0l3.24-1.62c2.78-1.39 5.7 1.6 4.26 4.35l-6.1 11.59c-1.2 2.28-4.46 2.28-5.66 0z"/>`
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
