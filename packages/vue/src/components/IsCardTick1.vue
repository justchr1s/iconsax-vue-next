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
    content: `<path d="M2 11.46v5c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-4.99c0-.67-.54-1.21-1.21-1.21H3.21c-.67 0-1.21.54-1.21 1.21zm6 5.79H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM13.5 4.608v2.93c0 .67-.54 1.21-1.21 1.21H3.21c-.68 0-1.21-.56-1.21-1.23.01-1.13.46-2.16 1.21-2.91S5 3.398 6.14 3.398h6.15c.67 0 1.21.54 1.21 1.21zM19.97 2h-2.94C15.76 2 15 2.76 15 4.03v2.94C15 8.24 15.76 9 17.03 9h2.94C21.24 9 22 8.24 22 6.97V4.03C22 2.76 21.24 2 19.97 2zm.66 2.45l-2.37 2.77a.49.49 0 01-.37.18h-.02c-.14 0-.27-.05-.37-.15l-1.1-1.08a.52.52 0 010-.73c.2-.2.53-.21.73 0l.7.69 2-2.34c.19-.22.51-.24.73-.06.23.18.25.51.07.72z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11.01V7.89c0-3.51.89-4.39 4.44-4.39h7.06M22 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11v-1.1M16.5 6L18 7.5l4-4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 7.77V9H2V7.54C2 5.25 3.86 3.4 6.15 3.4H16v2.57C16 7.24 16.76 8 18.03 8h2.94c.4 0 .74-.07 1.03-.23z" opacity=".4"/>
  <path d="M2 9v7.46c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14V9H2zm6 8.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1zm.66 2.45l-2.37 2.77a.49.49 0 01-.37.18h-.02c-.14 0-.27-.05-.37-.15l-1.1-1.08a.52.52 0 010-.73c.2-.2.53-.21.73 0l.7.69 2-2.34c.19-.22.51-.24.73-.06.23.18.25.51.07.72z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h11.5M6 16.5h2M10.5 16.5h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 6L18 7.5l4-4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 10.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M11.55 21.25H6.44c-3.98 0-5.2-1.2-5.2-5.14V7.89c0-3.15.67-4.9 4.24-5.11.3-.01.62-.02.96-.02h11.11c3.98 0 5.2 1.2 5.2 5.14v4.41c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.9c0-3.09-.55-3.64-3.7-3.64H6.44c-.32 0-.61.01-.89.02-2.17.13-2.81.62-2.81 3.62v8.22c0 3.09.55 3.64 3.7 3.64h5.11c.41 0 .75.34.75.75s-.33.74-.75.74z"/>
  <path d="M10 16.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM18 22.75c-1.66 0-3.22-.88-4.06-2.31-.45-.72-.69-1.57-.69-2.44 0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75c0 .87-.24 1.72-.69 2.45-.84 1.42-2.4 2.3-4.06 2.3zm0-8c-1.79 0-3.25 1.46-3.25 3.25 0 .59.16 1.17.47 1.67.58.98 1.65 1.58 2.78 1.58A3.256 3.256 0 0021.25 18c0-1.79-1.46-3.25-3.25-3.25z"/>
  <path d="M17.429 19.74c-.19 0-.38-.07-.53-.22l-.99-.99a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.13 1.97c-.15.13-.33.2-.51.2z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5h11.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 16.5h2M10.5 16.5h4" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 11.03v5.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 6L18 7.5l4-4" opacity=".4"/>`
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
