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
    content: `<path d="M2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1z"/>
  <path d="M18.01 2v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H17.5V4.01c0-.28.23-.51.51-.51V2zm0 0C16.9 2 16 2.9 16 4.01V11h3.42C21 11 22 10 22 8.42V6c0-1.1-.45-2.1-1.17-2.83A4.044 4.044 0 0018.01 2c.01 0 0 0 0 0z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 11v10c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z"/>
  <path d="M2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-.78 0-1.54-.4-2.06-1.1L8.93 20.3c-.21-.28-.49-.44-.79-.46-.3-.01-.6.12-.84.37l-.57-.51.55.51c-1.44 1.54-2.55 1.42-3.08 1.21-.54-.21-1.45-.9-1.45-3.12V7.04c0-4.44 1.28-5.79 5.47-5.79h7.56c4.19 0 5.47 1.35 5.47 5.79V18.3c0 2.21-.91 2.9-1.45 3.12-.53.21-1.63.33-3.08-1.21-.24-.26-.53-.4-.85-.37-.3.02-.59.18-.8.46l-1.01 1.35c-.52.7-1.28 1.1-2.06 1.1zm-3.92-4.42h.13c.74.04 1.44.43 1.91 1.06l1.01 1.35c.49.65 1.24.65 1.73 0l1.01-1.35c.48-.63 1.17-1.02 1.92-1.06.74-.04 1.48.27 2.02.85.76.81 1.26.91 1.43.84.24-.1.5-.68.5-1.72V7.04c0-3.61-.63-4.29-3.97-4.29H8.22c-3.34 0-3.97.68-3.97 4.29V18.3c0 1.05.26 1.63.5 1.72.17.07.67-.03 1.43-.84.54-.55 1.21-.85 1.9-.85z"/>
  <path d="M16 7.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75zM15 11.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2c1.09.01 2.09.45 2.81 1.17C21.55 3.9 22 4.9 22 6z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 7v14c0 .83.94 1.3 1.6.8l1.71-1.28c.4-.3.96-.26 1.32.1l1.66 1.67c.39.39 1.03.39 1.42 0l1.68-1.68c.35-.35.91-.39 1.3-.09l1.71 1.28c.66.49 1.6.02 1.6-.8V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6v1z"/>`,
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
