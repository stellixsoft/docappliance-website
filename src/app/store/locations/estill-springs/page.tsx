import type { Metadata } from "next";
import LocationsEstillSpringsContent from "@/content/store/LocationsEstillSpringsContent";
import "@/styles/store/pages/locations_estill-springs.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Estill Springs | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/locations/estill-springs"
  }
};

export default function Page() {
  return <LocationsEstillSpringsContent />;
}
