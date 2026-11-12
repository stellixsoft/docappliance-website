"use client";

import { useState } from "react";
import styles from "./Promotions.module.css";

export type Promotion = { id: string; title: string; endDate: string; image?: string; href?: string };

const SORTS = ["End Date", "Start Date", "Name"] as const;

/**
 * Promotions & rebates listing. The live site shows "no promotions" right now;
 * pass promotions in (from a CMS or the backend) and they render here.
 */
export function PromotionsList({ promotions = [] }: { promotions?: Promotion[] }) {
  const [sort, setSort] = useState<(typeof SORTS)[number]>("End Date");
  const sorted = [...promotions].sort((a, b) =>
    sort === "Name" ? a.title.localeCompare(b.title) : a.endDate.localeCompare(b.endDate),
  );

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Promotions and Rebates </h1>
        <div className={styles.filters}>
          <div className={styles.filtersTitle}>Filter By</div>
          <div className={styles.filtersSelects}>
            <label className={styles.select}>
              <span className={styles.selectLabel}>Sort By</span>
              <select value={sort} onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])} name="order">
                {SORTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <svg className={styles.selectIcon} viewBox="0 0 24 24" aria-hidden>
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </label>
          </div>
        </div>
        <hr className={styles.divider} />
        {sorted.length === 0 ? (
          <p className={styles.noPromos}>There are no promotions currently taking place.</p>
        ) : (
          <ul className={styles.grid}>
            {sorted.map((p) => (
              <li key={p.id} className={styles.card}>
                {p.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt="" />
                )}
                <h2>{p.title}</h2>
                <p>Ends {p.endDate}</p>
                {p.href && <a href={p.href}>View details</a>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
