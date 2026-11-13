import type { Metadata } from "next";
import PrivacyPoliciesTermsAndConditionsContent from "@/content/store/PrivacyPoliciesTermsAndConditionsContent";
import "@/styles/store/pages/privacy-policies_terms-and-conditions.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Website Terms and Conditions | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/privacy-policies/terms-and-conditions"
  }
};

export default function Page() {
  return <PrivacyPoliciesTermsAndConditionsContent />;
}
