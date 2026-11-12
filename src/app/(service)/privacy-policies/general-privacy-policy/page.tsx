import type { Metadata } from "next";
import PrivacyPoliciesGeneralPrivacyPolicyContent from "@/content/pages/PrivacyPoliciesGeneralPrivacyPolicyContent";
import "@/styles/pages/privacy-policies_general-privacy-policy.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Website Privacy Policy | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Want to know how we collect and use your data? Learn more about our privacy policies including the types of data we collect and third-party services. Your privacy when you shop online is important. Learn more about our privacy policies concerning your data, payment information, and third-party services. ",
  "alternates": {
    "canonical": "/privacy-policies/general-privacy-policy"
  }
};

export default function Page() {
  return <PrivacyPoliciesGeneralPrivacyPolicyContent />;
}
