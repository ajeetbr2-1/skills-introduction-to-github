import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader'
import { MarketplaceFilters } from '@/components/marketplace/MarketplaceFilters'
import { MarketplaceGrid } from '@/components/marketplace/MarketplaceGrid'

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <div className="px-4 py-6">
        <MarketplaceFilters />
        <MarketplaceGrid />
      </div>
    </div>
  )
}