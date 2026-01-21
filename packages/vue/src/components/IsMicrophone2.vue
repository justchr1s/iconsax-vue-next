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
    content: `<path d="M19.12 9.12c-.39 0-.7.31-.7.7v1.58c0 3.54-2.88 6.42-6.42 6.42s-6.42-2.88-6.42-6.42V9.81c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v1.58c0 4.07 3.13 7.42 7.12 7.78v2.13c0 .39.31.7.7.7.39 0 .7-.31.7-.7v-2.13c3.98-.35 7.12-3.71 7.12-7.78V9.81a.707.707 0 00-.7-.69z"/>
  <path d="M11.998 2c-2.44 0-4.42 1.98-4.42 4.42v5.12c0 2.44 1.98 4.42 4.42 4.42s4.42-1.98 4.42-4.42V6.42c0-2.44-1.98-4.42-4.42-4.42zm1.31 6.95c-.07.26-.3.43-.56.43-.05 0-.1-.01-.15-.02-.39-.11-.8-.11-1.19 0-.32.09-.63-.1-.71-.41-.09-.31.1-.63.41-.71.59-.16 1.21-.16 1.8 0 .3.08.48.4.4.71zm.53-1.94a.58.58 0 01-.55.38c-.07 0-.13-.01-.2-.03-.7-.26-1.48-.26-2.18 0a.59.59 0 01-.75-.35c-.11-.3.05-.64.35-.74a4.36 4.36 0 012.98 0c.3.11.46.44.35.74z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10.02v1.48c0 2.21 1.79 4 4 4s4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0M12 19v3"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.12 9.12c-.39 0-.7.31-.7.7v1.58c0 3.54-2.88 6.42-6.42 6.42s-6.42-2.88-6.42-6.42V9.81c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v1.58c0 4.07 3.13 7.42 7.12 7.78v2.13c0 .39.31.7.7.7.39 0 .7-.31.7-.7v-2.13c3.98-.35 7.12-3.71 7.12-7.78V9.81a.707.707 0 00-.7-.69z" opacity=".4"/>
  <path d="M12 2C9.56 2 7.58 3.98 7.58 6.42v5.12c0 2.44 1.98 4.42 4.42 4.42s4.42-1.98 4.42-4.42V6.42C16.42 3.98 14.44 2 12 2zm1.31 6.95c-.07.26-.3.43-.56.43-.05 0-.1-.01-.15-.02-.39-.11-.8-.11-1.19 0-.32.09-.63-.1-.71-.41-.09-.31.1-.63.41-.71.59-.16 1.21-.16 1.8 0 .3.08.48.4.4.71zm.53-1.94a.58.58 0 01-.55.38c-.07 0-.13-.01-.2-.03-.7-.26-1.48-.26-2.18 0a.59.59 0 01-.75-.35c-.11-.3.05-.64.35-.74a4.36 4.36 0 012.98 0c.3.11.46.44.35.74z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5.5c0 2.21 1.79 4 4 4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0M12 19v3"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 16.25c-2.62 0-4.75-2.13-4.75-4.75V6c0-2.62 2.13-4.75 4.75-4.75S16.75 3.38 16.75 6v5.5c0 2.62-2.13 4.75-4.75 4.75zm0-13.5c-1.79 0-3.25 1.46-3.25 3.25v5.5c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25V6c0-1.79-1.46-3.25-3.25-3.25z"/>
  <path d="M12 19.75c-4.63 0-8.4-3.77-8.4-8.4v-1.7c0-.41.34-.75.75-.75s.75.34.75.75v1.7c0 3.8 3.1 6.9 6.9 6.9 3.8 0 6.9-3.1 6.9-6.9v-1.7c0-.41.34-.75.75-.75s.75.34.75.75v1.7c0 4.63-3.77 8.4-8.4 8.4zM13.39 7.18c-.08 0-.17-.01-.26-.04-.73-.27-1.53-.27-2.26 0a.75.75 0 11-.51-1.41 4.89 4.89 0 013.29 0c.39.14.59.57.45.96-.12.3-.41.49-.71.49z"/>
  <path d="M12.8 9.3c-.07 0-.13-.01-.2-.03-.4-.11-.81-.11-1.21 0a.75.75 0 01-.92-.53c-.11-.39.13-.8.53-.91.65-.18 1.35-.18 2 0 .4.11.64.52.53.92-.09.33-.4.55-.73.55zM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5.5c0 2.21 1.79 4 4 4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0" opacity=".4"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M12 19v3"/>
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
