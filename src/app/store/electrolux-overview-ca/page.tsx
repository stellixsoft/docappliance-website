import type { Metadata } from "next";
import ElectroluxOverviewCaContent from "@/content/store/ElectroluxOverviewCaContent";
import "@/styles/store/pages/electrolux-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Electrolux Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Shop our Electrolux washers, dryers, refrigerators, dishwashers, ranges, cooktops, wall ovens, microwaves and ventilation for a kitchen that works beautifully. ",
  "alternates": {
    "canonical": "/electrolux-overview-ca"
  }
};

export default function Page() {
  return <ElectroluxOverviewCaContent />;
}
