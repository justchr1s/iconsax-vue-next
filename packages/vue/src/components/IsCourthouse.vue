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
    content: `<path d="M22 21.251h-1.25v-10.25c0-2.42-1.33-3.75-3.75-3.75h-4.25v-1.23c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7v-3c0-.25-.12-.48-.33-.62a.76.76 0 00-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 00-.7.08c-.21.14-.33.37-.33.62v5.25H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-14.76 0H4.75v-8.5h2.49v8.5zm4 0h-2.5v-8.5h2.5v8.5zm4 0h-2.5v-8.5h2.5v8.5zm4.01 0h-2.51v-8.5h2.51v8.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2zM12 5v3M4 15.91V22h16V11c0-2-1-3-3-3H7c-2 0-3 1-3 3v1M4 12h15.42"/>
  <path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.99 12v10M11.99 12v10M15.99 12v10"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.42 1.38a.76.76 0 00-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 00-.7.08c-.21.14-.33.37-.33.62v6c0 .41.34.75.75.75s.75-.34.75-.75V6.02c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7V2c0-.25-.12-.48-.33-.62z" opacity=".4"/>
  <path d="M22 21.25h-1.25V11c0-2.42-1.33-3.75-3.75-3.75H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-2.75-8.5v8.5h-2.51v-8.5h2.51zm-8.01 8.5h-2.5v-8.5h2.5v8.5zm1.5-8.5h2.5v8.5h-2.5v-8.5zm-7.99 0h2.49v8.5H4.75v-8.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2zM12 5v3M17 8H7c-2 0-3 1-3 3v11h16V11c0-2-1-3-3-3zM4.58 12h14.84"/>
  <path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.99 12v10M11.99 12v10M15.99 12v10"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM14.5 6.23c-.94 0-1.88-.18-2.78-.54a.753.753 0 01-.47-.7v-3c0-.25.12-.48.33-.62a.76.76 0 01.7-.08c1.43.57 3.01.57 4.44 0a.76.76 0 01.7.08c.21.14.33.37.33.62v3c0 .31-.19.58-.47.7-.9.36-1.84.54-2.78.54zm-1.75-1.76c1.14.35 2.36.35 3.5 0V3.02c-1.15.28-2.35.28-3.5 0v1.45z"/>
  <path d="M12 8.75c-.41 0-.75-.34-.75-.75V5c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>
  <path d="M20 22.75H4c-.41 0-.75-.34-.75-.75V11c0-2.42 1.33-3.75 3.75-3.75h10c2.42 0 3.75 1.33 3.75 3.75v11c0 .41-.34.75-.75.75zm-15.25-1.5h14.5V11c0-1.58-.67-2.25-2.25-2.25H7c-1.58 0-2.25.67-2.25 2.25v10.25z"/>
  <path d="M19.42 12.75H4.58c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.84c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M8.74 12h-1.5v10h1.5V12zM12.74 12h-1.5v10h1.5V12zM16.74 12h-1.5v10h1.5V12z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2zM12 5v3M17 8H7c-2 0-3 1-3 3v11h16V11c0-2-1-3-3-3zM4.58 12h14.84"/>
  <path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.99 12v10M11.99 12v10M15.99 12v10" opacity=".4"/>`
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
