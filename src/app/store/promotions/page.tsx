import type { Metadata } from "next";
import { StorePromotions } from "@/components/store/promotions/StorePromotions";
import { getPromotions } from "@/lib/store/live";

export const metadata: Metadata = {
  title: { absolute: "Promotions | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS" },
  description: "Browse the latest promotions and rebates.",
  alternates: { canonical: "/promotions" },
};

type Props = { searchParams: Promise<Record<string, string | string[] | undefined>> };

/** Live promotions (rebates) from the store; filters and sort use the same query string as the live page. */
export default async function Page({ searchParams }: Props) {
  const sp = await searchParams;
  const q = new URLSearchParams();
  for (const k of ["category", "manufacturer", "order", "dir"]) {
    const v = sp[k];
    if (typeof v === "string" && v) q.set(k, v);
  }
  const pages = Math.max(1, Number(sp.page) || 1);
  const data = await getPromotions(q.toString(), pages);
  const more = new URLSearchParams(q);
  more.set("page", String(pages + 1));
  return <StorePromotions data={data} loadMoreHref={`/promotions?${more}`} />;
}
