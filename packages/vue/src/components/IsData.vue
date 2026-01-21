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
    content: `<path d="M20 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM20 6.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM20 22.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM4 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"/>
  <path d="M19 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-7.25V7c0-1.58.67-2.25 2.25-2.25h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-2.42 0-3.75 1.33-3.75 3.75v4.25H5c-.41 0-.75.34-.75.75s.34.75.75.75h5.25V17c0 2.42 1.33 3.75 3.75 3.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-1.58 0-2.25-.67-2.25-2.25v-4.25H19z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 14a2 2 0 100-4 2 2 0 000 4zM20 6a2 2 0 100-4 2 2 0 000 4zM20 22a2 2 0 100-4 2 2 0 000 4zM4 14a2 2 0 100-4 2 2 0 000 4zM6 12h12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 12v5c0 2 1 3 3 3h4M18 4h-4c-2 0-3 1-3 3v.98"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM20 6.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM20 22.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM4 14.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"/>
  <path d="M19 12.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-7.25V7c0-1.58.67-2.25 2.25-2.25h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-2.42 0-3.75 1.33-3.75 3.75v4.25H5c-.41 0-.75.34-.75.75s.34.75.75.75h5.25V17c0 2.42 1.33 3.75 3.75 3.75h5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-5c-1.58 0-2.25-.67-2.25-2.25v-4.25H19z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 14a2 2 0 100-4 2 2 0 000 4zM20 6a2 2 0 100-4 2 2 0 000 4zM20 22a2 2 0 100-4 2 2 0 000 4zM4 14a2 2 0 100-4 2 2 0 000 4zM6 12h12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M20 14.75c-1.52 0-2.75-1.23-2.75-2.75S18.48 9.25 20 9.25s2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM20 6.75c-1.52 0-2.75-1.23-2.75-2.75S18.48 1.25 20 1.25 22.75 2.48 22.75 4 21.52 6.75 20 6.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM20 22.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM4 14.75c-1.52 0-2.75-1.23-2.75-2.75S2.48 9.25 4 9.25 6.75 10.48 6.75 12 5.52 14.75 4 14.75zm0-4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
  <path d="M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M18 20.75h-4c-2.42 0-3.75-1.33-3.75-3.75V7c0-2.42 1.33-3.75 3.75-3.75h4c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-1.58 0-2.25.67-2.25 2.25v10c0 1.58.67 2.25 2.25 2.25h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 14a2 2 0 100-4 2 2 0 000 4zM20 6a2 2 0 100-4 2 2 0 000 4zM20 22a2 2 0 100-4 2 2 0 000 4zM4 14a2 2 0 100-4 2 2 0 000 4z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M6 12h12M18 4h-4c-2 0-3 1-3 3v10c0 2 1 3 3 3h4"/>
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
