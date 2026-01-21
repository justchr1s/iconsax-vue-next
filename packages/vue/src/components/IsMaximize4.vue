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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-4.66 11.53l-3.72 3.72H10c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.1 0-.2-.02-.29-.06a.782.782 0 01-.41-.41.868.868 0 01-.05-.28v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19l3.72-3.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06zM18.75 10c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.81l-3.72 3.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.72-3.72H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.1 0 .19.02.29.06.18.08.33.22.41.41.03.09.05.18.05.28v4z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5V3h-6M21 9V7.97M3 19v2h6M3 15v1.03M21 3l-7.5 7.5M10.5 13.5L3 21"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M18.69 5.71a.782.782 0 00-.41-.41.868.868 0 00-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19l-3.72 3.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.72-3.72V10c0 .41.34.75.75.75s.75-.34.75-.75V6c0-.1-.02-.19-.06-.29zM11.53 12.47a.754.754 0 00-1.06 0l-3.72 3.72V14c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.81l3.72-3.72c.29-.29.29-.77 0-1.06z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 9V3h-6M3 15v6h6M21 3l-7.5 7.5M10.5 13.5L3 21"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 9.75c-.41 0-.75-.34-.75-.75V3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75zM9 21.75H3c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M13.5 11.25c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l7.5-7.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.5 7.5c-.15.15-.34.22-.53.22zM3 21.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l7.5-7.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-7.5 7.5c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15v6h6"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M21 9V3h-6M21 3l-7.5 7.5"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 13.5L3 21"/>`
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
