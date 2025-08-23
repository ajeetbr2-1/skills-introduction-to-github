'use client'

import { StarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const mockProviders = [
  {
    id: 1,
    name: 'Mike Johnson',
    service: 'Plumbing Services',
    rating: 4.9,
    reviews: 156,
    hourlyRate: 85,
    location: '2.1 km away',
    availability: 'Available today',
    specialties: ['Emergency Repairs', 'Installation', 'Maintenance'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    service: 'House Cleaning',
    rating: 4.8,
    reviews: 203,
    hourlyRate: 35,
    location: '1.5 km away',
    availability: 'Available tomorrow',
    specialties: ['Deep Cleaning', 'Regular Cleaning', 'Move-in/out'],
    image: '/api/placeholder/150/150'
  },
  {
    id: 3,
    name: 'Carlos Martinez',
    service: 'Landscaping',
    rating: 4.7,
    reviews: 98,
    hourlyRate: 55,
    location: '3.2 km away',
    availability: 'Available this week',
    specialties: ['Garden Design', 'Tree Trimming', 'Lawn Care'],
    image: '/api/placeholder/150/150'
  }
]

export function ServicesGrid() {
  return (
    <div>
      <div className="space-y-4">
        {mockProviders.map((provider) => (
          <div key={provider.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-400 text-sm">Photo</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                    <p className="text-primary-600 font-medium">{provider.service}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">${provider.hourlyRate}</div>
                    <div className="text-sm text-gray-500">per hour</div>
                  </div>
                </div>
                
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-700 ml-1">{provider.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({provider.reviews})</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-1" />
                    <span>{provider.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-green-600">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span>{provider.availability}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {provider.specialties.map((specialty, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Request Service
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}