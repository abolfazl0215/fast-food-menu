'use client'

import { useMenuStore } from '../store/menuStore'
import { CATEGORIES, FOODS, t } from '../data/menu'
import FoodCard from './FoodCard'

export default function CategoryPage() {
  const { lang, activeCat, setPage } = useMenuStore()
  const cat = CATEGORIES.find((c) => c.id === activeCat)
  if (!cat) return null

  const foods = FOODS[activeCat] || []

  return (
    <div className="pb-10 animate-fadeIn">
      {/* Header */}
      <div className="px-4 pt-4 flex items-center gap-3">
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-text2 transition-all border"
          style={{ background: '#1e1e21', borderColor: 'rgba(255,255,255,0.07)' }}
          onClick={() => setPage('home')}
        >
          <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="font-serif text-[22px] font-bold text-text1">
          {cat.name[lang] || cat.name.en}
        </div>
        <span className="text-[28px] ml-auto">{cat.emoji}</span>
      </div>

      {/* Hero strip */}
      <div className="mx-4 mt-[14px] mb-5 h-[120px] rounded-2xl overflow-hidden relative">
        <img src={cat.image} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(14,14,15,0.8) 0%, transparent 60%)' }}
        />
        <div className="absolute bottom-[14px] left-4 z-10">
          <div className="text-[11px] tracking-[2px] uppercase" style={{ color: 'var(--accent)' }}>
            {foods.length} {t('dishes', lang)}
          </div>
          <div className="text-[12px] text-text2 mt-[2px]">
            {cat.desc[lang] || cat.desc.en}
          </div>
        </div>
      </div>

      {/* Food list */}
      <div className="flex flex-col gap-3 px-4">
        {foods.map((food, i) => (
          <FoodCard key={food.id} food={food} lang={lang} delay={i} />
        ))}
      </div>
    </div>
  )
}
