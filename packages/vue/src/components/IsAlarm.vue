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
    content: `<path d="M22 21.25h-1V15a9 9 0 00-18 0v6.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zM12 3.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75zM5.001 5.751c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM19.001 5.751c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1-1c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M21 16.03V15A9 9 0 008 6.94 8.994 8.994 0 003 15v7h18v-2.03M12 2v1M4 4l1 1M20 4l-1 1"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22.75 22c0 .41-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75z" opacity=".4"/>
  <path d="M21 15v6.25H3V15a9 9 0 0118 0z"/>
  <path d="M12 3.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75zM5 5.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM19 5.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1-1c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M12 6a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9zM12 2v1M4 4l1 1M20 4l-1 1"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M21 22.75H3c-.41 0-.75-.34-.75-.75v-7c0-5.38 4.37-9.75 9.75-9.75s9.75 4.37 9.75 9.75v7c0 .41-.34.75-.75.75zm-17.25-1.5h16.5V15c0-4.55-3.7-8.25-8.25-8.25S3.75 10.45 3.75 15v6.25zM12 3.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75zM5 5.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM19 5.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1-1c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M12 6a9 9 0 00-9 9v7h18v-7a9 9 0 00-9-9z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v1M4 4l1 1M20 4l-1 1" opacity=".4"/>`
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
