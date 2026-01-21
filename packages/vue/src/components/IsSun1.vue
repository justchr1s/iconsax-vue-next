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
    content: `<path d="M12 19a7 7 0 100-14 7 7 0 000 14zM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 111.41-1.41l.13.13a.996.996 0 01-.7 1.7zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.45.29-.7.29zM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.44.29-.7.29zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 111.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3zM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7.85a6.5 6.5 0 105-2.35"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.14 19.14l-.13-.13m0-14.02l.13-.13-.13.13zM4.86 19.14l.13-.13-.13.13zM12 2.08V2v.08zM12 22v-.08.08zM2.08 12H2h.08zM22 12h-.08.08zM4.99 4.99l-.13-.13.13.13z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 19a7 7 0 100-14 7 7 0 000 14z" opacity=".4"/>
  <path d="M12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 111.41-1.41l.13.13a.996.996 0 01-.7 1.7zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.45.29-.7.29zM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.44.29-.7.29zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 111.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3zM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.14 19.14l-.13-.13m0-14.02l.13-.13-.13.13zM4.86 19.14l.13-.13-.13.13zM12 2.08V2v.08zM12 22v-.08.08zM2.08 12H2h.08zM22 12h-.08.08zM4.99 4.99l-.13-.13.13.13z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 19.25C8 19.25 4.75 16 4.75 12S8 4.75 12 4.75 19.25 8 19.25 12 16 19.25 12 19.25zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75S15.17 6.25 12 6.25zM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 111.41-1.41l.13.13a.996.996 0 01-.7 1.7zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.45.29-.7.29zM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.44.29-.7.29zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 111.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3zM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.14 19.14l-.13-.13m0-14.02l.13-.13-.13.13zM4.86 19.14l.13-.13-.13.13zM12 2.08V2v.08zM12 22v-.08.08zM2.08 12H2h.08zM22 12h-.08.08zM4.99 4.99l-.13-.13.13.13z" opacity=".4"/>`,
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
