import type { Metadata } from "next";
import LynxGrillsOverviewContent from "@/content/store/LynxGrillsOverviewContent";
import "@/styles/store/pages/lynx-grills-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Lynx Outdoor Grills | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Live the Lynx life. Shop our Lynx Professional and Sedona by Lynx grills, outdoor refrigeration, sinks and bar centers, and grill accessories. ",
  "alternates": {
    "canonical": "/lynx-grills-overview"
  }
};

export default function Page() {
  return <LynxGrillsOverviewContent />;
}
