import type { Metadata } from "next";
import PhoenixAzContent from "@/content/pages/PhoenixAzContent";
import "@/styles/pages/phoenix-az.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Phoenix, AZ | Kitchen & Home Appliances Service | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliance repairs and service in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS ",
  "alternates": {
    "canonical": "/phoenix-az"
  }
};

export default function Page() {
  return <PhoenixAzContent />;
}
