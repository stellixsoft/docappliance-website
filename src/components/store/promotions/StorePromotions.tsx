import Link from "next/link";
import type { PromotionsPage } from "@/lib/store/live";
import base from "@/components/promotions/Promotions.module.css";
import { PromotionFilters } from "./PromotionFilters";
import styles from "./StorePromotions.module.css";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/** "2026-12-02T23:59:59-05:00" -> "Dec 2, 2026" (the store's local date, as written in the feed). */
function day(iso: string) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  return m ? `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}` : "";
}

/** Store "Promotions and Rebates": rebate tiles with logo, summary, validity and the two action buttons. */
export function StorePromotions({ data, loadMoreHref }: { data: PromotionsPage; loadMoreHref: string }) {
  return (
    <div className={`${base.page} ${styles.page}`}>
      <div className={`${base.container} ${styles.container}`}>
        <h1 className={base.title}>Promotions and Rebates</h1>
        <PromotionFilters categories={data.categories} brands={data.brands} sorts={data.sorts} />
        <hr className={base.divider} />
        {data.promotions.length === 0 ? (
          <p className={base.noPromos}>There are no promotions currently taking place.</p>
        ) : (
          <div className={styles.grid}>
            {data.promotions.map((p) => (
              <article key={p.id} className={styles.card}>
                <div className={styles.logo}>
                  {p.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.brand} loading="lazy" />
                  )}
                </div>
                <div className={styles.details}>
                  <div>
                    <h2 className={styles.title}>{p.title}</h2>
                    <p className={styles.summary}>{p.summary}</p>
                  </div>
                  <span className={styles.valid}>
                    Valid {day(p.startDate)} - {day(p.endDate)}
                  </span>
                </div>
                <div className={styles.buttons}>
                  {p.formUrl && (
                    <a href={p.formUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
                      Complete Details
                    </a>
                  )}
                  <Link href={`/catalog/special/promotion/${encodeURIComponent(p.programId)}`} className={styles.button}>
                    Shop Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {data.more && (
          <Link href={loadMoreHref} className={styles.loadMore} scroll={false}>
            Load More
          </Link>
        )}
      </div>
    </div>
  );
}
