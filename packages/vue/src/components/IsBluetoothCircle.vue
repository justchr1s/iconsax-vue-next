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
    content: `<path d="M12.9 10.592l1.67-1.53-1.67-1.39v2.92zM12.9 16.33l1.67-1.39-1.67-1.53v2.92z"/>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.72 11.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1L13.6 17.7c-.38.32-.73.41-1 .41-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 018.08 15l3.28-3-3.28-3.01A.755.755 0 019.1 7.88L11.4 10V7.33c0-.9.5-1.23.72-1.34.21-.1.79-.27 1.49.3l2.06 1.72c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02L13.58 12l2.14 1.95z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.59 15.56l6.62-6.07a.57.57 0 00-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity=".4"/>
  <path fill-rule="evenodd" d="M12.119 6.002c.58-.278 1.148.016 1.491.302l2.058 1.718.002.001a1.32 1.32 0 01.044 2.023l-2.137 1.959 2.137 1.96a1.32 1.32 0 01-.044 2.021l-.002.002-2.057 1.718-.002.001c-.343.285-.905.569-1.48.3-.578-.27-.72-.886-.72-1.337v-2.678l-2.312 2.12a.75.75 0 11-1.014-1.105l3.274-3.002-3.274-3.002a.75.75 0 011.014-1.106l2.313 2.121V7.34c0-.443.134-1.063.709-1.338zm.79 7.427l1.66 1.522-1.66 1.386v-2.908zm0-2.848V7.673l1.66 1.386-1.66 1.522z" clip-rule="evenodd"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.59 15.56l6.62-6.07a.57.57 0 00-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.6 18.11c-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 018.08 15l3.28-3.01-3.28-3.01a.746.746 0 01-.05-1.06c.28-.3.76-.33 1.06-.05l2.3 2.11V7.32c0-.9.5-1.23.72-1.34.21-.1.79-.27 1.49.3L15.66 8c.3.25.48.62.49 1 .01.38-.15.76-.44 1.02l-2.13 1.95 2.13 1.95c.29.27.45.64.44 1.02-.01.38-.19.75-.49 1l-2.06 1.72c-.38.36-.73.45-1 .45zm.3-4.7v2.92l1.67-1.39-1.67-1.53zm0-5.74v2.92l1.67-1.53-1.67-1.39z"/>
  <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.59 15.56l6.62-6.07a.57.57 0 00-.02-.89l-2.06-1.72c-.54-.45-.97-.24-.97.46v9.33c0 .7.44.9.97.46l2.06-1.72c.29-.24.3-.64.02-.89L8.59 8.45" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>`,
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
