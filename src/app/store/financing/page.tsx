import type { Metadata } from "next";
import FinancingContent from "@/content/store/FinancingContent";
import "@/styles/store/pages/financing.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Special Financing & Easy Payment Options | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Weekly Specials, Huge Savings & Special Financing on Appliances. Apply Now! ",
  "alternates": {
    "canonical": "/financing"
  }
};

export default function Page() {
  return <FinancingContent />;
}
