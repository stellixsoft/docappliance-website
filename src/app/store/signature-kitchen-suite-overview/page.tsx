import type { Metadata } from "next";
import SignatureKitchenSuiteOverviewContent from "@/content/store/SignatureKitchenSuiteOverviewContent";
import "@/styles/store/pages/signature-kitchen-suite-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "SKS Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Built for those who live to cook. Explore our SKS cooking, refrigeration and dishwashers, made with true-to-food technology.\r\n ",
  "alternates": {
    "canonical": "/signature-kitchen-suite-overview"
  }
};

export default function Page() {
  return <SignatureKitchenSuiteOverviewContent />;
}
