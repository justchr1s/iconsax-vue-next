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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-3.11 2.48-5.64 5.56-5.75l-.37-.43a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l1.66 1.9c.02.02.03.04.05.06.04.06.08.13.1.2l.03.12c.02.09.01.19-.01.28-.02.08-.05.16-.09.24-.01.02-.03.04-.04.06-.04.06-.1.11-.16.15 0 0-.01 0-.01.01l-1.94 1.42a.76.76 0 01-1.05-.16c-.24-.33-.17-.8.16-1.05l.41-.3c-2.2.16-3.94 2-3.94 4.24a4.26 4.26 0 004.25 4.25 4.26 4.26 0 004.25-4.25 4.3 4.3 0 00-.71-2.36.746.746 0 01.21-1.04c.35-.23.81-.14 1.04.21.63.95.97 2.05.97 3.19 0 3.17-2.58 5.75-5.75 5.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.33 13.33C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82m-4.32-3.43c-.87-.26-1.83-.43-2.89-.43-3.21 0-6.02 1.75-7.51 4.34M15.13 5.32L12.24 2M15.13 5.32l-3.37 2.46"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.75 22h-4.5C8.5 22 7 20.5 7 16.75v-4.5C7 8.5 8.5 7 12.25 7h4.5C20.5 7 22 8.5 22 12.25v4.5C22 20.5 20.5 22 16.75 22z" opacity=".4"/>
  <path d="M2.75 10.5c.41 0 .75-.34.75-.75 0-2.96 2.06-5.44 4.83-6.09l-.27.45c-.21.36-.1.82.26 1.03.36.21.82.1 1.03-.26l1.05-1.75c.14-.23.14-.52.01-.75A.781.781 0 009.75 2C5.48 2 2 5.48 2 9.75c0 .41.34.75.75.75z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.89 5.08c-.87-.26-1.83-.43-2.89-.43-4.79 0-8.67 3.88-8.67 8.67C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82M16.13 5.32L13.24 2M16.13 5.32l-3.37 2.46"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.75c-5.2 0-9.42-4.23-9.42-9.42C2.58 8.14 6.8 3.9 12 3.9c1.07 0 2.11.15 3.11.46.4.12.62.54.5.94a.75.75 0 01-.94.5c-.85-.26-1.75-.4-2.67-.4-4.37 0-7.92 3.55-7.92 7.92s3.55 7.92 7.92 7.92a7.925 7.925 0 006.59-12.32.746.746 0 01.21-1.04c.34-.23.81-.14 1.04.21a9.366 9.366 0 011.59 5.24c-.01 5.19-4.23 9.42-9.43 9.42z"/>
  <path d="M16.13 6.07c-.21 0-.42-.09-.57-.26l-2.89-3.32a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l2.89 3.32c.27.31.24.79-.07 1.06-.13.13-.31.19-.49.19z"/>
  <path d="M12.76 8.53c-.23 0-.46-.11-.61-.31-.24-.33-.17-.8.16-1.05l3.37-2.46a.752.752 0 01.89 1.21L13.2 8.39a.7.7 0 01-.44.14z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.89 5.08c-.87-.26-1.83-.43-2.89-.43-4.79 0-8.67 3.88-8.67 8.67C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.13 5.32L13.24 2M16.13 5.32l-3.37 2.46"/>`
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
