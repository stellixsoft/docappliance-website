import type { Metadata } from "next";
import RequestQuoteContent from "@/content/store/RequestQuoteContent";
import "@/styles/store/pages/request-quote.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Request A Quote | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/request-quote"
  },
  "robots": {
    "index": false
  }
};

export default function Page() {
  return <RequestQuoteContent />;
}
