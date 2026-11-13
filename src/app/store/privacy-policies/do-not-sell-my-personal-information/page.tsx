import type { Metadata } from "next";
import PrivacyPoliciesDoNotSellMyPersonalInformationContent from "@/content/store/PrivacyPoliciesDoNotSellMyPersonalInformationContent";
import "@/styles/store/pages/privacy-policies_do-not-sell-my-personal-information.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Do Not Sell My Information | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "We do not sell your personally identifiable information to anyone. We use your data to provide and improve your experience while visiting our website. ",
  "alternates": {
    "canonical": "/privacy-policies/do-not-sell-my-personal-information"
  }
};

export default function Page() {
  return <PrivacyPoliciesDoNotSellMyPersonalInformationContent />;
}
