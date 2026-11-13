import type { Metadata } from "next";
import FrigidaireProfessionalOverviewContent from "@/content/store/FrigidaireProfessionalOverviewContent";
import "@/styles/store/pages/frigidaire-professional-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Frigidaire Professional Series | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Eye-catching design, jaw-dropping performance. Shop our Frigidaire Professional refrigerators, ranges, cooktops, wall ovens, dishwashers and microwaves. ",
  "alternates": {
    "canonical": "/frigidaire-professional-overview"
  }
};

export default function Page() {
  return <FrigidaireProfessionalOverviewContent />;
}
