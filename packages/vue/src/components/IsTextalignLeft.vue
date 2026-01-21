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
    content: `<path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM12.47 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 110 1.5zM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM12.47 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 110 1.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.05 4.5H21M3 4.5h2.98M3 9.5h9.47M3 14.5h18M3 19.5h9.47"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12.47 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 110 1.5z" opacity=".4"/>
  <path d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12.47 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 110 1.5z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.5h18M3 9.5h9.47M3 14.5h18M3 19.5h9.47"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM12.47 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 110 1.5zM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM12.47 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 110 1.5z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.5h18" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.5h9.47"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 14.5h18" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19.5h9.47"/>`
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
