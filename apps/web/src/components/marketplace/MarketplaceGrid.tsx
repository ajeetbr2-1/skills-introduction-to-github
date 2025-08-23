'use client'

import { useState } from 'react'
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import Image from 'next/image'

const mockProducts = [
  {
    id: 1,
    name: 'Fresh Organic Vegetables Bundle',
    business: 'Green Valley Farm',
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 142,
    image: '/api/placeholder/300/300',
    category: 'Food',
    distance: '2.3 km',
    inStock: true,
    fastDelivery: true
  },
  {
    id: 2,
    name: 'Handcrafted Ceramic Coffee Mug',
    business: 'Artisan Corner',
    price: 18.50,
    rating: 4.6,
    reviews: 89,
    image: '/api/placeholder/300/300',
    category: 'Home',
    distance: '1.8 km',
    inStock: true,
    fastDelivery: false
  },
  {
    id: 3,
    name: 'Premium Cotton T-Shirt',
    business: 'Local Threads',
    price: 32.00,
    rating: 4.7,
    reviews: 256,
    image: '/api/placeholder/300/300',
    category: 'Clothing',
    distance: '3.1 km',
    inStock: true,
    fastDelivery: true
  },
  {
    id: 4,
    name: 'Wireless Bluetooth Headphones',
    business: 'Tech Haven',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 324,
    image: '/api/placeholder/300/300',
    category: 'Electronics',
    distance: '4.2 km',
    inStock: false,
    fastDelivery: false
  },
  {
    id: 5,
    name: 'Homemade Sourdough Bread',
    business: 'Baker\'s Delight',
    price: 6.50,
    rating: 4.9,
    reviews: 78,
    image: '/api/placeholder/300/300',
    category: 'Food',
    distance: '0.8 km',
    inStock: true,
    fastDelivery: true
  },
  {
    id: 6,
    name: 'Essential Oil Diffuser',
    business: 'Wellness Store',
    price: 45.00,
    rating: 4.4,
    reviews: 167,
    image: '/api/placeholder/300/300',
    category: 'Beauty',
    distance: '2.7 km',
    inStock: true,
    fastDelivery: false
  }
]

export function MarketplaceGrid() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCart = (productId: number) => {
    console.log('Added to cart:', productId)
    // Implement cart functionality
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {mockProducts.length} Products Found
        </h2>
        <span className="text-sm text-gray-600">
          Showing 1-{mockProducts.length} of {mockProducts.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative aspect-square">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Product Image</span>
              </div>
              
              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
              >
                {wishlist.includes(product.id) ? (
                  <HeartIconSolid className="h-5 w-5 text-red-500" />
                ) : (
                  <HeartIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>

              {/* Badges */}
              <div className="absolute top-3 left-3 space-y-1">
                {product.originalPrice && (
                  <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                    Sale
                  </span>
                )}
                {product.fastDelivery && (
                  <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                    Fast
                  </span>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{product.business}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-700 ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
                <span className="text-xs text-gray-500 ml-auto">{product.distance}</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product.id)}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  product.inStock
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCartIcon className="h-4 w-4" />
                <span>{product.inStock ? 'Add to Cart' : 'Unavailable'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
          Load More Products
        </button>
      </div>
    </div>
  )
}