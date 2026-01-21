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
    content: `<path d="M6 7c-2 0-3 1-3 3v5c0 2 1 3 3 3l2-2v-1h1l8-8H6zm1 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7z"/>
  <path d="M9 15l-1 1v-1h1zM17 5v2H7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3z"/>
  <path d="M22.53 1.471a.754.754 0 00-1.06 0l-20 20c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l20-20c.29-.29.29-.77 0-1.06zM17 14.25h-4.043a.5.5 0 00-.353.146L12 15l-.75.75L8.8 18.2c-.64.64-.77 1.8-.25 2.54C9.09 21.5 9.99 22 11 22h2c1.66 0 3-1.34 3-3v-3.25h1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>
  <path d="M19.02 7.98l-3.56 3.56c-.63.63-.18 1.71.71 1.71h.74c.87 0 1.68.59 1.82 1.45a1.759 1.759 0 01-1.237 1.979c-.265.077-.493.294-.493.57v.25a.5.5 0 00.5.5h.5c1.66 0 3-1.34 3-3v-5c0-.79-.16-1.43-.47-1.91-.34-.51-1.08-.54-1.51-.11z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2zM12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59M21 14v1c0 2-1 3-3 3h-2v-3h-3M19.97 7.52C20.66 8 21 8.83 21 10M17 15h-1.21M7 11h2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 2L2 22"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M6 7c-2 0-3 1-3 3v5c0 2 1 3 3 3l2-2v-1h1l8-8H6zm1 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7z" opacity=".4"/>
  <path d="M9 15l-1 1v-1h1zM17 5v2H7V5c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3z"/>
  <path fill-rule="evenodd" d="M22.53 1.47a.75.75 0 010 1.06l-20 20a.75.75 0 01-1.06-1.06l20-20a.75.75 0 011.06 0z" clip-rule="evenodd"/>
  <path d="M9.75 11c0 .41-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75zM17.75 15c0 .41-.34.75-.75.75h-5.75l1.5-1.5H17c.41 0 .75.34.75.75z"/>
  <path d="M16 15v4c0 1.66-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3l4-4h4z"/>
  <path d="M21 10v5c0 2-1 3-3 3h-2v-3h-4l7.67-7.67C20.56 7.78 21 8.67 21 10z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2zM12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59M19.97 7.52C20.66 8 21 8.83 21 10v5c0 2-1 3-3 3h-2v-3h-3M17 15h-1.21M7 11h2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 2L2 22"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.75 7.75h-9.5c-.41 0-.75-.34-.75-.75V5c0-2.56 1.19-3.75 3.75-3.75h3.5c2.56 0 3.75 1.19 3.75 3.75v2c0 .41-.34.75-.75.75zM8 6.25h8V5c0-1.7-.55-2.25-2.25-2.25h-3.5C8.55 2.75 8 3.3 8 5v1.25zM13 22.75h-2c-2.04 0-3.34-.98-3.67-2.76-.07-.41.19-.8.6-.87.4-.08.8.19.87.6.13.71.5 1.53 2.19 1.53h2c1.58 0 2.25-.67 2.25-2.25v-3.25h-2.28c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H16c.41 0 .75.34.75.75v4c0 2.42-1.33 3.75-3.75 3.75z"/>
  <path d="M6 18.75c-2.42 0-3.75-1.33-3.75-3.75v-5c0-2.42 1.33-3.75 3.75-3.75h10.59c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.58 0-2.25.67-2.25 2.25v5c0 1.58.67 2.25 2.25 2.25.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.75h-2c-.41 0-.75-.34-.75-.75v-2.25H13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75v2.25H18c1.58 0 2.25-.67 2.25-2.25v-5c0-.92-.23-1.53-.71-1.87a.743.743 0 01-.18-1.04c.24-.34.71-.42 1.05-.18.89.63 1.34 1.67 1.34 3.09v5c0 2.42-1.33 3.75-3.75 3.75z"/>
  <path d="M17 15.75h-1.21c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c.41 0 .75.34.75.75s-.34.75-.75.75zM9 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75zM2 22.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3v2z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.97 15H16v4c0 2-1 3-3 3h-2c-1.69 0-2.67-.71-2.93-2.14M6 18c-2 0-3-1-3-3v-5c0-2 1-3 3-3h10.59"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.97 7.52C20.66 8 21 8.83 21 10v5c0 2-1 3-3 3h-2v-3h-3M17 15h-1.21"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 11h2" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 2L2 22"/>`
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
