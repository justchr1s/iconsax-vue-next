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
    content: `<path d="M16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25v4.5C22 20.5 20.5 22 16.75 22zM2.75 10.5c.41 0 .75-.34.75-.75 0-2.96 2.06-5.44 4.83-6.09l-.27.45c-.21.36-.1.82.26 1.03.36.21.82.1 1.03-.26l1.05-1.75c.14-.23.14-.52.01-.75A.781.781 0 009.75 2C5.48 2 2 5.48 2 9.75c0 .41.34.75.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 16.75C22 20.5 20.5 22 16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25M2 9c0-3.87 3.13-7 7-7L7.95 3.75"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z" opacity=".4"/>
  <path d="M12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-3.11 2.48-5.64 5.56-5.75l-.37-.43a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l1.66 1.9c.02.02.03.04.05.06.04.06.08.13.1.2l.03.12c.02.09.01.19-.01.28-.02.08-.05.16-.09.24-.01.02-.03.04-.04.06-.04.06-.1.11-.16.15 0 0-.01 0-.01.01l-1.94 1.42a.76.76 0 01-1.05-.16c-.24-.33-.17-.8.16-1.05l.41-.3c-2.2.16-3.94 2-3.94 4.24a4.26 4.26 0 004.25 4.25 4.26 4.26 0 004.25-4.25 4.3 4.3 0 00-.71-2.36.746.746 0 01.21-1.04c.35-.23.81-.14 1.04.21.63.95.97 2.05.97 3.19 0 3.17-2.58 5.75-5.75 5.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25v4.5C22 20.5 20.5 22 16.75 22zM2 9c0-3.87 3.13-7 7-7L7.95 3.75"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.75 22.75h-4.5c-4.15 0-6-1.85-6-6v-4.5c0-4.15 1.85-6 6-6h4.5c4.15 0 6 1.85 6 6v4.5c0 4.15-1.85 6-6 6zm-4.5-15c-3.32 0-4.5 1.18-4.5 4.5v4.5c0 3.32 1.18 4.5 4.5 4.5h4.5c3.32 0 4.5-1.18 4.5-4.5v-4.5c0-3.32-1.18-4.5-4.5-4.5h-4.5zM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.745.745 0 01.64 1.13L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 01-.25-1.03l.27-.45A6.261 6.261 0 002.75 9c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25v4.5C22 20.5 20.5 22 16.75 22z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9c0-3.87 3.13-7 7-7L7.95 3.75" opacity=".4"/>`,
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
