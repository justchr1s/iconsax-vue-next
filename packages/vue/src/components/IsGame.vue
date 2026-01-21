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
    content: `<path d="M16.65 5.719h-9.3c-2.95 0-5.35 2.4-5.35 5.35v5.58c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58c0-2.95-2.4-5.35-5.35-5.35zm-2.15 6.3c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01-1-.44-1-.99v-.02zm-4.37 4.05c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.03-1.03-.99.99c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.99-.99-.96-.96a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.96.96.99-.99c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.99.99 1.03 1.03c.29.29.29.77 0 1.06zm3.41-1.07c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1zm1.96 1.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01zm1.98-1.97c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1z"/>
  <path d="M13.64 2.71l-.01.94A1.64 1.64 0 0112 5.26c-.15 0-.24.1-.24.23s.1.23.23.23h-1.61c-.01-.07-.02-.15-.02-.23 0-.9.73-1.63 1.62-1.63.15 0 .25-.1.25-.23l.01-.94c.01-.38.32-.69.7-.69h.01c.39 0 .69.32.69.71z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.57 12.46l-3.05 3.05M6.55 12.49l3.05 3.05"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9C5.25 6 3.19 7.12 2.39 9.8M13.01 2L13 3.01A1 1 0 0112 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.13 15.01L9.1 13.98l.99-.99c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-.99.99-.96-.96a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l.96.96-.99.99c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l.99-.99 1.03 1.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06zM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1zM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1zM15.5 16.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01zM15.5 13.03c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01z"/>
  <path d="M22 11.07v5.58C22 19.6 19.6 22 16.65 22h-9.3C4.4 22 2 19.6 2 16.65v-5.58c0-2.95 2.4-5.35 5.35-5.35h9.3c2.95 0 5.35 2.4 5.35 5.35z" opacity=".4"/>
  <path d="M13.64 2.71l-.01.94A1.64 1.64 0 0112 5.26c-.15 0-.24.1-.24.23s.1.23.23.23h-1.61c-.01-.07-.02-.15-.02-.23 0-.9.73-1.63 1.62-1.63.15 0 .25-.1.25-.23l.01-.94c.01-.38.32-.69.7-.69h.01c.39 0 .69.32.69.71z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.57 12.46l-3.05 3.05M6.55 12.49l3.05 3.05"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7zM13.01 2L13 3.01A1 1 0 0112 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.52 16.26c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.05-3.05c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.05 3.05c-.15.14-.34.22-.53.22z"/>
  <path d="M9.6 16.29c-.19 0-.38-.07-.53-.22l-3.05-3.05a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.05 3.05c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1zM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1zM15.5 16.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01zM15.5 13.03c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75v-2c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v2c0 5.43-2.32 7.75-7.75 7.75zm-6-16c-4.61 0-6.25 1.64-6.25 6.25v2c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M12.99 6.75h-1c-.96 0-1.75-.79-1.75-1.75s.78-1.75 1.74-1.75c.16 0 .27-.11.28-.25l.01-1.01c.01-.41.34-.74.75-.74h.01c.41.01.75.35.74.76l-.01 1.01c-.01.95-.8 1.73-1.75 1.73-.16 0-.26.11-.26.25s.11.25.25.25h1c.41 0 .75.34.75.75s-.35.75-.76.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M9.57 12.46l-3.05 3.05M6.55 12.49l3.05 3.05"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7zM13.01 2L13 3.01A1 1 0 0112 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"/>`
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
