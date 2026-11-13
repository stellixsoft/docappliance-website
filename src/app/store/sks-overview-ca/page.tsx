import type { Metadata } from "next";
import SksOverviewCaContent from "@/content/store/SksOverviewCaContent";
import "@/styles/store/pages/sks-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Signature Kitchen Suite Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "For those who live by Technicurean standards. Shop our Signature Kitchen Suite cooking, refrigeration and dishwashers, built with uncompromising quality. ",
  "alternates": {
    "canonical": "/sks-overview-ca"
  }
};

export default function Page() {
  return <SksOverviewCaContent />;
}
