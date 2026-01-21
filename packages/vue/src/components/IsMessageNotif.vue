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
    content: `<path d="M20 6.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"/>
  <path d="M19.04 8.15a4.226 4.226 0 01-3.19-3.19c-.13-.61-.14-1.2-.03-1.76a.988.988 0 00-.97-1.2H7C4.24 2 2 4.24 2 7v6.95c0 2.76 2.24 5 5 5h1.5c.28 0 .64.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99a1 1 0 01.8-.4h1.51c2.76 0 4.99-2.23 4.99-4.99V9.15c0-.63-.58-1.09-1.2-.97-.56.1-1.15.1-1.76-.03zM8 12c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8c0-4 2-6 6-6h6M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4.5a2.5 2.5 0 00-5 0A2.5 2.5 0 0019.5 7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.996 11h.01M11.995 11h.009M7.995 11h.008"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20 6.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"/>
  <path d="M20 8c-2.21 0-4-1.79-4-4 0-.73.21-1.41.56-2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V7.44c-.59.35-1.27.56-2 .56z" opacity=".4"/>
  <path d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM16 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.81c-.69 0-1.34-.35-1.8-.96l-1.5-2a.377.377 0 00-.21-.1H8c-4.17 0-6.75-1.13-6.75-6.75V8c0-4.42 2.33-6.75 6.75-6.75h6c.41 0 .75.34.75.75s-.34.75-.75.75H8C4.42 2.75 2.75 4.42 2.75 8v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96z"/>
  <path d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM16 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zM19.5 7.75c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 10v3c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.996 11h.01M11.995 11h.009M7.995 11h.008" opacity=".4"/>`,
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
