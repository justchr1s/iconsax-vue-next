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
    content: `<path d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM5.6 8.379H4c-.55 0-1 .45-1 1v8.62c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1v-8.62c0-.56-.45-1-1-1zM12.8 5.191h-1.6c-.55 0-1 .45-1 1v11.81c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.191c0-.55-.45-1-1-1zM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h12M2 22h4M3 13v5c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1M12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1zM21 3c0-.55-.45-1-1-1h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V7.13"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M5.6 8.38H4c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.56-.45-1-1-1zM12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1zM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2zM3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10zM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M14.25 22.75h-4.5c-.41 0-.75-.34-.75-.75V4c0-1.72.95-2.75 2.55-2.75h.9C14.05 1.25 15 2.28 15 4v18c0 .41-.34.75-.75.75zm-3.75-1.5h3V4c0-1.15-.54-1.25-1.05-1.25h-.9c-.51 0-1.05.1-1.05 1.25v17.25zM7 22.75H3c-.41 0-.75-.34-.75-.75V10c0-1.72.88-2.75 2.35-2.75h.8c1.47 0 2.35 1.03 2.35 2.75v12c0 .41-.34.75-.75.75zm-3.25-1.5h2.5V10c0-1.25-.55-1.25-.85-1.25h-.8c-.3 0-.85 0-.85 1.25v11.25zM21 22.75h-4c-.41 0-.75-.34-.75-.75v-7c0-1.72.88-2.75 2.35-2.75h.8c1.47 0 2.35 1.03 2.35 2.75v7c0 .41-.34.75-.75.75zm-3.25-1.5h2.5V15c0-1.25-.55-1.25-.85-1.25h-.8c-.3 0-.85 0-.85 1.25v6.25z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M7 10.74v3.2M12 9v6.68M17 10.74v3.2"/>
  </g>
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
