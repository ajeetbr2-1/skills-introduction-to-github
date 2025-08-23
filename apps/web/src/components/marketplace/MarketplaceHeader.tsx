'use client'

import { MapPinIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export function MarketplaceHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Local Marketplace</h1>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <AdjustmentsHorizontalIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span>Showing results near you</span>
        </div>

        {/* Quick Categories */}
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {['All', 'Food', 'Clothing', 'Electronics', 'Books', 'Home', 'Beauty', 'Sports'].map((category) => (
            <button
              key={category}
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 first:bg-primary-500 first:text-white first:hover:bg-primary-600"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}