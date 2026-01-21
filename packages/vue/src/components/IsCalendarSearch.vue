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
    content: `<path d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25zM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1zm-4.34 9.69c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.74-.74c-.58.38-1.28.61-2.03.61-2.04 0-3.7-1.66-3.7-3.7s1.66-3.7 3.7-3.7 3.7 1.66 3.7 3.7c0 .75-.23 1.45-.61 2.03l.74.74c.29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 2v3M16 2v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 9.09h17M3 13.01V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13M13.37 22H8c-3.5 0-5-2-5-5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.995 13.7h.009M8.295 13.7h.01M8.295 16.7h.01"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20 9.84c.55 0 1 .45 1 1V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5v-6.16c0-.55.45-1 1-1h16z" opacity=".4"/>
  <path d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25zM15.66 18.47l-.74-.74c.38-.58.61-1.28.61-2.03 0-2.04-1.66-3.7-3.7-3.7s-3.7 1.66-3.7 3.7 1.66 3.7 3.7 3.7c.75 0 1.45-.23 2.03-.61l.74.74c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 2v3M16 2v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 9.09h17M13.37 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.995 13.7h.01M8.294 13.7h.01M8.294 16.7h.01"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75zM18.2 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45z"/>
  <path d="M22 22.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM8.5 14.5c-.13 0-.26-.03-.38-.08a.933.933 0 01-.33-.21c-.04-.05-.09-.1-.12-.15a.757.757 0 01-.09-.18.636.636 0 01-.06-.18c-.01-.07-.02-.14-.02-.2 0-.26.11-.52.29-.71.09-.09.2-.16.33-.21.36-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.19.18-.45.29-.71.29zM12 14.5c-.26 0-.52-.11-.71-.29-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .06-.01.13-.02.2-.01.06-.03.12-.06.18-.02.06-.05.12-.09.18l-.12.15c-.19.18-.45.29-.71.29zM8.5 18c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.24.21-.33.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29zM20.5 9.84h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M13.37 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V8.5c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75V13c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.5c0-2.86-1.39-4.25-4.25-4.25H8c-2.86 0-4.25 1.39-4.25 4.25V17c0 2.86 1.39 4.25 4.25 4.25h5.37c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 2v3M16 2v3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.2 21.4a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM22 22l-1-1"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M3.5 9.09h17" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.37 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.995 13.7h.01M8.294 13.7h.01M8.295 16.7h.009" opacity=".4"/>`,
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
