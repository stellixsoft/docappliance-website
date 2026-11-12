import type { Metadata } from "next";
import CareersContent from "@/content/pages/CareersContent";
import "@/styles/pages/careers.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Careers | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/careers"
  }
};

export default function Page() {
  return <CareersContent />;
}
