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
    content: `<path d="M21.017 7.992c.398.566-.076 1.258-.769 1.258H3a1 1 0 01-1-1V6.42C2 3.98 3.98 2 6.42 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.805 0 3.402.897 4.367 2.272zM21.983 11.747a1 1 0 00-1-.997H3a1 1 0 00-1 1v4.9C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65l-.017-4.903zM14.54 16.97l-2.15 1.88a.578.578 0 01-.78 0l-2.15-1.88c-.68-.6-.77-1.62-.2-2.33.57-.72 1.6-.85 2.34-.3l.4.3.4-.3c.74-.55 1.77-.42 2.34.3.57.71.48 1.73-.2 2.33z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.2 14.78l2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71z" opacity=".4"/>
  <path d="M21.99 10.84c-.02-.49-.1-.95-.25-1.4H2v7.21C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65v-5.58c0-.07 0-.16-.01-.23zm-7.45 5.13l-2.15 1.88a.578.578 0 01-.78 0l-2.15-1.88c-.68-.6-.77-1.62-.21-2.33.58-.72 1.6-.85 2.34-.3l.4.3.4-.3a1.69 1.69 0 012.34.3c.58.71.49 1.73-.19 2.33z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.2 14.78l2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28z"/>
  <path stroke-miterlimit="10" stroke-width="1.5" d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 17.88c-.25 0-.51-.09-.71-.27l-2.58-2.26c-.97-.85-1.1-2.31-.29-3.32a2.4 2.4 0 013.33-.42l.25.19.26-.2a2.4 2.4 0 013.33.42c.81 1.01.68 2.47-.29 3.32l-2.58 2.26c-.21.19-.47.28-.72.28zm-2.31-3.66L12 16.24l2.31-2.02c.37-.32.42-.87.11-1.25a.903.903 0 00-1.26-.16l-.71.53c-.27.2-.63.2-.9 0l-.71-.53a.904.904 0 00-1.26.16c-.3.38-.25.93.11 1.25z"/>
  <path d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75zm-10-20c-3.58 0-4.25.68-4.25 4.25v10c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-6c0-3.57-.67-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.68-.9-1.8-.9H7z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.2 14.78l2.58 2.26c.12.11.31.11.43 0l2.58-2.26c.67-.59.76-1.59.2-2.29s-1.58-.83-2.29-.29l-.7.54-.71-.53c-.72-.54-1.73-.41-2.29.29-.56.69-.47 1.7.2 2.28z" opacity=".4"/>
  <path stroke-miterlimit="10" stroke-width="1.5" d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5z"/>`
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
