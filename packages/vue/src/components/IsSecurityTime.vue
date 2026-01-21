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
    content: `<path d="M12 8.25c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.25 12 8.25zm1 2.93c0 .61-.33 1.19-.85 1.5l-.77.46c-.12.07-.25.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.76-.46c.08-.05.12-.13.12-.21v-.93a.755.755 0 011.51-.01v.93z"/>
  <path d="M18.54 4.17l-5.5-2.06c-.57-.21-1.5-.21-2.07 0l-5.5 2.06c-1.06.4-1.92 1.64-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c.01-1.13-.85-2.37-1.9-2.77zM12 16.25c-2.62 0-4.75-2.13-4.75-4.75S9.38 6.75 12 6.75s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.41 11.37v3.18c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.83-.31-2.19-.31-3.02 0L5.52 4.1c-1.15.43-2.09 1.79-2.09 3.02"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M16 11.5c0-2.21-1.79-4-4-4s-4 1.79-4 4a3.999 3.999 0 005.95 3.49"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.25 10.25v.93c0 .35-.18.68-.49.86l-.76.46"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M10.96 2.11l-5.5 2.06c-1.05.4-1.91 1.64-1.91 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06c-.56-.22-1.5-.22-2.07-.01z" opacity=".4"/>
  <path d="M12 16.25c-2.62 0-4.75-2.13-4.75-4.75S9.38 6.75 12 6.75s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.25 12 8.25z"/>
  <path d="M11 13.25c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.76-.46c.08-.05.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.33.75.74v.93c0 .61-.33 1.19-.85 1.5l-.77.46c-.11.08-.25.11-.38.11z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.49 2.23L5.5 4.1c-1.15.43-2.09 1.79-2.09 3.02v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15.5a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.25 10.25v.93c0 .35-.18.68-.49.86l-.76.46"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.76c-1.09 0-2.17-.32-3.02-.95l-4.3-3.21c-1.14-.85-2.03-2.63-2.03-4.04V7.12c0-1.54 1.13-3.18 2.58-3.72l4.99-1.87c.99-.37 2.55-.37 3.54 0l4.99 1.87c1.45.54 2.58 2.18 2.58 3.72v7.43c0 1.42-.89 3.19-2.03 4.04L15 21.8c-.83.64-1.91.96-3 .96zM10.75 2.94L5.76 4.81c-.85.32-1.6 1.4-1.6 2.32v7.43c0 .95.67 2.28 1.42 2.84l4.3 3.21c1.15.86 3.09.86 4.25 0l4.3-3.21c.76-.57 1.42-1.89 1.42-2.84V7.12c0-.91-.75-1.99-1.6-2.32l-4.99-1.87c-.68-.24-1.84-.24-2.51.01z"/>
  <path d="M12 16.25c-2.62 0-4.75-2.13-4.75-4.75S9.38 6.75 12 6.75s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S13.79 8.25 12 8.25z"/>
  <path d="M11 13.25c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.76-.46c.08-.05.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.33.75.74v.93c0 .61-.33 1.19-.85 1.5l-.77.46c-.11.08-.25.11-.38.11z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.49 2.23L5.5 4.1c-1.15.43-2.09 1.79-2.09 3.02v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 15.5a4 4 0 100-8 4 4 0 000 8z" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.25 10.25v.93c0 .35-.18.68-.49.86l-.76.46" opacity=".4"/>`
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
