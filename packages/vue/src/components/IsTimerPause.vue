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
    content: `<path d="M14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73zM14 19.968v-2.94c0-1.81 1.22-3.03 3.03-3.03h2.94c.23 0 .45.02.66.06.02-.24.04-.48.04-.73 0-4.79-3.89-8.68-8.67-8.68-4.78 0-8.67 3.89-8.67 8.68 0 4.78 3.89 8.67 8.67 8.67.85 0 1.66-.14 2.44-.36a3.22 3.22 0 01-.44-1.67zm-1.25-6.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5z"/>
  <path d="M19.97 15h-2.93c-1.28 0-2.04.76-2.04 2.03v2.94c0 1.27.76 2.03 2.04 2.03h2.93c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03zm-2.05 5.06c0 .32-.26.58-.59.58a.58.58 0 01-.58-.58v-3.12c0-.32.26-.58.58-.58.33 0 .59.26.59.58v3.12zm2.33 0c0 .32-.26.58-.58.58-.32 0-.59-.26-.59-.58v-3.12c0-.32.27-.58.59-.58.32 0 .58.26.58.58v3.12z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.01 5.46c1.2-.61 2.55-.96 3.99-.96 4.83 0 8.75 3.92 8.75 8.75M12 22c-4.83 0-8.75-3.92-8.75-8.75 0-1.98.66-3.8 1.76-5.26M12 8v5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 2h6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 17v4M16 17v4"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM14.89 3.45H9.11c-.4 0-.72-.32-.72-.72 0-.4.32-.73.72-.73h5.78c.4 0 .72.32.72.72 0 .4-.32.73-.72.73z"/>
  <path d="M15 19.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c.19 0 .36.02.53.06.11-.56.17-1.14.17-1.73 0-4.78-3.89-8.67-8.67-8.67-4.78 0-8.67 3.89-8.67 8.67C3.33 18.11 7.22 22 12 22c1.21 0 2.36-.25 3.41-.7-.26-.34-.41-.78-.41-1.33z" opacity=".4"/>
  <path d="M19.97 15h-2.93c-1.28 0-2.04.76-2.04 2.03v2.93c0 1.27.76 2.03 2.03 2.03h2.93c1.27 0 2.03-.76 2.03-2.03v-2.93C22 15.76 21.24 15 19.97 15zm-2.05 5.06a.58.58 0 01-1.16 0v-3.11a.58.58 0 011.16 0v3.11zm2.33 0a.58.58 0 01-1.16 0v-3.11a.58.58 0 011.16 0v3.11z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75M12 8v5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 2h6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 17v4M16 17v4"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-5.24 0-9.5-4.26-9.5-9.5s4.26-9.5 9.5-9.5 9.5 4.26 9.5 9.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75zM19 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75zM16 21.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c-4.83 0-8.75-3.92-8.75-8.75S7.17 4.5 12 4.5s8.75 3.92 8.75 8.75"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v5" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 2h6" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 17v4M16 17v4" opacity=".4"/>`
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
