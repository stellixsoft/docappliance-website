import type { Metadata } from "next";
import RequestQuoteContent from "@/content/pages/RequestQuoteContent";
import "@/styles/pages/request-quote.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Request A Quote | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
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
