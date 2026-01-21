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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.18 12.35l-2.22 2.22c-.54.54-1.24.8-1.94.8a2.75 2.75 0 01-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 00-4.6-4.6L8.3 11.11a2.657 2.657 0 000 3.78c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0A4.05 4.05 0 016 13.01c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.762 4.762 0 016.72 0 4.753 4.753 0 01.01 6.72z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 000-5.66 4.008 4.008 0 00-5.66 0l-2.42 2.42a3.428 3.428 0 000 4.85"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M12.2 17.38a2.75 2.75 0 01-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 00-4.6-4.6l-2.42 2.42a2.657 2.657 0 000 3.78c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0A4.151 4.151 0 016.01 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.762 4.762 0 016.72 0 4.762 4.762 0 010 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 000-5.66 4.008 4.008 0 00-5.66 0l-2.42 2.42a3.428 3.428 0 000 4.85"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.2 17.38a2.75 2.75 0 01-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 000 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 00-4.6-4.6l-2.42 2.42a2.657 2.657 0 000 3.78c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0A4.151 4.151 0 016.01 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.762 4.762 0 016.72 0 4.762 4.762 0 010 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.2 11.8l-1.41 1.41c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0l2.22-2.22a4.008 4.008 0 000-5.66 4.008 4.008 0 00-5.66 0l-2.42 2.42a3.428 3.428 0 000 4.85" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`
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
