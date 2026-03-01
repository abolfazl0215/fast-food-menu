'use client'

import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  lang: 'en',
  page: 'home', // 'home' | 'category' | 'search'
  activeCat: null,
  searchQuery: '',
  setLang: (lang) => set({ lang }),
  setPage: (page, activeCat = null) => set({ page, activeCat }),
  setSearch: (q) => set({ searchQuery: q, page: q.length > 0 ? 'search' : 'home' }),
  goHome: () => set({ page: 'home', activeCat: null, searchQuery: '' }),
}))
