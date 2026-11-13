import type { Metadata } from "next";
import LocationsKnoxvilleContent from "@/content/store/LocationsKnoxvilleContent";
import "@/styles/store/pages/locations_knoxville.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Knoxville | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/locations/knoxville"
  }
};

export default function Page() {
  return <LocationsKnoxvilleContent />;
}
