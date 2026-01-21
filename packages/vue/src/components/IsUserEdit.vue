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
    content: `<path d="M12 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.17 4.51l-2.7 2.7c-.1.1-.31.2-.45.23l-1.03.14c-.38.05-.64-.21-.58-.58l.15-1.03c.02-.14.12-.35.23-.45l2.7-2.7c.46-.46 1.01-.68 1.69 0 .67.69.45 1.23-.01 1.69zM12 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.02 3.01A4.944 4.944 0 0012 2C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.21 15.74l-3.541 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01zM18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 12a5 5 0 100-10 5 5 0 000 10z"/>
  <path d="M12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5z" opacity=".4"/>
  <path d="M21.43 14.74c-.9-.9-1.61-.61-2.22 0l-3.541 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.62-.6.91-1.31.01-2.21z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12a5 5 0 100-10 5 5 0 000 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.21 15.74l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01zM18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 12.75c-3.17 0-5.75-2.58-5.75-5.75S8.83 1.25 12 1.25 17.75 3.83 17.75 7s-2.58 5.75-5.75 5.75zm0-10A4.26 4.26 0 007.75 7 4.26 4.26 0 0012 11.25 4.26 4.26 0 0016.25 7 4.26 4.26 0 0012 2.75zM15.82 22.75c-.38 0-.74-.14-1-.4-.31-.31-.45-.76-.38-1.23l.19-1.35c.05-.35.26-.76.51-1.02l3.54-3.54c1.42-1.42 2.67-.61 3.28 0 .52.52.79 1.08.79 1.64 0 .57-.26 1.1-.79 1.63l-3.54 3.54c-.25.25-.67.46-1.02.51l-1.35.19c-.08.02-.15.03-.23.03zm4.49-6.83c-.18 0-.34.12-.57.35l-3.54 3.54a.38.38 0 00-.08.17l-.18 1.25 1.25-.18c.04-.01.14-.06.17-.09l3.54-3.54c.16-.16.35-.39.35-.57 0-.15-.12-.36-.35-.58-.24-.24-.42-.35-.59-.35z"/>
  <path d="M20.92 19.22c-.07 0-.14-.01-.2-.03a3.977 3.977 0 01-2.74-2.74c-.11-.4.12-.81.52-.92.4-.11.81.12.92.52.23.82.88 1.47 1.7 1.7a.749.749 0 01-.2 1.47zM3.41 22.75c-.41 0-.75-.34-.75-.75 0-4.27 4.19-7.75 9.34-7.75 1.09 0 2.17.16 3.18.46.4.12.62.54.5.93-.12.4-.54.62-.93.5-.88-.26-1.8-.4-2.75-.4-4.32 0-7.84 2.8-7.84 6.25 0 .42-.34.76-.75.76z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12a5 5 0 100-10 5 5 0 000 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.211 15.74l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01zM18.7 16.25c.3 1.08 1.14 1.92 2.22 2.22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.41 22c0-3.87 3.85-7 8.59-7 1.04 0 2.04.15 2.97.43" opacity=".4"/>`,
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
