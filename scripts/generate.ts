/**
 * Generate Vue components from SVG icons
 * Run with: npx tsx scripts/generate.ts
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync } from 'fs'
import { join, basename } from 'path'

const ICONS_DIR = './icons'
const OUTPUT_DIR = './packages/vue/src'
const VARIANTS = ['bold', 'broken', 'bulk', 'linear', 'outline', 'twotone'] as const

type Variant = (typeof VARIANTS)[number]

interface IconData {
  name: string
  kebabName: string
  pascalName: string
  svgs: Partial<Record<Variant, string>>
}

// Utils
function sanitizeName(str: string): string {
  // Replace special characters with valid alternatives
  return str
    .replace(/&/g, '-and-')
    .replace(/[^a-zA-Z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function kebabToPascal(str: string): string {
  return sanitizeName(str)
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function pascalToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

// Parse SVG and extract inner content
function parseSvg(svgContent: string): {
  viewBox: string
  content: string
  attrs: Record<string, string>
  isStrokeBased: boolean
} {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24'

  // Extract attributes from svg tag
  const svgTagMatch = svgContent.match(/<svg([^>]*)>/)
  const attrs: Record<string, string> = {}

  if (svgTagMatch) {
    const attrString = svgTagMatch[1]
    const attrMatches = attrString.matchAll(/(\w+(?:-\w+)*)="([^"]+)"/g)
    for (const match of attrMatches) {
      const [, name, value] = match
      if (name !== 'xmlns' && name !== 'viewBox') {
        attrs[name] = value
      }
    }
  }

  // Determine if stroke-based (has stroke="currentColor" on svg tag or fill="none")
  const isStrokeBased = svgContent.includes('stroke="currentColor"') || attrs['fill'] === 'none'

  // Extract inner content and replace hardcoded colors with currentColor
  let content = svgContent
    .replace(/<svg[^>]*>/, '')
    .replace(/<\/svg>/, '')
    .trim()

  // Replace hardcoded Iconsax colors with currentColor
  content = content
    .replace(/fill="#292D32"/g, 'fill="currentColor"')
    .replace(/stroke="#292D32"/g, 'stroke="currentColor"')

  return { viewBox, content, attrs, isStrokeBased }
}

// Generate component template for a single icon
function generateIconComponent(icon: IconData): string {
  const svgDataMap: Record<
    string,
    { viewBox: string; content: string; attrs: Record<string, string>; isStrokeBased: boolean }
  > = {}

  for (const variant of VARIANTS) {
    const svg = icon.svgs[variant]
    if (svg) {
      svgDataMap[variant] = parseSvg(svg)
    }
  }

  // Use linear as default, fallback to first available
  const defaultVariant = svgDataMap.linear ? 'linear' : Object.keys(svgDataMap)[0]
  const defaultData = svgDataMap[defaultVariant]

  return `<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from '../types'

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor',
  variant: 'linear'
})

const svgSize = computed(() =>
  typeof props.size === 'number' ? \`\${props.size}px\` : props.size
)

const svgData = {
${VARIANTS.map(v => {
  const data = svgDataMap[v]
  if (!data) return `  ${v}: null`
  return `  ${v}: {
    viewBox: '${data.viewBox}',
    content: \`${data.content.replace(/`/g, '\\`')}\`,
    isStroke: ${data.isStrokeBased}
  }`
}).join(',\n')}
}

const currentVariant = computed(() => svgData[props.variant] || svgData.${defaultVariant})
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
`
}

// Generate the dynamic IsIcon component
function generateDynamicIconComponent(iconNames: string[]): string {
  return `<script setup lang="ts">
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
${iconNames.map(name => `  '${name}': () => import('./Is${kebabToPascal(name)}.vue')`).join(',\n')}
}

const IconComponent = computed(() => {
  const loader = iconComponents[props.name]
  if (!loader) {
    console.warn(\`[Iconsax] Icon "\${props.name}" not found\`)
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
`
}

// Generate TypeScript types
function generateTypes(iconNames: string[]): string {
  return `// Auto-generated types - do not edit manually

export const iconNames = [
${iconNames.map(n => `  '${n}'`).join(',\n')}
] as const

export type IconName = typeof iconNames[number]

export const iconVariants = ['bold', 'broken', 'bulk', 'linear', 'outline', 'twotone'] as const

export type IconVariant = typeof iconVariants[number]

export interface IconProps {
  /**
   * Icon size in pixels or CSS string
   * @default 24
   */
  size?: number | string
  
  /**
   * Icon color
   * @default 'currentColor'
   */
  color?: string
  
  /**
   * Icon variant style
   * @default 'linear'
   */
  variant?: IconVariant
}

export interface DynamicIconProps extends IconProps {
  /**
   * Icon name
   */
  name: IconName
}
`
}

// Reserved names that conflict with dynamic IsIcon component
const RESERVED_NAMES = ['icon']

// Generate main index.ts
function generateIndex(iconNames: string[]): string {
  const imports = iconNames.map(name => {
    const pascal = kebabToPascal(name)
    return `export { default as Is${pascal} } from './components/Is${pascal}.vue'`
  })

  return `// Auto-generated - do not edit manually

// Types
export * from './types'

// Dynamic component
export { default as IsIcon } from './components/IsIcon.vue'

// Individual icon components
${imports.join('\n')}
`
}

// Main
async function main() {
  console.log('🚀 Generating Vue components from SVG icons...\n')

  // Clean output
  const componentsDir = join(OUTPUT_DIR, 'components')
  if (existsSync(componentsDir)) {
    rmSync(componentsDir, { recursive: true })
  }
  mkdirSync(componentsDir, { recursive: true })

  // Collect all icons
  const iconsMap = new Map<string, IconData>()

  for (const variant of VARIANTS) {
    const variantDir = join(ICONS_DIR, variant)
    if (!existsSync(variantDir)) {
      console.warn(`⚠️  Variant directory not found: ${variantDir}`)
      continue
    }

    const files = readdirSync(variantDir).filter(f => f.endsWith('.svg'))

    for (const file of files) {
      const rawName = basename(file, '.svg')
      const kebabName = sanitizeName(rawName)
      const svgContent = readFileSync(join(variantDir, file), 'utf-8')

      if (!iconsMap.has(kebabName)) {
        iconsMap.set(kebabName, {
          name: kebabName,
          kebabName,
          pascalName: kebabToPascal(kebabName),
          svgs: {},
        })
      }

      iconsMap.get(kebabName)!.svgs[variant] = svgContent
    }
  }

  // Filter out reserved names that conflict with dynamic component
  const icons = Array.from(iconsMap.values())
    .filter(icon => !RESERVED_NAMES.includes(icon.kebabName))
    .sort((a, b) => a.name.localeCompare(b.name))
  const iconNames = icons.map(i => i.kebabName)

  console.log(`📦 Found ${icons.length} unique icons`)
  console.log(`📁 Generating components...\n`)

  // Generate individual components
  for (const icon of icons) {
    const componentCode = generateIconComponent(icon)
    const componentPath = join(componentsDir, `Is${icon.pascalName}.vue`)
    writeFileSync(componentPath, componentCode)
    console.log(`  ✓ Is${icon.pascalName}`)
  }

  // Generate dynamic component
  const dynamicComponent = generateDynamicIconComponent(iconNames)
  writeFileSync(join(componentsDir, 'IsIcon.vue'), dynamicComponent)
  console.log(`  ✓ IsIcon (dynamic)`)

  // Generate types
  const types = generateTypes(iconNames)
  writeFileSync(join(OUTPUT_DIR, 'types.ts'), types)
  console.log(`\n📝 Generated types.ts`)

  // Generate index
  const index = generateIndex(iconNames)
  writeFileSync(join(OUTPUT_DIR, 'index.ts'), index)
  console.log(`📝 Generated index.ts`)

  console.log(`\n✨ Done! Generated ${icons.length} components + 1 dynamic component`)
  console.log(`\n📊 Stats:`)
  console.log(`   - Total icons: ${icons.length}`)
  console.log(`   - Variants: ${VARIANTS.length}`)
  console.log(`   - Components: ${icons.length + 1}`)
}

main().catch(console.error)
