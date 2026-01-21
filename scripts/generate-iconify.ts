/**
 * Generate Iconify JSON format from SVG icons
 * Run with: npx tsx scripts/generate-iconify.ts
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, basename } from 'path'

const ICONS_DIR = './icons'
const OUTPUT_FILE = './packages/iconify/icons.json'
const TYPES_FILE = './packages/iconify/index.d.ts'

const VARIANTS = ['bold', 'broken', 'bulk', 'linear', 'outline', 'twotone'] as const

interface IconifyIcon {
  body: string
  width?: number
  height?: number
}

interface IconifyJSON {
  prefix: string
  info: {
    name: string
    total: number
    author: {
      name: string
      url: string
    }
    license: {
      title: string
      spdx: string
    }
    samples: string[]
    palette: boolean
    category: string
  }
  icons: Record<string, IconifyIcon>
  width: number
  height: number
}

// Extract body content from SVG
function extractSvgBody(svgContent: string): string {
  // Remove XML declaration if present
  let content = svgContent.replace(/<\?xml[^>]*\?>/g, '').trim()
  
  // Extract content between <svg> tags
  const match = content.match(/<svg[^>]*>([\s\S]*)<\/svg>/i)
  if (match) {
    return match[1].trim()
  }
  
  return content
}

// Get viewBox dimensions
function getViewBox(svgContent: string): { width: number; height: number } {
  const match = svgContent.match(/viewBox="([^"]+)"/)
  if (match) {
    const [, , , w, h] = match[1].split(/\s+/).map(Number)
    if (!isNaN(w) && !isNaN(h)) {
      return { width: w || 24, height: h || 24 }
    }
  }
  return { width: 24, height: 24 }
}

async function main() {
  console.log('🚀 Generating Iconify JSON format...\n')

  const icons: Record<string, IconifyIcon> = {}
  const iconNames = new Set<string>()

  // Process each variant
  for (const variant of VARIANTS) {
    const variantDir = join(ICONS_DIR, variant)
    if (!existsSync(variantDir)) {
      console.warn(`⚠️  Variant directory not found: ${variantDir}`)
      continue
    }

    const files = readdirSync(variantDir).filter(f => f.endsWith('.svg'))
    
    for (const file of files) {
      const iconName = basename(file, '.svg')
      iconNames.add(iconName)
      
      const svgContent = readFileSync(join(variantDir, file), 'utf-8')
      const body = extractSvgBody(svgContent)
      const { width, height } = getViewBox(svgContent)
      
      // Icon name format: iconname-variant (e.g., home-bold, setting-linear)
      const fullName = `${iconName}-${variant}`
      
      icons[fullName] = {
        body,
        ...(width !== 24 && { width }),
        ...(height !== 24 && { height })
      }
    }
  }

  // Create Iconify JSON structure
  const iconifyJson: IconifyJSON = {
    prefix: 'iconsax',
    info: {
      name: 'Iconsax',
      total: Object.keys(icons).length,
      author: {
        name: 'Vuesax',
        url: 'https://iconsax.io'
      },
      license: {
        title: 'MIT',
        spdx: 'MIT'
      },
      samples: ['home-bold', 'setting-linear', 'user-outline'],
      palette: false,
      category: 'General'
    },
    icons,
    width: 24,
    height: 24
  }

  // Write icons.json
  writeFileSync(OUTPUT_FILE, JSON.stringify(iconifyJson, null, 2))
  console.log(`✅ Generated ${OUTPUT_FILE}`)

  // Generate TypeScript types
  const iconNamesArray = Array.from(iconNames).sort()
  const allIconNames: string[] = []
  
  for (const name of iconNamesArray) {
    for (const variant of VARIANTS) {
      allIconNames.push(`${name}-${variant}`)
    }
  }

  const typesContent = `// Auto-generated types for @iconify-json/iconsax

export type IconsaxIconName = 
${allIconNames.map(n => `  | '${n}'`).join('\n')}

export interface IconifyJSON {
  prefix: 'iconsax'
  icons: Record<IconsaxIconName, { body: string; width?: number; height?: number }>
  width: number
  height: number
}

declare const icons: IconifyJSON
export default icons
`

  writeFileSync(TYPES_FILE, typesContent)
  console.log(`✅ Generated ${TYPES_FILE}`)

  console.log(`\n📊 Stats:`)
  console.log(`   - Unique icons: ${iconNames.size}`)
  console.log(`   - Variants: ${VARIANTS.length}`)
  console.log(`   - Total icons: ${Object.keys(icons).length}`)
  console.log(`\n✨ Done! Use with Nuxt Icon:`)
  console.log(`   <Icon name="iconsax:home-bold" />`)
  console.log(`   <Icon name="iconsax:setting-linear" />`)
}

main().catch(console.error)
