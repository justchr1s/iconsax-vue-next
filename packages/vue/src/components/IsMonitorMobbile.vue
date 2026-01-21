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
    content: `<path d="M20.99 9.71c-.34-.14-.79-.21-1.35-.21h-5.28c-1.74 0-2.36.62-2.36 2.38v7.74c0 .58.07 1.03.22 1.38.31.72.97 1 2.14 1h5.28c1.74 0 2.36-.63 2.36-2.38v-7.74c0-1.19-.28-1.86-1.01-2.17zM18 19.75h-2c-.02 0-.05 0-.07-.01a.62.62 0 01-.39-.16.706.706 0 01-.29-.58c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M20.99 6.19V7c0 .55-.45 1-1 1h-5.63c-2.56 0-3.86 1.31-3.86 3.88V21c0 .55-.45 1-1 1H7.55c-.4 0-.72-.32-.72-.71 0-.4.32-.71.72-.71H9.5v-3.83H6a4.197 4.197 0 01-3.99-4.19V6.19C2.01 3.88 3.89 2 6.21 2H16.8c2.31 0 4.19 1.88 4.19 4.19z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6.74c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-1.89M10 21.47v-4.52M2 12.95h8M6.74 21.47H10M22 12.8c0-2.37-.59-2.96-2.96-2.96h-3.55c-2.37 0-2.96.59-2.96 2.96v5.71c0 2.37.59 2.96 2.96 2.96h3.55c2.37 0 2.96-.59 2.96-2.96v-1.57"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.244 18.25h.01"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M16.8 2H6.21c-2.32 0-4.2 1.88-4.2 4.19v6.37c0 2.32 1.88 4.19 4.19 4.19h3.6c.55 0 1 .45 1 1v.82c0 .55-.45 1-1 1H7.55c-.39 0-.71.32-.71.71 0 .39.32.71.71.71h7.93c.39 0 .71-.32.71-.71 0-.39-.32-.71-.71-.71h-2.25c-.55 0-1-.45-1-1v-.82c0-.55.45-1 1-1h3.57c2.32 0 4.19-1.88 4.19-4.19V6.19C20.99 3.88 19.11 2 16.8 2z" opacity=".4"/>
  <path d="M19.64 9.5h-5.29c-1.73 0-2.36.63-2.36 2.38v7.73c0 1.76.62 2.38 2.36 2.38h5.29c1.73 0 2.36-.63 2.36-2.38v-7.73c0-1.76-.62-2.38-2.36-2.38zM17 20.32c-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1z"/>
  <path d="M18.1 19.22c0 .61-.49 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1.61 0 1.1.5 1.1 1.1z" opacity=".4"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.244 18.25h.01"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M10 17.7H6.21c-3.8 0-4.96-1.16-4.96-4.96v-6c0-3.8 1.16-4.96 4.96-4.96h10.53c3.8 0 4.96 1.16 4.96 4.96 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-2.94-.52-3.46-3.46-3.46H6.21c-2.94 0-3.46.52-3.46 3.46v6c0 2.94.52 3.46 3.46 3.46H10c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M10 22.22c-.41 0-.75-.34-.75-.75v-4.53c0-.41.34-.75.75-.75s.75.34.75.75v4.53c0 .42-.34.75-.75.75zM10 13.7H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75z"/>
  <path d="M10 22.22H6.74c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H10c.41 0 .75.34.75.75s-.34.75-.75.75zM19.04 22.22h-3.55c-2.77 0-3.71-.94-3.71-3.71V12.8c0-2.77.94-3.71 3.71-3.71h3.55c2.77 0 3.71.94 3.71 3.71v5.71c0 2.78-.94 3.71-3.71 3.71zm-3.55-11.63c-1.96 0-2.21.25-2.21 2.21v5.71c0 1.96.25 2.21 2.21 2.21h3.55c1.96 0 2.21-.25 2.21-2.21V12.8c0-1.96-.25-2.21-2.21-2.21h-3.55z"/>
  <path d="M17.3 18.97c-.26 0-.52-.1-.71-.29a.988.988 0 01-.21-.32c-.05-.13-.08-.26-.08-.39 0-.26.11-.52.29-.7.23-.23.58-.34.91-.28l.18.06c.06.03.12.06.17.09a1.009 1.009 0 01.45.83c0 .13-.03.26-.08.39-.05.12-.12.23-.21.32a.61.61 0 01-.16.12.95.95 0 01-.17.1c-.06.02-.12.04-.18.05-.07.02-.13.02-.2.02z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.95h8" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.74 21.47H10M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.244 18.25h.01" opacity=".4"/>`
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
