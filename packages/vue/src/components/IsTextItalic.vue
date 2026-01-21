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
    content: `<path d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68zm-5.08 3.38h-1.95l-2.24 8.97h1.84c.41 0 .75.34.75.75s-.34.75-.75.75H8.13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2l2.24-8.97h-1.89c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.38c.41 0 .75.34.75.75s-.33.75-.74.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.62 3h9.25M5.12 21h9.25M10.5 17.99L9.75 21M14.25 3L11.5 14.01"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68z" opacity=".4"/>
  <path d="M15.87 6.01h-5.38c-.41 0-.75.34-.75.75s.34.75.75.75h1.89l-2.24 8.97h-2c-.41 0-.75.34-.75.75s.34.75.75.75h5.38c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.84l2.24-8.97h1.95c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.62 3h9.25M5.12 21h9.25M14.25 3l-4.5 18"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.88 3.75H9.62c-.41 0-.74-.34-.74-.75s.34-.75.75-.75h9.25c.41 0 .75.34.75.75s-.34.75-.75.75zM14.38 21.75H5.12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.25c.41 0 .75.34.75.75s-.33.75-.74.75z"/>
  <path d="M9.75 21.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91l4.5-18a.75.75 0 111.46.36l-4.5 18c-.09.34-.39.57-.73.57z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.62 3h9.25M5.12 21h9.25"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 3l-4.5 18" opacity=".4"/>`
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
