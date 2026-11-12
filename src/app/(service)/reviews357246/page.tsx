import type { Metadata } from "next";
import Reviews357246Content from "@/content/pages/Reviews357246Content";
import "@/styles/pages/reviews357246.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Reviews | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/reviews357246"
  }
};

export default function Page() {
  return <Reviews357246Content />;
}
