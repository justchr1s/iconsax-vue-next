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
    content: `<path d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15zM15.79 15.61c.33-.17.71.08.71.45v4.85c0 .9-.63 1.34-1.41.97l-2.68-1.27c-.23-.1-.59-.1-.82 0l-2.68 1.27c-.78.36-1.41-.08-1.41-.98l.02-4.84c0-.37.39-.61.71-.45 1.13.57 2.41.89 3.77.89 1.36 0 2.65-.32 3.79-.89z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 3.66c1.38 1.19 2.25 2.92 2.25 4.84 0 3.59-3.02 6.5-6.75 6.5s-6.75-2.91-6.75-6.5S8.27 2 12 2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.52 13.52l-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15z"/>
  <path d="M7.52 13.52l-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.52 13.52l-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 15.75c-4.14 0-7.5-3.25-7.5-7.25S7.86 1.25 12 1.25c4.14 0 7.5 3.25 7.5 7.25s-3.36 7.25-7.5 7.25zm0-13c-3.31 0-6 2.58-6 5.75s2.69 5.75 6 5.75 6-2.58 6-5.75-2.69-5.75-6-5.75z"/>
  <path d="M15.62 22.75c-.28 0-.56-.07-.85-.2l-2.69-1.27a.543.543 0 00-.18 0l-2.67 1.26c-.59.28-1.21.27-1.69-.04-.5-.32-.79-.91-.78-1.61l.01-7.38c0-.41.32-.77.75-.75.41 0 .75.34.75.75l-.01 7.38c0 .22.06.33.09.34.02.01.11.02.25-.05l2.68-1.27c.43-.2 1.02-.2 1.45 0l2.69 1.27c.14.07.23.06.25.05.03-.02.09-.13.09-.34v-7.56c0-.41.34-.75.75-.75s.75.34.75.75v7.56c0 .71-.29 1.29-.79 1.61-.26.17-.55.25-.85.25z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.52 13.52l-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56" opacity=".4"/>`
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
