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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM7.63 18.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07zm5.12 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15zm5.12 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22zm0-9.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.8a19.532 19.532 0 01-9.31 5.36c-.06.02-.12.02-.18.02-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91a18.07 18.07 0 008.75-5.11H14.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.93c.04 0 .07.02.11.02.05.01.1.01.15.03.05.02.09.05.14.08.03.02.06.03.09.05.01.01.01.02.02.02.04.04.07.08.1.12.03.04.06.07.07.11.02.04.02.08.03.13.01.05.03.1.03.16 0 .01.01.02.01.03v2.93h-.01z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-width="1.5" d="M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22M17.12 5.85l-.46.54a18.882 18.882 0 01-9.78 6.04"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.19 5.85h2.93v2.92"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M6.88 18.9c-.41 0-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07c0 .42-.34.75-.75.75zM12 18.9c-.41 0-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15c0 .42-.34.75-.75.75zM17.12 18.9c-.41 0-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22c0 .42-.33.75-.75.75zM17.871 5.82c0-.05-.02-.11-.03-.16l-.03-.13c-.02-.04-.05-.07-.07-.11-.03-.04-.06-.09-.1-.12-.01-.01-.01-.02-.02-.02-.03-.02-.06-.03-.09-.05a.638.638 0 00-.14-.08c-.05-.02-.1-.02-.15-.03-.04-.01-.07-.02-.11-.02h-2.93c-.41 0-.75.34-.75.75s.34.75.75.75h1.25c-2.38 2.5-5.38 4.26-8.75 5.11-.4.1-.65.51-.55.91.08.34.39.57.73.57.06 0 .12-.01.18-.02 3.57-.89 6.76-2.74 9.31-5.36v.97c0 .41.34.75.75.75s.75-.34.75-.75V5.85v-.03z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-width="1.5" d="M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22M17.12 5.85l-.46.54a18.882 18.882 0 01-9.78 6.04"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.19 5.85h2.93v2.92"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.88 18.9c-.41 0-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07c0 .42-.34.75-.75.75zM12 18.9c-.41 0-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15c0 .42-.34.75-.75.75zM17.12 18.9c-.41 0-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22c0 .42-.33.75-.75.75zM6.88 13.18c-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91 3.68-.92 6.92-2.93 9.39-5.8l.46-.54c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-.46.54a19.513 19.513 0 01-10.17 6.28c-.06.02-.12.02-.18.02z"/>
  <path d="M17.12 9.52c-.41 0-.75-.34-.75-.75V6.6h-2.18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.93c.41 0 .75.34.75.75v2.93c0 .41-.33.74-.75.74z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-width="1.5" d="M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22" opacity=".4"/>
  <g stroke-linecap="round" stroke-width="1.5" opacity=".4">
    <path d="M17.12 5.85l-.46.54a18.882 18.882 0 01-9.78 6.04"/>
    <path stroke-linejoin="round" d="M14.19 5.85h2.93v2.92"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
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
