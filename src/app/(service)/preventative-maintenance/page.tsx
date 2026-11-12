import type { Metadata } from "next";
import PreventativeMaintenanceContent from "@/content/pages/PreventativeMaintenanceContent";
import "@/styles/pages/preventative-maintenance.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Preventative Maintenance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/preventative-maintenance"
  }
};

export default function Page() {
  return <PreventativeMaintenanceContent />;
}
