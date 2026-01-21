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
  bold: null,
  broken: null,
  bulk: null,
  linear: null,
  outline: null,
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509" d="M15.72 9.69a5.25 5.25 0 010 7.44 5.251 5.251 0 01-7.44 0 5.25 5.25 0 010-7.44 5.251 5.251 0 017.44 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509" d="M12 13.41L10.41 15" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.07 6.34c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.16.56 0zM5.49 19.92c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 010-.56c.15-.16.41-.16.56 0zM21.88 13.13c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.16.56 0zM2.67 13.13c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 010-.56c.16-.16.41-.16.56 0zM19.07 19.92c.15.15.15.4 0 .56-.15.15-.4.15-.56 0-.16-.15-.15-.4 0-.56.16-.16.41-.16.56 0zM5.49 6.34c.15.15.15.4 0 .56-.15.16-.4.15-.56 0a.405.405 0 010-.56c.15-.16.41-.16.56 0zM12.28 3.52c.15.15.15.4 0 .56-.15.16-.4.15-.56 0-.16-.15-.15-.4 0-.56.15-.16.41-.15.56 0z" opacity=".4"/>`,
    isStroke: true
  }
}

const currentVariant = computed(() => svgData[props.variant] || svgData.twotone)
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
