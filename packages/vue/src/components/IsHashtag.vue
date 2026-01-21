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
    content: `<path d="M10.42 13.418h2.84l.32-2.84h-2.84l-.32 2.84z"/>
  <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm2.63 8.58h-3.77l-.32 2.85h3.37c.4 0 .73.33.73.73 0 .4-.33.73-.73.73h-3.53l-.41 3.66c-.04.37-.36.65-.73.65h-.08a.739.739 0 01-.65-.81l.39-3.5h-2.84l-.41 3.66c-.04.37-.36.65-.73.65h-.08a.739.739 0 01-.65-.81l.39-3.5H5.18c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73h3.77l.32-2.85H5.9c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73h3.53l.41-3.66c.04-.4.41-.69.81-.65.4.04.69.41.65.81l-.39 3.5h2.84l.41-3.66c.05-.4.41-.69.81-.65.4.04.69.41.65.81l-.39 3.5h3.61c.4 0 .73.33.73.73 0 .4-.35.73-.75.73z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L8 21M16 3l-2 18M20.05 9h1.45M3.5 9h13.49M3.95 15H2.5M20.5 15H7.01"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M13.86 6.65h-3.72c-1.92 0-3.49 1.56-3.49 3.49v3.72a3.5 3.5 0 003.49 3.49h3.72c1.92 0 3.49-1.56 3.49-3.49v-3.72a3.5 3.5 0 00-3.49-3.49zm2.09 3.49v1.16H12.7V8.05h1.16c1.15 0 2.09.94 2.09 2.09zm-5.81-2.09h1.16v3.26H8.05v-1.16c0-1.16.94-2.1 2.09-2.1zm-2.09 5.81V12.7h3.26v3.26h-1.16c-1.16-.01-2.1-.95-2.1-2.1zm5.81 2.09H12.7V12.7h3.26v1.16a2.11 2.11 0 01-2.1 2.09z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 17h4c1.65 0 3-1.35 3-3v-4c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3zM12 7v10M7 12h10"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8 21.75h-.08a.751.751 0 01-.66-.83l2-18c.05-.41.42-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66zM14 21.75h-.08a.751.751 0 01-.66-.83l2-18c.05-.41.41-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66z"/>
  <path d="M21.5 9.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM20.5 15.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 3L8 21M16 3l-2 18"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 9h18M2.5 15h18" opacity=".4"/>`
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
