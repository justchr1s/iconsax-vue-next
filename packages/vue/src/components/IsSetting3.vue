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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM7.67 5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5zm1.853 10.931a.566.566 0 00-.353.505V18.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.564a.567.567 0 00-.353-.505A2.713 2.713 0 015.7 13.95c0-1.5 1.22-2.73 2.72-2.73 1.5 0 2.73 1.22 2.73 2.73 0 1.108-.67 2.057-1.627 2.481zM16.33 18.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9zm-.75-5.73c-1.5 0-2.73-1.22-2.73-2.73 0-1.108.67-2.057 1.627-2.481a.566.566 0 00.353-.505V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.564c0 .223.15.414.353.505A2.713 2.713 0 0118.3 10.05c0 1.5-1.22 2.72-2.72 2.72z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.57 18.5v-3.9M15.57 7.45V5.5M12.98 10.05c0-1.44 1.16-2.6 2.6-2.6 1.44 0 2.6 1.16 2.6 2.6 0 1.44-1.16 2.6-2.6 2.6M8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M15.58 19.25c-.41 0-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75zM15.58 8.2c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.34.75-.75.75zM8.42 19.25c-.41 0-.75-.34-.75-.75v-1.95c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.33.75-.75.75zM8.42 10.15c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.33.75-.75.75z"/>
  <path d="M15.58 7.33c-1.5 0-2.73 1.22-2.73 2.72 0 1.5 1.22 2.73 2.73 2.73 1.5 0 2.72-1.22 2.72-2.73s-1.22-2.72-2.72-2.72zM8.42 11.23c-1.5 0-2.72 1.22-2.72 2.73s1.22 2.72 2.72 2.72c1.5 0 2.73-1.22 2.73-2.72 0-1.5-1.22-2.73-2.73-2.73z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.57 18.5v-3.9M15.57 7.45V5.5M15.57 12.65a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zM8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M15.58 19.25c-.41 0-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75zM15.58 8.2c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.34.75-.75.75z"/>
  <path d="M15.58 13.4a3.35 3.35 0 113.35-3.35c0 1.85-1.51 3.35-3.35 3.35zm0-5.2c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.84-1.85-1.85-1.85zM8.42 19.25c-.41 0-.75-.34-.75-.75v-1.95c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.33.75-.75.75zM8.42 10.15c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.33.75-.75.75z"/>
  <path d="M8.42 17.3a3.35 3.35 0 110-6.7 3.35 3.35 0 010 6.7zm0-5.2c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.82-1.85-1.85-1.85z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M15.57 18.5v-3.9M15.57 7.45V5.5M15.57 12.65a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2zM8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 100-5.2 2.6 2.6 0 000 5.2z"/>
  </g>`,
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
