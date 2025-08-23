'use client'

import { CubeIcon, EyeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const mockProperties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    type: 'Residential',
    location: 'Downtown District',
    price: '$2,500/month',
    features: ['2 Bed', '2 Bath', '1,200 sq ft'],
    views: 1543,
    rating: 4.8,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'Cozy Coffee Shop Space',
    type: 'Commercial',
    location: 'Arts Quarter',
    price: '$3,200/month',
    features: ['Ground Floor', 'High Traffic', '800 sq ft'],
    views: 892,
    rating: 4.6,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'Luxury Beach House',
    type: 'Vacation Rental',
    location: 'Coastal Area',
    price: '$450/night',
    features: ['4 Bed', '3 Bath', 'Ocean View'],
    views: 2341,
    rating: 4.9,
    image: '/api/placeholder/400/300'
  }
]

export function ShowcaseGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 bg-gray-200 flex items-center justify-center">
              <CubeIcon className="h-12 w-12 text-gray-400" />
              <div className="absolute top-3 right-3 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                3D Tour
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{property.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {property.features.map((feature, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-primary-600">
                  {property.price}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  <span>{property.views}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                View in 3D
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}