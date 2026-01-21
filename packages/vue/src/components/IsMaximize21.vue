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
    content: `<path d="M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15z"/>
  <path d="M16.48 2H8.52C5.47 2 3 4.47 3 7.52v2.98c0 .55.45 1 1 1h4.5c2.21 0 4 1.79 4 4V20c0 .55.45 1 1 1h2.98c3.45 0 5.52-2.06 5.52-5.52V7.52C22 4.47 19.53 2 16.48 2zm2.28 7.99c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2l-3.73 3.74c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3.73-3.75H14c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h4.01c.09 0 .18.03.26.06.03.01.05.02.07.03.06.03.11.06.16.11.02.01.04.03.06.05.05.06.09.12.13.19 0 .01.01.02.01.03.04.08.05.17.05.26.01.01.01.01.01.02v4.02z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 11l5.01-5.02H14M18.01 5.98v4.01M2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15v2.7C11 21.1 10.1 22 7.85 22h-2.7"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68z" opacity=".4"/>
  <path d="M18 10.75c.41 0 .75-.34.75-.75V6c0-.1-.02-.19-.06-.29a.782.782 0 00-.41-.41.868.868 0 00-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19L12 10.94 7.81 6.75H10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H6c-.1 0-.19.02-.29.06-.18.07-.33.22-.4.4-.04.1-.06.19-.06.29v4c0 .41.34.75.75.75s.75-.34.75-.75V7.81L10.94 12l-4.19 4.19V14c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H7.81L12 13.06l4.19 4.19H14c-.41 0-.75.34-.75.75s.34.75.75.75h4c.1 0 .2-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29v-4c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.19L13.06 12l4.19-4.19V10c0 .41.34.75.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.89 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75zM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.36 5.25 5.25V9c0 .41-.34.75-.75.75zM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.89-2.36 5.25-5.25 5.25zM9 22.75H6.5c-2.89 0-5.25-2.36-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 2h2.5C19.99 2 22 4.01 22 6.5V9" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" opacity=".4"/>`,
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
