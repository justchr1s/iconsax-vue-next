/**
 * Script to fetch Iconsax SVG icons from the blade-iconsax repository
 * Run with: npx tsx scripts/fetch-icons.ts
 */

import { execSync } from 'child_process'
import { existsSync, mkdirSync, readdirSync, copyFileSync, rmSync } from 'fs'
import { join } from 'path'

const REPO_URL = 'https://github.com/saade/blade-iconsax.git'
const TEMP_DIR = './temp-blade-iconsax'
const ICONS_DIR = './icons'

const VARIANT_MAP: Record<string, string> = {
  'bol': 'bold',
  'bro': 'broken', 
  'bul': 'bulk',
  'lin': 'linear',
  'out': 'outline',
  'two': 'twotone'
}

async function main() {
  console.log('🚀 Fetching Iconsax icons...\n')

  // Clean up
  if (existsSync(TEMP_DIR)) {
    console.log('🧹 Cleaning up previous temp directory...')
    rmSync(TEMP_DIR, { recursive: true })
  }

  // Clone repo
  console.log('📥 Cloning blade-iconsax repository...')
  execSync(`git clone --depth 1 ${REPO_URL} ${TEMP_DIR}`, { stdio: 'inherit' })

  // Create icon directories
  const variants = Object.values(VARIANT_MAP)
  for (const variant of variants) {
    const dir = join(ICONS_DIR, variant)
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }
  }

  // Copy and organize SVGs
  const svgDir = join(TEMP_DIR, 'resources', 'svg')
  const files = readdirSync(svgDir).filter(f => f.endsWith('.svg'))

  console.log(`\n📁 Found ${files.length} SVG files`)
  console.log('📦 Organizing icons by variant...\n')

  let count = 0
  for (const file of files) {
    // Files are named like: bol-airdrop.svg, lin-home.svg
    const [prefix, ...nameParts] = file.replace('.svg', '').split('-')
    const variant = VARIANT_MAP[prefix]
    
    if (variant && nameParts.length > 0) {
      const iconName = nameParts.join('-')
      const srcPath = join(svgDir, file)
      const destPath = join(ICONS_DIR, variant, `${iconName}.svg`)
      
      copyFileSync(srcPath, destPath)
      count++
    }
  }

  console.log(`✅ Copied ${count} icons`)

  // Get unique icon names
  const linearDir = join(ICONS_DIR, 'linear')
  const iconNames = readdirSync(linearDir)
    .filter(f => f.endsWith('.svg'))
    .map(f => f.replace('.svg', ''))
    .sort()

  console.log(`\n📊 Stats:`)
  console.log(`   - Unique icons: ${iconNames.length}`)
  console.log(`   - Variants: ${variants.length}`)
  console.log(`   - Total: ${iconNames.length * variants.length}`)

  // Clean up
  console.log('\n🧹 Cleaning up...')
  rmSync(TEMP_DIR, { recursive: true })

  console.log('\n✨ Done! Icons are ready in ./icons/')
}

main().catch(console.error)
