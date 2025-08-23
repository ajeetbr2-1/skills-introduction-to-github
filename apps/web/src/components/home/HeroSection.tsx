'use client'

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              QuickServe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto text-balance">
            Your all-in-one platform for local commerce, 3D showcases, on-demand services, and delivery
          </p>
          <div className="flex justify-center space-x-4 pt-6">
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-200">
              Get Started
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-primary-600 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Floating 3D Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-bounce-subtle"></div>
        <div className="absolute top-20 right-16 w-12 h-12 bg-white/10 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-16 left-20 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}