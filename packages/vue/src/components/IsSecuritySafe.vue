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
    content: `<path d="M20.91 11.12V6.73c0-.82-.62-1.75-1.39-2.06l-5.57-2.28a5.187 5.187 0 00-3.91 0L4.47 4.67c-.76.31-1.38 1.24-1.38 2.06v4.39c0 4.89 3.55 9.47 8.4 10.81.33.09.69.09 1.02 0 4.85-1.34 8.4-5.92 8.4-10.81zm-8.16 1.75v2.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.63A2.497 2.497 0 019.5 10.5a2.5 2.5 0 015 0c0 1.12-.74 2.05-1.75 2.37z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.09 6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06v4.39c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12.5a2 2 0 100-4 2 2 0 000 4zM12 12.5v3"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39z" opacity=".4"/>
  <path d="M14.5 10.5a2.5 2.5 0 00-5 0c0 1.12.74 2.05 1.75 2.37v2.63c0 .41.34.75.75.75s.75-.34.75-.75v-2.63a2.488 2.488 0 001.75-2.37z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 12.5a2 2 0 100-4 2 2 0 000 4zM12 12.5v3"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-.24 0-.48-.03-.71-.1-5.19-1.43-8.95-6.28-8.95-11.54V6.72c0-1.12.81-2.33 1.85-2.76l5.57-2.28a5.89 5.89 0 014.48 0l5.57 2.28c1.04.43 1.85 1.64 1.85 2.76v4.39c0 5.25-3.77 10.1-8.95 11.54-.23.07-.47.1-.71.1zm0-20a4.4 4.4 0 00-1.67.33L4.76 5.36c-.48.2-.92.85-.92 1.37v4.39c0 4.59 3.3 8.83 7.85 10.09.2.06.42.06.62 0 4.55-1.26 7.85-5.5 7.85-10.09V6.73c0-.52-.44-1.17-.92-1.37l-5.57-2.28A4.4 4.4 0 0012 2.75z"/>
  <path d="M12 13.25c-1.52 0-2.75-1.23-2.75-2.75S10.48 7.75 12 7.75s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
  <path d="M12 16.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M12 12.5a2 2 0 100-4 2 2 0 000 4zM12 12.5v3"/>
  </g>`
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
