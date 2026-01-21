<script setup lang="ts">
import { computed, defineAsyncComponent, type Component } from 'vue'
import type { IconName, IconVariant } from '../types'

const props = withDefaults(defineProps<{
  name: IconName
  size?: number | string
  color?: string
  variant?: IconVariant
}>(), {
  size: 24,
  color: 'currentColor',
  variant: 'linear'
})

// Icon component map for dynamic loading
const iconComponents: Record<string, () => Promise<Component>> = {
  'heart': () => import('./IsHeart.vue'),
  'home': () => import('./IsHome.vue'),
  'search-normal': () => import('./IsSearchNormal.vue'),
  'setting': () => import('./IsSetting.vue'),
  'user': () => import('./IsUser.vue')
}

const IconComponent = computed(() => {
  const loader = iconComponents[props.name]
  if (!loader) {
    console.warn(`[Iconsax] Icon "${props.name}" not found`)
    return null
  }
  return defineAsyncComponent(loader)
})
</script>

<template>
  <component 
    v-if="IconComponent"
    :is="IconComponent"
    :size="size"
    :color="color"
    :variant="variant"
  />
</template>
