import type { Metadata } from "next";
import PrivacyCaliforniaPrivacyRightsContent from "@/content/pages/PrivacyCaliforniaPrivacyRightsContent";
import "@/styles/pages/privacy_california-privacy-rights.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "California Privacy Rights | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/privacy/california-privacy-rights"
  }
};

export default function Page() {
  return <PrivacyCaliforniaPrivacyRightsContent />;
}
