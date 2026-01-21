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
    content: `<path d="M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zM13.91 16.21c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62zM9.51 17.739c0-.34-.28-.61-.62-.61-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34-.01.62-.29.62-.63z"/>
  <path d="M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4zm-1.97 5.46v4.37c0 .02-.01.03-.01.05a2.122 2.122 0 01-2.11 2.07 2.121 2.121 0 010-4.24c.22 0 .42.04.62.1v-1.37l-3.52.96v3.34a2.121 2.121 0 01-4.24 0c0-1.17.95-2.12 2.12-2.12.22 0 .42.04.62.1v-3.5c0-.89.55-1.61 1.4-1.83l2.73-.75c.88-.23 1.42 0 1.73.24.3.23.66.7.66 1.59v.99z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 12c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-.83M16 4.5h2M6 4.5h7.17M9 2h6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.89 19.11a1.37 1.37 0 100-2.74 1.37 1.37 0 000 2.74z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.91 18.2a1.37 1.37 0 10-.001-2.74 1.37 1.37 0 000 2.74zM10.26 13.83l5.02-1.37"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4z" opacity=".4"/>
  <path d="M15.37 9.89c-.3-.24-.85-.47-1.73-.24l-2.73.75c-.85.22-1.4.94-1.4 1.83v3.5c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 000 4.24c1.17 0 2.12-.95 2.12-2.12v-3.34l3.52-.96v1.37c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 000 4.24c1.15 0 2.09-.92 2.11-2.07 0-.02.01-.03.01-.05v-5.35c0-.9-.36-1.37-.66-1.6zm-6.48 8.47c-.34 0-.62-.28-.62-.62a.621.621 0 011.24-.01c0 .35-.28.63-.62.63zm5.02-.91c-.34 0-.62-.28-.62-.62 0-.34.28-.62.62-.62.34 0 .62.28.62.62 0 .34-.28.62-.62.62z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5zM6 4.5h12M9 2h6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.89 19.11a1.37 1.37 0 100-2.74 1.37 1.37 0 000 2.74z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.91 18.2a1.37 1.37 0 100-2.74 1.37 1.37 0 000 2.74zM10.26 13.83l5.02-1.37"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17 22.75H7c-3.65 0-5.75-2.1-5.75-5.75v-5c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v5c0 3.65-2.1 5.75-5.75 5.75zm-10-15c-2.86 0-4.25 1.39-4.25 4.25v5c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-5c0-2.86-1.39-4.25-4.25-4.25H7zM18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M8.89 19.86a2.121 2.121 0 010-4.24 2.121 2.121 0 010 4.24zm0-2.74c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62z"/>
  <path d="M10.26 18.49c-.41 0-.75-.34-.75-.75v-5.51c0-.88.55-1.59 1.39-1.82l2.74-.75c.87-.24 1.42-.01 1.72.23.3.23.66.7.66 1.59v5.35c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.35c0-.28-.06-.39-.08-.4-.02-.01-.14-.05-.42.03l-2.73.75c-.25.07-.29.24-.29.38v5.51c.01.4-.33.74-.74.74z"/>
  <path d="M13.91 18.95a2.121 2.121 0 010-4.24 2.121 2.121 0 010 4.24zm0-2.74c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62zM10.26 14.58a.747.747 0 01-.19-1.47l5.01-1.37a.75.75 0 11.39 1.45l-5.01 1.37c-.07.01-.13.02-.2.02z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5zM6 4.5h12M9 2h6"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M8.89 19.11a1.37 1.37 0 100-2.74 1.37 1.37 0 000 2.74z"/>
    <path d="M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"/>
    <path d="M13.91 18.2a1.37 1.37 0 10-.001-2.74 1.37 1.37 0 000 2.74zM10.26 13.83l5.02-1.37"/>
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
