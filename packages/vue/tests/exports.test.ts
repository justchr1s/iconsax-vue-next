import { describe, it, expect } from 'vitest'
import * as IconsaxVue from '../src'

describe('Package Exports', () => {
  describe('Component Exports', () => {
    it('exports IsIcon dynamic component', () => {
      expect(IconsaxVue.IsIcon).toBeDefined()
    })

    it('exports IsHome component', () => {
      expect(IconsaxVue.IsHome).toBeDefined()
    })

    it('exports IsSetting component', () => {
      expect(IconsaxVue.IsSetting).toBeDefined()
    })

    it('exports IsHeart component', () => {
      expect(IconsaxVue.IsHeart).toBeDefined()
    })

    it('exports IsUser component', () => {
      expect(IconsaxVue.IsUser).toBeDefined()
    })

    it('exports IsSearchNormal component', () => {
      expect(IconsaxVue.IsSearchNormal).toBeDefined()
    })
  })

  describe('Type Exports', () => {
    it('exports iconNames array', () => {
      expect(IconsaxVue.iconNames).toBeDefined()
      expect(Array.isArray(IconsaxVue.iconNames)).toBe(true)
      expect(IconsaxVue.iconNames.length).toBeGreaterThan(0)
    })

    it('exports iconVariants array', () => {
      expect(IconsaxVue.iconVariants).toBeDefined()
      expect(Array.isArray(IconsaxVue.iconVariants)).toBe(true)
      expect(IconsaxVue.iconVariants).toHaveLength(6)
    })
  })

  describe('Export Consistency', () => {
    it('all iconNames have corresponding components', () => {
      const expectedComponents = IconsaxVue.iconNames.map(name => {
        // Convert kebab-case to PascalCase with Is prefix
        const pascalName = name
          .split('-')
          .map(part => part.charAt(0).toUpperCase() + part.slice(1))
          .join('')
        return `Is${pascalName}`
      })

      expectedComponents.forEach(componentName => {
        expect(IconsaxVue).toHaveProperty(componentName)
      })
    })

    it('iconVariants contains all expected variants', () => {
      const expectedVariants = ['bold', 'broken', 'bulk', 'linear', 'outline', 'twotone']

      expectedVariants.forEach(variant => {
        expect(IconsaxVue.iconVariants).toContain(variant)
      })
    })
  })
})

describe('Named Imports', () => {
  it('supports named imports for components', () => {
    const { IsHome, IsSetting, IsUser } = IconsaxVue

    expect(IsHome).toBeDefined()
    expect(IsSetting).toBeDefined()
    expect(IsUser).toBeDefined()
  })

  it('supports named imports for types', () => {
    const { iconNames, iconVariants } = IconsaxVue

    expect(iconNames).toBeDefined()
    expect(iconVariants).toBeDefined()
  })
})
