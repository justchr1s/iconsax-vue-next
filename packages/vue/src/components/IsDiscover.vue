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
    content: `<path d="M20.98 3.02a3.43 3.43 0 00-3.29-.91l-9.8 2.45a4.56 4.56 0 00-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 003.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28zM12 15.88c-2.14 0-3.88-1.74-3.88-3.88 0-2.14 1.74-3.88 3.88-3.88 2.14 0 3.88 1.74 3.88 3.88 0 2.14-1.74 3.88-3.88 3.88z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.71 14.03c.8-.96 1.29-2.19 1.29-3.53C16 9.13 14.87 8 13.5 8 10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20.98 3.02a3.43 3.43 0 00-3.29-.91l-9.8 2.45a4.56 4.56 0 00-3.33 3.33L2.11 17.7c-.3 1.19.04 2.42.91 3.29.66.65 1.53 1.01 2.43 1.01.28 0 .57-.03.85-.11l9.81-2.45a4.56 4.56 0 003.33-3.33l2.45-9.81c.3-1.19-.04-2.42-.91-3.28z" opacity=".4"/>
  <path d="M12 15.88a3.88 3.88 0 100-7.76 3.88 3.88 0 000 7.76z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.5 8C10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5 3.02 0 5.5-2.48 5.5-5.5C16 9.13 14.87 8 13.5 8z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"/>
  <path d="M10.5 16.75c-1.79 0-3.25-1.46-3.25-3.25 0-3.45 2.8-6.25 6.25-6.25 1.79 0 3.25 1.46 3.25 3.25 0 3.45-2.8 6.25-6.25 6.25zm3-8c-2.62 0-4.75 2.13-4.75 4.75 0 .96.79 1.75 1.75 1.75 2.62 0 4.75-2.13 4.75-4.75 0-.96-.79-1.75-1.75-1.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.5 8C10.47 8 8 10.48 8 13.5c0 1.37 1.12 2.5 2.5 2.5 3.02 0 5.5-2.48 5.5-5.5C16 9.13 14.87 8 13.5 8z" opacity=".4"/>`
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
    :fill="variant === 'bold' || variant === 'bulk' ? color : 'none'"
    :stroke="variant === 'linear' || variant === 'outline' || variant === 'broken' || variant === 'twotone' ? color : undefined"
    v-html="currentVariant?.content"
  />
</template>
