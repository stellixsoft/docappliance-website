import type { Metadata } from "next";
import ServiceNetworkPartnershipContent from "@/content/pages/ServiceNetworkPartnershipContent";
import "@/styles/pages/service-network-partnership.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Service Network Partnership | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/service-network-partnership"
  }
};

export default function Page() {
  return <ServiceNetworkPartnershipContent />;
}
