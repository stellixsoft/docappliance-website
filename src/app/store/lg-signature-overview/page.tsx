import type { Metadata } from "next";
import LgSignatureOverviewContent from "@/content/store/LgSignatureOverviewContent";
import "@/styles/store/pages/lg-signature-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "LG SIGNATURE Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "High design with performance to match. Explore our LG SIGNATURE refrigerators, cooking appliances, dishwashers and laundry for the luxury home. ",
  "alternates": {
    "canonical": "/lg-signature-overview"
  }
};

export default function Page() {
  return <LgSignatureOverviewContent />;
}
