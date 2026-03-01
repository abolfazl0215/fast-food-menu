'use client'

import { CURRENCY } from '../data/menu'

const badgeMap = {
  spicy: { cls: 'text-red-400 border-red-400/30 bg-red-400/8', icon: '🌶', label: 'spicy' },
  veg: { cls: 'text-green border-green/30 bg-green/8', icon: '🌿', label: 'veg' },
  new: { cls: 'text-[var(--accent)] border-[var(--accent)]/30 bg-[var(--accent)]/8', icon: '✨', label: 'new' },
  pop: { cls: 'text-purple-400 border-purple-400/30 bg-purple-400/8', icon: '⭐', label: 'pop' },
}

function FoodBadge({ tag }) {
  if (!tag || !badgeMap[tag]) return null
  const { icon, label } = badgeMap[tag]
  return (
    <span
      className={`px-2 py-[3px] rounded-full text-[10px] font-medium border ${badgeMap[tag].cls}`}
      style={{
        color: tag === 'spicy' ? '#ff6b6b' : tag === 'veg' ? 'var(--green)' : tag === 'new' ? 'var(--accent)' : '#a78bfa',
        borderColor: tag === 'spicy' ? 'rgba(255,107,107,0.3)' : tag === 'veg' ? 'rgba(76,175,125,0.3)' : tag === 'new' ? 'rgba(201,169,110,0.3)' : 'rgba(167,139,250,0.3)',
        background: tag === 'spicy' ? 'rgba(255,107,107,0.08)' : tag === 'veg' ? 'rgba(76,175,125,0.08)' : tag === 'new' ? 'rgba(201,169,110,0.08)' : 'rgba(167,139,250,0.08)',
      }}
    >
      {icon} {label}
    </span>
  )
}

export default function FoodCard({ food, lang, delay = 0 }) {
  const price = food.price.toLocaleString()
  const curr = CURRENCY[lang] || 'AMD'

  return (
    <div
      className="rounded-2xl flex overflow-hidden animate-fadeUp border transition-colors hover:border-[rgba(201,169,110,0.25)]"
      style={{
        background: '#1a1a1d',
        borderColor: 'rgba(255,255,255,0.07)',
        animationDelay: `${delay * 0.06}s`,
      }}
    >
      {/* Image */}
      <div className="w-[110px] flex-shrink-0 relative overflow-hidden">
        <img
          src={food.img}
          alt={food.name[lang] || food.name.en}
          loading="lazy"
          className="w-full h-full object-cover block"
        />
        {food.tag && (
          <span
            className="absolute top-2 left-2 text-[9px] font-bold tracking-[0.5px] uppercase px-[7px] py-[2px] rounded-full"
            style={{ background: 'var(--accent)', color: '#0e0e0f' }}
          >
            {food.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 p-[14px] flex flex-col">
        <div className="text-[15px] font-semibold text-text1 leading-[1.3] mb-1">
          {food.name[lang] || food.name.en}
        </div>
        <div className="text-[12px] text-text3 leading-[1.5] flex-1 mb-[10px]">
          {food.desc[lang] || food.desc.en}
        </div>
        <div className="flex items-center justify-between">
          <div className="font-serif text-[18px] font-bold" style={{ color: 'var(--accent)' }}>
            {price}
            <span className="text-[11px] font-sans text-text3 font-normal ml-[2px]">{curr}</span>
          </div>
          <div className="flex gap-[5px]">
            <FoodBadge tag={food.tag} />
          </div>
        </div>
      </div>
    </div>
  )
}
