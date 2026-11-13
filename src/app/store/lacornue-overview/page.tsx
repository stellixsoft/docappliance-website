import type { Metadata } from "next";
import LacornueOverviewContent from "@/content/store/LacornueOverviewContent";
import "@/styles/store/pages/lacornue-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "La Cornue Ranges | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Where customization meets craftsmanship. Explore our La Cornue gas and induction ranges, ventilation and accessories, including the CornuFé collection. ",
  "alternates": {
    "canonical": "/lacornue-overview"
  }
};

export default function Page() {
  return <LacornueOverviewContent />;
}
