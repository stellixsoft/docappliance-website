import type { Metadata } from "next";
import ServicesContent from "@/content/pages/ServicesContent";
import "@/styles/pages/services.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Schedule Appliance Service  | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "We have factory-trained technicians for appliance service & appliance repair. Call today for an appointment! ",
  "alternates": {
    "canonical": "/services"
  }
};

export default function Page() {
  return <ServicesContent />;
}
