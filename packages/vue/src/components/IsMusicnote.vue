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
    content: `<path d="M21.719 6.279v1.17c0 .98-.39 1.82-1.08 2.31-.43.32-.96.47-1.51.47-.34 0-.68-.05-1.03-.17l-5.38-1.79v9.73c0 2.62-2.13 4.75-4.75 4.75s-4.75-2.13-4.75-4.75 2.13-4.75 4.75-4.75c1.26 0 2.4.5 3.25 1.3V3.999c0-.97.4-1.81 1.09-2.31.69-.49 1.61-.6 2.53-.3l4.42 1.48c1.36.45 2.46 1.98 2.46 3.41z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.11 16.98c-.09.32-.14.67-.14 1.02 0 2.21 1.79 4 4 4s4-1.79 4-4a3.999 3.999 0 00-5.02-3.87M11.97 18V4M14.61 2.11l4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.26 2.87L14.84 1.4c-.92-.31-1.85-.2-2.53.3-.69.5-1.08 1.34-1.08 2.31v3.77l6.88 2.29c.34.12.69.17 1.02.17.56 0 1.08-.16 1.51-.47.69-.5 1.08-1.34 1.08-2.31V6.28c0-1.43-1.1-2.96-2.46-3.41z" opacity=".4"/>
  <path d="M12.72 8.27V18c0 2.62-2.13 4.75-4.75 4.75S3.22 20.62 3.22 18s2.13-4.75 4.75-4.75c1.26 0 2.4.5 3.25 1.3V7.77l1.5.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.97 22a4 4 0 100-8 4 4 0 000 8zM11.97 18V4M14.61 2.11l4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.97 22.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25a3.25 3.25 0 00-3.25-3.25z"/>
  <path d="M11.97 18.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v14c0 .41-.33.75-.75.75z"/>
  <path d="M19.13 10.23c-.33 0-.68-.06-1.02-.17l-4.42-1.47c-1.38-.46-2.46-1.96-2.46-3.41V4c0-.97.4-1.81 1.08-2.31.69-.5 1.61-.6 2.53-.3l4.42 1.47c1.38.46 2.46 1.96 2.46 3.41v1.17c0 .97-.4 1.81-1.08 2.31-.43.33-.96.48-1.51.48zm-5.31-7.51c-.24 0-.46.06-.63.19-.3.21-.46.6-.46 1.09v1.17c0 .8.67 1.73 1.43 1.99l4.42 1.47c.46.16.89.12 1.18-.09.3-.21.46-.6.46-1.09V6.28c0-.8-.67-1.73-1.43-1.99l-4.42-1.47c-.19-.07-.38-.1-.55-.1z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.97 22a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.97 18V4" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.61 2.11l4.42 1.47c1.07.36 1.95 1.57 1.95 2.7v1.17c0 1.53-1.18 2.38-2.63 1.9l-4.42-1.47c-1.07-.36-1.95-1.57-1.95-2.7V4c-.01-1.52 1.18-2.38 2.63-1.89z"/>`
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
