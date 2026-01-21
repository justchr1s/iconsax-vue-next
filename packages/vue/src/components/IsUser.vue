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
    content: `<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<circle cx="12" cy="7" r="5"/><path stroke-dasharray="5 3" d="M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<circle opacity=".4" cx="12" cy="7" r="5" fill="currentColor"/><path d="M12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5z" fill="currentColor"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<circle cx="12" cy="7" r="5"/><path d="M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<circle cx="12" cy="7" r="5"/><path d="M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<circle cx="12" cy="7" r="5"/><path d="M20.59 22c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"/>`
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
