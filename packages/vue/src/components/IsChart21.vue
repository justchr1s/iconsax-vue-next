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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM9.91 16.19c0 .64-.52 1.16-1.17 1.16-.64 0-1.16-.52-1.16-1.16v-3.26c0-.64.52-1.16 1.16-1.16.65 0 1.17.52 1.17 1.16v3.26zm6.51 0c0 .64-.52 1.16-1.16 1.16-.65 0-1.17-.52-1.17-1.16V7.81c0-.64.52-1.16 1.17-1.16.64 0 1.16.52 1.16 1.16v8.38z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 11.57v4.93a2 2 0 11-4 0v-9c0-1.1.9-2 2-2s2 .9 2 2M8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 002 2z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2z"/>
  <path d="M3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10zM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 10.74v3.2M12 9v6.68M17 10.74v3.2M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM5.6 19.75H4c-.96 0-1.75-.79-1.75-1.75V9.38c0-.96.79-1.75 1.75-1.75h1.6c.96 0 1.75.79 1.75 1.75V18c0 .96-.79 1.75-1.75 1.75zM4 9.12c-.14 0-.25.11-.25.25V18c0 .14.11.25.25.25h1.6c.14 0 .25-.11.25-.25V9.38c0-.14-.11-.25-.25-.25H4v-.01zM12.8 19.75h-1.6c-.96 0-1.75-.79-1.75-1.75V6.19c0-.96.79-1.75 1.75-1.75h1.6c.96 0 1.75.79 1.75 1.75V18c0 .96-.79 1.75-1.75 1.75zM11.2 5.94c-.14 0-.25.11-.25.25V18c0 .14.11.25.25.25h1.6c.14 0 .25-.11.25-.25V6.19c0-.14-.11-.25-.25-.25h-1.6zM20 19.75h-1.6c-.96 0-1.75-.79-1.75-1.75V3c0-.96.79-1.75 1.75-1.75H20c.96 0 1.75.79 1.75 1.75v15c0 .96-.79 1.75-1.75 1.75zm-1.6-17c-.14 0-.25.11-.25.25v15c0 .14.11.25.25.25H20c.14 0 .25-.11.25-.25V3c0-.14-.11-.25-.25-.25h-1.6z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10zM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2z" opacity=".4"/>`,
    isStroke: true
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
    :fill="currentVariant?.isStroke ? 'none' : 'currentColor'"
    :stroke="currentVariant?.isStroke ? 'currentColor' : 'none'"
    :style="{ color }"
    v-html="currentVariant?.content"
  />
</template>
