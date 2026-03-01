'use client'

import { useMenuStore } from '../store/menuStore'
import { t } from '../data/menu'

export default function SearchBar() {
  const { lang, searchQuery, setSearch } = useMenuStore()

  return (
    <div className="px-4 pb-5">
      <div
        className="rounded-full flex items-center px-4 py-[10px] gap-[10px] transition-colors border focus-within:border-[var(--accent)]"
        style={{ background: '#1e1e21', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <span className="text-text3 text-[15px] flex-shrink-0">
          <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} />
            <line x1={21} y1={21} x2={16.65} y2={16.65} />
          </svg>
        </span>
        <input
          className="flex-1 bg-transparent border-none outline-none text-text1 font-sans text-sm placeholder:text-text3"
          placeholder={t('search', lang)}
          value={searchQuery}
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchQuery && (
          <span
            className="text-text3 cursor-pointer text-sm hover:text-[var(--accent)] transition-colors"
            onClick={() => setSearch('')}
          >
            ✕
          </span>
        )}
      </div>
    </div>
  )
}
