import { ServicesGrid } from '@/components/services/ServicesGrid'
import { ServicesFilters } from '@/components/services/ServicesFilters'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">QuickServ</h1>
          <p className="text-gray-600">Connect with local service providers</p>
        </div>
      </div>
      
      <div className="px-4 py-6">
        <ServicesFilters />
        <ServicesGrid />
      </div>
    </div>
  )
}