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
    content: `<path d="M16 1.969H8c-4 0-6 2-6 6v5c0 5 2 6 6 6h.5c.28 0 .64.18.8.4l1.5 2c.66.88 1.74.88 2.4 0l1.5-2c.19-.25.49-.4.8-.4h.5c4 0 6-2 6-6v-5c0-4-2-6-6-6zm-7.47 10.2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47zm5.16-3.51l-2 4.67c-.12.28-.4.45-.69.45a.745.745 0 01-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.17.55.61.39.99zm4.84 2.57l-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.47-1.47-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06z"/>`
  },
  broken: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M22 12v.97c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 8.7l-2 2 2 2M16 8.7l2 2-2 2M13 8.37l-2 4.66"/>`
  },
  bulk: {
    viewBox: '0 0 24 24',
    content: `<path d="M8.5 18.97H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4z" opacity=".4"/>
  <path d="M8 13.45c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 10.7l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16 13.45c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.47-1.47-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22zM11 13.78a.745.745 0 01-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45z"/>`
  },
  linear: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.5 18.97H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 8.7l-2 2 2 2M16 8.7l2 2-2 2M13 8.37l-2 4.66"/>`
  },
  outline: {
    viewBox: '0 0 24 24',
    content: `<path d="M12 22.78c-.69 0-1.34-.35-1.8-.96l-1.5-2a.473.473 0 00-.2-.1H8c-4.17 0-6.75-1.13-6.75-6.75v-5c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96zM8 2.72c-3.58 0-5.25 1.67-5.25 5.25v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25v-5c0-3.58-1.67-5.25-5.25-5.25H8z"/>
  <path d="M8 13.45c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 010-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 10.7l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16 13.45c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.47-1.47-1.47-1.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22zM11 13.78a.745.745 0 01-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45z"/>`
  },
  twotone: {
    viewBox: '0 0 24 24',
    content: `<path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8.5 18.97H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 8.7l-2 2 2 2M16 8.7l2 2-2 2M13 8.37l-2 4.66" opacity=".4"/>`
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
