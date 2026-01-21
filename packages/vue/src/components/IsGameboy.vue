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
    content: `<path d="M17 2H7C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-6.14 16.14c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.65-.65-.62.62c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.62-.62-.59-.59a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.59.59.62-.62c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.62.62.65.65c.29.29.29.77 0 1.06zm3.63.35c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01zm2.02-2.16c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1zM18 9.25c0 .96-.79 1.75-1.75 1.75h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75zM10.3 15.28L8 17.58M8.03 15.31l2.3 2.3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16.49 15.33h.02M14.49 17.5v-.02"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 22H7c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4z" opacity=".4"/>
  <path d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75zM10.86 17.08l-.65-.65.62-.62c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0l-.62.62-.59-.59a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l.59.59-.62.62c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l.62-.62.65.65c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06zM16.51 16.33c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1zM14.49 18.49c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75zM10.3 15.28L8 17.58M8.03 15.31l2.3 2.3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16.49 15.33h.02M14.49 17.5v-.02"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8z"/>
  <path d="M16.25 11.75h-8.5a2.5 2.5 0 01-2.5-2.5v-2.5a2.5 2.5 0 012.5-2.5h8.5a2.5 2.5 0 012.5 2.5v2.5a2.5 2.5 0 01-2.5 2.5zm-8.5-6c-.55 0-1 .45-1 1v2.5c0 .55.45 1 1 1h8.5c.55 0 1-.45 1-1v-2.5c0-.55-.45-1-1-1h-8.5zM8 18.33c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3c-.15.15-.34.22-.53.22z"/>
  <path d="M10.33 18.36c-.19 0-.38-.07-.53-.22l-2.3-2.3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16.51 16.33c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1zM14.49 18.49c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M10.3 15.28L8 17.58M8.03 15.31l2.3 2.3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16.49 15.33h.02M14.49 17.5v-.02" opacity=".4"/>`
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
