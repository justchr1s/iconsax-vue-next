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
    content: `<path d="M11.32 3H5.09C3.1 3 2.1 4.01 2.1 6.02V22h5.4v-3.75a.749.749 0 111.5 0V22h5.3V6.02c0-2.01-.99-3.02-2.98-3.02zm-.57 9.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M23 21.251h-2.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H1c-.41 0-.75.34-.75.75s.34.75.75.75h18.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 22h22M19.78 22.01v-4.46M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2zM2.1 6.02C2.1 4.01 3.1 3 5.09 3h6.23c1.99 0 2.98 1.01 2.98 3.02V22M2.1 22V10.01M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M2.1 22V6.03c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02V22" opacity=".4"/>
  <path d="M10.75 9H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75zM10.75 12.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75zM8.25 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75z"/>
  <path d="M23 21.25h-2.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H1c-.41 0-.75.34-.75.75s.34.75.75.75h18.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H23c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 22h22M19.78 22.01v-4.46M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2zM2.1 22V6.03c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02V22M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M19.78 22.76c-.41 0-.75-.34-.75-.75v-4.46c0-.41.34-.75.75-.75s.75.34.75.75v4.46c0 .41-.33.75-.75.75z"/>
  <path d="M19.8 18.3c-1.63 0-2.95-1.32-2.95-2.95v-2.27a2.949 2.949 0 115.9 0v2.27c0 1.63-1.32 2.95-2.95 2.95zm0-6.66c-.8 0-1.45.65-1.45 1.45v2.27a1.451 1.451 0 002.9 0v-2.27c0-.8-.65-1.45-1.45-1.45zM14.3 22.75c-.41 0-.75-.34-.75-.75V6.03c0-1.59-.67-2.27-2.23-2.27H5.09c-1.57 0-2.25.68-2.25 2.27V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.03c0-2.43 1.33-3.77 3.75-3.77h6.23c2.41 0 3.73 1.34 3.73 3.77V22c0 .41-.34.75-.75.75z"/>
  <path d="M10.75 9H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75zM10.75 12.75H5.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.95c.41 0 .75.34.75.75s-.34.75-.75.75zM8.25 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 22h22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.78 22.01v-4.46" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.8 10.89c-1.22 0-2.2.98-2.2 2.2v2.27c0 1.22.98 2.2 2.2 2.2 1.22 0 2.2-.98 2.2-2.2v-2.27c0-1.22-.98-2.2-2.2-2.2zM2.1 22V6.03c0-2.01 1-3.02 2.99-3.02h6.23c1.99 0 2.98 1.01 2.98 3.02V22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.8 8.25h4.95M5.8 12h4.95M8.25 22v-3.75" opacity=".4"/>`,
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
