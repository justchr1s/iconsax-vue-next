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
    content: `<path d="M20 19.261h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82zM20 12.968h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82zM20 6.671h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82zM4.91 8.032c-.22 0-.43-.09-.58-.24l-.91-.91a.82.82 0 011.16-1.16l.33.33 2.14-2.14a.82.82 0 011.16 1.16l-2.72 2.72c-.16.15-.36.24-.58.24zM4.91 14.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 011.16-1.16l.33.33 2.14-2.14a.82.82 0 011.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24zM4.91 20.329c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 011.16-1.16l.33.33 2.14-2.14a.821.821 0 011.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 19.5h10M20 12.5h1M11 12.5h5.49M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M20 19.26h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .46-.37.82-.82.82zM20 12.97h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82zM20 6.67h-9.07c-.45 0-.82-.37-.82-.82 0-.45.37-.82.82-.82H20c.45 0 .82.37.82.82 0 .45-.37.82-.82.82z"/>
  <path d="M4.91 8.03c-.22 0-.43-.09-.58-.24l-.91-.91a.82.82 0 011.16-1.16l.33.33 2.14-2.14a.82.82 0 011.16 1.16L5.49 7.79c-.16.15-.36.24-.58.24zM4.91 14.33c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 011.16-1.16l.33.33 2.14-2.14a.82.82 0 011.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24zM4.91 20.33c-.21 0-.42-.08-.58-.24l-.91-.91a.82.82 0 011.16-1.16l.33.33 2.14-2.14a.82.82 0 011.16 1.16l-2.72 2.72c-.16.16-.37.24-.58.24z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 19.5h10M11 12.5h10M11 5.5h10M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 20.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zM21 13.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zM21 6.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75zM4 7.25c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22zM4 14.25c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22zM4 21.25c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.47.47 2.47-2.47c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 19.5h10M11 12.5h10M11 5.5h10" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"/>`,
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
