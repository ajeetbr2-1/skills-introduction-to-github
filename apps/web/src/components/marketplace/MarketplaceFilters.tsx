'use client'

import { useState } from 'react'
import { FunnelIcon, MapIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

export function MarketplaceFilters() {
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('relevance')

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <FunnelIcon className="h-4 w-4" />
            <span>Filters</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <MapIcon className="h-4 w-4" />
            <span>Map View</span>
          </button>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="relevance">Most Relevant</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="distance">Nearest First</option>
          <option value="newest">Newest First</option>
        </select>
      </div>

      {showFilters && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                placeholder="Min"
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <span className="text-gray-400">to</span>
              <input
                type="number"
                placeholder="Max"
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Distance */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Distance</h3>
            <div className="space-y-2">
              {['1 km', '5 km', '10 km', '25 km', '50 km'].map((distance) => (
                <label key={distance} className="flex items-center">
                  <input type="radio" name="distance" className="mr-2 text-primary-600" />
                  <span className="text-sm text-gray-700">{distance}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Minimum Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input type="radio" name="rating" className="mr-2 text-primary-600" />
                  <span className="text-sm text-gray-700">{rating}+ stars</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-primary-600" />
                <span className="text-sm text-gray-700">In Stock</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-primary-600" />
                <span className="text-sm text-gray-700">Same Day Delivery</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-primary-600" />
                <span className="text-sm text-gray-700">Open Now</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}