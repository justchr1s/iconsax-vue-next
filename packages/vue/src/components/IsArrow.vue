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
    content: `<path d="M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75zM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75zM12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75z"/>
  <path d="M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M4.001 6.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM20.001 6.751c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.47-1.47-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.45 5.6A6.973 6.973 0 0112 11v3M2 4h3M4 2L2 4l2 2M20 2l2 2-2 2"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75zM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75z" opacity=".4"/>
  <path d="M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75z"/>
  <path d="M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M4 6.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.06 4l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM20 6.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L20.94 4l-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 2L2 4l2 2M20 2l2 2-2 2"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75zM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75zM12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75z"/>
  <path d="M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M4 6.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.06 4l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM20 6.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L20.94 4l-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22v-2M12 18v-2" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 2L2 4l2 2M20 2l2 2-2 2"/>`
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
