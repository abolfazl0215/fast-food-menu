'use client'

import { useMenuStore } from '../store/menuStore'
import Header from './Header'
import HomePage from './HomePage'
import CategoryPage from './CategoryPage'
import SearchPage from './SearchPage'
import SearchBar from './SearchBar'

export default function CocoApp({ slug }) {
  const page = useMenuStore((s) => s.page)

  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-bg relative">
      <Header slug={slug} />

      {page === 'search' && (
        <>
          <SearchBar />
          <SearchPage />
        </>
      )}

      {page === 'category' && <CategoryPage />}

      {page === 'home' && <HomePage />}

      {/* Bottom fade */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-16 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #0e0e0f)' }}
      />
    </div>
  )
}
