import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCatalog, StoreNotFound, type CatalogPage } from "@/lib/store/live";
import { ancestors, categoryById, categoryByKey, categoryHref, children, ROOT_KEY } from "@/lib/store/categories";
import { store } from "@/data/store";
import { Breadcrumbs, type Crumb } from "@/components/store/catalog/Breadcrumbs";
import { FilterBar } from "@/components/store/catalog/FilterBar";
import { Pagination } from "@/components/store/catalog/Pagination";
import { ProductTile } from "@/components/store/catalog/ProductTile";
import styles from "@/components/store/catalog/Catalog.module.css";

type Props = { params: Promise<{ catalogKey: string[] }>; searchParams: Promise<Record<string, string | string[] | undefined>> };

/** Our query string matches the live store's (page, order, dir, and one key per filter attribute), so pass it on as is. */
function liveQuery(sp: Record<string, string | string[] | undefined>) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) for (const val of Array.isArray(v) ? v : v ? [v] : []) q.append(k, val);
  return q.toString();
}

async function load(props: Props): Promise<{ data: CatalogPage; keys: string[]; sp: Record<string, string | string[] | undefined> }> {
  const [{ catalogKey }, sp] = await Promise.all([props.params, props.searchParams]);
  try {
    return { data: await getCatalog(catalogKey, liveQuery(sp)), keys: catalogKey, sp };
  } catch (e) {
    if (e instanceof StoreNotFound) notFound();
    throw e;
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { data, keys } = await load(props);
  return {
    title: { absolute: `${data.title}${store.titleSuffix}` },
    description: data.description ?? undefined,
    alternates: { canonical: `/catalog/${keys.join("/")}` },
  };
}

export default async function CatalogRoute(props: Props) {
  const { data, keys, sp } = await load(props);
  const cat = categoryByKey(keys[keys.length - 1]) ?? categoryById(data.id);

  const crumbs: Crumb[] = [{ label: "Our Catalog" }];
  if (cat) for (const a of ancestors(cat)) if (a.url_key !== ROOT_KEY) crumbs.push({ label: a.name, href: categoryHref(a) });

  const categoryFilter = data.filters.find((f) => f.type === "category-tree");
  const categoryLinks: Record<string, string> = {};
  for (const v of categoryFilter?.values ?? []) {
    const c = categoryById(v.value);
    if (c) categoryLinks[v.value] = categoryHref(c);
  }
  // Chips follow the category order of the store admin (position), like the live site.
  const chips = (categoryFilter?.values ?? [])
    .filter((v) => categoryLinks[v.value])
    .sort((a, b) => Number(categoryById(a.value)?.position ?? 0) - Number(categoryById(b.value)?.position ?? 0));

  const page = Math.max(1, Number(Array.isArray(sp.page) ? sp.page[0] : sp.page) || 1);
  const base = `/catalog/${keys.join("/")}`;
  const hrefFor = (n: number) => {
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) for (const val of Array.isArray(v) ? v : v ? [v] : []) if (k !== "page") q.append(k, val);
    if (n > 1) q.set("page", String(n));
    const s = q.toString();
    return s ? `${base}?${s}` : base;
  };

  const isLanding = data.displayMode.startsWith("DYNAMIC_LANDING") && data.products.length === 0;
  const subcategories = cat ? children(cat) : [];

  return (
    <div className={styles.page}>
      <Breadcrumbs items={crumbs} />
      <div className={styles.body}>
        <div className={styles.heading}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{data.name}</h1>
            {data.total > 0 && <p className={styles.resultsMobile}>{data.total} Results</p>}
          </div>
          {chips.length > 0 && (
            <div className={styles.chips}>
              {chips.map((v) => (
                <Link key={v.value} href={categoryLinks[v.value]} className={styles.chip}>
                  {v.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {isLanding ? (
          <div className={styles.landing}>
            {subcategories.map((c) => (
              <Link key={c.entity_id} href={categoryHref(c)} className={styles.landingTile}>
                {c.image_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.image_url} alt="" loading="lazy" />
                )}
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        ) : (
          <>
            <Suspense>
              <FilterBar filters={data.filters} categoryLinks={categoryLinks} total={data.total} />
            </Suspense>
            <div className={styles.progress} />
            <hr className={styles.divider} />
            {data.products.length ? (
              <div className={styles.grid}>
                {data.products.map((p) => (
                  <ProductTile key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <p className={styles.empty}>No products match these filters.</p>
            )}
            <Pagination page={page} pageCount={data.pageCount} hrefFor={hrefFor} />
          </>
        )}
      </div>
    </div>
  );
}
