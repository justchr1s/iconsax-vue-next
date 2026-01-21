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
    content: `<path d="M17 4H7C4 4 2 5.5 2 9v3.56c0 .37.38.6.71.45.98-.45 2.11-.62 3.3-.41 2.63.47 4.56 2.91 4.49 5.58-.01.42-.07.83-.18 1.23-.08.31.17.6.49.6H17c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5zm-5 10.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm7.25-.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4z"/>
  <path d="M5 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 005 22c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4zm1.49 4.73h-.74v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78h-.74c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.74v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74a.749.749 0 110 1.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 13.14V15c0 3.5-2 5-5 5H8.5M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 12a2.5 2.5 0 00-5 0 2.5 2.5 0 002.5 2.5M18.5 9.5v5M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 015 22a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 011 18c0-2.21 1.79-4 4-4s4 1.79 4 4zM6.49 17.98H3.51M5 16.52v2.99"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 9v6c0 3.5-2 5-5 5H8.45c.35-.59.55-1.27.55-2 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5z" opacity=".4"/>
  <path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75zM5 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 005 22c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4zm1.49 4.73h-.74v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78h-.74c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.74v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74a.749.749 0 110 1.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 9.5v5M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 015 22a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 011 18c0-2.21 1.79-4 4-4s4 1.79 4 4zM6.492 17.98h-2.98M5 16.52v2.99"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75zM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM5 22.75c-1.66 0-3.22-.88-4.06-2.31C.49 19.72.25 18.87.25 18c0-2.62 2.13-4.75 4.75-4.75S9.75 15.38 9.75 18c0 .87-.24 1.72-.69 2.45-.84 1.42-2.4 2.3-4.06 2.3zm0-8c-1.79 0-3.25 1.46-3.25 3.25 0 .59.16 1.17.47 1.67.58.98 1.65 1.58 2.78 1.58A3.256 3.256 0 008.25 18c0-1.79-1.46-3.25-3.25-3.25z"/>
  <path d="M6.5 18.73H3.51c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H6.5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M5 20.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75z"/>
  <path d="M17 20.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c2.86 0 4.25-1.39 4.25-4.25V9c0-2.86-1.39-4.25-4.25-4.25H7C4.14 4.75 2.75 6.14 2.75 9v6.3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v6c0 3.65-2.1 5.75-5.75 5.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 9.5v5" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 015 22a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 011 18c0-2.21 1.79-4 4-4s4 1.79 4 4zM6.49 17.98H3.51M5 16.52v2.99"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 15.3V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"/>`
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
