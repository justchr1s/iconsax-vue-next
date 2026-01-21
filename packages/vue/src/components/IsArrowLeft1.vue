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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM18 12.75H7.81l3.01 3.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.29-4.29a.75.75 0 010-1.06l4.29-4.29c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.01 3.01H18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.57 5.93L3.5 12l6.07 6.07M12.82 12H3.5M20.33 12h-3.48"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18 9.33v5.34c0 3.32-2.35 4.67-5.22 3.02l-1.28-.74c-.31-.18-.5-.51-.5-.87V7.92c0-.36.19-.69.5-.87l1.28-.74C15.65 4.66 18 6.01 18 9.33z"/>
  <path d="M10 8.79v6.43c0 .39-.42.63-.75.43l-1.1-.64c-2.87-1.65-2.87-4.37 0-6.02l1.1-.64c.33-.19.75.05.75.44z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.1 19.15c-.84 0-1.76-.27-2.69-.81l-4.63-2.67c-1.63-.95-2.53-2.25-2.53-3.67s.9-2.72 2.53-3.66l4.63-2.67c1.63-.94 3.2-1.07 4.44-.36 1.23.71 1.91 2.14 1.91 4.02v5.34c0 1.88-.68 3.31-1.91 4.02-.53.31-1.12.46-1.75.46zm0-12.79c-.58 0-1.24.2-1.94.61L8.53 9.64c-1.15.66-1.78 1.5-1.78 2.36 0 .86.63 1.7 1.78 2.36l4.63 2.67c1.15.66 2.19.79 2.94.36.75-.43 1.16-1.4 1.16-2.72V9.33c0-1.32-.41-2.29-1.16-2.72-.3-.17-.64-.25-1-.25z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 19.92L8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"/>`
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
