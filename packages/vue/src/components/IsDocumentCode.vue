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
    content: `<path d="M16 2H8C4.5 2 3 4 3 7v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5zm-5.47 14.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47zm6-.94l-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06L14.94 15l-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06zm1.97-6.28h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-5.98"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z" opacity=".4"/>
  <path d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75zM10 17.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM14 17.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L14.94 15l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8z"/>
  <path d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75zM10 17.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM14 17.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L14.94 15l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2" opacity=".4"/>`,
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
