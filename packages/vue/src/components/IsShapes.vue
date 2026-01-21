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
    content: `<path d="M13.43 15.001H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55z"/>
  <path d="M22.65 15.999a6.5 6.5 0 01-6.5 6.5 6.5 6.5 0 01-6.31-4.93c-.07-.3.16-.57.47-.57h3.77c1.39 0 2.65-.72 3.36-1.91.7-1.2.73-2.64.05-3.86l-.5-.92c-.19-.34.08-.75.46-.68 2.96.6 5.2 3.22 5.2 6.37z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.81 3.24c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15.5a6.5 6.5 0 11-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0122 15.5z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.43 15H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55z"/>
  <path d="M22 15.5a6.5 6.5 0 11-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0122 15.5z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.43 15H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15.5a6.5 6.5 0 11-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0122 15.5z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.43 15.75H4.4c-1.12 0-2.14-.58-2.71-1.55-.57-.97-.59-2.13-.05-3.12l4.51-8.21a3.105 3.105 0 012.76-1.63c1.17 0 2.2.61 2.76 1.63l4.52 8.21c.54.98.52 2.15-.05 3.12-.57.97-1.59 1.55-2.71 1.55zm-4.52-13c-.61 0-1.15.32-1.44.85l-4.51 8.21c-.28.52-.27 1.12.02 1.63.3.51.83.81 1.42.81h9.03c.59 0 1.12-.3 1.42-.81.3-.51.31-1.11.02-1.63L10.35 3.6c-.29-.53-.83-.85-1.44-.85z"/>
  <path d="M15.5 22.75c-4 0-7.25-3.25-7.25-7.25 0-.18.01-.36.02-.54.02-.4.35-.71.75-.71h4.41c.59 0 1.12-.3 1.42-.81.3-.51.31-1.11.02-1.63l-1.28-2.33a.742.742 0 01-.02-.68c.1-.22.3-.37.53-.42.45-.09.92-.13 1.4-.13 4 0 7.25 3.25 7.25 7.25s-3.25 7.25-7.25 7.25zm-5.74-7c.13 3.06 2.66 5.5 5.74 5.5 3.17 0 5.75-2.58 5.75-5.75s-2.58-5.75-5.75-5.75h-.05l.74 1.34c.54.98.52 2.15-.05 3.12a3.11 3.11 0 01-2.71 1.55H9.76v-.01z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.43 15H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15.5a6.5 6.5 0 11-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0122 15.5z" opacity=".4"/>`,
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
