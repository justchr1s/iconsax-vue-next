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
    content: `<path d="M21.69 2.71a.782.782 0 00-.41-.41.868.868 0 00-.28-.05h-9c-.41 0-.75.34-.75.75s.34.75.75.75h7.19L2.47 20.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L20.25 4.81V12c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.1-.02-.19-.06-.29z"/>
  <path d="M17.4 18.15c-.19 0-.38-.07-.53-.22L6.07 7.13a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l10.8 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3h9v9M8.03 15.97L3 21M21 3L10.91 13.09M6.6 6.6l10.8 10.8"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.69 2.71a.783.783 0 00-.41-.41.717.717 0 00-.29-.06h-9c-.41 0-.75.34-.75.75s.34.75.75.75h7.19L2.46 20.46c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22L20.24 4.8V12c0 .41.34.75.75.75s.75-.34.75-.75V3c.01-.1-.01-.19-.05-.29z"/>
  <path d="M17.4 18.15c-.19 0-.381-.07-.53-.22L6.07 7.13a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l10.799 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3h9v9M21 3L3 21M6.6 6.6l10.8 10.8"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 12.75c-.41 0-.75-.34-.75-.75V3.75H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75v9c0 .41-.34.75-.75.75z"/>
  <path d="M3 21.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06l18-18c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-18 18c-.15.15-.34.22-.53.22z"/>
  <path d="M17.4 18.15c-.19 0-.38-.07-.53-.22L6.07 7.13a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l10.8 10.8c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3h9v9M21 3L3 21"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.6 6.6l10.8 10.8" opacity=".4"/>`,
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
