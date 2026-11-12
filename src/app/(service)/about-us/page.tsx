import type { Metadata } from "next";
import AboutUsContent from "@/content/pages/AboutUsContent";
import "@/styles/pages/about-us.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Locally Owned Appliance Store | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "We offer a large selection of appliances with a highly experienced sales staff. Stop by today! ",
  "alternates": {
    "canonical": "/about-us"
  }
};

export default function Page() {
  return <AboutUsContent />;
}
