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
    content: `<path d="M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22h19.95c-.08-1.23-.43-2.27-1.03-3.09zM2 16.189c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.95.69 2.19 1.05 3.68 1.05h8.38c3.64 0 5.81-2.17 5.81-5.81v-7.47H2v7.47zm6.91-1.75l2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.15.15.22.34.22.53s-.07.38-.22.53c-.29.29-.77.29-1.06 0L12 13.479l-2.03 2.02c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5H2M14.56 15.5L12 12.94 9.44 15.5"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.97 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-.2-.01-.4-.02-.59-.08-1.23-.43-2.27-1.03-3.09-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22c-.02.19-.03.39-.03.59v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.95.69 2.19 1.05 3.68 1.05z" opacity=".4"/>
  <path d="M2 8.72h20v-.91c0-.2-.01-.4-.02-.59H2.03c-.02.19-.03.39-.03.59v.91zM15.31 14.97c0-.19-.07-.38-.22-.53l-2.56-2.56a.754.754 0 00-1.06 0l-2.56 2.56c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0L12 13.48l2.03 2.03c.29.29.77.29 1.06 0 .15-.15.22-.34.22-.54z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7zM22 8.5H2"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.56 15.5L12 12.94 9.44 15.5"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.31 7.75-7.75 7.75zm-6-20C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6z"/>
  <path d="M22 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75zM14.56 16.25c-.19 0-.38-.07-.53-.22L12 14l-2.03 2.03c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5H2M14.56 15.5L12 12.94 9.44 15.5" opacity=".4"/>`
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
