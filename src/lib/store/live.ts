import "server-only";
import { unstable_cache } from "next/cache";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import nodePath from "node:path";

/**
 * Demo data source for the store.
 *
 * The current store (AVB / BrandSource platform) server-renders every category and product page with its
 * full data embedded as JSON. Until the new backend exists, the demo reads that JSON, keeps only the
 * fields the templates need and caches the result for an hour, so every one of the ~11k live URLs works.
 *
 * Replacing this file with calls to the real backend is the only change the templates need.
 */
const ORIGIN = "https://sales.docappliance.com";
const REVALIDATE = 3600;

type Json = Record<string, unknown>;
type NextData = { props: { pageProps: { initialState: Json } } };

export class StoreNotFound extends Error {}

/**
 * Saved copy of the demo data (data/store-snapshot), so the demo still works when the live store is slow or
 * refuses requests (it rate-limits by IP). STORE_DATA=snapshot uses the saved copy first; otherwise it is the
 * fallback when a live request fails. STORE_SNAPSHOT_WRITE=1 saves every successful live result.
 */
const SNAPSHOT_DIR = nodePath.join(process.cwd(), "data", "store-snapshot");

function snapshotFile(kind: string, key: string) {
  return nodePath.join(SNAPSHOT_DIR, kind, createHash("sha1").update(key).digest("hex").slice(0, 16) + ".json");
}

async function readSnapshot<T>(kind: string, key: string): Promise<T | null> {
  try {
    return JSON.parse(await readFile(snapshotFile(kind, key), "utf8")) as T;
  } catch {
    return null;
  }
}

async function withSnapshot<T>(kind: string, key: string, load: () => Promise<T>): Promise<T> {
  if (process.env.STORE_DATA === "snapshot") {
    const saved = await readSnapshot<T>(kind, key);
    if (saved) return saved;
  }
  try {
    const value = await load();
    if (process.env.STORE_SNAPSHOT_WRITE === "1") {
      const file = snapshotFile(kind, key);
      await mkdir(nodePath.dirname(file), { recursive: true });
      await writeFile(file, JSON.stringify(value));
    }
    return value;
  } catch (err) {
    if (err instanceof StoreNotFound) throw err;
    const saved = await readSnapshot<T>(kind, key);
    if (saved) return saved;
    throw err;
  }
}

async function fetchNextData(pathWithQuery: string): Promise<{ status: number; state: Json }> {
  const res = await fetch(ORIGIN + pathWithQuery, {
    cache: "no-store",
    headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
      accept: "text/html",
    },
  });
  if (res.status === 404) throw new StoreNotFound(pathWithQuery);
  if (!res.ok) throw new Error(`Store returned ${res.status} for ${pathWithQuery}`);
  const html = await res.text();
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error(`No page data in ${pathWithQuery}`);
  const data = JSON.parse(m[1]) as NextData;
  return { status: res.status, state: data.props.pageProps.initialState };
}

// ---------------------------------------------------------------- types

export type Money = { value: number; formatted: string };

export type ProductFlag = { line1: string; line2?: string; color?: string; textColor?: string };

export type ProductPromotion = { name: string; description?: string; amount?: string; endsAt?: string | null };

export type Swatch = { label: string; image: string | null; productId: string };

export type ProductTile = {
  id: string;
  name: string;
  urlKey: string;
  model: string;
  brand: string;
  image: string | null;
  price: Money | null;
  regularPrice: Money | null;
  savings: Money | null;
  savingsEndsAt: string | null;
  rating: number;
  reviews: number;
  flags: ProductFlag[];
  promotions: ProductPromotion[];
  swatches: Swatch[];
  energyStar: boolean;
  /** Merchandising label such as "Showroom Model". */
  badge: string | null;
  showPrice: boolean;
  showAddToCart: boolean;
};

export type FilterValue = { value: string; label: string; count: number };
export type Filter = { attribute: string; label: string; type: string; values: FilterValue[] };

export type CatalogPage = {
  id: string;
  key: string;
  name: string;
  title: string;
  description: string | null;
  displayMode: string;
  products: ProductTile[];
  filters: Filter[];
  page: number;
  pageCount: number;
  total: number;
};

export type SpecGroup = { name: string; rows: { name: string; value: string }[] };

export type ProductDetail = ProductTile & {
  shortDescription: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  collection: string | null;
  color: string | null;
  images: { url: string; label: string }[];
  features: { type: string; text: string }[];
  documents: { label: string; url: string }[];
  specs: SpecGroup[];
  dimensions: string | null;
  videos: { url: string; label: string }[];
  categoryIds: string[];
  canonicalKey: string;
};

// ---------------------------------------------------------------- mapping

const str = (v: unknown): string | null => (v === null || v === undefined || v === "None" || v === "" ? null : String(v));
const num = (v: unknown): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};
const money = (v: unknown, f: unknown): Money | null => (str(v) === null ? null : { value: num(v), formatted: String(f ?? "") });
const bool = (v: unknown) => v === true || v === "True" || v === "true" || v === "1" || v === 1;

function imageUrl(p: Json): string | null {
  const iu = p.image_url as Json | undefined;
  if (iu && typeof iu === "object" && iu.normal) return String(iu.normal);
  return null;
}

function flags(p: Json): ProductFlag[] {
  const f = p.product_flags;
  if (!Array.isArray(f)) return [];
  return f
    .map((x: Json) => {
      const t = (x.text ?? {}) as Json;
      return { line1: String(t.line1 ?? ""), line2: str(t.line2) ?? undefined, color: str(x.color) ?? undefined, textColor: str(x.textColor) ?? undefined };
    })
    .filter((x) => x.line1);
}

function promotions(p: Json): ProductPromotion[] {
  const pr = p.promotions as Json | undefined;
  const list = (pr && Array.isArray(pr.product_promotions) ? pr.product_promotions : []) as Json[];
  return list.map((x) => ({
    name: String(x.catalog_title || x.name || x.label || ""),
    description: str(x.description) ?? undefined,
    amount: str(x.amount_formatted ?? x.discount_amount_formatted) ?? undefined,
    endsAt: str(x.to_date ?? x.end_date),
  }));
}

function swatches(p: Json): Swatch[] {
  const groups = Object.values((p.catalogSwatches ?? {}) as Record<string, Json>).sort((a, b) => num(a.ordinal) - num(b.ordinal));
  const g = groups[0];
  if (!g) return [];
  return ((g.options ?? []) as Json[]).map((o) => ({
    label: String(o.label),
    image: str(o.image),
    productId: String(((o.products ?? []) as unknown[])[0] ?? ""),
  }));
}

function tile(p: Json): ProductTile {
  const discount = num(p.discount);
  return {
    id: String(p.entity_id),
    name: String(p.name ?? ""),
    urlKey: String(p.url_key ?? p.canonical_url_key ?? ""),
    model: String(p.model_number ?? ""),
    brand: String(p.manufacturer ?? ""),
    image: imageUrl(p),
    price: money(p.final_price_with_tax, p.final_price_with_tax_formatted),
    regularPrice: money(p.regular_price_with_tax, p.regular_price_with_tax_formatted),
    savings: discount > 0 ? { value: discount, formatted: String(p.discount_formatted) } : null,
    savingsEndsAt: discount > 0 ? str(p.special_to_date) : null,
    rating: num(p.reviews_rating),
    reviews: num(p.reviews_count),
    flags: flags(p),
    promotions: promotions(p),
    swatches: swatches(p),
    energyStar: p.energy_star_qualified === "Yes",
    badge: badgeLabel(str(p.brandsource_point_of_sale_marketing)),
    showPrice: bool(p.display_price ?? true),
    showAddToCart: bool(p.display_add_to_cart ?? true),
  };
}

// ---------------------------------------------------------------- catalog

async function loadCatalog(pathWithQuery: string): Promise<CatalogPage> {
  const { state } = await fetchNextData(pathWithQuery);
  const cat = state.catalogSlice as Json;
  const info = (cat.info ?? {}) as Json;
  const key = String(cat.catalogKey ?? "");
  const byId = ((state.productSlice as Json).byId ?? {}) as Record<string, Json>;
  const lists = (cat.products ?? {}) as Record<string, string[]>;
  // Promotion listings (/catalog/special/promotion/<program>) have no category record, only products and a heading.
  if (!info.entity_id && !Object.keys(lists).length) throw new StoreNotFound(pathWithQuery);
  const ids = Object.values(lists)[0] ?? [];
  const filtersRaw = (((cat.filters ?? {}) as Record<string, Json[]>)[key] ?? []) as Json[];
  const filters: Filter[] = filtersRaw.map((f) => ({
    attribute: String(f.attribute),
    label: String(f.display_name),
    type: String(f.type),
    values: ((f.values ?? []) as Json[]).map((v) => ({ value: String(v.value), label: String(v.display_name), count: num(v.product_count) })),
  }));
  // Every product has exactly one brand, so the brand counts add up to the (filtered) result count.
  const brands = filters.find((f) => f.attribute === "manufacturer");
  const total = brands ? brands.values.reduce((s, v) => s + v.count, 0) : num(info.product_count) || ids.length;
  return {
    id: String(info.entity_id),
    key,
    name: String(info.name || info.page_h1_title || key),
    title: String(info.meta_title || info.name || info.page_h1_title || key),
    description: str(info.meta_description),
    displayMode: String(info.display_mode ?? "PRODUCTS"),
    products: ids.filter((id) => byId[id]).map((id) => tile(byId[id])),
    filters,
    page: num(cat.page),
    pageCount: num(cat.pageCount),
    total: Math.max(total, ids.length),
  };
}

/** "10"h x 29.88"w x 21"d", the live "Product Dimensions" line, from the product's size fields. */
function dimensions(d: Record<string, unknown>): string | null {
  const parts = [["Height (in.)", "h"], ["Width (in.)", "w"], ["Depth (in.)", "d"]]
    .filter(([k]) => d[k] !== null && d[k] !== undefined && d[k] !== "")
    .map(([k, s]) => `${d[k]}"${s}`);
  return parts.length ? parts.join(" x ") : null;
}

/**
 * Tile badge from the merchandising tags ("Homepage Featured Products, Showroom Models" -> "Showroom Model").
 * Placement tags (Homepage ...) are not shown; the live tile shows one tag, in the singular.
 */
function badgeLabel(v: string | null): string | null {
  const tag = (v ?? "").split(",").map((t) => t.trim()).find((t) => t && !/^homepage\b/i.test(t));
  return tag ? tag.replace(/ Models$/i, " Model") : null;
}

/** Route params can arrive still percent-encoded ("speed%20queen"); decode once so they are not encoded twice. */
function safeDecode(s: string) {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

/** One category listing page, including the query string (page, sort, filters) the live site understands. */
export function getCatalog(segments: string[], query: string): Promise<CatalogPage> {
  const path = "/catalog/" + segments.map((s) => encodeURIComponent(safeDecode(s))).join("/") + (query ? `?${query}` : "");
  return unstable_cache(() => withSnapshot("catalog", path, () => loadCatalog(path)), ["store-catalog", path], { revalidate: REVALIDATE })();
}

// ---------------------------------------------------------------- product

async function loadProduct(key: string): Promise<ProductDetail> {
  const { state } = await fetchNextData("/product/" + encodeURIComponent(safeDecode(key)));
  const ps = state.productSlice as Json;
  const byId = (ps.byId ?? {}) as Record<string, Json>;
  const p = Object.values(byId).find((x) => x.url_key === key || x.canonical_url_key === key) as Json | undefined;
  if (!p || ps.notFound === true) throw new StoreNotFound(key);
  const t = tile(p);
  const docs = (p.doc_asset ?? {}) as Record<string, string>;
  const specs: SpecGroup[] = [];
  const general = (p.product_data ?? {}) as Record<string, unknown>;
  const generalRows = Object.entries(general)
    .filter(([, v]) => v !== null && v !== "" && typeof v !== "object")
    .map(([name, value]) => ({ name, value: String(value) }));
  if (generalRows.length) specs.push({ name: "General Specs", rows: generalRows });
  for (const g of (p.simple_attributes ?? []) as Json[]) {
    specs.push({
      name: String(g.groupName),
      rows: ((g.attributes ?? []) as Json[]).map((a) => ({ name: String(a.name), value: String(a.value) })),
    });
  }
  const images = ((p.images ?? []) as Json[])
    .filter((i) => String(i.exclude) !== "1")
    .sort((a, b) => num(a.position) - num(b.position))
    .map((i) => ({ url: String(i.url), label: String(i.label ?? "") }));
  return {
    ...t,
    shortDescription: str(p.short_description),
    metaTitle: str(p.meta_title),
    metaDescription: str(p.meta_description),
    collection: str(p.collection_name),
    color: str(p.color),
    images: images.length ? images : t.image ? [{ url: t.image, label: t.name }] : [],
    features: ((p.product_features ?? []) as Json[])
      .sort((a, b) => num(a.Ordinal) - num(b.Ordinal))
      .map((f) => ({ type: String(f.Type), text: String(f.Description) })),
    documents: Object.entries(docs).map(([label, url]) => ({ label, url })),
    specs,
    dimensions: dimensions(general),
    videos: ((p.assets ?? []) as Json[])
      .filter((a) => a.asset_type === "video")
      .sort((a, b) => num(a.ordinal) - num(b.ordinal))
      .map((a) => ({ url: String(((a.urls ?? []) as Json[])[0]?.url ?? ""), label: String(a.description ?? "") }))
      .filter((v) => v.url),
    categoryIds: ((p.categories ?? []) as unknown[]).map(String),
    canonicalKey: String(p.canonical_url_key ?? key),
  };
}

export function getProduct(key: string): Promise<ProductDetail> {
  return unstable_cache(() => withSnapshot("product", key, () => loadProduct(key)), ["store-product", key], { revalidate: REVALIDATE })();
}

// ---------------------------------------------------------------- promotions

export type Promotion = {
  id: string;
  title: string;
  summary: string;
  brand: string;
  logo: string | null;
  startDate: string;
  endDate: string;
  formUrl: string | null;
  programId: string;
};

export type PromotionSort = { label: string; order: string; dir: string };

export type PromotionsPage = {
  promotions: Promotion[];
  /** True when more promotions exist than are shown ("Load More"). */
  more: boolean;
  categories: string[];
  brands: string[];
  sorts: PromotionSort[];
};

const PROMO_PAGE = 12;

function toPromotion(b: Json): Promotion {
  return {
    id: String(b.banner_id),
    title: String(b.promo_name ?? b.name ?? ""),
    summary: String(b.promo_short_description ?? ""),
    brand: String(b.manufacturer ?? ""),
    logo: ((b.brand_logo_urls ?? []) as string[])[0] ?? null,
    startDate: String(b.start_date ?? ""),
    endDate: String(b.end_date ?? ""),
    formUrl: str(b.rebate_form_url),
    programId: String(b.program_id ?? ""),
  };
}

async function promoState(query: string) {
  const { state } = await fetchNextData("/promotions" + (query ? `?${query}` : ""));
  return (state.promotionsSlice ?? {}) as Json;
}

/**
 * The promotions page. The live page renders the first 12 promotions for the given filters and sort
 * (?category=, ?manufacturer= comma lists, ?order=&dir=). "Load More" uses an API the store keeps private,
 * so later pages are put together from one filtered page per brand (no brand has more than 12).
 */
async function loadPromotions(query: string, pages: number): Promise<PromotionsPage> {
  const q = new URLSearchParams(query);
  const slice = await promoState(q.toString());
  const filters = (slice.filters ?? {}) as Record<string, string[]>;
  const first = ((slice.banners ?? []) as Json[]).map(toPromotion);
  const sorts = ((slice.sorts ?? []) as Json[]).map((s) => ({ label: String(s.displayName), order: String(s.queryParamValue), dir: String(s.dir) }));
  const page = { categories: filters.category ?? [], brands: filters.manufacturer ?? [], sorts };
  if (first.length < PROMO_PAGE) return { ...page, promotions: first, more: false };

  const chosen = q.get("manufacturer")?.split(",").filter(Boolean);
  const all = new Map(first.map((p) => [p.id, p]));
  for (const brand of chosen?.length ? chosen : page.brands) {
    const bq = new URLSearchParams(q);
    bq.set("manufacturer", brand);
    for (const b of ((await promoState(bq.toString())).banners ?? []) as Json[]) {
      const p = toPromotion(b);
      if (!all.has(p.id)) all.set(p.id, p);
    }
  }
  const order = q.get("order") ?? "end_date";
  const dir = q.get("dir") === "desc" ? -1 : 1;
  const key = (p: Promotion) => (order === "manufacturer" ? p.brand : order === "start_date" ? p.startDate : p.endDate);
  const rest = [...all.values()].slice(first.length).sort((a, b) => key(a).localeCompare(key(b)) * dir);
  const list = [...first, ...rest];
  return { ...page, promotions: list.slice(0, pages * PROMO_PAGE), more: list.length > pages * PROMO_PAGE };
}

export function getPromotions(query: string, pages = 1): Promise<PromotionsPage> {
  return unstable_cache(() => withSnapshot("promotions", `${query}|${pages}`, () => loadPromotions(query, pages)), ["store-promotions", query, String(pages)], { revalidate: REVALIDATE })();
}
