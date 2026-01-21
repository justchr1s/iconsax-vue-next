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
    content: `<path d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.04C20.5 3.01 19.56 2 15.78 2zm-.12 12.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.74-.74c-.58.38-1.28.61-2.03.61-2.04 0-3.7-1.66-3.7-3.7S9.78 7 11.83 7a3.698 3.698 0 013.09 5.73l.74.74c.29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 11v7.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35M20.5 11.3V7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1M8 7h8M9 11h6"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.73 19.7c.82-.88 2.07-.81 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V7.05c0-4.03-.94-5.04-4.72-5.04H8.21c-3.78 0-4.72 1.01-4.72 5.04v11.26c.01 2.66 1.47 3.28 3.24 1.39z" opacity=".4"/>
  <path d="M15.66 13.47l-.74-.74c.38-.58.61-1.28.61-2.03 0-2.04-1.66-3.7-3.7-3.7s-3.7 1.66-3.7 3.7 1.66 3.7 3.7 3.7c.75 0 1.45-.23 2.03-.61l.74.74c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 11.3V7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1M8 7h8M9 11h6"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.54 21.94c-.23 0-.45-.1-.6-.3l-1.01-1.35c-.21-.28-.49-.44-.79-.46-.3-.02-.6.12-.84.37-1.45 1.55-2.55 1.42-3.08 1.22-.54-.21-1.45-.9-1.45-3.12V7.04c0-4.44 1.28-5.79 5.47-5.79h7.55c4.19 0 5.47 1.35 5.47 5.79v4.26c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.04c0-3.61-.63-4.29-3.97-4.29H8.24c-3.34 0-3.97.68-3.97 4.29V18.3c0 1.05.26 1.63.5 1.72.18.07.67-.03 1.43-.84.55-.58 1.27-.89 2.02-.85.74.04 1.44.43 1.91 1.06l1.02 1.35a.75.75 0 01-.61 1.2z"/>
  <path d="M18.2 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45z"/>
  <path d="M22 22.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16 7.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75zM15 11.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.5 11.3V7.04c0-4.03-.94-5.04-4.72-5.04H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h8M9 11h6" opacity=".4"/>`,
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
