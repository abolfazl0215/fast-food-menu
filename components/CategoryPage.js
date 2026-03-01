"use client";

import { useMenuStore } from "../store/menuStore";
import { CATEGORIES, FOODS, t } from "../data/menu";
import FoodCard from "./FoodCard";

export default function CategoryPage() {
  const lang = useMenuStore((s) => s.lang);
  const activeCat = useMenuStore((s) => s.activeCat);
  const setPage = useMenuStore((s) => s.setPage);

  const cat = CATEGORIES.find((c) => c.id === activeCat);
  if (!cat) return null;

  const foods = FOODS[activeCat] || [];
  const catName = cat.name[lang] || cat.name.en;
  const catDesc = cat.desc[lang] || cat.desc.en;

  return (
    <div className="pb-10">
      {/* Header */}
      <div className="px-4 pt-4 flex items-center gap-3">
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-text2 transition-colors border"
          style={{
            background: "#1e1e21",
            borderColor: "rgba(255,255,255,0.07)",
          }}
          onClick={() => setPage("home")}
          aria-label="Back">
          <svg
            width={15}
            height={15}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="font-serif text-[22px] font-bold text-text1">
          {catName}
        </div>
        <span className="text-[28px] ml-auto" aria-hidden="true">
          {cat.emoji}
        </span>
      </div>

      {/* Hero strip */}
      <div className="mx-4 mt-[14px] mb-5 h-[120px] rounded-2xl overflow-hidden relative">
        <img
          src={cat.image}
          alt=""
          width={400}
          height={120}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,14,15,0.8) 0%, transparent 60%)",
          }}
        />
        <div className="absolute bottom-[14px] left-4">
          <div
            className="text-[11px] tracking-[2px] uppercase"
            style={{ color: "var(--accent)" }}>
            {foods.length} {t("dishes", lang)}
          </div>
          <div className="text-[12px] text-text2 mt-[2px]">
            {catDesc}
          </div>
        </div>
      </div>

      {/* Food list */}
      <div className="flex flex-col gap-3 px-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} lang={lang} />
        ))}
      </div>
    </div>
  );
}
