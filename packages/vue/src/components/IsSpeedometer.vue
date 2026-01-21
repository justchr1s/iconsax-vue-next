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
    content: `<path d="M19.14 20.25c-.19 0-.38-.07-.53-.21-.3-.29-.3-.76-.01-1.06a9.188 9.188 0 002.65-6.48c0-5.1-4.15-9.25-9.25-9.25S2.75 7.4 2.75 12.5c0 2.43.93 4.72 2.63 6.46.29.3.28.77-.01 1.06-.3.29-.77.28-1.06-.01a10.709 10.709 0 01-3.06-7.51C1.25 6.57 6.07 1.75 12 1.75S22.75 6.57 22.75 12.5c0 2.83-1.09 5.51-3.08 7.53-.14.15-.34.22-.53.22z"/>
  <path d="M12 21.998a3.88 3.88 0 100-7.76 3.88 3.88 0 000 7.76zM16 8.5c-1.1 0-2 .9-2 2v.75c0 .69.56 1.25 1.25 1.25H16c1.1 0 2-.9 2-2s-.9-2-2-2z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.84 19.48A9.966 9.966 0 012 12.49C2 8.8 4 5.58 6.97 3.84c.31-.18.63-.35.97-.49M19.14 19.5a9.964 9.964 0 002.86-7c0-5.52-4.48-10-10-10M8.62 18.12c0 1.86 1.51 3.38 3.38 3.38 1.87 0 3.38-1.51 3.38-3.38 0-1.87-1.51-3.38-3.38-3.38a3.38 3.38 0 00-3.38 3.38z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.1 20.3c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1 1.7-1.7 2.6-4 2.6-6.5 0-5.1-4.1-9.2-9.2-9.2s-9.2 4.1-9.2 9.2c0 2.4.9 4.7 2.6 6.5.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0-2-2-3.1-4.7-3.1-7.5 0-6 4.9-10.9 10.8-10.9s10.8 4.8 10.8 10.8c0 2.8-1.1 5.5-3.1 7.5-.2.2-.4.3-.6.3z" opacity=".4"/>
  <path d="M12 22a3.9 3.9 0 100-7.8 3.9 3.9 0 000 7.8zM16 8.5c-1.1 0-2 .9-2 2v.8c0 .7.6 1.2 1.2 1.2h.8c1.1 0 2-.9 2-2s-.9-2-2-2z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.14 19.5a9.964 9.964 0 002.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.5a3.38 3.38 0 100-6.76 3.38 3.38 0 000 6.76zM15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.14 20.25c-.19 0-.38-.07-.53-.21-.3-.29-.3-.76-.01-1.06a9.188 9.188 0 002.65-6.48c0-5.1-4.15-9.25-9.25-9.25S2.75 7.4 2.75 12.5c0 2.43.93 4.72 2.63 6.46.29.3.28.77-.01 1.06-.3.29-.77.28-1.06-.01a10.709 10.709 0 01-3.06-7.51C1.25 6.57 6.07 1.75 12 1.75S22.75 6.57 22.75 12.5c0 2.83-1.09 5.51-3.08 7.53-.14.15-.34.22-.53.22z"/>
  <path d="M11.999 22.25c-2.27 0-4.12-1.85-4.12-4.12S9.729 14 11.999 14s4.12 1.85 4.12 4.12-1.85 4.13-4.12 4.13zm0-6.75c-1.45 0-2.62 1.18-2.62 2.62 0 1.44 1.18 2.62 2.62 2.62 1.44 0 2.62-1.18 2.62-2.62 0-1.44-1.17-2.62-2.62-2.62zM16 12.75h-.75c-.83 0-1.5-.67-1.5-1.5v-.75c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zm0-3c-.41 0-.75.34-.75.75v.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.14 19.5a9.964 9.964 0 002.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 21.5a3.38 3.38 0 100-6.76 3.38 3.38 0 000 6.76zM15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75z"/>`,
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
