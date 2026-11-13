import type { Metadata } from "next";
import LgApplianceHomeEntertainmentOverviewContent from "@/content/store/LgApplianceHomeEntertainmentOverviewContent";
import "@/styles/store/pages/lg-appliance-home-entertainment-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "LG Appliances & Home Entertainment | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Smarter living with LG. Shop our LG refrigerators, cooking, dishwashers, laundry and vacuums, plus OLED and LED TVs to connect your whole home. ",
  "alternates": {
    "canonical": "/lg-appliance-home-entertainment-overview"
  }
};

export default function Page() {
  return <LgApplianceHomeEntertainmentOverviewContent />;
}
