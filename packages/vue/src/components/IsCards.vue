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
    content: `<path d="M15.22 6.55H5.78c-.28 0-.54.01-.78.02-2.37.14-3 1.01-3 3.71v.58c0 .55.45 1 1 1h15c.55 0 1-.45 1-1v-.58c0-2.98-.76-3.73-3.78-3.73zM3 13.36c-.55 0-1 .45-1 1v2.91C2 20.25 2.76 21 5.78 21h9.44c2.97 0 3.75-.72 3.78-3.57v-3.07c0-.55-.45-1-1-1H3zm3.96 5.2H5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.72c.41 0 .75.34.75.75s-.34.75-.76.75zm5.59 0H9.11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.44a.749.749 0 110 1.5z"/>
  <path d="M22.002 13.332v-5.24c0-3.13-1.79-4.49-4.49-4.49h-8.93c-.76 0-1.44.11-2.04.34-.47.17-.89.42-1.23.75-.18.17-.04.45.22.45h10.87c2.25 0 4.07 1.82 4.07 4.07v7.17c0 .25.27.39.45.21.69-.73 1.08-1.8 1.08-3.26z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12.61h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.74 21H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73v7.15c-.03 2.85-.81 3.57-3.78 3.57"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 17.81h1.72M9.11 17.81h3.44"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73z" opacity=".4"/>
  <path d="M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73zM6.96 18.56H5.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.72a.749.749 0 110 1.5zM12.55 18.56H9.11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.44a.749.749 0 110 1.5z"/>
  <path d="M19 11.86H2v1.5h17v-1.5z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12.61h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 17.81h1.72M9.11 17.81h3.44"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M19 13.36H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M15.22 21.75H5.78c-3.43 0-4.53-1.09-4.53-4.48v-6.99c0-2.69.61-4.28 3.71-4.46.26-.01.53-.02.82-.02h9.44c3.43 0 4.53 1.09 4.53 4.48v7.15c-.04 3.27-1.14 4.32-4.53 4.32zM5.78 7.3c-.27 0-.52.01-.75.02-1.79.11-2.28.49-2.28 2.96v6.99c0 2.56.42 2.98 3.03 2.98h9.44c2.58 0 3-.4 3.03-2.83v-7.14c0-2.56-.42-2.98-3.03-2.98H5.78z"/>
  <path d="M19 18.18c-.19 0-.38-.07-.51-.2a.756.756 0 01-.24-.55v-7.15c0-2.56-.42-2.98-3.03-2.98H5.78c-.27 0-.52.01-.75.02-.2.01-.4-.07-.55-.21a.747.747 0 01-.23-.55c.04-3.26 1.14-4.31 4.53-4.31h9.44c3.43 0 4.53 1.09 4.53 4.48v6.99c0 2.69-.61 4.28-3.71 4.46H19zM5.78 5.8h9.44c3.43 0 4.53 1.09 4.53 4.48v6.32c1.16-.21 1.5-.81 1.5-2.88V6.73c0-2.56-.42-2.98-3.03-2.98H8.78c-2.28 0-2.87.31-3 2.05zM6.96 18.56H5.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.72a.749.749 0 110 1.5zM12.55 18.56H9.11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.44a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12.61h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 10.28v7.15c-.03 2.85-.81 3.57-3.78 3.57H5.78C2.76 21 2 20.25 2 17.27v-6.99c0-2.7.63-3.57 3-3.71.24-.01.5-.02.78-.02h9.44c3.02 0 3.78.75 3.78 3.73z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6.73v6.99c0 2.7-.63 3.57-3 3.71v-7.15c0-2.98-.76-3.73-3.78-3.73H5.78c-.28 0-.54.01-.78.02C5.03 3.72 5.81 3 8.78 3h9.44C21.24 3 22 3.75 22 6.73z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 17.81h1.72M9.11 17.81h3.44" opacity=".4"/>`,
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
