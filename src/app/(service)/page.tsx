import type { Metadata } from "next";
import HomeContent from "@/content/pages/HomeContent";
import "@/styles/pages/home.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Kitchen & Home Appliances Service and Repairs | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Doctor Appliance is a locally owned appliance repair business located in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; and Salina KS. We offer the best service, delivery, installation and big savings every day.  ",
  "alternates": {
    "canonical": "/"
  }
};

export default function Page() {
  return <HomeContent />;
}
