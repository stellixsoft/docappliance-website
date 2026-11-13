"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PromotionSort } from "@/lib/store/live";
import base from "@/components/promotions/Promotions.module.css";
import styles from "./StorePromotions.module.css";

const list = (v: string | null) => (v ? v.split(",").filter(Boolean) : []);

/** "Filter By" selects (Categories, Brands, Sort By). The URL carries them the way the live store does. */
export function PromotionFilters({ categories, brands, sorts }: { categories: string[]; brands: string[]; sorts: PromotionSort[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const go = (change: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(params.toString());
    p.delete("page");
    change(p);
    const q = p.toString();
    router.push(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };
  const toggle = (key: string, value: string) =>
    go((p) => {
      const cur = list(p.get(key));
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      if (next.length) p.set(key, next.join(","));
      else p.delete(key);
    });

  const order = params.get("order") ?? sorts[0]?.order ?? "";
  const dir = params.get("dir") ?? sorts[0]?.dir ?? "";
  const sortIndex = Math.max(0, sorts.findIndex((s) => s.order === order && s.dir === dir));
  const active = [
    ...list(params.get("category")).map((v) => ({ key: "category", v })),
    ...list(params.get("manufacturer")).map((v) => ({ key: "manufacturer", v })),
  ];

  const select = (label: string, key: string, options: string[]) => (
    <label className={`${base.select} ${styles.select}`}>
      <span className={list(params.get(key)).length ? base.selectLabel : `${base.selectLabel} ${styles.labelInside}`}>{label}</span>
      <select value="" onChange={(e) => e.target.value && toggle(key, e.target.value)} aria-label={label}>
        <option value="" />
        {options.map((o) => (
          <option key={o} value={o}>
            {list(params.get(key)).includes(o) ? `✓ ${o}` : o}
          </option>
        ))}
      </select>
      <svg className={base.selectIcon} viewBox="0 0 24 24" aria-hidden>
        <path d="M7 10l5 5 5-5z" fill="currentColor" />
      </svg>
    </label>
  );

  return (
    <div className={base.filters}>
      <div className={`${base.filtersTitle} ${styles.filtersTitle}`}>Filter By</div>
      <div className={base.filtersSelects}>
        <span className={styles.desktopOnly}>{select("Categories", "category", categories)}</span>
        <span className={styles.desktopOnly}>{select("Brands", "manufacturer", brands)}</span>
        {/* phones get one "Filters" menu holding both lists, like the live page */}
        <label className={`${base.select} ${styles.select} ${styles.mobileOnly}`}>
          <span className={`${base.selectLabel} ${styles.labelInside}`}>Filters</span>
          <select
            value=""
            aria-label="Filters"
            onChange={(e) => {
              const [key, ...rest] = e.target.value.split(":");
              if (key) toggle(key, rest.join(":"));
            }}
          >
            <option value="" />
            <optgroup label="Categories">
              {categories.map((o) => (
                <option key={o} value={`category:${o}`}>
                  {list(params.get("category")).includes(o) ? `✓ ${o}` : o}
                </option>
              ))}
            </optgroup>
            <optgroup label="Brands">
              {brands.map((o) => (
                <option key={o} value={`manufacturer:${o}`}>
                  {list(params.get("manufacturer")).includes(o) ? `✓ ${o}` : o}
                </option>
              ))}
            </optgroup>
          </select>
          <svg className={base.selectIcon} viewBox="0 0 24 24" aria-hidden>
            <path d="M7 10l5 5 5-5z" fill="currentColor" />
          </svg>
        </label>
        {sorts.length > 0 && (
          <label className={`${base.select} ${styles.select}`}>
            <span className={base.selectLabel}>Sort By</span>
            <select
              value={sortIndex}
              aria-label="Sort By"
              onChange={(e) =>
                go((p) => {
                  const s = sorts[Number(e.target.value)];
                  p.set("order", s.order);
                  p.set("dir", s.dir);
                })
              }
            >
              {sorts.map((s, i) => (
                <option key={s.label} value={i}>
                  {s.label}
                </option>
              ))}
            </select>
            <svg className={base.selectIcon} viewBox="0 0 24 24" aria-hidden>
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </svg>
          </label>
        )}
      </div>
      {active.length > 0 && (
        <div className={styles.chips}>
          {active.map((a) => (
            <button key={a.key + a.v} type="button" className={styles.chip} onClick={() => toggle(a.key, a.v)}>
              {a.v} <span aria-hidden>×</span>
            </button>
          ))}
          <Link href={pathname} className={styles.clear} scroll={false}>
            Clear All
          </Link>
        </div>
      )}
    </div>
  );
}
