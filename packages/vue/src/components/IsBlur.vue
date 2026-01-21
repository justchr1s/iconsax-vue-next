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
    content: `<path d="M13.47 7.412l2.46-1.21c.3-.15.38-.54.15-.78-.89-.98-1.79-1.8-2.51-2.42a.495.495 0 00-.82.38v3.58c0 .37.39.61.72.45zM12.75 19.738v1.65c0 .3.27.55.57.5a8.124 8.124 0 006.09-4.74c.19-.42-.27-.84-.69-.64l-5.69 2.79c-.17.08-.28.25-.28.44zM11.25 3.362a.5.5 0 00-.82-.39c-2.36 1.98-6.55 6.15-6.53 10.93 0 4.02 2.94 7.35 6.78 7.99.3.05.57-.2.57-.5V3.362zM13.44 12.471l5.29-2.22c.27-.12.4-.43.27-.69-.37-.73-.8-1.44-1.27-2.1-.14-.2-.4-.26-.62-.16l-4.09 1.99a.5.5 0 00-.28.45v2.27c.01.35.37.6.7.46zM19.83 14.31c.16-.08.26-.23.26-.4 0-.64-.08-1.27-.22-1.89-.07-.3-.4-.46-.68-.34l-6.14 2.62c-.18.08-.3.26-.3.46v2.2c0 .37.39.61.72.45l5.9-2.87.46-.23z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.9 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.03-5.43-5.6-10.24-7.49-11.7M12.61 2.21a.991.991 0 00-1.22 0c-1.3.99-4.32 3.5-6.1 6.75"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20M12 18.96l7.7-3.74M12 13.96l7.37-3.58M12 8.96l5.03-2.45"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.61 2.21a.991.991 0 00-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7z" opacity=".4"/>
  <path d="M20.09 14.2a7.67 7.67 0 01-.27 1.79l-7.07 3.44v2.54a9.401 9.401 0 01-1.5 0V2.31c.05-.04.09-.07.13-.1.37-.28.87-.28 1.23 0 .04.03.09.07.14.11v5.44l3.78-1.84c.33.38.64.77.95 1.18a.38.38 0 01-.13.09l-4.6 2.24v3.33l6.29-3.06c.01 0 .01-.01.02-.01.22.45.41.91.56 1.39l-6.87 3.35v3.33l6.62-3.22.72-.34z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M12.61 2.21a.991.991 0 00-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20M12 18.96l7.7-3.74M12 13.96l7.37-3.58M12 8.96l5.03-2.45"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-4.88 0-8.85-3.97-8.85-8.85-.03-5.73 5.43-10.5 7.78-12.29a1.77 1.77 0 012.14 0c2.35 1.82 7.81 6.65 7.78 12.3 0 4.87-3.97 8.84-8.85 8.84zm0-20c-.05 0-.11.02-.16.06-1.69 1.29-7.21 5.9-7.18 11.09 0 4.06 3.3 7.35 7.35 7.35s7.35-3.29 7.35-7.34c.03-5.12-5.5-9.79-7.2-11.1a.29.29 0 00-.16-.06z"/>
  <path d="M12 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75z"/>
  <path d="M12 19.71c-.28 0-.55-.16-.68-.42a.744.744 0 01.35-1l7.7-3.74c.37-.18.82-.02 1 .35.18.37.03.82-.35 1l-7.7 3.74c-.1.04-.21.07-.32.07zM12 14.71c-.28 0-.55-.16-.68-.42a.744.744 0 01.35-1l7.37-3.58c.37-.18.82-.03 1 .35.18.38.03.82-.35 1l-7.37 3.58c-.1.04-.21.07-.32.07zM12 9.71c-.28 0-.55-.16-.68-.42a.744.744 0 01.35-1l5.03-2.44c.37-.18.82-.02 1 .35.18.37.03.82-.35 1l-5.03 2.44c-.1.04-.21.07-.32.07z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-miterlimit="10" stroke-width="1.5" d="M12.61 2.21a.991.991 0 00-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7z"/>
  <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" opacity=".4">
    <path d="M12 2v20M12 18.96l7.7-3.74M12 13.96l7.37-3.58M12 8.96l5.03-2.45"/>
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
