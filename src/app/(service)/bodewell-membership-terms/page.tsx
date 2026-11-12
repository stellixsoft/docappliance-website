import type { Metadata } from "next";
import BodewellMembershipTermsContent from "@/content/pages/BodewellMembershipTermsContent";
import "@/styles/pages/bodewell-membership-terms.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Bodewell Membership Terms | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/bodewell-membership-terms"
  }
};

export default function Page() {
  return <BodewellMembershipTermsContent />;
}
