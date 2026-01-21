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
    content: `<path d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2zM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>
  <path d="M16 13.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.75v-6H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.75V18c0 1.52 1.23 2.75 2.75 2.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75H16z" opacity=".96"/>
  <path d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2zM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 5h7"/>
  <path fill="#fff" d="M12.5 16.36V18c0 1.1.9 2 2 2H16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.5 16.36V18c0 1.1.9 2 2 2H16M12.5 5v7.32M16 12.5h-3.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2zM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>
  <path d="M16 13.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.75v-6H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.75V18c0 1.52 1.23 2.75 2.75 2.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75H16z" opacity=".37"/>
  <path d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2zM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 5h7"/>
  <path fill="#fff" d="M12.5 5v13c0 1.1.9 2 2 2H16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.5 5v13c0 1.1.9 2 2 2H16M12.5 12.5H16"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M7 8.75H4C2.48 8.75 1.25 7.52 1.25 6V4c0-1.52 1.23-2.75 2.75-2.75h3c1.52 0 2.75 1.23 2.75 2.75v2c0 1.52-1.23 2.75-2.75 2.75zm-3-6c-.69 0-1.25.56-1.25 1.25v2c0 .69.56 1.25 1.25 1.25h3c.69 0 1.25-.56 1.25-1.25V4c0-.69-.56-1.25-1.25-1.25H4zM20.8 7.75h-3.6c-1.08 0-1.95-.88-1.95-1.95V4.2c0-1.08.88-1.95 1.95-1.95h3.6c1.08 0 1.95.88 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95zm-3.6-4c-.24 0-.45.21-.45.45v1.6c0 .24.21.45.45.45h3.6c.24 0 .45-.21.45-.45V4.2c0-.24-.21-.45-.45-.45h-3.6zM20.8 15.25h-3.6c-1.08 0-1.95-.88-1.95-1.95v-1.6c0-1.08.88-1.95 1.95-1.95h3.6c1.08 0 1.95.88 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95zm-3.6-4c-.24 0-.45.21-.45.45v1.6c0 .24.21.45.45.45h3.6c.24 0 .45-.21.45-.45v-1.6c0-.24-.21-.45-.45-.45h-3.6z"/>
  <path d="M16 5.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12.5 5v13c0 1.1.9 2 2 2H16"/>
  <path d="M16 20.75h-1.5c-1.52 0-2.75-1.23-2.75-2.75V5c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .69.56 1.25 1.25 1.25H16c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M16 13.25h-3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H16c.41 0 .75.34.75.75s-.34.75-.75.75zM20.8 22.75h-3.6c-1.08 0-1.95-.88-1.95-1.95v-1.6c0-1.08.88-1.95 1.95-1.95h3.6c1.08 0 1.95.88 1.95 1.95v1.6c0 1.08-.87 1.95-1.95 1.95zm-3.6-4c-.24 0-.45.21-.45.45v1.6c0 .24.21.45.45.45h3.6c.24 0 .45-.21.45-.45v-1.6c0-.24-.21-.45-.45-.45h-3.6z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2zM20.8 7h-3.6c-.66 0-1.2-.54-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2zM20.8 14.5h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>
  <g opacity=".4">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 5h7"/>
    <path fill="#fff" d="M12.5 5v13c0 1.1.9 2 2 2H16"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.5 5v13c0 1.1.9 2 2 2H16M12.5 12.5H16"/>
  </g>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.8 22h-3.6c-.66 0-1.2-.54-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2z"/>`,
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
