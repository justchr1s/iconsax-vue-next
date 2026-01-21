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
    content: `<path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 19v3H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1z"/>
  <path d="M7 11H5v7h2v-7zM11 11H9v7h2v-7zM15 11h-2v7h2v-7zM19 11h-2v7h2v-7zM23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75zM21.37 5.75l-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.68c0-.38-.28-.79-.63-.93zM12 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M2.63 5.75c-.35.14-.63.56-.63.93V10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.68c0-.37-.28-.79-.63-.93l-9-3.6c-.2-.08-.54-.08-.74 0L6.79 4.09M22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v3zM4 18v-7M8 18v-7M12 18v-7M16 18v-7M20 18v-7M1 22h22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 19v3H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1z"/>
  <path d="M8 11H4v7h4v-7z" opacity=".6"/>
  <path d="M12 11H8v7h4v-7z" opacity=".4"/>
  <path d="M16 11h-4v7h4v-7z" opacity=".6"/>
  <path d="M20 11h-4v7h4v-7z" opacity=".4"/>
  <path d="M23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75zM21.37 5.75l-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.68c0-.38-.28-.79-.63-.93zM12 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.37 2.15l9 3.6c.35.14.63.56.63.93V10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0zM22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v3zM4 18v-7M8 18v-7M12 18v-7M16 18v-7M20 18v-7M1 22h22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M21 11.75H3c-.96 0-1.75-.79-1.75-1.75V6.68c0-.68.47-1.37 1.1-1.62l9-3.6c.38-.15.92-.15 1.3 0l9 3.6c.63.25 1.1.95 1.1 1.62V10c0 .96-.79 1.75-1.75 1.75zm-9-8.91c-.04 0-.08 0-.1.01l-8.99 3.6c-.06.03-.16.16-.16.23V10c0 .14.11.25.25.25h18c.14 0 .25-.11.25-.25V6.68c0-.07-.09-.2-.16-.23l-9-3.6c-.02-.01-.05-.01-.09-.01zM22 22.75H2c-.41 0-.75-.34-.75-.75v-3c0-.96.79-1.75 1.75-1.75h18c.96 0 1.75.79 1.75 1.75v3c0 .41-.34.75-.75.75zm-19.25-1.5h18.5V19c0-.14-.11-.25-.25-.25H3c-.14 0-.25.11-.25.25v2.25z"/>
  <path d="M4 18.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM8 18.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM12 18.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM16 18.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM20 18.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75zM12 9.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 4.75 12 4.75 14.25 5.76 14.25 7 13.24 9.25 12 9.25zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.37 2.15l9 3.6c.35.14.63.56.63.93V10c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6.68c0-.37.28-.79.63-.93l9-3.6c.2-.08.54-.08.74 0zM22 22H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M4 18v-7M8 18v-7M12 18v-7M16 18v-7M20 18v-7" opacity=".4"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M1 22h22"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" opacity=".4"/>`
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
