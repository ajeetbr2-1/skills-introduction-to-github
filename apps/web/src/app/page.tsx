import { HeroSection } from '@/components/home/HeroSection'
import { SearchBar } from '@/components/home/SearchBar'
import { FeaturedCarousel } from '@/components/home/FeaturedCarousel'
import { CategoriesGrid } from '@/components/home/CategoriesGrid'
import { PromotionsSection } from '@/components/home/PromotionsSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="px-4 py-6 space-y-8">
        <SearchBar />
        <FeaturedCarousel />
        <CategoriesGrid />
        <PromotionsSection />
      </div>
    </div>
  )
}