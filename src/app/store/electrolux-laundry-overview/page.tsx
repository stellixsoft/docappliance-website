import type { Metadata } from "next";
import ElectroluxLaundryOverviewContent from "@/content/store/ElectroluxLaundryOverviewContent";
import "@/styles/store/pages/electrolux-laundry-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Electrolux Laundry Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "You deserve the 5-star hotel quality of Electrolux laundry appliances. Learn more about the latest innovations and features from Electrolux today! ",
  "alternates": {
    "canonical": "/electrolux-laundry-overview"
  }
};

export default function Page() {
  return <ElectroluxLaundryOverviewContent />;
}
