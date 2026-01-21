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
    content: `<path d="M5 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1 3.68c0 .61-.33 1.19-.85 1.5l-.76.46c-.12.08-.26.11-.39.11-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.76-.46c.07-.04.12-.13.12-.21v-.93c0-.42.34-.76.75-.76s.75.34.75.75v.93z"/>
  <path d="M17 4H7C4 4 2 5.5 2 9v3.56c0 .37.38.6.71.45.98-.45 2.11-.62 3.3-.41 2.63.47 4.56 2.91 4.49 5.58-.01.42-.07.83-.18 1.23-.08.31.17.6.49.6H17c3 0 5-1.5 5-5V9c0-3.5-2-5-5-5zm-5 10.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm7.25-.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M14.5 12a2.5 2.5 0 00-5 0 2.5 2.5 0 002.5 2.5M18.5 9.5v5M5 22a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 16.75v.93c0 .35-.18.68-.49.86L4 19"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M5 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1 3.68c0 .61-.33 1.19-.85 1.5l-.76.46c-.12.07-.25.11-.38.11-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.76-.46c.07-.04.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.34.75.75v.92H6z"/>
  <path d="M22 9v6c0 3.5-2 5-5 5H8.45c.35-.59.55-1.27.55-2 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5z" opacity=".4"/>
  <path d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 9.5v5M5 22a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 16.75v.93c0 .35-.18.68-.49.86L4 19"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 15.25c-1.79 0-3.25-1.46-3.25-3.25S10.21 8.75 12 8.75s3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.79-1.75-1.75-1.75zM18.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM5 22.75C2.38 22.75.25 20.62.25 18S2.38 13.25 5 13.25 9.75 15.38 9.75 18 7.62 22.75 5 22.75zm0-8c-1.79 0-3.25 1.46-3.25 3.25S3.21 21.25 5 21.25 8.25 19.79 8.25 18 6.79 14.75 5 14.75z"/>
  <path d="M4 19.75c-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.76-.46c.07-.04.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.34.75.75v.93c0 .61-.33 1.19-.85 1.5l-.76.46c-.12.07-.26.1-.39.1z"/>
  <path d="M17 20.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c2.86 0 4.25-1.39 4.25-4.25V9c0-2.86-1.39-4.25-4.25-4.25H7C4.14 4.75 2.75 6.14 2.75 9v6.2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v6c0 3.65-2.1 5.75-5.75 5.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM18.5 9.5v5" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 22a4 4 0 100-8 4 4 0 000 8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5.25 16.75v.93c0 .35-.18.68-.49.86L4 19"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 15.2V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5H8.5"/>`,
    isStroke: true
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
    :fill="currentVariant?.isStroke ? 'none' : 'currentColor'"
    :stroke="currentVariant?.isStroke ? 'currentColor' : 'none'"
    :style="{ color }"
    v-html="currentVariant?.content"
  />
</template>
