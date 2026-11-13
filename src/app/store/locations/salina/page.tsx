import type { Metadata } from "next";
import LocationsSalinaContent from "@/content/store/LocationsSalinaContent";
import "@/styles/store/pages/locations_salina.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Salina | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/locations/salina"
  }
};

export default function Page() {
  return <LocationsSalinaContent />;
}
