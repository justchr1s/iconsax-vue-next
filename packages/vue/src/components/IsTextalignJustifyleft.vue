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
    content: `<path d="M12 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM12 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5H3M12 9.5H3M21 14.5H3M10.05 19.5H21M3 19.5h2.98"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M12 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>
  <path d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5H3M12 9.5H3M21 14.5H3M21 19.5H3"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM12 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75zM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75zM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5H3" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9.5H3"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 14.5H3" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19.5H3"/>`,
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
