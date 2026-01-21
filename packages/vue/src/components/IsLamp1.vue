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
    content: `<path d="M12.5 5.481c.08 0 .16 0 .25.01v-2.96c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.96c.08-.01.16-.01.25-.01-4.61.23-8.28 4.03-8.28 8.7v1.94c0 1.1.9 2 2 2h13.56c1.1 0 2-.9 2-2v-1.94c0-4.67-3.67-8.47-8.28-8.7zM14.73 19.11c.33 0 .57.31.49.63A3.336 3.336 0 0112 22.22c-1.54 0-2.84-1.05-3.22-2.48-.08-.32.16-.63.49-.63h5.46z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.53 9.04a8.713 8.713 0 017.41-4.11h.12c4.82 0 8.72 3.9 8.72 8.72v4.94H3.22v-4.94M12 2v2.93M15.65 18.59A3.661 3.661 0 0112 22c-1.93 0-3.52-1.5-3.65-3.41h7.3z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.78 14.18v2.94c0 1.1-.9 2-2 2H5.22c-1.1 0-2-.9-2-2v-2.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82-.01 8.72 3.9 8.72 8.72z" opacity=".4"/>
  <path d="M12.75 2.53v2.96c-.23-.02-.46-.03-.69-.03h-.12c-.23 0-.46.01-.69.03V2.53c0-.41.34-.75.75-.75s.75.34.75.75zM15.32 19.11a3.326 3.326 0 01-6.64 0h6.64z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72zM12 2v2.93M15.65 18.59A3.661 3.661 0 0112 22c-1.93 0-3.52-1.5-3.65-3.41h7.3z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.779 19.34H3.219c-.41 0-.75-.34-.75-.75v-4.94c0-5.22 4.25-9.47 9.47-9.47h.12c5.22 0 9.47 4.25 9.47 9.47v4.94c0 .41-.34.75-.75.75zm-16.81-1.5h16.06v-4.19c0-4.4-3.58-7.97-7.97-7.97h-.12c-4.4 0-7.97 3.58-7.97 7.97v4.19z"/>
  <path d="M12 5.68c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2.93c0 .41-.34.75-.75.75zM12 22.75c-2.31 0-4.24-1.81-4.4-4.11a.76.76 0 01.2-.56c.14-.15.34-.24.55-.24h7.3c.21 0 .41.09.55.24.14.15.21.36.2.56-.16 2.3-2.09 4.11-4.4 4.11zm-2.73-3.41A2.916 2.916 0 0012 21.25c1.24 0 2.32-.79 2.73-1.91H9.27z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.78 13.65v4.94H3.22v-4.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82 0 8.72 3.9 8.72 8.72z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v2.93M15.65 18.59A3.661 3.661 0 0112 22c-1.93 0-3.52-1.5-3.65-3.41h7.3z" opacity=".4"/>`
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
