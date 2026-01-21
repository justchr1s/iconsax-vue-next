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
    content: `<path d="M20.5 16v2.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15H19.5c.55 0 1 .45 1 1zM15.5 2h-7c-4 0-5 1-5 5v7.58c.76-.67 1.76-1.08 2.85-1.08H19.5c.55 0 1-.45 1-1V7c0-4-1-5-5-5zM13 10.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75zm3-3.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 10.99V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98v-1.72M12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 5.3v16.03c-.17 0-.35-.03-.49-.11l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04C2.78 18.6 2 17.7 2 16.74V4.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.15.09.34.14.53.14z" opacity=".4"/>
  <path d="M22 4.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.13.08-.29.11-.47.11V5.3c.19 0 .38-.05.53-.14l.17-.11c1.78-1.12 4.97-2.19 7.07-2.37h.06c1.19-.1 2.17.79 2.17 1.99zM7.75 9.24H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c.41 0 .75.34.75.75s-.34.75-.75.75zM8.5 12.24h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15zM8 7h8M8 10.5h5"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M3.5 18.75c-.41 0-.75-.34-.75-.75V7c0-4.41 1.34-5.75 5.75-5.75h7c4.41 0 5.75 1.34 5.75 5.75v10c0 .16 0 .31-.01.47-.03.41-.4.73-.8.7a.757.757 0 01-.7-.8c.01-.12.01-.25.01-.37V7c0-3.57-.67-4.25-4.25-4.25h-7c-3.58 0-4.25.68-4.25 4.25v11c0 .41-.34.75-.75.75z"/>
  <path d="M17 22.75H7a4.26 4.26 0 01-4.25-4.25v-.65c0-1.99 1.62-3.6 3.6-3.6H20.5c.41 0 .75.34.75.75v3.5A4.26 4.26 0 0117 22.75zm-10.65-7a2.1 2.1 0 00-2.1 2.1v.65c0 1.52 1.23 2.75 2.75 2.75h10c1.52 0 2.75-1.23 2.75-2.75v-2.75H6.35zM16 7.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75zM13 11.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h8M8 10.5h5" opacity=".4"/>`
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
