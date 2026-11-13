import type { Metadata } from "next";
import ElectroluxOverviewContent from "@/content/store/ElectroluxOverviewContent";
import "@/styles/store/pages/electrolux-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Electrolux Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Discover Electrolux appliances. Browse kitchen and home categories, explore featured products, and find the right fit for your space. ",
  "alternates": {
    "canonical": "/electrolux-overview"
  }
};

export default function Page() {
  return <ElectroluxOverviewContent />;
}
