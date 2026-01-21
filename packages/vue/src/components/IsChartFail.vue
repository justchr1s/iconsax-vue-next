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
    content: `<path d="M21.97 7.21A5.812 5.812 0 0016.19 2H7.81A5.812 5.812 0 002 7.81v8.38A5.812 5.812 0 007.81 22H14c.55 0 1-.45 1-1v-2.97c0-1.67 1.36-3.03 3.03-3.03H21c.55 0 1-.45 1-1V7.81c0-.2-.01-.4-.03-.6zM7.75 13.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3zm5 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"/>
  <path d="M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03zm.5 4.56c.25.25.25.66 0 .91-.13.12-.3.18-.46.18-.16 0-.33-.06-.46-.18l-1.06-1.06-1.04 1.06c-.13.12-.29.18-.47.18-.15 0-.32-.06-.44-.18a.646.646 0 010-.91l1.06-1.06-1.06-1.05a.646.646 0 010-.91c.25-.25.66-.25.91 0l1.04 1.06 1.06-1.06c.25-.25.67-.25.92 0s.25.66 0 .91l-1.06 1.05 1.06 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.23 20.77l3.54-3.54M20.77 20.77l-3.54-3.54M7 10.5v3M12 10.5v3M17 10.5v3M2 13v2c0 5 2 7 7 7h4M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>`,
    isStroke: true
  },
  bulk: null,
  linear: null,
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.23 21.52c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.54-3.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.54 3.54c-.14.14-.34.22-.53.22z"/>
  <path d="M20.77 21.52c-.19 0-.38-.07-.53-.22l-3.54-3.54a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.54 3.54c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22zM7 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM12 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM17 14.25c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: null
}

const currentVariant = computed(() => svgData[props.variant] || svgData.bold)
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
