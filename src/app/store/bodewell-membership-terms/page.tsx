import type { Metadata } from "next";
import BodewellMembershipTermsContent from "@/content/store/BodewellMembershipTermsContent";
import "@/styles/store/pages/bodewell-membership-terms.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Bodewell Membership Terms | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/bodewell-membership-terms"
  }
};

export default function Page() {
  return <BodewellMembershipTermsContent />;
}
