import { ShowcaseGrid } from '@/components/showcase/ShowcaseGrid'
import { ShowcaseFilters } from '@/components/showcase/ShowcaseFilters'

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">3D Showcase</h1>
          <p className="text-gray-600">Explore properties and spaces in immersive 3D</p>
        </div>
      </div>
      
      <div className="px-4 py-6">
        <ShowcaseFilters />
        <ShowcaseGrid />
      </div>
    </div>
  )
}