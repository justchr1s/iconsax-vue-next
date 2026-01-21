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
    content: `<path d="M19.801 12.001h-15.6c-.22 0-.42-.15-.49-.36-2.75-9.09 11.13-12.58 12.74-2.82 1.66.21 2.97 1.15 3.78 2.41.21.33-.04.77-.43.77zM20 15.781H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.781H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 21.781H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12M14.541 8.93c.52-.26 1.09-.4 1.67-.41M18 15.03h2M4 15.03h11M6 18.03h12M9 21.03h6"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M19.799 12h-15.6c-.22 0-.42-.15-.49-.36C.96 2.55 14.84-.94 16.44 8.82c1.66.21 2.97 1.15 3.78 2.41.22.33-.03.77-.42.77z"/>
  <path d="M20 15.78H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.78H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 21.78H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12M14.54 8.93c.52-.26 1.09-.4 1.67-.41M4 15.03h16M6 18.03h12M9 21.03h6"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M4.29 12.37a.75.75 0 01-.71-.5c-1.01-2.82-.55-5.53 1.26-7.42 1.85-1.94 4.81-2.71 7.37-1.92 2.34.72 3.99 2.65 4.59 5.33 1.8.41 3.31 1.67 4.08 3.47a.76.76 0 01-.39.99.76.76 0 01-.99-.39c-.65-1.5-1.9-2.47-3.44-2.67a.753.753 0 01-.65-.62c-.4-2.4-1.7-4.06-3.65-4.66-2.02-.62-4.37-.01-5.84 1.52-1.43 1.49-1.76 3.58-.94 5.88a.75.75 0 01-.45.96c-.07.01-.16.03-.24.03z"/>
  <path d="M14.54 9.68c-.28 0-.54-.15-.67-.42a.754.754 0 01.34-1.01c.63-.31 1.3-.48 1.99-.49.43.02.76.32.76.74.01.41-.32.76-.74.76-.47.01-.92.12-1.35.33a.59.59 0 01-.33.09zM20 15.78H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.78H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 21.78H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.29 11.62C1.09 2.69 14.62-.87 16.17 8.5c1.93.24 3.34 1.52 4.03 3.12M14.541 8.93c.52-.26 1.09-.4 1.67-.41"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 15.03h16" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 18.03h12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 21.03h6" opacity=".4"/>`
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
