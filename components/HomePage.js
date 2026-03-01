'use client'

import { useMenuStore } from '../store/menuStore'
import { CATEGORIES, FOODS, t } from '../data/menu'
import SearchBar from './SearchBar'

export default function HomePage() {
  const { lang, setPage } = useMenuStore()

  return (
    <div className="pb-10 animate-fadeIn">
      {/* Hero */}
      <div
        className="mx-4 mb-5 h-40 rounded-2xl overflow-hidden relative"
        style={{ background: 'linear-gradient(135deg, #1a1206 0%, #2d1f07 50%, #1a1206 100%)' }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <div className="text-[11px] tracking-[3px] uppercase mb-[6px]" style={{ color: 'var(--accent)' }}>
            {t('heroSub', lang)}
          </div>
          <div className="font-serif text-[26px] font-bold text-text1 leading-[1.2]">
            {t('heroTitle1', lang)}{' '}
            <em style={{ color: 'var(--accent2)', fontStyle: 'italic' }}>{t('heroTitle2', lang)}</em>
          </div>
          <div className="text-[12px] text-text3 mt-[6px]">
            {t('heroDesc', lang)}
          </div>
        </div>
        <div
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-[120px] leading-none opacity-[0.06] select-none pointer-events-none"
        >
          🍽
        </div>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Section title */}
      <div className="px-4 pb-[14px] flex items-center justify-between">
        <h2 className="font-serif text-[20px] font-bold text-text1">{t('categories', lang)}</h2>
        <span className="text-[12px] text-text3">{CATEGORIES.length} {t('items', lang)}</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-6">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.id}
            className="rounded-2xl overflow-hidden cursor-pointer border transition-all hover:-translate-y-1 active:scale-[0.97] animate-fadeUp"
            style={{
              background: '#1a1a1d',
              borderColor: 'rgba(255,255,255,0.07)',
              animationDelay: `${(i + 1) * 0.05}s`,
              transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
            }}
            onClick={() => setPage('category', cat.id)}
          >
            <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#1e1e21]">
              <img
                src={cat.image}
                alt={cat.name.en}
                loading="lazy"
                className="w-full h-full object-cover block transition-transform duration-300 hover:scale-[1.06]"
              />
              <span
                className="absolute top-2 right-2 text-[10px] font-semibold tracking-[0.5px] px-2 py-[3px] rounded-full border"
                style={{
                  background: 'rgba(14,14,15,0.75)',
                  backdropFilter: 'blur(6px)',
                  borderColor: 'rgba(201,169,110,0.3)',
                  color: 'var(--accent)',
                }}
              >
                {cat.emoji} {(FOODS[cat.id] || []).length}
              </span>
            </div>
            <div className="p-3 pb-[14px]">
              <div className="text-sm font-semibold text-text1 mb-[2px]">
                {cat.name[lang] || cat.name.en}
              </div>
              <div className="text-[12px] flex items-center gap-1 font-medium" style={{ color: 'var(--green)' }}>
                {t('seeAll', lang)}
                <svg width={10} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <polyline points="3 2 7 5 3 8" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
