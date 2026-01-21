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
    content: `<path d="M6 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75zM10 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75zM14 5.121c-.41 0-.75-.34-.75-.75v-1.75c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75zM22.25 13.252c0-2.62-2.03-4.74-4.59-4.96-.74-1.21-2.06-2.03-3.58-2.03H6.71c-2.32 0-4.21 1.89-4.21 4.21v.53h15.79v-.53c0-.19-.03-.38-.06-.56 1.45.43 2.52 1.75 2.52 3.34 0 1.57-1.04 2.88-2.46 3.32v-4.57H2.5v5.79c0 2.32 1.89 4.21 4.21 4.21h7.37c2.2 0 3.99-1.7 4.17-3.86 2.28-.46 4-2.48 4-4.89z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.55v-3.08a4.21 4.21 0 014.21-4.21h7.37a4.21 4.21 0 014.21 4.21v7.32A4.21 4.21 0 0113.58 22H6.21C3.89 22 2 20.11 2 17.79M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0122 13.16zM2 12h15.51"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.79 10.47V12H2v-1.53c0-2.32 1.89-4.21 4.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21z" opacity=".6"/>
  <path d="M17.79 12v5.79c0 2.32-1.89 4.21-4.21 4.21H6.21C3.89 22 2 20.11 2 17.79V12h15.79z" opacity=".4"/>
  <path d="M5.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75zM9.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75zM13.5 5.12c-.41 0-.75-.34-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75zM21.65 14.32c0 2.15-1.74 3.89-3.89 3.89v-7.79c2.14 0 3.89 1.75 3.89 3.9z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.79 10.47v7.32A4.21 4.21 0 0113.58 22H6.21C3.89 22 2 20.11 2 17.79v-7.32a4.21 4.21 0 014.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21zM5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0122 13.16zM2 12h15.51"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.58 22.75H6.21c-2.74 0-4.96-2.23-4.96-4.96v-7.32c0-2.74 2.23-4.96 4.96-4.96h7.37c2.74 0 4.96 2.23 4.96 4.96v7.32c0 2.73-2.23 4.96-4.96 4.96zM6.21 7.01c-1.91 0-3.46 1.55-3.46 3.46v7.32c0 1.91 1.55 3.46 3.46 3.46h7.37c1.91 0 3.46-1.55 3.46-3.46v-7.32c0-1.91-1.55-3.46-3.46-3.46H6.21zM5.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75zM9.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75zM13.5 4.75c-.41 0-.75-.34-.75-.75V2.25c0-.41.34-.75.75-.75s.75.34.75.75V4c0 .41-.34.75-.75.75z"/>
  <path d="M17.79 18.12c-.41 0-.75-.34-.75-.75V8.95c0-.41.34-.75.75-.75 2.74 0 4.96 2.23 4.96 4.96s-2.23 4.96-4.96 4.96zm.75-8.34v6.76a3.464 3.464 0 000-6.76z"/>
  <path d="M17.51 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h15.51c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.79 10.47v7.32A4.21 4.21 0 0113.58 22H6.21C3.89 22 2 20.11 2 17.79v-7.32a4.21 4.21 0 014.21-4.21h7.37c2.32 0 4.21 1.89 4.21 4.21z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25" opacity=".34"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0122 13.16z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12h15.51" opacity=".34"/>`
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
