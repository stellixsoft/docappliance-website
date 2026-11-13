import type { Metadata } from "next";
import CafeOverviewCaContent from "@/content/store/CafeOverviewCaContent";
import "@/styles/store/pages/cafe-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Café Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliances with personality. Shop our Café ranges, refrigerators, dishwashers and more, and make them yours with customizable hardware finishes. ",
  "alternates": {
    "canonical": "/cafe-overview-ca"
  }
};

export default function Page() {
  return <CafeOverviewCaContent />;
}
