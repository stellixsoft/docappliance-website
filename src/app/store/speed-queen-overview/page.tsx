import type { Metadata } from "next";
import SpeedQueenOverviewContent from "@/content/store/SpeedQueenOverviewContent";
import "@/styles/store/pages/speed-queen-overview.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Speed Queen Laundry | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Built better to last longer. Shop our Speed Queen washers and dryers, made for durable, reliable cleaning with options like Perfect Wash and Pet Plus. ",
  "alternates": {
    "canonical": "/speed-queen-overview"
  }
};

export default function Page() {
  return <SpeedQueenOverviewContent />;
}
