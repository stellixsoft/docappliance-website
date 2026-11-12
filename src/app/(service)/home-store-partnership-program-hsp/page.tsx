import type { Metadata } from "next";
import HomeStorePartnershipProgramHspContent from "@/content/pages/HomeStorePartnershipProgramHspContent";
import "@/styles/pages/home-store-partnership-program-hsp.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Home Store Partnership Program (HSP) | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/home-store-partnership-program-hsp"
  }
};

export default function Page() {
  return <HomeStorePartnershipProgramHspContent />;
}
