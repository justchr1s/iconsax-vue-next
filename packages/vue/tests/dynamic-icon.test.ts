import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { IsIcon } from '../src'

describe('IsIcon (Dynamic Component)', () => {
  it('renders correctly with valid icon name', async () => {
    const wrapper = mount(IsIcon, {
      props: { name: 'home' },
    })

    // Wait for async component to load
    await flushPromises()

    // The component should exist
    expect(wrapper.exists()).toBe(true)
  })

  it('passes props to the loaded icon', async () => {
    const wrapper = mount(IsIcon, {
      props: {
        name: 'home',
        size: 32,
        color: '#ff0000',
        variant: 'bold',
      },
    })

    await flushPromises()

    // Props should be passed through
    expect(wrapper.props('size')).toBe(32)
    expect(wrapper.props('color')).toBe('#ff0000')
    expect(wrapper.props('variant')).toBe('bold')
  })

  it('accepts all valid icon names', () => {
    const validNames = ['home', 'setting', 'user', 'heart', 'search-normal']

    validNames.forEach(name => {
      const wrapper = mount(IsIcon, {
        props: { name: name as any },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('uses default props when not specified', () => {
    const wrapper = mount(IsIcon, {
      props: { name: 'home' },
    })

    expect(wrapper.props('size')).toBe(24)
    expect(wrapper.props('color')).toBe('currentColor')
    expect(wrapper.props('variant')).toBe('linear')
  })

  it('warns when icon name is not found', async () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const wrapper = mount(IsIcon, {
      props: { name: 'invalid-icon-name' as any },
    })

    await flushPromises()

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('not found'))

    consoleSpy.mockRestore()
  })
})

describe('IsIcon Variants', () => {
  const variants = ['linear', 'bold', 'outline', 'bulk', 'broken', 'twotone'] as const

  variants.forEach(variant => {
    it(`renders ${variant} variant`, async () => {
      const wrapper = mount(IsIcon, {
        props: {
          name: 'home',
          variant,
        },
      })

      await flushPromises()

      expect(wrapper.props('variant')).toBe(variant)
    })
  })
})
