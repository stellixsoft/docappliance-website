import type { Metadata } from "next";
import BrandsContent from "@/content/pages/BrandsContent";
import "@/styles/pages/brands.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Shop by Brands | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "We carry a wide variety of appliance brands at discount prices. Shop our huge selection of brands today! ",
  "alternates": {
    "canonical": "/brands"
  }
};

export default function Page() {
  return <BrandsContent />;
}
