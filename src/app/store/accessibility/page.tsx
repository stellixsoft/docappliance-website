import type { Metadata } from "next";
import AccessibilityContent from "@/content/store/AccessibilityContent";
import "@/styles/store/pages/accessibility.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Accessibility | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/accessibility"
  }
};

export default function Page() {
  return <AccessibilityContent />;
}
