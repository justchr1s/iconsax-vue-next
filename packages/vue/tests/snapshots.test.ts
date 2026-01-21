import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { IsHome, IsSetting, IsHeart, IsUser, IsSearchNormal } from '../src'

describe('Icon Snapshots', () => {
  const icons = [
    { name: 'IsHome', component: IsHome },
    { name: 'IsSetting', component: IsSetting },
    { name: 'IsHeart', component: IsHeart },
    { name: 'IsUser', component: IsUser },
    { name: 'IsSearchNormal', component: IsSearchNormal },
  ]

  const variants = ['linear', 'bold', 'outline', 'bulk', 'broken', 'twotone'] as const

  icons.forEach(({ name, component }) => {
    describe(name, () => {
      variants.forEach(variant => {
        it(`${variant} variant matches snapshot`, () => {
          const wrapper = mount(component, {
            props: { variant },
          })

          expect(wrapper.html()).toMatchSnapshot()
        })
      })
    })
  })
})

describe('Icon with Custom Props Snapshots', () => {
  it('IsHome with custom size and color matches snapshot', () => {
    const wrapper = mount(IsHome, {
      props: {
        size: 48,
        color: '#6366f1',
        variant: 'bold',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('IsSetting with string size matches snapshot', () => {
    const wrapper = mount(IsSetting, {
      props: {
        size: '2rem',
        color: 'red',
      },
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
