import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import { iconNames } from '@ratoufa/iconsax-vue'

export interface ModuleOptions {
  /**
   * Prefix for icon components
   * @default 'Is'
   */
  prefix?: string
  
  /**
   * Register all icons globally (increases bundle size)
   * @default false
   */
  global?: boolean
}

function kebabToPascal(str: string): string {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@ratoufa/iconsax-nuxt',
    configKey: 'iconsax',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    prefix: 'Is',
    global: false
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    
    // Add the dynamic IsIcon component (always available)
    addComponent({
      name: `${options.prefix}Icon`,
      filePath: '@ratoufa/iconsax-vue',
      export: 'IsIcon'
    })
    
    // If global is true, register all icons
    if (options.global) {
      for (const iconName of iconNames) {
        const pascalName = kebabToPascal(iconName)
        addComponent({
          name: `${options.prefix}${pascalName}`,
          filePath: '@ratoufa/iconsax-vue',
          export: `Is${pascalName}`
        })
      }
    }
    
    // Add types
    nuxt.hook('prepare:types', ({ references }) => {
      references.push({
        types: '@ratoufa/iconsax-vue'
      })
    })
    
    // Transpile the package
    nuxt.options.build.transpile.push('@ratoufa/iconsax-vue')
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    iconsax?: ModuleOptions
  }
  interface NuxtOptions {
    iconsax?: ModuleOptions
  }
}
