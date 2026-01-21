// Auto-generated types for @iconify-json/iconsax

export type IconsaxIconName = 
  | 'heart-bold'
  | 'heart-broken'
  | 'heart-bulk'
  | 'heart-linear'
  | 'heart-outline'
  | 'heart-twotone'
  | 'home-bold'
  | 'home-broken'
  | 'home-bulk'
  | 'home-linear'
  | 'home-outline'
  | 'home-twotone'
  | 'search-normal-bold'
  | 'search-normal-broken'
  | 'search-normal-bulk'
  | 'search-normal-linear'
  | 'search-normal-outline'
  | 'search-normal-twotone'
  | 'setting-bold'
  | 'setting-broken'
  | 'setting-bulk'
  | 'setting-linear'
  | 'setting-outline'
  | 'setting-twotone'
  | 'user-bold'
  | 'user-broken'
  | 'user-bulk'
  | 'user-linear'
  | 'user-outline'
  | 'user-twotone'

export interface IconifyJSON {
  prefix: 'iconsax'
  icons: Record<IconsaxIconName, { body: string; width?: number; height?: number }>
  width: number
  height: number
}

declare const icons: IconifyJSON
export default icons
