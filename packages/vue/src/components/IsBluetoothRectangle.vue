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
    content: `<path d="M12.9 16.33l1.67-1.39-1.67-1.53v2.92zM12.9 10.592l1.67-1.53-1.67-1.39v2.92z"/>
  <path d="M15 2H9C6 2 4 4 4 7v10c0 3 2 5 5 5h6c3 0 5-2 5-5V7c0-3-2-5-5-5zm.72 11.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1L13.6 17.7c-.38.32-.73.41-1 .41-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 018.08 15l3.28-3-3.28-3.01A.755.755 0 019.1 7.88L11.4 10V7.33c0-.9.5-1.23.72-1.34.21-.1.79-.28 1.49.3l2.06 1.72c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02L13.58 12l2.14 1.95z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.59 15.56l6.62-6.07a.57.57 0 00-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 7c0-3 2-5 5-5h6c3 0 5 2 5 5v10c0 3-2 5-5 5H9c-3 0-5-2-5-5v-5.97"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h6c3 0 5 2 5 5v10c0 3-2 5-5 5z" opacity=".4"/>
  <path d="M12.6 18.11c-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 018.08 15l3.28-3.01-3.28-3.01a.746.746 0 01-.05-1.06c.28-.3.76-.33 1.06-.05l2.3 2.11V7.32c0-.9.5-1.23.72-1.34.21-.1.79-.28 1.49.3L15.66 8c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02l-2.13 1.95 2.13 1.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1l-2.06 1.72c-.38.36-.73.45-1 .45zm.3-4.7v2.92l1.67-1.39-1.67-1.53zm0-5.74v2.92l1.67-1.53-1.67-1.39z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.59 15.56l6.62-6.07a.57.57 0 00-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h6c3 0 5 2 5 5v10c0 3-2 5-5 5z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.6 18.11c-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 018.08 15l3.28-3.01-3.28-3.01a.746.746 0 01-.05-1.06c.28-.3.76-.33 1.06-.05l2.3 2.11V7.32c0-.9.5-1.23.72-1.34.21-.1.79-.27 1.49.3L15.66 8c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02l-2.13 1.95 2.13 1.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1l-2.06 1.72c-.38.36-.73.45-1 .45zm.3-4.7v2.92l1.67-1.39-1.67-1.53zm0-5.74v2.92l1.67-1.53-1.67-1.39z"/>
  <path d="M15 22.75H9c-3.44 0-5.75-2.31-5.75-5.75V7c0-3.44 2.31-5.75 5.75-5.75h6c3.44 0 5.75 2.31 5.75 5.75v10c0 3.44-2.31 5.75-5.75 5.75zm-6-20C6.42 2.75 4.75 4.42 4.75 7v10c0 2.58 1.67 4.25 4.25 4.25h6c2.58 0 4.25-1.67 4.25-4.25V7c0-2.58-1.67-4.25-4.25-4.25H9z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.59 15.56l6.62-6.07a.57.57 0 00-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h6c3 0 5 2 5 5v10c0 3-2 5-5 5z"/>`
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
