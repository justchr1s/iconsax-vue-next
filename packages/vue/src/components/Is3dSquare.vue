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
    content: `<path d="M16.19 2.328H7.81C4.17 2.328 2 4.508 2 8.148v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81v-8.37c.01-3.64-2.16-5.82-5.8-5.82zm-4.62 14.79c0 .3-.15.57-.41.73-.14.09-.29.13-.45.13-.13 0-.26-.03-.39-.09l-3.5-1.75c-.5-.26-.82-.77-.82-1.34v-3.31a.867.867 0 011.25-.77l3.5 1.75c.51.26.83.77.83 1.34v3.31h-.01zm-.21-5.35L7.6 9.738a.87.87 0 01-.44-.77c0-.32.17-.62.44-.77l3.76-2.03c.4-.21.87-.21 1.27 0l3.76 2.03c.27.15.44.44.44.77s-.17.62-.44.77l-3.76 2.03c-.2.11-.42.16-.64.16-.22 0-.43-.05-.63-.16zm6.64 3.03c0 .57-.32 1.09-.83 1.34l-3.5 1.75a.86.86 0 01-.39.09c-.16 0-.31-.04-.45-.13a.847.847 0 01-.41-.73v-3.31c0-.57.32-1.09.83-1.34l3.5-1.75a.867.867 0 011.25.77v3.31z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14v1c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.701 9.26l5.3 3.07 5.26-3.05M12.002 17.77v-5.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.38-1.81-.38-2.49.01z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2.33H7.82c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V8.15c0-3.64-2.17-5.82-5.81-5.82z" opacity=".4"/>
  <path d="M16.4 8.21l-3.76-2.03c-.4-.21-.87-.21-1.27 0L7.61 8.21a.87.87 0 00-.44.77c0 .33.17.62.44.77l3.76 2.03c.2.11.42.16.64.16.22 0 .44-.05.64-.16l3.76-2.03a.87.87 0 00.44-.77.9.9 0 00-.45-.77zM10.74 12.47l-3.5-1.75a.867.867 0 00-.84.04c-.26.16-.41.43-.41.73v3.31c0 .57.32 1.09.83 1.34l3.5 1.75c.12.06.25.09.39.09.16 0 .31-.04.45-.13.26-.16.41-.43.41-.73v-3.31c0-.57-.31-1.08-.83-1.34zM17.59 10.76a.867.867 0 00-.84-.04l-3.5 1.75a1.5 1.5 0 00-.83 1.34v3.31c0 .3.15.57.41.73.14.09.29.13.45.13.13 0 .26-.03.39-.09l3.5-1.75c.51-.26.83-.77.83-1.34v-3.31c0-.3-.15-.57-.41-.73z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.38-1.81-.38-2.49.01z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>
  <path d="M12 13.08c-.13 0-.26-.03-.38-.1l-5.3-3.06a.742.742 0 01-.27-1.02c.21-.36.67-.48 1.02-.27l4.92 2.85 4.89-2.83c.36-.21.82-.08 1.02.27.2.35.08.82-.27 1.02l-5.26 3.04c-.11.06-.24.1-.37.1z"/>
  <path d="M12 18.52c-.41 0-.75-.34-.75-.75v-5.44c0-.41.34-.75.75-.75s.75.34.75.75v5.44c0 .41-.34.75-.75.75z"/>
  <path d="M12 18.75c-.58 0-1.15-.13-1.61-.38l-3.2-1.78c-.96-.53-1.7-1.8-1.7-2.9V10.3c0-1.09.75-2.36 1.7-2.9l3.2-1.78c.92-.51 2.3-.51 3.22 0l3.2 1.78c.96.53 1.7 1.8 1.7 2.9v3.39c0 1.09-.75 2.36-1.7 2.9l-3.2 1.78c-.46.26-1.03.38-1.61.38zm0-12c-.33 0-.65.06-.88.19l-3.2 1.78c-.49.27-.93 1.03-.93 1.58v3.39c0 .56.44 1.31.93 1.58l3.2 1.78c.46.26 1.3.26 1.76 0l3.2-1.78c.49-.27.93-1.03.93-1.58V10.3c0-.56-.44-1.31-.93-1.58l-3.2-1.78c-.23-.13-.55-.19-.88-.19z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.38-1.81-.38-2.49.01z"/>`,
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
