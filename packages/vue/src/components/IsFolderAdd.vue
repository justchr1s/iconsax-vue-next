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
    content: `<path d="M21.017 7.992c.398.566-.076 1.258-.769 1.258H3a1 1 0 01-1-1V6.42C2 3.98 3.98 2 6.42 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.805 0 3.402.897 4.367 2.272zM21.983 11.747a1 1 0 00-1-.997H3a1 1 0 00-1 1v4.9C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65l-.017-4.903zM14.5 16.75h-1.69v1.75a.749.749 0 11-1.5 0v-1.75H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.81V13.5a.749.749 0 111.5 0v1.75h1.69c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.06 16.5v-5M14.5 14h-5M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5M22 14.99V17c0 4-1 5-5 5H7c-4 0-5-1-5-5"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71z" opacity=".4"/>
  <path d="M21.99 10.84c-.02-.49-.1-.95-.25-1.4H2v7.21C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65v-5.58c0-.07 0-.16-.01-.23zm-7.49 5.41h-1.69V18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.81V13c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.69c.41 0 .75.34.75.75s-.34.75-.75.75z"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.06 16.5v-5M14.5 14h-5"/>
  <path stroke-miterlimit="10" stroke-width="1.5" d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12.06 17.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75z"/>
  <path d="M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75zm-10-20c-3.57 0-4.25.68-4.25 4.25v10c0 3.57.68 4.25 4.25 4.25h10c3.57 0 4.25-.68 4.25-4.25v-6c0-3.57-.68-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.67-.9-1.8-.9H7z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" opacity=".4">
    <path d="M12.06 16.5v-5M14.5 14h-5"/>
  </g>
  <path stroke-miterlimit="10" stroke-width="1.5" d="M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5z"/>`,
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
