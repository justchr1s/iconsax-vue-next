import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { IsHome, IsSetting, IsHeart, IsUser, IsSearchNormal } from '../src'

describe('Icon Components', () => {
  describe('IsHome', () => {
    it('renders correctly with default props', () => {
      const wrapper = mount(IsHome)
      const svg = wrapper.find('svg')
      
      expect(svg.exists()).toBe(true)
      expect(svg.attributes('xmlns')).toBe('http://www.w3.org/2000/svg')
      expect(svg.attributes('width')).toBe('24px')
      expect(svg.attributes('height')).toBe('24px')
    })

    it('applies custom size as number', () => {
      const wrapper = mount(IsHome, {
        props: { size: 32 }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('width')).toBe('32px')
      expect(svg.attributes('height')).toBe('32px')
    })

    it('applies custom size as string', () => {
      const wrapper = mount(IsHome, {
        props: { size: '2rem' }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('width')).toBe('2rem')
      expect(svg.attributes('height')).toBe('2rem')
    })

    it('applies custom color', () => {
      const wrapper = mount(IsHome, {
        props: { color: '#ff0000' }
      })
      const svg = wrapper.find('svg')
      
      // Linear variant uses stroke
      expect(svg.attributes('stroke')).toBe('#ff0000')
    })

    it('renders bold variant correctly', () => {
      const wrapper = mount(IsHome, {
        props: { variant: 'bold' }
      })
      const svg = wrapper.find('svg')
      
      // Bold variant uses fill
      expect(svg.attributes('fill')).toBe('currentColor')
    })

    it('renders linear variant correctly', () => {
      const wrapper = mount(IsHome, {
        props: { variant: 'linear' }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('stroke')).toBe('currentColor')
      expect(svg.attributes('fill')).toBe('none')
    })

    it('renders outline variant correctly', () => {
      const wrapper = mount(IsHome, {
        props: { variant: 'outline' }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('stroke')).toBe('currentColor')
    })

    it('renders bulk variant correctly', () => {
      const wrapper = mount(IsHome, {
        props: { variant: 'bulk' }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('fill')).toBe('currentColor')
    })

    it('renders broken variant correctly', () => {
      const wrapper = mount(IsHome, {
        props: { variant: 'broken' }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('stroke')).toBe('currentColor')
    })

    it('renders twotone variant correctly', () => {
      const wrapper = mount(IsHome, {
        props: { variant: 'twotone' }
      })
      const svg = wrapper.find('svg')
      
      expect(svg.attributes('stroke')).toBe('currentColor')
    })
  })

  describe('IsSetting', () => {
    it('renders correctly', () => {
      const wrapper = mount(IsSetting)
      expect(wrapper.find('svg').exists()).toBe(true)
    })

    it('applies all variants', () => {
      const variants = ['linear', 'bold', 'outline', 'bulk', 'broken', 'twotone'] as const
      
      variants.forEach(variant => {
        const wrapper = mount(IsSetting, {
          props: { variant }
        })
        expect(wrapper.find('svg').exists()).toBe(true)
      })
    })
  })

  describe('IsHeart', () => {
    it('renders correctly', () => {
      const wrapper = mount(IsHeart)
      expect(wrapper.find('svg').exists()).toBe(true)
    })
  })

  describe('IsUser', () => {
    it('renders correctly', () => {
      const wrapper = mount(IsUser)
      expect(wrapper.find('svg').exists()).toBe(true)
    })
  })

  describe('IsSearchNormal', () => {
    it('renders correctly', () => {
      const wrapper = mount(IsSearchNormal)
      expect(wrapper.find('svg').exists()).toBe(true)
    })
  })
})

describe('Icon Component Props', () => {
  it('combines multiple props correctly', () => {
    const wrapper = mount(IsHome, {
      props: {
        size: 48,
        color: '#6366f1',
        variant: 'bold'
      }
    })
    const svg = wrapper.find('svg')
    
    expect(svg.attributes('width')).toBe('48px')
    expect(svg.attributes('height')).toBe('48px')
    expect(svg.attributes('fill')).toBe('#6366f1')
  })

  it('uses currentColor as default color', () => {
    const wrapper = mount(IsHome)
    const svg = wrapper.find('svg')
    
    expect(svg.attributes('stroke')).toBe('currentColor')
  })

  it('uses linear as default variant', () => {
    const wrapper = mount(IsHome)
    const svg = wrapper.find('svg')
    
    // Linear variant has stroke and no fill
    expect(svg.attributes('fill')).toBe('none')
    expect(svg.attributes('stroke')).toBe('currentColor')
  })
})
