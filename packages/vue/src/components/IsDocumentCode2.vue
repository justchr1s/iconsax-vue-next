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
    content: `<path d="M16 2H8C4.5 2 3 4 3 7v4.47c0 .35.34.59.66.47a6.45 6.45 0 013.64-.31c2.6.52 4.67 2.66 5.1 5.27.26 1.59-.06 3.1-.79 4.35-.2.33.04.75.43.75H16c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5zm2.5 7.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M6 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 010-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L3.89 18l1.27 1.27zm4.32-.81l-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 010-.92L8.11 18l-1.27-1.27a.658.658 0 010-.92c.25-.25.66-.25.92 0l1.73 1.73c.24.26.24.66-.01.92z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M21 13.03V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7M11 22h5c3.5 0 5-2 5-5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2M7 17l2 2-2 2"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 7v10c0 3-1.5 5-5 5H9c1.21-.91 2-2.37 2-4 0-2.76-2.24-5-5-5-1.13 0-2.17.37-3 1V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5z" opacity=".4"/>
  <path fill-rule="evenodd" d="M14.5 3.75a.75.75 0 01.75.75v2c0 .686.564 1.25 1.25 1.25h2a.75.75 0 010 1.5h-2a2.756 2.756 0 01-2.75-2.75v-2a.75.75 0 01.75-.75z" clip-rule="evenodd"/>
  <path d="M6 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 010-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L3.89 18l1.27 1.27zm4.32-.81l-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 010-.92L8.1 18l-1.27-1.27a.658.658 0 010-.92c.25-.25.66-.25.92 0l1.73 1.73c.25.26.25.66 0 .92z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2M7 17l2 2-2 2"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16 22.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8C5.14 2.75 3.75 4.14 3.75 7v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75z"/>
  <path d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75zM4 21.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.06 19l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM7 21.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L7.94 19l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M11 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2M7 17l2 2-2 2" opacity=".4"/>`
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
