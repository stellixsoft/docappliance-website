import type { Metadata } from "next";
import EstillSpringsTnContent from "@/content/pages/EstillSpringsTnContent";
import "@/styles/pages/estill-springs-tn.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Estill Springs, TN | Kitchen & Home Appliances Service | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliance repairs and service in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS ",
  "alternates": {
    "canonical": "/estill-springs-tn"
  }
};

export default function Page() {
  return <EstillSpringsTnContent />;
}
