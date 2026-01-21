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
    content: `<path d="M6.67 14H4c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM13.33 10h-2.67c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1h4.67c.55 0 1-.45 1-1v-9a2 2 0 00-2-2zM20 17h-2.67c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1H21c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2zM15.01 4.85c.31-.31.43-.68.33-1-.1-.32-.41-.55-.85-.62l-.96-.16c-.04 0-.13-.07-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.01.04-.1.11-.14.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.04.03.07.15.06.19l-.21.92c-.16.69.1 1 .27 1.12.17.12.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.89.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19l.75-.75z"/>`,
    isStroke: false
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M15.33 12c0-1.1-.9-2-2-2h-2.67c-1.1 0-2 .9-2 2v10h6.67v-6M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.52 2.07l.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 00-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01z"/>`,
    isStroke: true
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M13.3 8.11l1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46L17 16.25c-.31.31-.49.92-.39 1.36l.53 2.31c.42 1.82-.55 2.53-2.16 1.58l-2.24-1.33c-.41-.24-1.07-.24-1.48 0L9.02 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.71-1.43 1.89-1.43 2.6 0z"/>
  <path d="M6 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM18 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75zM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75z" opacity=".4"/>`,
    isStroke: false
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 00-2-2zM20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.52 2.07l.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 00-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01z"/>`,
    isStroke: true
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M8.67 22.75H2c-.41 0-.75-.34-.75-.75v-6c0-1.52 1.23-2.75 2.75-2.75h4.67c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75zm-5.92-1.5h5.17v-6.5H4c-.69 0-1.25.56-1.25 1.25v5.25z"/>
  <path d="M15.33 22.75H8.66c-.41 0-.75-.34-.75-.75V12c0-1.52 1.23-2.75 2.75-2.75h2.67c1.52 0 2.75 1.23 2.75 2.75v10c0 .41-.33.75-.75.75zm-5.91-1.5h5.17V12c0-.69-.56-1.25-1.25-1.25h-2.67c-.69 0-1.25.56-1.25 1.25v9.25z"/>
  <path d="M22 22.75h-6.67c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75H20c1.52 0 2.75 1.23 2.75 2.75v3c0 .41-.34.75-.75.75zm-5.92-1.5h5.17V19c0-.69-.56-1.25-1.25-1.25h-3.92v3.5zM13.699 8.35c-.24 0-.54-.07-.88-.27l-.82-.49-.81.48c-.82.49-1.36.2-1.56.06-.2-.14-.63-.58-.42-1.5l.19-.83-.68-.68c-.42-.42-.57-.92-.42-1.38.15-.46.56-.78 1.14-.88l.87-.15.49-.98c.54-1.07 1.85-1.07 2.38 0l.49.98.87.15c.58.1 1 .42 1.14.88.15.46-.01.96-.42 1.38l-.68.68.19.83c.21.93-.22 1.36-.42 1.51-.09.08-.32.21-.65.21zm-1.7-2.27c.24 0 .48.06.68.18l.56.33-.12-.54c-.1-.42.05-.93.36-1.24l.51-.51-.63-.11c-.4-.07-.79-.36-.97-.72l-.39-.75-.38.75c-.18.36-.57.65-.97.72l-.63.1.51.51c.31.31.45.82.36 1.24l-.12.54.56-.33c.19-.12.43-.17.67-.17z"/>`,
    isStroke: false
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67v-8z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 00-2-2zM20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.52 2.07l.53 1.06c.07.15.26.29.42.31l.96.16c.61.1.76.55.32.98l-.75.75c-.13.13-.2.37-.16.54l.21.92c.17.73-.22 1.01-.86.63l-.9-.53c-.16-.1-.43-.1-.59 0l-.9.53c-.64.38-1.03.1-.86-.63l.21-.92a.63.63 0 00-.16-.54l-.74-.74c-.44-.44-.3-.88.32-.98l.96-.16c.16-.03.35-.17.42-.31l.53-1.06c.29-.58.75-.58 1.04-.01z" opacity=".4"/>`,
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
