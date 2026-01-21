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
    content: `<path d="M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2zm-1.34 12.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.74-.74c-.58.38-1.28.61-2.03.61-2.04 0-3.7-1.66-3.7-3.7S9.78 7 11.83 7a3.698 3.698 0 013.09 5.73l.74.74c.29.29.29.77 0 1.06z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.4 18.2c0 1.77-1.43 3.2-3.2 3.2-1.77 0-3.2-1.43-3.2-3.2 0-1.77 1.43-3.2 3.2-3.2M22 22l-1-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.996 11h.01M11.995 11h.009M7.995 11h.008"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22.53 21.47l-.74-.74c.38-.58.61-1.28.61-2.03 0-2.04-1.66-3.7-3.7-3.7S15 16.66 15 18.7s1.66 3.7 3.7 3.7c.75 0 1.45-.23 2.03-.61l.74.74c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"/>
  <path d="M2 12.97V6.99c0-2.75 2.24-4.98 5-4.98h10c2.76 0 5 2.23 5 4.99v6.98c0 2.75-2.24 4.98-5 4.98h-1.5c-.31 0-.61.15-.8.4l-1.5 1.99c-.66.88-1.74.88-2.4 0l-1.5-1.99c-.17-.22-.52-.4-.8-.4H7c-2.76 0-5-2.23-5-4.98v-1.01z" opacity=".4"/>
  <path d="M12 12c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zM16 12c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1zM8 12c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.78c-.69 0-1.34-.35-1.8-.96l-1.5-2a.377.377 0 00-.21-.1H8c-4.17 0-6.75-1.13-6.75-6.75v-5c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-3.58-1.67-5.25-5.25-5.25H8c-3.58 0-5.25 1.67-5.25 5.25v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.1.29 1.4.7l1.5 2c.35.46.85.46 1.2 0a.75.75 0 011.2.9c-.46.61-1.11.96-1.8.96z"/>
  <path d="M12 11.97c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM16 11.97c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM8 11.97c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM18.2 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45z"/>
  <path d="M22 22.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.2 21.37c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.996 11h.01M11.995 11h.009M7.995 11h.008"/>`
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
