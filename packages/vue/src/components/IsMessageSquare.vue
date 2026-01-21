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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm2.09 10.91c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.32c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 00-.5-.25h-.32c-2.51 0-3.76-.62-3.76-3.76V9.76c0-2.3 1.06-3.55 3.18-3.73.17-.02.37-.03.58-.03h5.03c2.51 0 3.76 1.26 3.76 3.76v3.15z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.28 9.76v3.14c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.31c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 00-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77c0-2.3 1.06-3.55 3.18-3.73.19-.02.39-.03.59-.03h5.03c2.47-.01 3.73 1.25 3.73 3.75z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.28 9.76v3.14c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.31c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 00-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77c0-2.3 1.06-3.55 3.18-3.73.19-.02.39-.03.59-.03h5.03c2.47-.01 3.73 1.25 3.73 3.75z"/>
  <path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.28 9.76v3.14c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.31c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 00-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77c0-2.3 1.06-3.55 3.18-3.73.19-.02.39-.03.59-.03h5.03c2.47-.01 3.73 1.25 3.73 3.75z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M11.999 19.35c-.52 0-1.01-.26-1.36-.72l-.91-1.21h-.25c-2.71 0-4.51-.77-4.51-4.51V9.77c0-2.68 1.37-4.27 3.86-4.48.19-.02.42-.03.65-.03h5.03c2.91 0 4.51 1.6 4.51 4.51v3.14c0 .24-.01.46-.04.68-.21 2.46-1.8 3.83-4.48 3.83h-.25l-.91 1.21c-.33.46-.82.72-1.34.72zm-2.51-12.6c-.17 0-.34.01-.5.03-1.75.15-2.52 1.07-2.52 2.99v3.14c0 2.58.75 3.01 3.01 3.01h.31c.4 0 .85.22 1.1.54l.95 1.27c.06.08.12.12.15.12s.09-.04.15-.12l.94-1.26c.26-.35.67-.55 1.1-.55h.31c1.92 0 2.84-.77 2.99-2.49.02-.19.03-.35.03-.53V9.76c0-2.08-.93-3.01-3.01-3.01h-5.01z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.28 9.76v3.14c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.31c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 00-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77c0-2.3 1.06-3.55 3.18-3.73.19-.02.39-.03.59-.03h5.03c2.47-.01 3.73 1.25 3.73 3.75z" opacity=".4"/>
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
