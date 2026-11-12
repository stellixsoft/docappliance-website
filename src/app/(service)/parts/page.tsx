import type { Metadata } from "next";
import PartsContent from "@/content/pages/PartsContent";
import "@/styles/pages/parts.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Parts | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/parts"
  }
};

export default function Page() {
  return <PartsContent />;
}
