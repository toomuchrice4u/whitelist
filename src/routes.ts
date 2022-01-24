import {
  Home as HomeIcon,
  MiscellaneousServices as MiscellaneousServicesIcon,
  ShoppingBag as ShoppingBagIcon,
  LocalPhone as LocalPhoneIcon
} from '@mui/icons-material'

import type { SvgIconProps } from '@mui/material/SvgIcon'

export interface NavItem {
  icon: (props: SvgIconProps) => JSX.Element
  name: string
  href: string
}

const navigation: NavItem[] = [
  { icon: HomeIcon, name: 'Home', href: '/' },
  {
    icon: MiscellaneousServicesIcon,
    name: 'Services',
    href: '/services'
  },
  {
    icon: ShoppingBagIcon,
    name: 'Products',
    href: '/products'
  },
  { icon: LocalPhoneIcon, name: 'Contact Us', href: '/contact' }
]

export default navigation
