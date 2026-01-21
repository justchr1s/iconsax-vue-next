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
    content: `<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM9.97 14.9l-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06zm0-7l-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06zm7.59 8.72h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.749.749 0 110 1.5zm0-7h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.749.749 0 110 1.5z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.95V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 20 21',
    content: `<path d="M14.19.97H5.81C2.17.97 0 3.14 0 6.78v8.38c0 3.64 2.17 5.81 5.81 5.81h8.38c3.64 0 5.81-2.17 5.81-5.81V6.78C20 3.14 17.83.97 14.19.97z" opacity=".4"/>
  <path d="M16.31 7.84c0 .41-.33.75-.75.75h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25c.42 0 .75.34.75.75zM7.97 6.87L5.72 9.12c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06zM16.31 14.84c0 .41-.33.75-.75.75h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25c.42 0 .75.34.75.75zM7.97 13.87l-2.25 2.25c-.15.15-.34.22-.53.22s-.39-.07-.53-.22l-.75-.75c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.22.22 1.72-1.72c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M17.62 9.62h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.749.749 0 110 1.5zM7.12 10.38c-.19 0-.38-.07-.53-.22l-.75-.75a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.22.22 1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.25 2.25a.75.75 0 01-.53.22zM17.62 16.62h-5.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25a.749.749 0 110 1.5zM7.12 17.38c-.19 0-.38-.07-.53-.22l-.75-.75a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.22.22 1.72-1.72c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.25 2.25a.75.75 0 01-.53.22z"/>
  <path d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"/>`,
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
