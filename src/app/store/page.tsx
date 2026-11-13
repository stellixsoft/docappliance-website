import type { Metadata } from "next";
import HomeContent from "@/content/store/HomeContent";
import "@/styles/store/pages/home.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Save on Kitchen & Home Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Doctor Appliance is a family-owned appliance retailer in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; and Salina, KS. We offer competitive pricing, service and delivery on kitchen & home appliances. Shop now!    ",
  "alternates": {
    "canonical": "/"
  }
};

export default function Page() {
  return <HomeContent />;
}
