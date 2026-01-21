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
    content: `<path d="M22.34 9.33l-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 00-.41-.67zM6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14V9M2 22h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10zM6.5 13h3M17.5 16.01L22 16v-6l-2-1"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14z" opacity=".4"/>
  <path d="M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75zM7.89 10h5.23c1.04 0 1.89-.5 1.89-1.89V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89v1.23C6 9.5 6.85 10 7.89 10zM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM22.75 10v6c0 .41-.33.75-.75.75l-4.5.01v-1.5l3.75-.01v-4.79l-1.59-.79a.745.745 0 01-.33-1.01c.18-.37.64-.51 1.01-.33l2 1c.25.13.41.39.41.67z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14zM2 22h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10zM6.5 13h3M17.5 16.01L22 16v-6l-2-1"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25z"/>
  <path d="M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75zM12.61 10.75H8.38c-1.63 0-2.64-1.01-2.64-2.64V6.88c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14V6.89c0-.81-.33-1.14-1.14-1.14H8.39zM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM17.5 16.76a.749.749 0 110-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 01-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02z"/>`,
    isStroke: false
  },
  twotone: null
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
