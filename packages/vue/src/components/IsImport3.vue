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
    content: `<path d="M21.14 9.898h-8.46v3.67l1.57-1.57c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.85 2.84c-.29.29-.77.29-1.06 0l-2.85-2.84a.742.742 0 01-.22-.53c0-.19.08-.38.23-.53.29-.29.77-.29 1.06 0l1.56 1.56v-3.66H2.86c-.48 0-.86.38-.86.86 0 5.89 4.11 10 10 10s10-4.11 10-10c0-.48-.38-.86-.86-.86zM12.68 3.988c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.9h1.5v-5.9z"/>`
  },
  broken: null,
  bulk: null,
  linear: null,
  outline: null,
  twotone: null
}

const currentVariant = computed(() => svgData[props.variant] || svgData.bold)
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
