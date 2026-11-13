import type { Metadata } from "next";
import ApplianceRepairContent from "@/content/store/ApplianceRepairContent";
import "@/styles/store/pages/appliance-repair.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Appliance Repair | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/appliance-repair"
  }
};

export default function Page() {
  return <ApplianceRepairContent />;
}
