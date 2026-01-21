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
    content: `<path d="M10.6 4.15c0 .19-.16.35-.35.35H9.12C6.96 4.5 5.2 6.26 5.2 8.42v9.23c0 .19-.16.35-.35.35h-.7C2.96 18 2 17.04 2 15.85V4.15C2 2.96 2.96 2 4.15 2h4.3c1.19 0 2.15.96 2.15 2.15zM22 4.15v11.7c0 1.19-.96 2.15-2.15 2.15h-.63c-.19 0-.35-.16-.35-.35V8.42c0-2.16-1.76-3.92-3.92-3.92h-1.2c-.19 0-.35-.16-.35-.35 0-1.19.96-2.15 2.15-2.15h4.3C21.04 2 22 2.96 22 4.15z"/>
  <path d="M14.95 6H9.12C7.78 6 6.7 7.08 6.7 8.42v11.16C6.7 20.92 7.78 22 9.12 22h1.63c.28 0 .5-.22.5-.5V19c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .28.22.5.5.5h1.71c1.33 0 2.41-1.08 2.41-2.41V8.42c0-1.34-1.08-2.42-2.42-2.42zM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6M6.7 18H4.15C2.72 18 2 17.28 2 15.85V8.04"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4M10 14h4M12 22v-3"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.6 4.15V6H9.12C7.51 6 6.7 6.81 6.7 8.42V18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15z"/>
  <path d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42z" opacity=".4"/>
  <path d="M22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48V8.42c0-1.61-.8-2.42-2.41-2.42H13.4V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15zM14 11.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM12.75 19v3h-1.5v-3c0-.41.34-.75.75-.75s.75.34.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.7 18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4M10 14h4M12 22v-3"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M6.7 18.75H4.15c-1.84 0-2.9-1.06-2.9-2.9V4.15c0-1.84 1.06-2.9 2.9-2.9h4.3c1.84 0 2.9 1.06 2.9 2.9V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.15c0-1.02-.38-1.4-1.4-1.4h-4.3c-1.02 0-1.4.38-1.4 1.4v11.7c0 1.02.38 1.4 1.4 1.4H6.7c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M14.96 22.75H9.12c-2.01 0-3.17-1.16-3.17-3.17V8.42c0-2.01 1.16-3.17 3.17-3.17h5.84c2.01 0 3.16 1.16 3.16 3.17v11.16c0 2.01-1.15 3.17-3.16 3.17zm-5.84-16c-1.2 0-1.67.47-1.67 1.67v11.16c0 1.2.47 1.67 1.67 1.67h5.84c1.19 0 1.66-.47 1.66-1.67V8.42c0-1.2-.47-1.67-1.66-1.67H9.12z"/>
  <path d="M19.85 18.75h-2.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.48c1.02 0 1.4-.38 1.4-1.4V4.15c0-1.02-.38-1.4-1.4-1.4h-4.3c-1.02 0-1.4.38-1.4 1.4V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.15c0-1.84 1.06-2.9 2.9-2.9h4.3c1.84 0 2.9 1.06 2.9 2.9v11.7c0 1.84-1.06 2.9-2.9 2.9z"/>
  <path d="M14 11.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75zM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.7 18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4M10 14h4" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 22v-3"/>`
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
