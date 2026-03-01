'use client'

import { useMenuStore } from '../store/menuStore'
import { FOODS, t } from '../data/menu'
import FoodCard from './FoodCard'

export default function SearchPage() {
  const { lang, searchQuery } = useMenuStore()
  const q = searchQuery.toLowerCase()

  const results = []
  Object.entries(FOODS).forEach(([, foods]) => {
    foods.forEach((food) => {
      const name = (food.name[lang] || food.name.en).toLowerCase()
      const desc = (food.desc[lang] || food.desc.en).toLowerCase()
      if (name.includes(q) || desc.includes(q)) results.push(food)
    })
  })

  return (
    <div className="pb-10 animate-fadeIn">
      {/* Header */}
      <div className="px-4 pb-[14px] flex items-center gap-[10px]">
        <span className="font-serif text-[20px] font-bold text-text1">
          🔍 {t('searchResults', lang)}
        </span>
        <span className="text-[12px] text-text3 ml-auto">
          {results.length} {t('found', lang)}
        </span>
      </div>

      {results.length === 0 ? (
        <div className="text-center py-[60px] px-[30px]">
          <div className="text-[60px] mb-4">🔍</div>
          <div className="font-serif text-[20px] text-text1 mb-2">{t('noResults', lang)}</div>
          <div className="text-sm text-text3">{t('noResultsDesc', lang)}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 px-4">
          {results.map((food, i) => (
            <FoodCard key={food.id} food={food} lang={lang} delay={i} />
          ))}
        </div>
      )}
    </div>
  )
}
