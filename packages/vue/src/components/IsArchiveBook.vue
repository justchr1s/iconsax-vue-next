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
    content: `<path d="M14.93 2.5v5.9c0 .44-.52.66-.84.37l-1.75-1.61a.496.496 0 00-.68 0l-1.75 1.6c-.32.3-.84.07-.84-.36V2.5c0-.28.22-.5.5-.5h4.86c.28 0 .5.22.5.5z"/>
  <path d="M16.98 2.059c-.29-.04-.55.21-.55.5v6.02c0 .76-.45 1.45-1.15 1.76-.7.3-1.51.17-2.07-.35l-.87-.8a.496.496 0 00-.68 0l-.87.8c-.36.34-.83.51-1.3.51a1.9 1.9 0 01-.77-.16c-.7-.31-1.15-1-1.15-1.76v-6.02c0-.29-.26-.54-.55-.5-2.8.35-4.02 2.24-4.02 4.94v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-10c0-2.7-1.22-4.59-4.02-4.94zm.52 16.69H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-4h-4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3 7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.05"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.5 5.99v3.87c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 00-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2h7M13.25 14h4.25M9 18h8.5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z" opacity=".4"/>
  <path d="M15.5 2v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 00-.68 0l-2.32 2.14a.5.5 0 01-.84-.37V2h7zM17.5 14.75h-4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75zM17.5 18.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.5 2v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 00-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2h7zM13.25 14h4.25M9 18h8.5"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8z"/>
  <path d="M9 11.11a1.244 1.244 0 01-1.25-1.24V2c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75v7.86c0 .5-.29.95-.75 1.14-.45.2-.98.11-1.35-.23L12 8.8l-2.15 1.98c-.24.22-.54.33-.85.33zm3-3.9c.3 0 .61.11.85.33l1.9 1.75V2.75h-5.5v6.54l1.9-1.75c.24-.22.55-.33.85-.33zM17.5 14.75h-4.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.25c.41 0 .75.34.75.75s-.34.75-.75.75zM17.5 18.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.5 2v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 00-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2h7zM13.25 14h4.25M9 18h8.5" opacity=".4"/>`,
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
