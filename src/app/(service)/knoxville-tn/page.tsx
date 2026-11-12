import type { Metadata } from "next";
import KnoxvilleTnContent from "@/content/pages/KnoxvilleTnContent";
import "@/styles/pages/knoxville-tn.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Knoxville, TN | Kitchen & Home Appliances Service | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliance repairs and service in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS ",
  "alternates": {
    "canonical": "/knoxville-tn"
  }
};

export default function Page() {
  return <KnoxvilleTnContent />;
}
