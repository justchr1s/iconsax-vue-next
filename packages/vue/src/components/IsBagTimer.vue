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
    content: `<path d="M19.96 8.958c-.67-.74-1.68-1.17-3.08-1.32v-.76c0-1.37-.58-2.69-1.6-3.61a4.847 4.847 0 00-3.76-1.25c-2.39.23-4.4 2.54-4.4 5.04v.58c-1.4.15-2.41.58-3.08 1.32-.97 1.08-.94 2.52-.83 3.52l.7 5.57c.21 1.95 1 3.95 5.3 3.95h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.14-2.43-.83-3.51zm-8.3-5.55a3.482 3.482 0 013.83 3.47v.7H8.51v-.52c0-1.78 1.47-3.49 3.15-3.65zm.34 15.17c-2.09 0-3.79-1.7-3.79-3.79s1.7-3.79 3.79-3.79 3.79 1.7 3.79 3.79-1.7 3.79-3.79 3.79z"/>
  <path d="M11 16.578c-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.74.33.74.75v1.5c0 .26-.14.51-.36.64l-1.25.75c-.12.07-.26.11-.39.11z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 19a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.25 13.75v.93c0 .35-.18.68-.49.86L11 16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.81 16.56l.23 1.87C4.26 20.39 4.98 22 9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.19 8.86c-.39 0-.7-.31-.7-.7V6.88a3.482 3.482 0 00-3.83-3.47c-1.68.16-3.15 1.87-3.15 3.65v.9c0 .39-.31.7-.7.7-.39 0-.7-.31-.7-.7v-.9c0-2.5 2.02-4.81 4.41-5.04 1.39-.13 2.73.31 3.76 1.25 1.02.92 1.6 2.24 1.6 3.61v1.28c0 .39-.31.7-.69.7z" opacity=".4"/>
  <path d="M19.96 8.96c-.84-.93-2.22-1.38-4.24-1.38H8.28c-2.02 0-3.4.45-4.24 1.38-.97 1.08-.94 2.52-.83 3.52l.7 5.57C4.12 20 4.91 22 9.21 22h5.58c4.3 0 5.09-2 5.3-3.94l.7-5.59c.11-.99.14-2.43-.83-3.51zM12 18.58c-2.09 0-3.79-1.7-3.79-3.79S9.91 11 12 11s3.79 1.7 3.79 3.79-1.7 3.79-3.79 3.79z"/>
  <path d="M15.79 14.79c0 2.09-1.7 3.79-3.79 3.79s-3.79-1.7-3.79-3.79S9.91 11 12 11s3.79 1.7 3.79 3.79z" opacity=".4"/>
  <path d="M11 16.58c-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.74.33.74.75v1.5c0 .26-.14.51-.36.64l-1.25.75c-.12.07-.26.11-.39.11z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 19a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.25 13.75v.93c0 .35-.18.68-.49.86L11 16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22zM7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 19.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25-1.46-3.25-3.25-3.25z"/>
  <path d="M11 16.75c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.76-.46c.08-.05.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.33.75.74v.93c0 .61-.33 1.19-.85 1.5l-.77.46c-.11.08-.25.11-.38.11z"/>
  <path d="M15 22.75H9c-4.62 0-5.48-2.15-5.7-4.24l-.75-5.99c-.11-1.08-.15-2.63.9-3.79.9-1 2.39-1.48 4.55-1.48h8c2.17 0 3.66.49 4.55 1.48 1.04 1.16 1.01 2.71.9 3.77l-.75 6.01c-.22 2.09-1.08 4.24-5.7 4.24zm-7-14c-1.69 0-2.85.33-3.44.99-.49.54-.65 1.37-.52 2.61l.75 5.99c.17 1.6.61 2.92 4.21 2.92h6c3.6 0 4.04-1.31 4.21-2.9l.75-6.01c.13-1.22-.03-2.05-.52-2.6-.59-.67-1.75-1-3.44-1H8z"/>
  <path d="M16.5 8.63c-.41 0-.75-.34-.75-.75V6.5c0-1.05-.45-2.07-1.23-2.78a3.723 3.723 0 00-2.89-.95c-1.8.17-3.38 2.01-3.38 3.93v.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.98c0-2.69 2.17-5.17 4.74-5.42 1.5-.14 2.94.33 4.04 1.34a5.27 5.27 0 011.72 3.89v1.38c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 19a4 4 0 100-8 4 4 0 000 8z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.25 13.75v.93c0 .35-.18.68-.49.86L11 16" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38" opacity=".4"/>`,
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
