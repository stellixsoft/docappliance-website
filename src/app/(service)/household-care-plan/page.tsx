import type { Metadata } from "next";
import HouseholdCarePlanContent from "@/content/pages/HouseholdCarePlanContent";
import "@/styles/pages/household-care-plan.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Household Care Plan | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/household-care-plan"
  }
};

export default function Page() {
  return <HouseholdCarePlanContent />;
}
