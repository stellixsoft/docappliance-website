import type { Metadata } from "next";
import ReturnAndStorePoliciesContent from "@/content/store/ReturnAndStorePoliciesContent";
import "@/styles/store/pages/return-and-store-policies.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Return & Store Policies | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Learn more about our online store policies, terms, and conditions.\t ",
  "alternates": {
    "canonical": "/return-and-store-policies"
  }
};

export default function Page() {
  return <ReturnAndStorePoliciesContent />;
}
