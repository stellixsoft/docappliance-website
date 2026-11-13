import type { Metadata } from "next";
import HaierOverviewContent from "@/content/store/HaierOverviewContent";
import "@/styles/store/pages/haier-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Haier Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Bring the unexpected to life. Shop our Haier washers, dryers, refrigerators, cooking appliances and dishwashers, designed to make everyday living easier. ",
  "alternates": {
    "canonical": "/haier-overview"
  }
};

export default function Page() {
  return <HaierOverviewContent />;
}
