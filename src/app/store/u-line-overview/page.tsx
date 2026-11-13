import type { Metadata } from "next";
import ULineOverviewContent from "@/content/store/ULineOverviewContent";
import "@/styles/store/pages/u-line-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "U-Line Refrigeration | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "The art of integrated refrigeration. Shop our U-Line beverage centers, wine preservation, refrigerators and ice machines for indoor and outdoor spaces. ",
  "alternates": {
    "canonical": "/u-line-overview"
  }
};

export default function Page() {
  return <ULineOverviewContent />;
}
