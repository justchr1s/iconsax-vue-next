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
    content: `<path d="M20.97 1h-2.94c-.87 0-1.51.36-1.8 1-.16.29-.23.63-.23 1.03v2.94C16 7.24 16.76 8 18.03 8h2.94c.4 0 .74-.07 1.03-.23.64-.29 1-.93 1-1.8V3.03C23 1.76 22.24 1 20.97 1zm.94 3.93c-.1.1-.25.17-.41.18h-1.41v.51l.01.88c-.01.17-.07.31-.19.43-.1.1-.25.17-.41.17-.33 0-.6-.27-.6-.6V5.1l-1.4.01a.61.61 0 01-.6-.61c0-.33.27-.6.6-.6l.88.01h.52v-1.4c0-.33.27-.61.6-.61.33 0 .6.28.6.61l-.01.71v.68h1.41c.33 0 .6.27.6.6a.68.68 0 01-.19.43zM9.001 10.381a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z"/>
  <path d="M20.97 8h-.47v4.61l-.13-.11c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31H16v-.47c0-.4.07-.74.23-1.03H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.77c-.29.16-.63.23-1.03.23z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M13 2H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M15.75 5h5.5M18.5 7.75v-5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H7.81c-2.55 0-4.39-1.07-5.25-2.97l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9z"/>
  <path d="M20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03c0-.4.08-.74.22-1.03H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9V7.81v-.03c-.29.14-.63.22-1.03.22z" opacity=".4"/>
  <path d="M9 10.38a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76zM20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1zm.94 3.93c-.1.1-.25.17-.41.18h-1.41l.01 1.39c-.01.17-.07.31-.19.43-.1.1-.25.17-.41.17-.33 0-.6-.27-.6-.6V5.1l-1.4.01a.61.61 0 01-.6-.61c0-.33.27-.6.6-.6l1.4.01v-1.4c0-.33.27-.61.6-.61.33 0 .6.28.6.61l-.01 1.39h1.41c.33 0 .6.27.6.6a.68.68 0 01-.19.43z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 10a2 2 0 100-4 2 2 0 000 4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"/>
  <path stroke-linecap="round" stroke-width="1.5" d="M15.75 5h5.5M18.5 7.75v-5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M9 10.75c-1.52 0-2.75-1.23-2.75-2.75S7.48 5.25 9 5.25 11.75 6.48 11.75 8 10.52 10.75 9 10.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z"/>
  <path d="M21.25 5.75h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M18.5 8.5c-.41 0-.75-.34-.75-.75v-5.5c0-.41.34-.75.75-.75s.75.34.75.75v5.5c0 .41-.34.75-.75.75zM2.67 19.7a.751.751 0 01-.42-1.37l4.93-3.31c1.08-.72 2.57-.64 3.55.19l.33.29c.5.43 1.35.43 1.84 0l4.16-3.57c1.07-.91 2.73-.91 3.8 0l1.63 1.4c.31.27.35.74.08 1.06-.27.31-.74.35-1.06.08l-1.63-1.4c-.5-.43-1.35-.43-1.84 0l-4.16 3.57c-1.06.91-2.73.91-3.8 0l-.33-.29c-.46-.39-1.22-.43-1.73-.08L3.1 19.58c-.14.08-.29.12-.43.12z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 10a2 2 0 100-4 2 2 0 000 4z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"/>
  <g stroke-linecap="round" stroke-width="1.5" opacity=".4">
    <path d="M15.75 5h5.5M18.5 7.75v-5.5"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9" opacity=".4"/>`
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
