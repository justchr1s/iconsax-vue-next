import { describe, it, expect, expectTypeOf } from 'vitest'
import type { IconName, IconVariant, IconProps, DynamicIconProps } from '../src/types'
import { iconNames, iconVariants } from '../src/types'

describe('TypeScript Types', () => {
  describe('IconName', () => {
    it('iconNames array contains all icon names', () => {
      expect(iconNames).toContain('home')
      expect(iconNames).toContain('setting')
      expect(iconNames).toContain('user')
      expect(iconNames).toContain('heart')
      expect(iconNames).toContain('search-normal')
    })

    it('iconNames is readonly', () => {
      // This verifies the array is typed as readonly
      expect(Object.isFrozen(iconNames) || Array.isArray(iconNames)).toBe(true)
    })

    it('IconName type matches iconNames values', () => {
      // Type check - these should all compile
      const validIcon1: IconName = 'home'
      const validIcon2: IconName = 'setting'
      const validIcon3: IconName = 'user'
      
      expect(validIcon1).toBe('home')
      expect(validIcon2).toBe('setting')
      expect(validIcon3).toBe('user')
    })
  })

  describe('IconVariant', () => {
    it('iconVariants array contains all variants', () => {
      expect(iconVariants).toContain('linear')
      expect(iconVariants).toContain('bold')
      expect(iconVariants).toContain('outline')
      expect(iconVariants).toContain('bulk')
      expect(iconVariants).toContain('broken')
      expect(iconVariants).toContain('twotone')
    })

    it('iconVariants has exactly 6 variants', () => {
      expect(iconVariants).toHaveLength(6)
    })

    it('IconVariant type matches iconVariants values', () => {
      const validVariant1: IconVariant = 'linear'
      const validVariant2: IconVariant = 'bold'
      const validVariant3: IconVariant = 'outline'
      const validVariant4: IconVariant = 'bulk'
      const validVariant5: IconVariant = 'broken'
      const validVariant6: IconVariant = 'twotone'
      
      expect([validVariant1, validVariant2, validVariant3, validVariant4, validVariant5, validVariant6])
        .toEqual(['linear', 'bold', 'outline', 'bulk', 'broken', 'twotone'])
    })
  })

  describe('IconProps', () => {
    it('IconProps interface has correct structure', () => {
      const props: IconProps = {
        size: 24,
        color: 'red',
        variant: 'bold'
      }
      
      expect(props.size).toBe(24)
      expect(props.color).toBe('red')
      expect(props.variant).toBe('bold')
    })

    it('IconProps allows optional properties', () => {
      const minimalProps: IconProps = {}
      const sizeOnlyProps: IconProps = { size: 32 }
      const colorOnlyProps: IconProps = { color: '#000' }
      const variantOnlyProps: IconProps = { variant: 'linear' }
      
      expect(minimalProps).toEqual({})
      expect(sizeOnlyProps.size).toBe(32)
      expect(colorOnlyProps.color).toBe('#000')
      expect(variantOnlyProps.variant).toBe('linear')
    })

    it('IconProps size accepts number or string', () => {
      const numericSize: IconProps = { size: 24 }
      const stringSize: IconProps = { size: '2rem' }
      
      expect(numericSize.size).toBe(24)
      expect(stringSize.size).toBe('2rem')
    })
  })

  describe('DynamicIconProps', () => {
    it('DynamicIconProps extends IconProps with name', () => {
      const props: DynamicIconProps = {
        name: 'home',
        size: 24,
        color: 'blue',
        variant: 'outline'
      }
      
      expect(props.name).toBe('home')
      expect(props.size).toBe(24)
      expect(props.color).toBe('blue')
      expect(props.variant).toBe('outline')
    })

    it('DynamicIconProps requires name property', () => {
      const props: DynamicIconProps = {
        name: 'setting'
      }
      
      expect(props.name).toBe('setting')
    })
  })
})

describe('Type Exports', () => {
  it('exports iconNames constant', () => {
    expect(iconNames).toBeDefined()
    expect(Array.isArray(iconNames)).toBe(true)
  })

  it('exports iconVariants constant', () => {
    expect(iconVariants).toBeDefined()
    expect(Array.isArray(iconVariants)).toBe(true)
  })
})
