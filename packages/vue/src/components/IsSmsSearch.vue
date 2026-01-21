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
    content: `<path d="M17 3H7C4 3 2 4.5 2 8v7.96c0 2.29 1.85 4.14 4.14 4.14h6.26c.58 0 1.08-.49 1.02-1.07-.14-1.53.36-3.18 1.72-4.51.56-.55 1.25-.97 2-1.21 1.25-.4 2.46-.35 3.53.02a1 1 0 001.33-.94V8c0-3.5-2-5-5-5zm.47 5.59l-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.768.768 0 01-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.33.21.8-.11 1.06z"/>
  <path d="M22.65 21.449l-.75-.75a3.756 3.756 0 00-3.14-5.82c-2.08 0-3.76 1.68-3.76 3.75 0 2.07 1.68 3.76 3.76 3.76.76 0 1.47-.23 2.06-.62l.75.75c.15.15.34.22.54.22s.39-.07.54-.22c.3-.29.3-.77 0-1.07z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3M12 20.5H7c-3 0-5-1.5-5-5v-3.06"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z" opacity=".4"/>
  <path fill-rule="evenodd" d="M17.586 8.532a.75.75 0 01-.118 1.054l-3.13 2.5c-1.304 1.038-3.382 1.038-4.685 0H9.65l-3.12-2.5a.75.75 0 11.938-1.171l3.119 2.499c.757.601 2.058.601 2.815 0l3.129-2.5a.75.75 0 011.054.118z" clip-rule="evenodd"/>
  <path d="M22.66 21.47l-.74-.74c.38-.58.61-1.28.61-2.03 0-2.04-1.66-3.7-3.7-3.7s-3.7 1.66-3.7 3.7 1.66 3.7 3.7 3.7c.75 0 1.45-.23 2.03-.61l.74.74c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-2.86-1.39-4.25-4.25-4.25H7c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M11.999 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 01-.12-1.05c.26-.32.73-.37 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.79-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79zM18.2 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45z"/>
  <path d="M22 22.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" opacity=".4"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
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
