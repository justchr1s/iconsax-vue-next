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
    content: `<path d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM14.3 15.358l-1.55 1.55V6.698l1.55 1.55c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.83-2.83a.774.774 0 00-1.06 0l-2.83 2.83c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.83 2.83a.75.75 0 001.06 0l2.83-2.83c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 2h18M12 6v12M14.83 7.72L12 4.89 9.17 7.72M14.83 15.89L12 18.72l-2.83-2.83M10.05 22H21M3 22h2.98"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M14.3 15.36l-1.55 1.55V6.7l1.55 1.55c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-2.83-2.83a.774.774 0 00-1.06 0L8.64 7.19c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.55-1.55v10.21L9.7 15.36a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l2.83 2.83a.75.75 0 001.06 0l2.83-2.83c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 22h18M3 2h18M12 6v12M14.83 7.72L12 4.89 9.17 7.72M14.83 15.89L12 18.72l-2.83-2.83"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 2.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75z"/>
  <path d="M14.83 8.47c-.19 0-.38-.07-.53-.22L12 5.95l-2.3 2.3c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.83-2.83c.28-.28.78-.28 1.06 0l2.83 2.83c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM12 19.47a.75.75 0 01-.53-.22l-2.83-2.83a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.83 2.83a.75.75 0 01-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 22h18M3 2h18"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M12 6v12M14.83 7.72L12 4.89 9.17 7.72M14.83 15.89L12 18.72l-2.83-2.83"/>
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
