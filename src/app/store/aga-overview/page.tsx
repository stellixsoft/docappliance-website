import type { Metadata } from "next";
import AgaOverviewContent from "@/content/store/AgaOverviewContent";
import "@/styles/store/pages/aga-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "AGA Overview | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/aga-overview"
  }
};

export default function Page() {
  return <AgaOverviewContent />;
}
