import type { Metadata } from "next";
import FrigidaireGalleryStoneBakedPizzaOvenContent from "@/content/store/FrigidaireGalleryStoneBakedPizzaOvenContent";
import "@/styles/store/pages/frigidaire-gallery-stone-baked-pizza-oven.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Frigidaire Gallery - Stone Baked Pizza Oven | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "alternates": {
    "canonical": "/frigidaire-gallery-stone-baked-pizza-oven"
  }
};

export default function Page() {
  return <FrigidaireGalleryStoneBakedPizzaOvenContent />;
}
