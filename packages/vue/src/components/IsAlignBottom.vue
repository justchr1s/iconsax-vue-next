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
    content: `<path d="M15.98 19.379h1.04c1.59 0 2.23-.6 2.23-2.12V5.379h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12zM7.48 14.379h1.04c1.59 0 2.23-.61 2.23-2.12v-6.88h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12z"/>
  <path d="M21.25 6.119H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1M10.76 5.1v6.8c0 1.5-.64 2.1-2.23 2.1M5.26 5.1v6.8M2 5h20"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.98 19.38h1.04c1.59 0 2.23-.6 2.23-2.12V5.38h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12z"/>
  <path d="M7.48 14.38h1.04c1.59 0 2.23-.61 2.23-2.12V5.38h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12z" opacity=".4"/>
  <path d="M21.25 6.12H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1M5.26 5.1v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1V5.1M2 5h20"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.03 19.75h-1.04c-2.01 0-2.98-.93-2.98-2.85V5.1c0-.41.34-.75.75-.75s.75.34.75.75v11.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35V5.1c0-.41.34-.75.75-.75s.75.34.75.75v11.8c0 1.92-.97 2.85-2.98 2.85zM8.53 14.75H7.49c-2.01 0-2.98-.93-2.98-2.85V5.1c0-.41.34-.75.75-.75s.75.34.75.75v6.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35V5.1c0-.41.34-.75.75-.75s.75.34.75.75v6.8c0 1.92-.97 2.85-2.98 2.85z"/>
  <path d="M22 5.75H2a.749.749 0 110-1.5h20a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1M5.26 5.1v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1V5.1" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 5h20"/>`,
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
