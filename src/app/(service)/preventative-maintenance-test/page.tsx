import type { Metadata } from "next";
import PreventativeMaintenanceTestContent from "@/content/pages/PreventativeMaintenanceTestContent";
import "@/styles/pages/preventative-maintenance-test.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "h0136_1 preventative-maintenance-test | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/preventative-maintenance-test"
  }
};

export default function Page() {
  return <PreventativeMaintenanceTestContent />;
}
