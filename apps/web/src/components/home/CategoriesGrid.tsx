'use client'

import { 
  ShoppingBagIcon, 
  CubeIcon, 
  WrenchScrewdriverIcon,
  TruckIcon,
  HomeIcon,
  SparklesIcon,
  HeartIcon,
  CameraIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const categories = [
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Local products & services',
    icon: ShoppingBagIcon,
    href: '/marketplace',
    color: 'bg-blue-500',
    items: '2.3k+ items'
  },
  {
    id: 'showcase',
    name: '3D Showcase',
    description: 'Virtual property tours',
    icon: CubeIcon,
    href: '/showcase',
    color: 'bg-purple-500',
    items: '150+ properties'
  },
  {
    id: 'services',
    name: 'QuickServ',
    description: 'On-demand services',
    icon: WrenchScrewdriverIcon,
    href: '/services',
    color: 'bg-green-500',
    items: '500+ providers'
  },
  {
    id: 'delivery',
    name: 'Delivery',
    description: 'Fast local delivery',
    icon: TruckIcon,
    href: '/delivery',
    color: 'bg-orange-500',
    items: 'Same day'
  },
  {
    id: 'restaurants',
    name: 'Restaurants',
    description: 'Local dining options',
    icon: HomeIcon,
    href: '/marketplace/restaurants',
    color: 'bg-red-500',
    items: '200+ restaurants'
  },
  {
    id: 'beauty',
    name: 'Beauty & Spa',
    description: 'Wellness services',
    icon: SparklesIcon,
    href: '/services/beauty',
    color: 'bg-pink-500',
    items: '80+ salons'
  },
  {
    id: 'health',
    name: 'Healthcare',
    description: 'Medical services',
    icon: HeartIcon,
    href: '/services/health',
    color: 'bg-teal-500',
    items: '50+ clinics'
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Photography & more',
    icon: CameraIcon,
    href: '/services/events',
    color: 'bg-indigo-500',
    items: '100+ vendors'
  }
]

export function CategoriesGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse Categories</h2>
        <p className="text-gray-600">Discover everything your local area has to offer</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const Icon = category.icon
          
          return (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary-600 font-medium mt-2">
                    {category.items}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
          View All Categories
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function ChevronRightIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  )
}