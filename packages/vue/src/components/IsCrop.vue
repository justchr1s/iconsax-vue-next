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
    content: `<path d="M5.53 2c-.42 0-.75.34-.75.75v2.03H2.75a.749.749 0 100 1.5h2.78c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75zM21.25 17.719h-2.78c-.41 0-.75.34-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>
  <path d="M16.72 18.47c0-.96.79-1.75 1.75-1.75h.69v-6.67c0-2.89-2.34-5.23-5.23-5.23H7.28v.69c0 .96-.79 1.75-1.75 1.75h-.7v6.67c0 2.89 2.34 5.23 5.23 5.23h6.67v-.69h-.01z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.98 5H5v9.1C5 18 6 19 9.9 19H19V9.9C19 6 18 5 14.1 5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 5V2M5 5H2M19 19v3M19 19h3"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.94 4.83H6.83c-1.1 0-2 .9-2 2v7.11c0 2.89 2.34 5.23 5.23 5.23h7.11c1.1 0 2-.9 2-2v-7.11c0-2.89-2.34-5.23-5.23-5.23z" opacity=".4"/>
  <path d="M5.53 2c-.42 0-.75.34-.75.75v2.03H2.75a.749.749 0 100 1.5h2.78c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75zM21.25 17.72h-2.78c-.41 0-.75.34-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5v9.1C5 18 6 19 9.9 19z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 5V2M5 5H2M19 19v3M19 19h3"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 19.75H9.9c-4.33 0-5.65-1.32-5.65-5.65V5c0-.41.34-.75.75-.75h9.1c4.33 0 5.65 1.32 5.65 5.65V19c0 .41-.34.75-.75.75zm-13.25-14v8.35c0 3.49.66 4.15 4.15 4.15h8.35V9.9c0-3.49-.66-4.15-4.15-4.15H5.75z"/>
  <path d="M5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M5 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM19 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M22 19.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5v9.1C5 18 6 19 9.9 19z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 5V2M5 5H2M19 19v3M19 19h3"/>`,
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
