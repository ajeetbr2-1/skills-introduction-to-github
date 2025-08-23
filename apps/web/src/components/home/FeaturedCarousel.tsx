'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const featuredItems = [
  {
    id: 1,
    title: 'Local Fresh Market',
    description: 'Farm-fresh produce delivered to your door',
    image: '/api/placeholder/400/300',
    category: 'Marketplace',
    badge: 'New'
  },
  {
    id: 2,
    title: 'Virtual Home Tours',
    description: 'Explore properties in stunning 3D',
    image: '/api/placeholder/400/300',
    category: '3D Showcase',
    badge: 'Popular'
  },
  {
    id: 3,
    title: 'Expert Handyman Services',
    description: 'Professional repairs and maintenance',
    image: '/api/placeholder/400/300',
    category: 'QuickServ',
    badge: 'Trusted'
  },
  {
    id: 4,
    title: 'Express Delivery',
    description: 'Same-day delivery for urgent needs',
    image: '/api/placeholder/400/300',
    category: 'Delivery',
    badge: 'Fast'
  }
]

export function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured</h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg text-blue-100 mb-4">{item.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-blue-200">{item.category}</span>
                    <button className="bg-white text-primary-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-primary-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}