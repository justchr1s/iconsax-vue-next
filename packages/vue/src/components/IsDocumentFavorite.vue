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
    content: `<path d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1zm-8.02 5.51c-.52 1.67-2.35 2.57-2.98 2.57-.64 0-2.43-.87-2.98-2.57-.36-1.11.05-2.56 1.32-2.97.58-.19 1.2-.08 1.65.27a1.8 1.8 0 011.66-.27c1.28.41 1.68 1.86 1.33 2.97z"/>
  <path d="M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.42 18.2c-.5 0-2.27-.83-2.8-2.48-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65M2 9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7v-2.02M18 10c-3 0-4-1-4-4V2l8 8"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1z" opacity=".4"/>
  <path d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54zM11.16 12.73c-.59-.19-1.22-.08-1.66.27a1.79 1.79 0 00-1.65-.27c-1.27.41-1.67 1.86-1.32 2.97.54 1.7 2.33 2.57 2.98 2.57.63 0 2.45-.9 2.98-2.57.34-1.11-.06-2.56-1.33-2.97z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10h-4c-3 0-4-1-4-4V2l8 8zM6.62 15.73c-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48-.49-.01-2.26-.84-2.79-2.48z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z"/>
  <path d="M22 10.75h-4c-3.42 0-4.75-1.33-4.75-4.75V2c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l8 8a.751.751 0 01-.53 1.28zm-7.25-6.94V6c0 2.58.67 3.25 3.25 3.25h2.19l-5.44-5.44zM9.42 18.95c-.87 0-2.89-1.06-3.51-3-.43-1.34.07-3.09 1.62-3.59.65-.21 1.34-.12 1.89.22.54-.34 1.24-.43 1.9-.22 1.55.5 2.05 2.25 1.62 3.59-.63 1.98-2.75 3-3.52 3zM7.33 15.5c.42 1.31 1.84 1.93 2.1 1.95.28-.03 1.68-.72 2.07-1.95.21-.66 0-1.5-.65-1.71-.27-.09-.64-.04-.81.22-.14.21-.36.33-.61.34a.72.72 0 01-.62-.31c-.21-.29-.57-.33-.83-.24-.64.2-.86 1.04-.65 1.7z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10h-4c-3 0-4-1-4-4V2l8 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.62 15.73c-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65-.51 1.63-2.3 2.48-2.8 2.48-.49-.01-2.26-.84-2.79-2.48z" opacity=".4"/>`
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
