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
    content: `<path d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 01-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 01-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 01-.58.26z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M17.97 22H22M2 2v17c0 1.66 1.34 3 3 3h8.98M19.99 8.18L21 7"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 17l4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11l1.15-1.35"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 01-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 01-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 01-.58.26z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2v17c0 1.66 1.34 3 3 3h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 17l4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 01-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.58.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96-.76.02-1.51-.26-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 01-.58.26z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 2v17c0 1.66 1.34 3 3 3h17"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M5 17l4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7" opacity=".4"/>`,
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
