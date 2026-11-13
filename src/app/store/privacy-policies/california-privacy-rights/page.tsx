import type { Metadata } from "next";
import PrivacyPoliciesCaliforniaPrivacyRightsContent from "@/content/store/PrivacyPoliciesCaliforniaPrivacyRightsContent";
import "@/styles/store/pages/privacy-policies_california-privacy-rights.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "California Privacy Rights | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Residents of California have additional data privacy rights under the California Consumer Privacy Act (CCPA) regarding collection of their personal information. ",
  "alternates": {
    "canonical": "/privacy-policies/california-privacy-rights"
  }
};

export default function Page() {
  return <PrivacyPoliciesCaliforniaPrivacyRightsContent />;
}
