import type { Metadata } from "next";
import PrivacyContent from "@/content/store/PrivacyContent";
import "@/styles/store/pages/privacy.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Privacy Policy | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "This Privacy Policy applies to www.brandsource.com/ owned and operated by BrandSource. This Privacy Policy describes how BrandSource collects, uses, shares and secures the personal information you provide ",
  "alternates": {
    "canonical": "/privacy"
  }
};

export default function Page() {
  return <PrivacyContent />;
}
