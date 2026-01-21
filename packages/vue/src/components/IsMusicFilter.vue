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
    content: `<path d="M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM21.86 7.678c-.59-.45-1.4-.54-2.35-.28l-4.35 1.18c-1.17.32-1.89 1.27-1.89 2.47v6.23c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-5.65l6.48-1.77v3.43c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-8.5c0-1.01-.3-1.75-.89-2.19zm-10.02 13.57a1.43 1.43 0 110-2.86 1.43 1.43 0 010 2.86zm7.98-1.45a1.43 1.43 0 110-2.86 1.43 1.43 0 010 2.86z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 3h3M8 3h14M2 9h9M2 15h6M2 21h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.84 22a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75L15.36 9.3c-.79.22-1.34.84-1.34 1.75v8.77"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.82 20.55a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36zM20.371 11.87l1.63-.45M14.02 13.6l2.35-.64"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M21.86 7.68c-.59-.45-1.4-.54-2.35-.28l-4.35 1.18c-1.17.32-1.89 1.27-1.89 2.47v6.23c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-5.65l6.48-1.77v3.43c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-8.5c0-1.01-.3-1.75-.89-2.19zM11.84 21.25a1.43 1.43 0 110-2.86 1.43 1.43 0 010 2.86zm7.98-1.45a1.43 1.43 0 110-2.86 1.43 1.43 0 010 2.86z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 3h20M2 9h9M2 15h6M2 21h4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.84 22a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75L15.36 9.3c-.79.22-1.34.84-1.34 1.75v8.77"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.82 20.55a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36zM14.02 13.6L22 11.42"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM11.84 22.75c-1.61 0-2.93-1.31-2.93-2.93 0-1.61 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93zm0-4.35a1.43 1.43 0 100 2.86 1.43 1.43 0 000-2.86z"/>
  <path d="M14.02 20.57c-.41 0-.75-.34-.75-.75v-8.77c0-1.21.72-2.16 1.89-2.47l4.35-1.19c.95-.26 1.77-.16 2.35.29.58.45.88 1.18.88 2.19v8.51c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.87c0-.5-.1-.85-.29-.99-.19-.15-.58-.16-1.05-.03l-4.35 1.19c-.29.08-.78.32-.78 1.03v8.77c0 .4-.34.73-.75.73z"/>
  <path d="M19.82 21.3c-1.61 0-2.93-1.31-2.93-2.93 0-1.61 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93zm0-4.35a1.43 1.43 0 100 2.86 1.43 1.43 0 000-2.86zM14.02 14.35a.747.747 0 01-.19-1.47l7.98-2.18a.75.75 0 11.39 1.45l-7.98 2.18c-.07.01-.14.02-.2.02z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 3h20M2 9h9M2 15h6M2 21h4"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M11.84 22a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36z"/>
    <path d="M22 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75L15.36 9.3c-.79.22-1.34.84-1.34 1.75v8.77"/>
    <path d="M19.82 20.55a2.18 2.18 0 100-4.36 2.18 2.18 0 000 4.36zM14.02 13.6L22 11.42"/>
  </g>`
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
