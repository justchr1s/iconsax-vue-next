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
    content: `<path d="M22 21.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>
  <path d="M17 2H7C4 2 3 3.79 3 6v16h6v-6.06c0-.52.42-.94.94-.94h4.13c.51 0 .94.42.94.94V22h6V6C21 3.79 20 2 17 2zm-2.5 7.25h-1.75V11c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.25H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V6c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 6c0-2.21-1-4-4-4H7C4 2 3 3.79 3 6v16h18V10.02M2 22h20"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 00-.93-.94zM12 6v5M9.5 8.5h5"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 21.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>
  <path d="M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4z" opacity=".4"/>
  <path d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 00-.93-.94zM14.5 7.75h-1.75V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H9.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75V11c0 .41.34.75.75.75s.75-.34.75-.75V9.25h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 00-.93-.94zM12 6v5M9.5 8.5h5"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M21 22.75H3c-.41 0-.75-.34-.75-.75V6c0-3.02 1.73-4.75 4.75-4.75h10c3.02 0 4.75 1.73 4.75 4.75v16c0 .41-.34.75-.75.75zm-17.25-1.5h16.5V6c0-2.22-1.03-3.25-3.25-3.25H7C4.78 2.75 3.75 3.78 3.75 6v15.25z"/>
  <path d="M15 22.75H9c-.41 0-.75-.34-.75-.75v-6.06c0-.93.76-1.69 1.69-1.69h4.13c.93 0 1.69.76 1.69 1.69V22a.77.77 0 01-.76.75zm-5.25-1.5h4.5v-5.31c0-.1-.08-.19-.19-.19H9.93c-.1 0-.19.08-.19.19v5.31h.01zM12 11.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75z"/>
  <path d="M14.5 9.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 00-.93-.94z" opacity=".4"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M12 6v5M9.5 8.5h5"/>
  </g>`
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
