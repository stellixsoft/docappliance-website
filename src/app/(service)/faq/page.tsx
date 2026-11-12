import type { Metadata } from "next";
import FaqContent from "@/content/pages/FaqContent";
import "@/styles/pages/faq.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Doctor Appliance Support & FAQs | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Have questions? Find quick answers to commonly asked questions about our services. ",
  "alternates": {
    "canonical": "/faq"
  }
};

export default function Page() {
  return <FaqContent />;
}
