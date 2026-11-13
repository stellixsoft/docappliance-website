import type { Metadata } from "next";
import LocationsPhoenixContent from "@/content/store/LocationsPhoenixContent";
import "@/styles/store/pages/locations_phoenix.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Phoenix | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/locations/phoenix"
  }
};

export default function Page() {
  return <LocationsPhoenixContent />;
}
