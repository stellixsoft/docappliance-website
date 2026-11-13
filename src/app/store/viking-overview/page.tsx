import type { Metadata } from "next";
import VikingOverviewContent from "@/content/store/VikingOverviewContent";
import "@/styles/store/pages/viking-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Viking Kitchen Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Viking offers complete ultra-premium kitchens & truly consistent design. ",
  "alternates": {
    "canonical": "/viking-overview"
  }
};

export default function Page() {
  return <VikingOverviewContent />;
}
