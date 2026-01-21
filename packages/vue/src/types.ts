// Auto-generated types - do not edit manually

export const iconNames = [
  'heart',
  'home',
  'search-normal',
  'setting',
  'user'
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
