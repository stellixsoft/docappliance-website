import type { Metadata } from "next";
import PrivacyCaliforniaPrivacyRightsContent from "@/content/store/PrivacyCaliforniaPrivacyRightsContent";
import "@/styles/store/pages/privacy_california-privacy-rights.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "California Privacy Rights | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/privacy/california-privacy-rights"
  }
};

export default function Page() {
  return <PrivacyCaliforniaPrivacyRightsContent />;
}
