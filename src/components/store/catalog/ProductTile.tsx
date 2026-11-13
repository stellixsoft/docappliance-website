import Link from "next/link";
import type { ProductTile as Tile } from "@/lib/store/live";
import { store } from "@/data/store";
import { Rating } from "../Rating";
import { HeartIcon, CompareIcon } from "../icons";
import styles from "./ProductTile.module.css";

const endsLabel = (iso: string | null) =>
  iso ? `Ends ${new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })}` : null;

/** One product card in a category grid. Measurements match the live grid at 1440px (338px tiles). */
export function ProductTile({ product: p }: { product: Tile }) {
  const href = `/product/${p.urlKey}`;
  const onSale = p.savings && p.regularPrice;
  return (
    <article className={styles.tile}>
      <div className={styles.media}>
        {p.badge && <span className={styles.badge}>{p.badge}</span>}
        <button type="button" className={styles.wish} aria-label={`Add ${p.name} to list`}>
          <HeartIcon />
        </button>
        <Link href={href} className={styles.imageLink} aria-label={p.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image ?? store.placeholderImage} alt={p.name} loading="lazy" className={styles.image} />
        </Link>
        {p.energyStar && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/media/brand/energy-star-logo.svg" alt="ENERGY STAR" className={styles.energyStar} />
        )}
      </div>

      {p.swatches.length > 0 && (
        <div className={styles.swatches}>
          {p.swatches.map((s) => (
            <span key={s.label} className={styles.swatch} title={s.label} style={s.image ? { backgroundImage: `url(${s.image})` } : undefined} />
          ))}
        </div>
      )}

      <div className={styles.info}>
        <h3 className={styles.name}>
          <Link href={href}>{p.name}</Link>
        </h3>
        <p className={styles.model}>
          <span>Model #:</span>
          <span>{p.model}</span>
        </p>
        {p.reviews > 0 && (
          <div className={styles.rating}>
            <Rating value={p.rating} />
            <span className={styles.reviewCount}>({p.reviews.toLocaleString("en-US")})</span>
          </div>
        )}
        {p.showPrice && p.price && (
          <div className={styles.priceBlock}>
            <div className={onSale ? `${styles.price} ${styles.priceSale}` : styles.price}>{p.price.formatted}</div>
            {onSale && (
              <div className={styles.saveRow}>
                <span className={styles.was}>{p.regularPrice!.formatted}</span>
                <span className={styles.save}>Save {p.savings!.formatted}</span>
                {p.savingsEndsAt && <span className={styles.ends}>{endsLabel(p.savingsEndsAt)}</span>}
              </div>
            )}
          </div>
        )}
        {p.promotions[0] && (
          <div className={styles.promos}>
            <span className={styles.promoBadge}>{p.promotions[0].name}</span>
            <Link href={href} className={styles.seeSavings}>
              See All Savings
            </Link>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        {p.flags.map((f) => (
          <div key={f.line1} className={styles.flag} style={f.color ? { borderColor: f.color, color: f.textColor ?? f.color } : undefined}>
            <span>{f.line1}</span>
            {f.line2 && <span>{f.line2}</span>}
          </div>
        ))}
        {p.showAddToCart && (
          <button type="button" className={styles.addToCart}>
            Add To Cart
          </button>
        )}
        <button type="button" className={styles.compare}>
          <CompareIcon />
          Compare
        </button>
      </div>
    </article>
  );
}
