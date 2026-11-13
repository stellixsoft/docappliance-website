import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, StoreNotFound } from "@/lib/store/live";
import { ancestors, categoryById, categoryHref, ROOT_KEY } from "@/lib/store/categories";
import { store } from "@/data/store";
import type { Crumb } from "@/components/store/catalog/Breadcrumbs";
import { ProductDetail } from "@/components/store/product/ProductDetail";

type Props = { params: Promise<{ productKey: string }> };

async function load(props: Props) {
  const { productKey } = await props.params;
  try {
    return await getProduct(decodeURIComponent(productKey));
  } catch (e) {
    if (e instanceof StoreNotFound) notFound();
    throw e;
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const p = await load(props);
  return {
    title: { absolute: `${p.metaTitle ?? p.name}${store.titleSuffix}` },
    description: p.metaDescription ?? p.shortDescription ?? undefined,
    alternates: { canonical: `/product/${p.canonicalKey}` },
    openGraph: p.image ? { images: [p.image] } : undefined,
  };
}

export default async function ProductRoute(props: Props) {
  const p = await load(props);
  // Breadcrumb: deepest category the product belongs to, without the catalog root.
  const deepest = p.categoryIds
    .map((id) => categoryById(id))
    .filter((c) => c !== undefined)
    .sort((a, b) => Number(b.level) - Number(a.level))[0];
  const crumbs: Crumb[] = [];
  if (deepest) {
    for (const a of [...ancestors(deepest), deepest]) if (a.url_key !== ROOT_KEY && !/^Shop All\b/i.test(a.name)) crumbs.push({ label: a.name, href: categoryHref(a) });
  }
  return <ProductDetail product={p} crumbs={crumbs} />;
}
