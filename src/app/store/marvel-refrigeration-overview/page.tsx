import type { Metadata } from "next";
import MarvelRefrigerationOverviewContent from "@/content/store/MarvelRefrigerationOverviewContent";
import "@/styles/store/pages/marvel-refrigeration-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Marvel Refrigeration | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Thoughtfully designed for indoors and out. Shop our Marvel beverage centers, wine preservation units, compact refrigerators and ice machines for any space. ",
  "alternates": {
    "canonical": "/marvel-refrigeration-overview"
  }
};

export default function Page() {
  return <MarvelRefrigerationOverviewContent />;
}
