import type { Metadata } from "next";
import { PromotionsList } from "@/components/promotions/PromotionsList";

export const metadata: Metadata = {
  title: { absolute: "Promotions | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS" },
  description: "Browse the latest promotions and rebates.",
  alternates: { canonical: "/promotions" },
};

export default function Page() {
  return <PromotionsList />;
}
