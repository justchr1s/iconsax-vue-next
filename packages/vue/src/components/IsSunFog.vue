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
    content: `<path d="M18.48 12.25a.5.5 0 00.5-.52A6.998 6.998 0 0012 5.25c-3.69 0-6.71 2.85-6.98 6.48a.5.5 0 00.5.52h12.96zM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.44.29-.7.29zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 111.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3zM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04zM20 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 21.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M18 15h2M4 15h11"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.5A6.5 6.5 0 005.5 12M18.5 12c0-2.31-1.21-4.35-3.03-5.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.99 4.99l-.13-.13m14.15.13l.13-.13-.13.13zM12 2.08V2v.08zM2.08 12H2h.08zM22 12h-.08.08z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 18h12M9 21h6"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.48 12.25a.5.5 0 00.5-.52 6.998 6.998 0 00-13.96 0 .5.5 0 00.5.52h12.96zM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.44.29-.7.29zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 111.41-1.41l.13.13a.996.996 0 01-.7 1.7zM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04z"/>
  <path d="M20 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 21.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 12a6.5 6.5 0 10-13 0"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.99 4.99l-.13-.13m14.15.13l.13-.13-.13.13zM12 2.08V2v.08zM2.08 12H2h.08zM22 12h-.08.08z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 15h16M6 18h12M9 21h6"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M18.5 12.75c-.41 0-.75-.34-.75-.75 0-3.17-2.58-5.75-5.75-5.75S6.25 8.83 6.25 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75C4.75 8 8 4.75 12 4.75S19.25 8 19.25 12c0 .41-.34.75-.75.75zM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 010-1.41l.13-.13a.996.996 0 111.41 1.41l-.13.13c-.19.19-.44.29-.7.29zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 111.41-1.41l.13.13a.996.996 0 01-.7 1.7zM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04zM20 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16c.41 0 .75.34.75.75s-.34.75-.75.75zM18 18.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM15 21.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 12a6.5 6.5 0 10-13 0"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.99 4.99l-.13-.13m14.15.13l.13-.13-.13.13zM12 2.08V2v.08zM2.08 12H2h.08zM22 12h-.08.08z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 15h16" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M6 18h12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 21h6" opacity=".4"/>`,
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
