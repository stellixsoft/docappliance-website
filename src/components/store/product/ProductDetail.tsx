import Link from "next/link";
import type { ProductDetail as Detail } from "@/lib/store/live";
import { store } from "@/data/store";
import { Breadcrumbs, type Crumb } from "../catalog/Breadcrumbs";
import { Rating } from "../Rating";
import { DocumentIcon, InfoIcon } from "../icons";
import { Gallery } from "./Gallery";
import styles from "./Product.module.css";

/** Product detail page body. Layout and type scale measured from the live product page at 1440px. */
export function ProductDetail({ product: p, crumbs }: { product: Detail; crumbs: Crumb[] }) {
  const onSale = p.savings && p.regularPrice;
  const features = groupFeatures(p.features);
  const quoteHref = `/request-quote?productSKU=${encodeURIComponent(p.model)}&productName=${encodeURIComponent(p.name)}`;

  return (
    <div className={styles.page}>
      <div className={styles.top}>
        <div className={styles.crumbRow}>
          <Breadcrumbs items={crumbs} bare />
        </div>

        <div className={styles.left}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{p.name}</h1>
            <div className={styles.meta}>
              {p.brand && (
                <span className={styles.brand}>
                  <Link href={`/brands/ct/${encodeURIComponent(p.brand)}`}>{p.brand}</Link>
                </span>
              )}
              <hr className={styles.metaDivider} />
              <p className={styles.modelLabel}>Model #:</p>
              <p className={styles.modelValue}>{p.model}</p>
            </div>
            {p.reviews > 0 && (
              <div className={styles.rating}>
                <Rating value={p.rating} />
                <span>({p.reviews.toLocaleString("en-US")})</span>
              </div>
            )}
          </div>
          <Gallery images={p.images} videos={p.videos} name={p.name} placeholder={store.placeholderImage} />
        </div>

        <div className={styles.right}>
          <div>
            <h2 className={styles.glance}>At a Glance</h2>
            {p.dimensions && <p className={styles.dims}>Product Dimensions {p.dimensions}</p>}
            {p.shortDescription && (
              <p className={styles.short}>
                {p.shortDescription}
                <a href="#product-overview" className={styles.readMore}>
                  Read More
                </a>
              </p>
            )}
          </div>

          <div>
            {p.promotions.length > 0 && (
              <div className={styles.savingsBar}>
                <span className={styles.savingsTitle}>
                  <InfoIcon />
                  Additional Savings Available
                </span>
                <button type="button" popoverTarget="savings" className={styles.savingsDetails}>
                  Details ›
                </button>
              </div>
            )}
            {p.showPrice && p.price && (
              <div className={styles.priceRow}>
                <div className={onSale ? `${styles.price} ${styles.priceSale}` : styles.price}>{p.price.formatted}</div>
                {onSale && (
                  <div className={styles.saveRow}>
                    <span className={styles.was}>{p.regularPrice!.formatted}</span>
                    <span className={styles.save}>Save {p.savings!.formatted}</span>
                  </div>
                )}
              </div>
            )}
            {/* phones show brand and model under the price instead of under the title */}
            <div className={styles.metaMobile}>
              {p.brand && (
                <p>
                  View more by <Link href={`/brands/ct/${encodeURIComponent(p.brand)}`}>{p.brand}</Link>
                </p>
              )}
              <p>Model #: {p.model}</p>
            </div>
          </div>

          <h2 className={styles.offer}>What We Offer</h2>
          <div className={styles.services}>
            <div className={styles.servicesHead}>
              <span>Services</span>
              <span className={styles.viewOptions}>View Options ›</span>
            </div>
            <div className={styles.servicesValue}>None Selected</div>
          </div>

          {p.showAddToCart && (
            <button type="button" className={styles.addToCart}>
              Add To Cart
            </button>
          )}
          {p.flags.map((f) => (
            <div key={f.line1} className={styles.flag}>
              <span>{f.line1}</span>
              {f.line2 && <span>{f.line2}</span>}
            </div>
          ))}
          <Link href={quoteHref} className={styles.moreInfo}>
            <InfoIcon />
            Request More Info
          </Link>

          {p.promotions.length > 0 && (
            <div id="savings" popover="auto" className={styles.promoList}>
              <h3 className={styles.promoHead}>Additional Savings</h3>
              {p.promotions.map((pr) => (
                <div key={pr.name} className={styles.promo}>
                  <strong>{pr.name}</strong>
                  {pr.amount && <span> · {pr.amount}</span>}
                  {pr.description && <p>{pr.description}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className={styles.know} id="product-overview">
        <h2 className={styles.knowTitle}>Get to know this product. </h2>
        <details className={styles.accordion} open>
          <summary className={styles.accordionSummary}>Product Overview</summary>
          <div className={styles.accordionBody}>
            <div className={styles.col}>
              <h4 className={styles.h5}>Product Overview</h4>
              {features.map((g, i) => (
                <div key={i}>
                  {g.headline && <h6 className={styles.featureHead}>{g.headline}</h6>}
                  {g.bullets.map((b, j) => (
                    <p key={j} className={styles.bullet}>
                      {b}
                    </p>
                  ))}
                </div>
              ))}
              {!features.length && p.shortDescription && <p className={styles.bullet}>{p.shortDescription}</p>}
            </div>
            <div className={styles.col}>
              {p.documents.length > 0 && (
                <>
                  <h5 className={styles.h5}>Useful Documents</h5>
                  <div className={styles.docs}>
                    {p.documents.map((d) => (
                      <div key={d.url} className={styles.doc}>
                        <DocumentIcon className={styles.docIcon} />
                        <a href={d.url} target="_blank" rel="noreferrer">
                          {d.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {p.specs.length > 0 && (
                <div className={styles.specs}>
                  <h5 className={styles.h5Specs}>Specifications</h5>
                  <table className={styles.table}>
                    {p.specs.map((g) => (
                      <tbody key={g.name}>
                        <tr>
                          <td colSpan={2} className={styles.groupCell}>
                            <h4>{g.name}</h4>
                          </td>
                        </tr>
                        {g.rows.map((r, i) => (
                          <tr key={r.name + i} className={i % 2 ? styles.zebra : undefined}>
                            <td>{r.name}</td>
                            <td>{r.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    ))}
                  </table>
                </div>
              )}
            </div>
          </div>
        </details>
      </section>
    </div>
  );
}

function groupFeatures(features: Detail["features"]) {
  const groups: { headline: string | null; bullets: string[] }[] = [];
  for (const f of features) {
    if (f.type === "Headline" || !groups.length) groups.push({ headline: f.type === "Headline" ? f.text : null, bullets: [] });
    if (f.type !== "Headline") groups[groups.length - 1].bullets.push(f.text);
  }
  return groups;
}
