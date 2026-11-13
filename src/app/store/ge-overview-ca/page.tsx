import type { Metadata } from "next";
import GeOverviewCaContent from "@/content/store/GeOverviewCaContent";
import "@/styles/store/pages/ge-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "GE Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliances for every home. Shop our GE refrigerators, ranges, dishwashers, microwaves, washers and dryers for your kitchen and laundry room. ",
  "alternates": {
    "canonical": "/ge-overview-ca"
  }
};

export default function Page() {
  return <GeOverviewCaContent />;
}
