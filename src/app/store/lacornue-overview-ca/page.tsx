import type { Metadata } from "next";
import LacornueOverviewCaContent from "@/content/store/LacornueOverviewCaContent";
import "@/styles/store/pages/lacornue-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "La Cornue Ranges | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Where customization meets craftsmanship. Explore our La Cornue gas and induction ranges, ventilation and accessories, including the CornuFé collection. ",
  "alternates": {
    "canonical": "/lacornue-overview-ca"
  }
};

export default function Page() {
  return <LacornueOverviewCaContent />;
}
