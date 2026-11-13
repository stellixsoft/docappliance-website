import type { Metadata } from "next";
import VikingOverviewCaContent from "@/content/store/VikingOverviewCaContent";
import "@/styles/store/pages/viking-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Viking Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Discover why kitchens begin with Viking. Shop our Viking cooking, ventilation, refrigeration, cleanup and outdoor kitchen appliances in the 7, 5 and 3 Series. ",
  "alternates": {
    "canonical": "/viking-overview-ca"
  }
};

export default function Page() {
  return <VikingOverviewCaContent />;
}
