"use client";

import { CURRENCY } from "../data/menu";

const BADGE_STYLES = {
  spicy: {
    color: "#ff6b6b",
    border: "rgba(255,107,107,0.3)",
    bg: "rgba(255,107,107,0.08)",
    icon: "🌶",
    label: "spicy",
  },
  veg: {
    color: "#4caf7d",
    border: "rgba(76,175,125,0.3)",
    bg: "rgba(76,175,125,0.08)",
    icon: "🌿",
    label: "veg",
  },
  new: {
    color: "var(--accent)",
    border: "rgba(201,169,110,0.3)",
    bg: "rgba(201,169,110,0.08)",
    icon: "✨",
    label: "new",
  },
  pop: {
    color: "#a78bfa",
    border: "rgba(167,139,250,0.3)",
    bg: "rgba(167,139,250,0.08)",
    icon: "⭐",
    label: "pop",
  },
};

function FoodBadge({ tag }) {
  const s = BADGE_STYLES[tag];
  if (!s) return null;
  return (
    <span
      className="px-2 py-[3px] rounded-full text-[10px] font-medium border"
      style={{
        color: s.color,
        borderColor: s.border,
        background: s.bg,
      }}>
      {s.icon} {s.label}
    </span>
  );
}

export default function FoodCard({ food, lang }) {
  const price = food.price.toLocaleString();
  const curr = CURRENCY[lang] || "AMD";
  const name = food.name[lang] || food.name.en;
  const desc = food.desc[lang] || food.desc.en;

  return (
    <div
      className="rounded-2xl flex overflow-hidden border transition-colors hover:border-[rgba(201,169,110,0.25)]"
      style={{
        background: "#1a1a1d",
        borderColor: "rgba(255,255,255,0.07)",
        contain: "layout style paint",
      }}>
      {/* Image */}
      <div className="w-[110px] flex-shrink-0 relative overflow-hidden">
        <img
          src={food.img}
          alt={name}
          loading="lazy"
          decoding="async"
          width={110}
          height={110}
          className="w-full h-full object-cover block"
          style={{ aspectRatio: "1/1" }}
        />
        {food.tag && (
          <span
            className="absolute top-2 left-2 text-[9px] font-bold tracking-[0.5px] uppercase px-[7px] py-[2px] rounded-full pointer-events-none"
            style={{ background: "var(--accent)", color: "#0e0e0f" }}>
            {food.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 p-[14px] flex flex-col min-w-0">
        <div className="text-[15px] font-semibold text-text1 leading-[1.3] mb-1 truncate">
          {name}
        </div>
        <div className="text-[12px] text-text3 leading-[1.5] flex-1 mb-[10px] line-clamp-2">
          {desc}
        </div>
        <div className="flex items-center justify-between gap-2">
          <div
            className="font-serif text-[18px] font-bold shrink-0"
            style={{ color: "var(--accent)" }}>
            {price}
            <span className="text-[11px] font-sans text-text3 font-normal ml-[2px]">
              {curr}
            </span>
          </div>
          {food.tag && <FoodBadge tag={food.tag} />}
        </div>
      </div>
    </div>
  );
}
