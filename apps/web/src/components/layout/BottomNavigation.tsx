'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  ShoppingBagIcon, 
  CubeIcon, 
  WrenchScrewdriverIcon,
  UserIcon 
} from '@heroicons/react/24/outline'
import {
  HomeIcon as HomeIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  CubeIcon as CubeIconSolid,
  WrenchScrewdriverIcon as WrenchScrewdriverIconSolid,
  UserIcon as UserIconSolid
} from '@heroicons/react/24/solid'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, iconSolid: HomeIconSolid },
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingBagIcon, iconSolid: ShoppingBagIconSolid },
  { name: '3D Showcase', href: '/showcase', icon: CubeIcon, iconSolid: CubeIconSolid },
  { name: 'QuickServ', href: '/services', icon: WrenchScrewdriverIcon, iconSolid: WrenchScrewdriverIconSolid },
  { name: 'Profile', href: '/profile', icon: UserIcon, iconSolid: UserIconSolid },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="grid grid-cols-5 h-16">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = isActive ? item.iconSolid : item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                isActive 
                  ? 'text-primary-500' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}