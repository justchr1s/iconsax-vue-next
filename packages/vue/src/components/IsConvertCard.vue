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
    content: `<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"/>
  <path d="M22 4.2v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2zM12.5 5.809c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9zM12 15.7v.11c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5v-.11c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2zM2.5 17.309c-.28 0-.5.22-.5.5v1.99c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-1.99c0-.28-.22-.5-.5-.5h-9z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 5.56h10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.65 10.5h-1.43c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 17.06h10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 22H4.22C2.44 22 2 21.56 2 19.8v-4.1c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path fill-rule="evenodd" d="M22 14.25a.75.75 0 01.75.75A7.745 7.745 0 0115 22.75a.75.75 0 01-.643-1.136l1.05-1.75a.75.75 0 111.286.772l-.271.452A6.246 6.246 0 0021.25 15a.75.75 0 01.75-.75zM7.578 2.912A6.246 6.246 0 002.75 9a.75.75 0 01-1.5 0A7.745 7.745 0 019 1.25a.75.75 0 01.643 1.136l-1.05 1.75a.75.75 0 01-1.286-.772l.271-.452z" clip-rule="evenodd" opacity=".4"/>
  <path d="M12 15.7v.61H2v-.61c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2z" opacity=".4"/>
  <path d="M2 16.31v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49H2z"/>
  <path d="M22 4.2v.61H12V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2z" opacity=".4"/>
  <path d="M12 4.81V8.3c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2V4.81H12z"/>`,
    isStroke: false
  },
  linear: null,
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 6.31H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10a.749.749 0 110 1.5z"/>
  <path d="M19.78 11.25h-5.55c-2.19 0-2.97-.77-2.97-2.95V4.2c0-2.18.78-2.95 2.97-2.95h5.55c2.19 0 2.97.77 2.97 2.95v4.11c0 2.17-.78 2.94-2.97 2.94zm-5.56-8.5c-1.36 0-1.47.11-1.47 1.45v4.11c0 1.34.11 1.45 1.47 1.45h5.55c1.36 0 1.47-.11 1.47-1.45V4.2c0-1.34-.11-1.45-1.47-1.45h-5.55zM12 17.81H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10a.749.749 0 110 1.5z"/>
  <path d="M9.78 22.75H4.23c-2.19 0-2.97-.77-2.97-2.95v-4.1c0-2.18.78-2.95 2.97-2.95h5.55c2.19 0 2.97.77 2.97 2.95v4.11c0 2.17-.78 2.94-2.97 2.94zm-5.56-8.5c-1.36 0-1.47.11-1.47 1.45v4.11c0 1.34.11 1.45 1.47 1.45h5.55c1.36 0 1.47-.11 1.47-1.45V15.7c0-1.34-.11-1.45-1.47-1.45H4.22zM15 22.75a.752.752 0 01-.64-1.14l1.05-1.75c.21-.35.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76zM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 01.64 1.14L8.59 4.14c-.21.35-.67.47-1.03.26a.749.749 0 01-.26-1.03l.27-.45c-2.76.65-4.83 3.13-4.83 6.09.01.4-.33.74-.74.74z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 5.56h10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.22 2h5.56C21.56 2 22 2.44 22 4.2v4.11c0 1.76-.44 2.2-2.22 2.2h-5.56c-1.78 0-2.22-.44-2.22-2.2V4.2c0-1.76.44-2.2 2.22-2.2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 17.06h10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.22 13.5h5.56c1.78 0 2.22.44 2.22 2.2v4.11c0 1.76-.44 2.2-2.22 2.2H4.22c-1.78 0-2.22-.44-2.22-2.2V15.7c0-1.76.44-2.2 2.22-2.2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75" opacity=".4"/>`,
    isStroke: true
  }
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
