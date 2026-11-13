import type { Metadata } from "next";
import GeOverviewContent from "@/content/store/GeOverviewContent";
import "@/styles/store/pages/ge-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "GE Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Discover GE appliances. Browse kitchen and home categories, explore featured products, and find the right fit for your space. ",
  "alternates": {
    "canonical": "/ge-overview"
  }
};

export default function Page() {
  return <GeOverviewContent />;
}
