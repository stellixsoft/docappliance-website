import Link from "next/link";
import styles from "./Catalog.module.css";

/** Numbered pager ("1 2 3 › Last"). Page links keep the current filters and sort. */
export function Pagination({ page, pageCount, hrefFor }: { page: number; pageCount: number; hrefFor: (p: number) => string }) {
  if (pageCount <= 1) return null;
  const first = Math.max(1, Math.min(page - 2, pageCount - 4));
  const pages = Array.from({ length: Math.min(5, pageCount) }, (_, i) => first + i);
  return (
    <nav className={styles.pager} aria-label="pagination">
      <ul>
        {page > 1 && (
          <>
            <li>
              <Link href={hrefFor(1)} className={styles.pagerItem}>
                First
              </Link>
            </li>
            <li>
              <Link href={hrefFor(page - 1)} className={styles.pagerItem} aria-label="Previous page">
                ‹
              </Link>
            </li>
          </>
        )}
        {pages.map((n) => (
          <li key={n}>
            <Link
              href={hrefFor(n)}
              className={n === page ? `${styles.pagerItem} ${styles.pagerCurrent}` : styles.pagerItem}
              aria-current={n === page ? "page" : undefined}
            >
              {n}
            </Link>
          </li>
        ))}
        {page < pageCount && (
          <>
            <li>
              <Link href={hrefFor(page + 1)} className={styles.pagerItem} aria-label="Next page">
                ›
              </Link>
            </li>
            <li>
              <Link href={hrefFor(pageCount)} className={styles.pagerItem}>
                Last
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
