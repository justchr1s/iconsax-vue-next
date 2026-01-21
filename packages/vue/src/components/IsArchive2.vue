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
    content: `<path d="M22 5v2c0 1.83-.83 2.82-2.5 2.97-.16.02-.33.03-.5.03H5c-.17 0-.34-.01-.5-.03C2.83 9.82 2 8.83 2 7V5c0-2 1-3 3-3h14c2 0 3 1 3 3zM5.5 11.25c-.55 0-1 .45-1 1V19c0 2 .5 3 3 3h9c2.5 0 3-1 3-3v-6.75c0-.55-.45-1-1-1h-13zm8.32 4.5h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 13.01v-2.79M19.5 10.22V19c0 2-.5 3-3 3h-9c-2.5 0-3-1-3-3v-2.03M5 2h14c2 0 3 1 3 3v2c0 2-1 3-3 3H5c-2 0-3-1-3-3V5c0-2 1-3 3-3zM10.18 14h3.64"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z" opacity=".4"/>
  <path d="M19 15h-.25V7.75C18.75 6.23 17.52 5 16 5H8C6.48 5 5.25 6.23 5.25 7.75V15H5c-.41 0-.75.34-.75.75s.34.75.75.75h3.84C9.18 17.93 10.47 19 12 19c1.53 0 2.82-1.07 3.16-2.5H19c.41 0 .75-.34.75-.75S19.41 15 19 15zm-2.21-3.12a4.39 4.39 0 00-.19-.06c-.2-.04-.4-.07-.61-.07h-8c-.21 0-.41.03-.61.07-.06.01-.12.04-.19.06-.13.04-.26.08-.38.14-.03.01-.06.02-.08.03V11c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1.05c-.03-.01-.05-.02-.08-.03-.1-.06-.23-.1-.36-.14zM8 6.5h8c.69 0 1.25.56 1.25 1.25v.81c-.38-.19-.8-.31-1.25-.31H8c-.45 0-.87.12-1.25.31v-.81c0-.69.56-1.25 1.25-1.25zm6.5 8.5c-.41 0-.75.34-.75.75 0 .96-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75c0-.41-.34-.75-.75-.75H6.75v-.5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v.5H14.5z"/>`,
    isStroke: false
  },
  linear: null,
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.5 22.75h-9c-3.3 0-3.75-1.8-3.75-3.75v-8.78c0-.41.34-.75.75-.75s.75.34.75.75V19c0 1.74.3 2.25 2.25 2.25h9c1.95 0 2.25-.51 2.25-2.25v-8.78c0-.41.34-.75.75-.75s.75.34.75.75V19c0 1.95-.45 3.75-3.75 3.75z"/>
  <path d="M19 10.75H5c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h14c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75zm-14-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h14c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25H5zM13.82 14.75h-3.64c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.64c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: null
}

const currentVariant = computed(() => svgData[props.variant] || svgData.bold)
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
