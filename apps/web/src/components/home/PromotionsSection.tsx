'use client'

import { TagIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline'

const promotions = [
  {
    id: 1,
    title: '20% Off First Order',
    description: 'Get 20% discount on your first marketplace purchase',
    code: 'WELCOME20',
    validUntil: '2024-02-29',
    type: 'marketplace',
    color: 'bg-gradient-to-r from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Free 3D Tour',
    description: 'Complimentary virtual property tour for new users',
    code: 'TOUR3D',
    validUntil: '2024-02-28',
    type: 'showcase',
    color: 'bg-gradient-to-r from-purple-500 to-purple-600'
  },
  {
    id: 3,
    title: 'Quick Service Deal',
    description: '15% off on home repair and maintenance services',
    code: 'QUICK15',
    validUntil: '2024-03-15',
    type: 'services',
    color: 'bg-gradient-to-r from-green-500 to-green-600'
  },
  {
    id: 4,
    title: 'Free Delivery',
    description: 'No delivery charges on orders above $50',
    code: 'FREEDELIVERY',
    validUntil: '2024-03-01',
    type: 'delivery',
    color: 'bg-gradient-to-r from-orange-500 to-orange-600'
  }
]

export function PromotionsSection() {
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    // Add toast notification here
    console.log(`Copied code: ${code}`)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Special Offers</h2>
        <p className="text-gray-600">Limited time deals and exclusive promotions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className={`${promo.color} rounded-2xl p-6 text-white relative overflow-hidden`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-white/20"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-white/90 text-sm">{promo.description}</p>
                </div>
                <div className="ml-4">
                  <TagIcon className="h-6 w-6 text-white/80" />
                </div>
              </div>

              <div className="space-y-3">
                {/* Promo Code */}
                <div className="flex items-center justify-between bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <span className="font-mono font-semibold">{promo.code}</span>
                  <button
                    onClick={() => copyToClipboard(promo.code)}
                    className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    Copy
                  </button>
                </div>

                {/* Valid Until */}
                <div className="flex items-center text-white/80 text-sm">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  <span>Valid until {new Date(promo.validUntil).toLocaleDateString()}</span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 mt-4">
                  Use Offer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">2.5K+</div>
          <div className="text-sm text-gray-600">Active Users</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">500+</div>
          <div className="text-sm text-gray-600">Local Businesses</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">98%</div>
          <div className="text-sm text-gray-600">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  )
}