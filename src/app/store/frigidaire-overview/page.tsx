import type { Metadata } from "next";
import FrigidaireOverviewContent from "@/content/store/FrigidaireOverviewContent";
import "@/styles/store/pages/frigidaire-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Frigidaire Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Frigidaire specializes in high-quality, energy efficient laundry and kitchen appliances. Discover the Frigidaire collections today! ",
  "alternates": {
    "canonical": "/frigidaire-overview"
  }
};

export default function Page() {
  return <FrigidaireOverviewContent />;
}
