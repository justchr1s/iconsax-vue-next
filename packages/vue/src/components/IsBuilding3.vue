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
    content: `<path d="M15 7.07c0-.67-.33-1.29-.89-1.66l-4-2.67c-.67-.45-1.55-.45-2.22 0l-4 2.67C3.34 5.78 3 6.4 3 7.07v5.68c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5V7.07zm-6 3.68c-.96 0-1.75-.79-1.75-1.75S8.04 7.25 9 7.25s1.75.79 1.75 1.75-.79 1.75-1.75 1.75z"/>
  <path d="M22 21.251h-1.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H15v-6c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5v6H2c-.41 0-.75.34-.75.75s.34.75.75.75h17.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-13.75-3c0-.41.34-.75.75-.75s.75.34.75.75v3h-1.5v-3z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M3 9V7.07c0-.67.34-1.29.89-1.66l4-2.67c.67-.45 1.55-.45 2.22 0l4 2.67c.56.37.89.99.89 1.66l.01 14.92-12 .02L3 12.92M19.98 22.01V18M20 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zM3 14h12M9 22v-3.75"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M15.01 14.75v7.24l-12 .02v-7.26L3 13.25V7.07c0-.67.34-1.29.89-1.66l4-2.67c.67-.45 1.55-.45 2.22 0l4 2.67c.56.37.89.99.89 1.66v6.18l.01 1.5z" opacity=".4"/>
  <path d="M22 21.25h-1.27v-3c.95-.31 1.64-1.2 1.64-2.25v-2c0-1.31-1.07-2.38-2.38-2.38-1.31 0-2.38 1.07-2.38 2.38v2c0 1.04.68 1.92 1.61 2.24v3.01H2c-.41 0-.75.34-.75.75s.34.75.75.75h17.93c.02 0 .03.01.05.01.02 0 .03-.01.05-.01H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"/>
  <path d="M15.01 14.75h-12L3 13.25h12l.01 1.5zM9 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75zM9 10.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M15.01 21.99l-12 .02L3 7.07c0-.67.34-1.29.89-1.66l4-2.67c.67-.45 1.55-.45 2.22 0l4 2.67c.56.37.89.99.89 1.66l.01 14.92zM19.98 22.01V18M20 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zM3 14h12M9 22v-3.75"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M3.01 22.76a.75.75 0 01-.75-.75L2.25 7.07c0-.91.46-1.77 1.22-2.28l4-2.67c.93-.62 2.13-.62 3.05 0l4 2.67c.77.51 1.22 1.36 1.22 2.28l.01 14.92c0 .41-.33.75-.75.75l-11.99.02zM9 3.15c-.24 0-.48.07-.69.21l-4 2.67c-.35.23-.56.62-.56 1.04l.01 14.19 10.5-.02-.01-14.17c0-.42-.21-.81-.55-1.03l-4-2.67c-.21-.15-.46-.22-.7-.22zM19.98 22.76c-.41 0-.75-.34-.75-.75V18c0-.41.34-.75.75-.75s.75.34.75.75v4.01c0 .41-.33.75-.75.75z"/>
  <path d="M20 18.75c-1.52 0-2.75-1.23-2.75-2.75v-2c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75v2c0 1.52-1.23 2.75-2.75 2.75zm0-6c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 002.5 0v-2c0-.69-.56-1.25-1.25-1.25zM15 14.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75zM9 22.75c-.41 0-.75-.34-.75-.75v-3.75c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75zM9 11.25c-1.24 0-2.25-1.01-2.25-2.25S7.76 6.75 9 6.75 11.25 7.76 11.25 9 10.24 11.25 9 11.25zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2 22h20M15.01 21.99l-12 .02L3 7.07c0-.67.34-1.29.89-1.66l4-2.67c.67-.45 1.55-.45 2.22 0l4 2.67c.56.37.89.99.89 1.66l.01 14.92z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.98 22.01V18" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20 12c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zM3 14h12"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M9 22v-3.75M9 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" opacity=".4"/>`
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
