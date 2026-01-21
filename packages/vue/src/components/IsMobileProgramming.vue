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
    content: `<path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 010-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L15.89 18l1.27 1.27zm4.32-.81l-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 010-.92L20.11 18l-1.27-1.27a.658.658 0 010-.92c.25-.25.66-.25.92 0l1.73 1.73c.24.26.24.66-.01.92z"/>
  <path d="M21 7v4.47c0 .35-.34.59-.66.47a6.485 6.485 0 00-3.65-.31c-2.6.52-4.67 2.65-5.1 5.27-.26 1.6.06 3.11.79 4.34a.5.5 0 01-.43.76H8c-3.5 0-5-2-5-5V7c0-2.66 1.18-4.53 3.89-4.92.29-.04.55.19.56.49l.03 1.01c.03 1.6 1.38 2.92 3 2.92h3.02c1.65 0 3-1.35 3-3v-.93c0-.3.26-.54.55-.5C19.8 2.44 21 4.32 21 7z"/>
  <path d="M15 3v.5c0 .82-.68 1.5-1.5 1.5h-3.03c-.81 0-1.48-.65-1.5-1.46l-.01-.51a.991.991 0 011-1.03H14c.55 0 1 .45 1 1z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.93 2l.03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 17l-2 2 2 2M20 17l2 2-2 2M3 12.98V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7M13 22H8c-3.5 0-5-2-5-5"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-.84 6.27c.25.25.25.66 0 .92-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19l-1.73-1.73a.658.658 0 010-.92l1.73-1.73c.25-.25.66-.25.92 0 .25.25.25.66 0 .92L15.89 18l1.27 1.27zm4.32-.81l-1.73 1.73c-.13.13-.29.19-.46.19-.17 0-.33-.06-.46-.19a.658.658 0 010-.92L20.1 18l-1.27-1.27a.658.658 0 010-.92c.25-.25.66-.25.92 0l1.73 1.73c.25.26.25.66 0 .92z"/>
  <path d="M21 7v7c-.83-.63-1.87-1-3-1-2.76 0-5 2.24-5 5 0 1.63.79 3.09 2 4H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h.93l.04 1.53c.02.81.69 1.47 1.5 1.47h3.03c.82 0 1.5-.68 1.5-1.5V2h1c3.5 0 5 2 5 5z" opacity=".4"/>
  <path d="M15 2v1.5c0 .82-.68 1.5-1.5 1.5h-3.03c-.81 0-1.48-.66-1.5-1.47L8.93 2H15z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.93 2l.03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 17l-2 2 2 2M20 17l2 2-2 2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13 22H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.5 5.75h-3.02c-1.22 0-2.23-.99-2.25-2.21L8.2 2.01c-.01-.41.32-.76.73-.77h.02c.41 0 .74.33.75.73l.03 1.53c.01.4.35.74.75.74h3.02c.42 0 .75-.34.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 1.24-1.01 2.25-2.25 2.25zM17 21.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L16.06 19l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM20 21.75c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06L20.94 19l-1.47-1.47a.755.755 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z"/>
  <path d="M13 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-2.86-1.39-4.25-4.25-4.25H8C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.93 2l.03 1.53c.02.81.69 1.47 1.5 1.47h3.02c.83 0 1.5-.68 1.5-1.5V2" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 17l-2 2 2 2M20 17l2 2-2 2" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13 22H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v7"/>`
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
