import type { Metadata } from "next";
import ZephyrOverviewCaContent from "@/content/store/ZephyrOverviewCaContent";
import "@/styles/store/pages/zephyr-overview-ca.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Zephyr Range Hoods and Refrigeration | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Design beyond expectations. Shop our Zephyr range hoods and Presrv refrigeration, designed to look as good as they perform in any home kitchen. ",
  "alternates": {
    "canonical": "/zephyr-overview-ca"
  }
};

export default function Page() {
  return <ZephyrOverviewCaContent />;
}
