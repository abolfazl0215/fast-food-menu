'use client'

import { useEffect, useRef, useState } from 'react'
import { useMenuStore } from '../store/menuStore'

const langs = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'hy', label: 'Հայerén', flag: '🇦🇲' },
]

export default function Header({ slug }) {
  const { lang, setLang, goHome } = useMenuStore()
  const [langOpen, setLangOpen] = useState(false)
  const dropRef = useRef(null)

  useEffect(() => {
    const h = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener('click', h)
    return () => document.removeEventListener('click', h)
  }, [])

  return (
    <div
      className="sticky top-0 z-50 px-5 pt-4 pb-3 flex items-center justify-between backdrop-blur-xl"
      style={{ background: 'linear-gradient(180deg, rgba(14,14,15,0.98) 70%, transparent)' }}
    >
      {/* Logo */}
      <div
        className="flex flex-col cursor-pointer"
        onClick={goHome}
      >
        <span
          className="text-[22px] font-bold leading-none font-serif"
          style={{ color: 'var(--accent)' }}
        >
          🍽 {slug || 'Coco'}
        </span>
        <span className="text-[11px] text-text3 tracking-[2px] uppercase mt-1">
          Fine Dining
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-2 items-center">
        <div className="relative" ref={dropRef}>
          <button
            className="w-[38px] h-[38px] rounded-full flex items-center justify-center cursor-pointer transition-all text-text2 border"
            style={{
              background: '#1e1e21',
              borderColor: 'rgba(255,255,255,0.07)',
            }}
            onClick={(e) => { e.stopPropagation(); setLangOpen((o) => !o) }}
            title="Language"
          >
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={12} cy={12} r={10} />
              <line x1={2} y1={12} x2={22} y2={12} />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          {langOpen && (
            <div
              className="absolute top-[calc(100%+8px)] right-0 rounded-[10px] overflow-hidden min-w-[130px] z-[200] animate-fadeDown border"
              style={{
                background: '#1e1e21',
                borderColor: 'rgba(255,255,255,0.07)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
              }}
            >
              {langs.map((l) => (
                <div
                  key={l.code}
                  className="px-[14px] py-[10px] flex items-center gap-2 cursor-pointer text-[13px] transition-colors"
                  style={{
                    color: lang === l.code ? 'var(--accent)' : '#9e9a94',
                    background: lang === l.code ? 'rgba(201,169,110,0.12)' : 'transparent',
                  }}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                >
                  <span className="text-lg">{l.flag}</span>
                  {l.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
