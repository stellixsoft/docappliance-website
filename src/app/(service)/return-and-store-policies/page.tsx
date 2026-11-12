import type { Metadata } from "next";
import ReturnAndStorePoliciesContent from "@/content/pages/ReturnAndStorePoliciesContent";
import "@/styles/pages/return-and-store-policies.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Return & Store Policies | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/return-and-store-policies"
  }
};

export default function Page() {
  return <ReturnAndStorePoliciesContent />;
}
