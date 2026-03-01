"use client";

import { useMenuStore } from "../store/menuStore";
import { CATEGORIES, FOODS, t } from "../data/menu";
import SearchBar from "./SearchBar";

export default function HomePage() {
  const lang = useMenuStore((s) => s.lang);
  const setPage = useMenuStore((s) => s.setPage);

  return (
    <div className="pb-10 fade-in">
      {/* Hero */}
      <div
        className="mx-4 mb-5 h-40 rounded-2xl overflow-hidden relative"
        style={{
          background:
            "linear-gradient(135deg, #1a1206 0%, #2d1f07 50%, #1a1206 100%)",
        }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <div
            className="text-[11px] tracking-[3px] uppercase mb-[6px]"
            style={{ color: "var(--accent)" }}>
            {t("heroSub", lang)}
          </div>
          <div className="font-serif text-[26px] font-bold text-text1 leading-[1.2]">
            {t("heroTitle1", lang)}{" "}
            <em
              style={{
                color: "var(--accent2)",
                fontStyle: "italic",
              }}>
              {t("heroTitle2", lang)}
            </em>
          </div>
          <div className="text-[12px] text-text3 mt-[6px]">
            {t("heroDesc", lang)}
          </div>
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-[120px] leading-none opacity-[0.06] select-none pointer-events-none">
          🍽
        </div>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Section title */}
      <div className="px-4 pb-[14px] flex items-center justify-between">
        <h2 className="font-serif text-[20px] font-bold text-text1">
          {t("categories", lang)}
        </h2>
        <span className="text-[12px] text-text3">
          {CATEGORIES.length} {t("items", lang)}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 pb-6 stagger-grid">
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            cat={cat}
            lang={lang}
            count={(FOODS[cat.id] || []).length}
            onPress={setPage}
          />
        ))}
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.2s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* stagger only on mount — nth-child handles delay, no JS needed */
        .stagger-grid .cat-card {
          animation: slideUp 0.28s ease both;
        }
        .stagger-grid .cat-card:nth-child(1) { animation-delay: 0.03s; }
        .stagger-grid .cat-card:nth-child(2) { animation-delay: 0.06s; }
        .stagger-grid .cat-card:nth-child(3) { animation-delay: 0.09s; }
        .stagger-grid .cat-card:nth-child(4) { animation-delay: 0.12s; }
        .stagger-grid .cat-card:nth-child(5) { animation-delay: 0.15s; }
        .stagger-grid .cat-card:nth-child(6) { animation-delay: 0.18s; }
        .stagger-grid .cat-card:nth-child(7) { animation-delay: 0.21s; }
        .stagger-grid .cat-card:nth-child(8) { animation-delay: 0.24s; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* hover: only opacity + border — no layout change */
        .cat-card {
          contain: layout style paint;
          transition: border-color 0.18s, opacity 0.18s;
        }
        .cat-card:hover  { border-color: rgba(201,169,110,0.25) !important; }
        .cat-card:active { opacity: 0.8; }
      `}</style>
    </div>
  );
}

function CategoryCard({ cat, lang, count, onPress }) {
  return (
    <div
      className="cat-card rounded-2xl overflow-hidden cursor-pointer border"
      style={{
        background: "#1a1a1d",
        borderColor: "rgba(255,255,255,0.07)",
      }}
      onClick={() => onPress("category", cat.id)}>
      <div className="w-full aspect-[4/3] overflow-hidden relative bg-[#1e1e21]">
        <img
          src={cat.image}
          alt={cat.name.en}
          width={200}
          height={150}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover block"
        />
        <span
          className="absolute top-2 right-2 text-[10px] font-semibold tracking-[0.5px] px-2 py-[3px] rounded-full border"
          style={{
            background: "rgba(14,14,15,0.75)",
            borderColor: "rgba(201,169,110,0.3)",
            color: "var(--accent)",
          }}>
          {cat.emoji} {count}
        </span>
      </div>
      <div className="p-3 pb-[14px]">
        <div className="text-sm font-semibold text-text1 mb-[2px]">
          {cat.name[lang] || cat.name.en}
        </div>
        <div
          className="text-[12px] font-medium"
          style={{ color: "var(--green)" }}>
          {t("seeAll", lang)}
        </div>
      </div>
    </div>
  );
}
