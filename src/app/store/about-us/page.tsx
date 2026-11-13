import type { Metadata } from "next";
import AboutUsContent from "@/content/store/AboutUsContent";
import "@/styles/store/pages/about-us.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Locally Owned Appliance Store | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "We offer a large selection of appliances with a highly experienced sales staff. Stop by today! ",
  "alternates": {
    "canonical": "/about-us"
  }
};

export default function Page() {
  return <AboutUsContent />;
}
