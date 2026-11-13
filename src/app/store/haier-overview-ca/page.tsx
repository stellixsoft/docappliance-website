import type { Metadata } from "next";
import HaierOverviewCaContent from "@/content/store/HaierOverviewCaContent";
import "@/styles/store/pages/haier-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Haier Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Bring the unexpected to life. Shop our Haier washers, dryers, refrigerators, cooking appliances and dishwashers, designed to make everyday living easier. ",
  "alternates": {
    "canonical": "/haier-overview-ca"
  }
};

export default function Page() {
  return <HaierOverviewCaContent />;
}
