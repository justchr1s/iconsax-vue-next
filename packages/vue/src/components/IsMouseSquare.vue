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
    content: `<path d="M21 7.52v5.88c0 .34-.33.58-.65.48l-3.93-1.22a3.02 3.02 0 00-3.78 3.79l1.21 3.9c.1.32-.14.65-.48.65H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2h7.96C18.93 2 21 4.06 21 7.52z"/>
  <path d="M21.96 18.838l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.02V15c0 5 2 7 7 7h3M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9M20.96 17.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.48 2H7.53C4.07 2 2.01 4.06 2.01 7.52v7.95c0 3.46 2.07 5.52 5.52 5.52h7.95c3.46 0 5.52-2.06 5.52-5.52V7.52C21 4.06 18.93 2 15.48 2z" opacity=".4"/>
  <path d="M21.96 18.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L14.08 16c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.96 17.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h3c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M16.37 22.77h-.02a2.229 2.229 0 01-2.15-1.6l-1.85-5.95c-.25-.82-.04-1.7.57-2.29.6-.59 1.47-.81 2.27-.56l5.96 1.85c.96.3 1.59 1.14 1.6 2.15.01 1-.6 1.85-1.56 2.17l-1.63.55c-.23.08-.41.25-.48.48l-.56 1.64c-.31.95-1.15 1.56-2.15 1.56zm-1.86-9c-.27 0-.45.15-.53.22-.21.21-.28.5-.19.79l1.85 5.95c.16.51.58.53.74.54.14 0 .57-.04.73-.53l.56-1.64c.22-.67.76-1.2 1.43-1.43l1.63-.55c.5-.16.53-.6.53-.73s-.04-.57-.54-.73l-5.96-1.85a.855.855 0 00-.25-.04z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.96 17.84l-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9z" opacity=".4"/>`
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
