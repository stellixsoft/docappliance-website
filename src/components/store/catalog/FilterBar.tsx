"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Filter } from "@/lib/store/live";
import { AngleDownIcon, InfoIcon, SlidersIcon } from "../icons";
import styles from "./Catalog.module.css";

/** Filters shown as buttons in the bar (the rest live under "All Filters"), in live-site order. */
const BAR_LIMIT = 7;
/** Filters the live site marks with an info tooltip. */
const WITH_INFO = new Set(["brandsource_point_of_sale_marketing", "standard_width"]);

/** Sort options from the live store config; the URL carries them as ?order=<code>&dir=<asc|desc>. */
export const SORT_OPTIONS = [
  { order: "", dir: "", label: "Most Popular" },
  { order: "name", dir: "asc", label: "Name: A to Z" },
  { order: "name", dir: "desc", label: "Name: Z to A" },
  { order: "price", dir: "asc", label: "Price: Low to High" },
  { order: "price", dir: "desc", label: "Price: High to Low" },
  { order: "reviews_rating", dir: "desc", label: "Highest Customer Rating" },
];

function useHref() {
  const pathname = usePathname();
  const params = useSearchParams();
  return (change: (p: URLSearchParams) => void) => {
    const p = new URLSearchParams(params.toString());
    p.delete("page");
    change(p);
    const q = p.toString();
    return q ? `${pathname}?${q}` : pathname;
  };
}

function Dropdown({ label, info, children }: { label: string; info?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  return (
    <div className={styles.filter} ref={ref}>
      <button type="button" className={styles.filterButton} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span className={styles.filterLabel}>
          {label}
          {info && (
            <span className={styles.filterInfo}>
              <InfoIcon />
            </span>
          )}
        </span>
        <AngleDownIcon className={styles.angle} />
      </button>
      {open && (
        <div className={styles.filterMenu} onClick={() => setOpen(false)}>
          {children}
        </div>
      )}
    </div>
  );
}

function FilterOptions({ filter }: { filter: Filter }) {
  const href = useHref();
  const params = useSearchParams();
  const active = params.getAll(filter.attribute);
  return (
    <ul className={styles.filterOptions}>
      {filter.values.map((v) => {
        const on = active.includes(v.value);
        return (
          <li key={v.value}>
            <Link
              href={href((p) => {
                p.delete(filter.attribute);
                const next = on ? active.filter((a) => a !== v.value) : [...active, v.value];
                next.forEach((a) => p.append(filter.attribute, a));
              })}
              className={on ? `${styles.filterOption} ${styles.filterOptionOn}` : styles.filterOption}
            >
              <span className={styles.checkbox} aria-hidden />
              {v.label} <span className={styles.filterCount}>({v.count})</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Category filter bar: "All Filters", one dropdown per filter, and the sort menu. */
export function FilterBar({ filters, categoryLinks, total }: { filters: Filter[]; categoryLinks: Record<string, string>; total: number }) {
  const [all, setAll] = useState(false);
  const href = useHref();
  const params = useSearchParams();
  const order = params.get("order") ?? "";
  const dir = params.get("dir") ?? "";
  const isOn = (o: (typeof SORT_OPTIONS)[number]) => o.order === order && (!o.order || o.dir === dir);
  const sortLabel = SORT_OPTIONS.find(isOn)?.label ?? SORT_OPTIONS[0].label;

  const option = (f: Filter) =>
    f.type === "category-tree" ? (
      <ul className={styles.filterOptions}>
        {f.values.map((v) => (
          <li key={v.value}>
            <Link href={categoryLinks[v.value] ?? "#"} className={styles.filterOption}>
              {v.label} <span className={styles.filterCount}>({v.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <FilterOptions filter={f} />
    );

  return (
    <div className={styles.filterBarSticky}>
      <div className={styles.filterBarInner}>
        <div className={styles.filterBar}>
          <div className={styles.filterList}>
            <button type="button" className={`${styles.filterButton} ${styles.allFilters}`} onClick={() => setAll(true)}>
              <SlidersIcon className={styles.sliders} />
              All Filters
            </button>
            {filters.slice(0, BAR_LIMIT).map((f) => (
              <Dropdown key={f.attribute} label={f.label} info={WITH_INFO.has(f.attribute)}>
                {option(f)}
              </Dropdown>
            ))}
          </div>
          <div className={styles.sortCell}>
            {total > 0 && <p className={styles.results}>{total} Results</p>}
            <Dropdown label={sortLabel}>
              <ul className={styles.filterOptions}>
                {SORT_OPTIONS.map((o) => (
                  <li key={o.label}>
                    <Link
                      href={href((p) => {
                        p.delete("order");
                        p.delete("dir");
                        if (o.order) {
                          p.set("order", o.order);
                          p.set("dir", o.dir);
                        }
                      })}
                      className={isOn(o) ? `${styles.filterOption} ${styles.filterOptionOn}` : styles.filterOption}
                    >
                      {o.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>

      {all && (
        <div className={styles.drawerRoot}>
          <div className={styles.drawerBackdrop} onClick={() => setAll(false)} />
          <aside className={styles.drawer} role="dialog" aria-label="All filters">
            <div className={styles.drawerHead}>
              <strong>All Filters</strong>
              <button type="button" className={styles.drawerClose} onClick={() => setAll(false)} aria-label="Close filters">
                ×
              </button>
            </div>
            {filters.map((f) => (
              <details key={f.attribute} className={styles.drawerGroup}>
                <summary>{f.label}</summary>
                {option(f)}
              </details>
            ))}
          </aside>
        </div>
      )}
    </div>
  );
}
