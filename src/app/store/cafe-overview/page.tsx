import type { Metadata } from "next";
import CafeOverviewContent from "@/content/store/CafeOverviewContent";
import "@/styles/store/pages/cafe-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Cafe Kitchen Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Discover CAFE appliances. Browse kitchen and home categories, explore featured products, and find the right fit for your space. ",
  "alternates": {
    "canonical": "/cafe-overview"
  }
};

export default function Page() {
  return <CafeOverviewContent />;
}
