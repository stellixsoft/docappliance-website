import type { Metadata } from "next";
import LgStudioOverviewContent from "@/content/store/LgStudioOverviewContent";
import "@/styles/store/pages/lg-studio-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "LG STUDIO Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Stay creative in the kitchen. Shop our LG STUDIO ranges with InstaView, multifunction cooking and EasyClean, plus a full suite of premium appliances. ",
  "alternates": {
    "canonical": "/lg-studio-overview"
  }
};

export default function Page() {
  return <LgStudioOverviewContent />;
}
