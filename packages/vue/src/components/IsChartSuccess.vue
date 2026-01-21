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
    content: `<path d="M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03zm.66 2.45l-2.37 2.77a.51.51 0 01-.38.18h-.02c-.13 0-.27-.05-.36-.15l-1.1-1.08c-.2-.2-.2-.53 0-.74.2-.2.53-.2.74 0l.69.69 2.01-2.34c.18-.22.51-.25.73-.06.22.19.24.52.06.73z"/>
  <path d="M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03zm.66 2.45l-2.37 2.77a.51.51 0 01-.38.18h-.02c-.13 0-.27-.05-.36-.15l-1.1-1.08c-.2-.2-.2-.53 0-.74.2-.2.53-.2.74 0l.69.69 2.01-2.34c.18-.22.51-.25.73-.06.22.19.24.52.06.73z"/>
  <path d="M21.97 7.21A5.812 5.812 0 0016.19 2H7.81A5.812 5.812 0 002 7.81v8.38A5.812 5.812 0 007.81 22H14c.55 0 1-.45 1-1v-2.97c0-1.67 1.36-3.03 3.03-3.03H21c.55 0 1-.45 1-1V7.81c0-.2-.01-.4-.03-.6zM7.75 13.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3zm5 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4M7 10.74v3.2M17 10.74v3.2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13v2c0 5 2 7 7 7h4M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9M16 19.43L17.58 21 21 17M12 10.5v3"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03zm.66 2.45l-2.37 2.77a.49.49 0 01-.37.18h-.02c-.14 0-.27-.05-.37-.15l-1.09-1.08a.52.52 0 010-.73c.2-.2.53-.21.73 0l.7.69 2-2.34c.19-.22.51-.24.73-.06.22.18.24.51.06.72z"/>
  <path d="M16 20.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c.4 0 .74.08 1.03.22V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22H16.22c-.14-.29-.22-.63-.22-1.03z" opacity=".4"/>
  <path d="M7 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM12 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM17 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4M16 19.43L17.58 21 21 17M7 10.5v3M12 10.5v3M17 10.5v3"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M7 14.69c-.41 0-.75-.34-.75-.75v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .42-.34.75-.75.75zM17 14.69c-.41 0-.75-.34-.75-.75v-3.21c0-.41.34-.75.75-.75s.75.34.75.75v3.21c0 .42-.34.75-.75.75z"/>
  <path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M17.58 21.75a.75.75 0 01-.53-.22l-1.58-1.57a.745.745 0 010-1.06c.29-.29.77-.3 1.06 0l1.01 1 2.9-3.39c.27-.32.74-.35 1.06-.08.31.27.35.74.08 1.06l-3.42 4c-.14.16-.33.25-.54.26h-.04zM12 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 19.43L17.58 21 21 17M7 10.5v3M12 10.5v3M17 10.5v3" opacity=".4"/>`
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
