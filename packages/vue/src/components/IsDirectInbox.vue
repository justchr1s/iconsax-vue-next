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
    content: `<path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 00-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7zM12.75 2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2h1.5V2z"/>
  <path d="M22 9.81v1.04a2.06 2.06 0 00-.7-.12h-3.48c-1.55 0-2.94.86-3.63 2.24l-.75 1.48h-2.86l-.75-1.47a4.026 4.026 0 00-3.63-2.25H2.7c-.24 0-.48.04-.7.12V9.81C2 6.17 4.17 4 7.81 4h3.44v3.19l-.72-.72a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02a.753.753 0 00.51.2c.1 0 .19-.02.28-.06.09-.03.18-.09.25-.16l2-2c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-.72.72V4h3.44C19.83 4 22 6.17 22 9.81z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v7l2-2M12 9l-2-2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0010.24 17h3.53a2 2 0 001.79-1.11l1.17-2.34a1 1 0 01.89-.55h4.36"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.69 19c.96 2.1 2.96 3 6.31 3h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87M7 4.13c-3.54.52-5 2.6-5 6.87v4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 4H7.81C4.17 4 2 6.17 2 9.81v6.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V9.81C22 6.17 19.83 4 16.19 4z" opacity=".4"/>
  <path d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.567 2.567 0 00-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7zM14.53 6.47a.754.754 0 00-1.06 0l-.72.72V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.19l-.72-.72a.755.755 0 00-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02.06.06.14.11.22.15.1.03.19.05.29.05.1 0 .19-.02.28-.06.09-.04.17-.09.25-.16l2-2c.29-.29.29-.77 0-1.06z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v7l2-2M12 9l-2-2M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0010.24 17h3.53a2 2 0 001.79-1.11l1.17-2.34a1 1 0 01.89-.55h4.36"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4.13c-3.54.52-5 2.6-5 6.87v4c0 5 2 7 7 7h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 9.75c-.1 0-.19-.02-.29-.06a.74.74 0 01-.46-.69V2c0-.41.34-.75.75-.75s.75.34.75.75v5.19l.72-.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2 2a.75.75 0 01-.53.22z"/>
  <path d="M12 9.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM13.76 17.75h-3.53a2.73 2.73 0 01-2.46-1.52L6.6 13.89a.24.24 0 00-.22-.14h-4.4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.41c.67 0 1.27.37 1.57.97l1.17 2.34c.21.43.64.69 1.12.69h3.53c.48 0 .91-.26 1.12-.69l1.17-2.34c.3-.6.9-.97 1.57-.97H22c.41 0 .75.34.75.75s-.34.75-.75.75h-4.36c-.1 0-.18.05-.22.14l-1.17 2.34c-.5.94-1.44 1.52-2.49 1.52z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75v-4c0-4.69 1.74-7.04 5.64-7.61.42-.06.79.22.85.63.06.41-.22.79-.63.85-3.14.46-4.36 2.18-4.36 6.13v4c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-4c0-3.95-1.22-5.67-4.36-6.13a.747.747 0 01-.63-.85c.06-.41.44-.69.85-.63 3.9.57 5.64 2.92 5.64 7.61v4c0 5.43-2.32 7.75-7.75 7.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M12 2v7l2-2M12 9l-2-2"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.98 13h4.41c.38 0 .72.21.89.55l1.17 2.34A2 2 0 0010.24 17h3.53a2 2 0 001.79-1.11l1.17-2.34a1 1 0 01.89-.55h4.36" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4.13c-3.54.52-5 2.6-5 6.87v4c0 5 2 7 7 7h6c5 0 7-2 7-7v-4c0-4.27-1.46-6.35-5-6.87"/>`
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
