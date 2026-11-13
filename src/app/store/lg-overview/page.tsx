import type { Metadata } from "next";
import LgOverviewContent from "@/content/store/LgOverviewContent";
import "@/styles/store/pages/lg-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "LG Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Make every day easier with LG. Shop our LG refrigerators, ranges, dishwashers and front- and top-load laundry, packed with smart, time-saving features. ",
  "alternates": {
    "canonical": "/lg-overview"
  }
};

export default function Page() {
  return <LgOverviewContent />;
}
