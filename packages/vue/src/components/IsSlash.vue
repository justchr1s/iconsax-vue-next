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
    content: `<path d="M19.53 5.53l-14 14c-.02.02-.03.03-.05.04-.38-.32-.73-.67-1.05-1.05A9.903 9.903 0 012 12C2 6.48 6.48 2 12 2c2.49 0 4.77.91 6.52 2.43.38.32.73.67 1.05 1.05-.01.02-.02.03-.04.05zM22 12c0 5.49-4.51 10-10 10-1.5 0-2.92-.33-4.2-.93-.62-.29-.74-1.12-.26-1.61L19.46 7.54c.48-.48 1.32-.36 1.61.26.6 1.27.93 2.7.93 4.2z"/>
  <path d="M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 001.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.9 5l-14 14"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.53 5.53l-14 14c-.02.02-.03.03-.05.04-.38-.32-.73-.67-1.05-1.05A9.903 9.903 0 012 12C2 6.48 6.48 2 12 2c2.49 0 4.77.91 6.52 2.43.38.32.73.67 1.05 1.05-.01.02-.02.03-.04.05zM22 12c0 5.52-4.48 10-10 10-1.99 0-3.84-.58-5.4-1.6L20.4 6.6A9.815 9.815 0 0122 12z" opacity=".4"/>
  <path d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 001.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zM18.9 5l-14 14"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M4.9 19.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l14-14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-14 14c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18.9 5l-14 14" opacity=".34"/>`,
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
