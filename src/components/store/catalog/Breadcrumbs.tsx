import Link from "next/link";
import styles from "./Catalog.module.css";

export type Crumb = { label: string; href?: string };

/** "Our Catalog › Appliances › Laundry" trail. The first crumb is plain text, like the live site. */
export function Breadcrumbs({ items, bare = false }: { items: Crumb[]; bare?: boolean }) {
  return (
    <div className={bare ? undefined : styles.crumbsWrap}>
      <nav aria-label="breadcrumb" className={styles.crumbs}>
        <ol>
          {items.map((c, i) => (
            <li key={`${c.label}-${i}`}>
              {i > 0 && (
                <span className={styles.crumbSep} aria-hidden>
                  ›
                </span>
              )}
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
