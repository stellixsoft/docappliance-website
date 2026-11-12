import type { Metadata } from "next";
import PrivacyPolicyCookieRestrictionModeContent from "@/content/pages/PrivacyPolicyCookieRestrictionModeContent";
import "@/styles/pages/privacy-policy-cookie-restriction-mode.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Privacy Policy | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/privacy-policy-cookie-restriction-mode"
  }
};

export default function Page() {
  return <PrivacyPolicyCookieRestrictionModeContent />;
}
