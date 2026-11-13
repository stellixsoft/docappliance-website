import type { Metadata } from "next";
import ScotsmanOverviewContent from "@/content/store/ScotsmanOverviewContent";
import "@/styles/store/pages/scotsman-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Scotsman Ice Machines | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "An unexpected luxury: perfect ice at home. Shop our Scotsman indoor and outdoor ice machines and undercounter freezers for kitchens and home bars. ",
  "alternates": {
    "canonical": "/scotsman-overview"
  }
};

export default function Page() {
  return <ScotsmanOverviewContent />;
}
