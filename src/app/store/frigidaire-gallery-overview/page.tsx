import type { Metadata } from "next";
import FrigidaireGalleryOverviewContent from "@/content/store/FrigidaireGalleryOverviewContent";
import "@/styles/store/pages/frigidaire-gallery-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Frigidaire Gallery Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Cook smarter with Frigidaire Gallery. Shop our refrigerators, dishwashers, microwaves and ranges, plus wall ovens with Total Convection and Air Fry. ",
  "alternates": {
    "canonical": "/frigidaire-gallery-overview"
  }
};

export default function Page() {
  return <FrigidaireGalleryOverviewContent />;
}
