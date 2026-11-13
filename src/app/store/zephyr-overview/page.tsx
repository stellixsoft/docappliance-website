import type { Metadata } from "next";
import ZephyrOverviewContent from "@/content/store/ZephyrOverviewContent";
import "@/styles/store/pages/zephyr-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Zephyr Range Hoods & Refrigeration | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Design beyond expectations. Shop our Zephyr range hoods and Presrv refrigeration, designed to look as good as they perform in any home kitchen. ",
  "alternates": {
    "canonical": "/zephyr-overview"
  }
};

export default function Page() {
  return <ZephyrOverviewContent />;
}
