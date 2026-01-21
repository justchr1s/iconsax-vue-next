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
    content: `<path d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07zM12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35zM7.1 14.18c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.41-.1.81.15.91.55.36 1.43.36 2.93 0 4.36zm3.5 0c-.08.34-.39.57-.73.57-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.93 0 4.36z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.01 5H13c4 0 5 1 5 5v4c0 4-1 5-5 5H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35z" opacity=".4"/>
  <path d="M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07zM6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64a.748.748 0 111.45-.36c.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57zM9.88 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25zM6.38 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64a.748.748 0 111.45-.36c.36 1.43.36 2.94 0 4.36-.08.34-.39.57-.72.57zM9.88 14.75c-.06 0-.12-.01-.18-.02-.4-.1-.65-.51-.55-.91.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55.36 1.43.36 2.94 0 4.36-.09.34-.4.57-.73.57z"/>
  <path d="M13 19.75H7c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75h6c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75zm-6-14c-3.57 0-4.25.68-4.25 4.25v4c0 3.57.68 4.25 4.25 4.25h6c3.57 0 4.25-.68 4.25-4.25v-4c0-3.57-.68-4.25-4.25-4.25H7z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M6.38 10c.33 1.31.33 2.69 0 4M9.88 10c.33 1.31.33 2.69 0 4" opacity=".34"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 19H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5z"/>`
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
