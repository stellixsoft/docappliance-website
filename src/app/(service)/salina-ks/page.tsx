import type { Metadata } from "next";
import SalinaKsContent from "@/content/pages/SalinaKsContent";
import "@/styles/pages/salina-ks.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Salina, KS | Kitchen & Home Appliances Service | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliance repairs and service in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS ",
  "alternates": {
    "canonical": "/salina-ks"
  }
};

export default function Page() {
  return <SalinaKsContent />;
}
