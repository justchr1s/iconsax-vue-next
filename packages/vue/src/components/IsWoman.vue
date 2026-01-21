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
    content: `<path d="M19 9c0-3.87-3.13-7-7-7S5 5.13 5 9c0 3.62 2.74 6.59 6.25 6.96v2.29H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.25H15c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25v-2.29A6.995 6.995 0 0019 9z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7c-1.93 0-3.68.78-4.95 2.05M12 16v6M15 19H9"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 9a6.995 6.995 0 01-7.75 6.96A6.995 6.995 0 015 9c0-3.87 3.13-7 7-7s7 3.13 7 7z" opacity=".4"/>
  <path d="M15.75 19c0 .41-.34.75-.75.75h-2.25V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-2.29c.25.03.5.04.75.04s.5-.01.75-.04v2.29H15c.41 0 .75.34.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16a7 7 0 100-14 7 7 0 000 14zM12 16v6M15 19H9"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 16.75c-4.27 0-7.75-3.48-7.75-7.75S7.73 1.25 12 1.25 19.75 4.73 19.75 9s-3.48 7.75-7.75 7.75zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25z"/>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75z"/>
  <path d="M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16a7 7 0 100-14 7 7 0 000 14z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M12 16v6M15 19H9"/>
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
