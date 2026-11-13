import type { Metadata } from "next";
import GeProfileOverviewContent from "@/content/store/GeProfileOverviewContent";
import "@/styles/store/pages/ge-profile-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "GE Profile Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Smart features, sophisticated design. Shop our GE Profile dishwashers, laundry, refrigerators and cooking appliances made to simplify everyday life. ",
  "alternates": {
    "canonical": "/ge-profile-overview"
  }
};

export default function Page() {
  return <GeProfileOverviewContent />;
}
