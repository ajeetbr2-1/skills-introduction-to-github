'use client'

export function ShowcaseFilters() {
  return (
    <div className="mb-6">
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {['All Properties', 'Residential', 'Commercial', 'Vacation Rentals', 'Office Spaces', 'Retail'].map((filter) => (
          <button
            key={filter}
            className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200 first:bg-primary-500 first:text-white first:border-primary-500"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}