import type { Metadata } from "next";
import ContactsContent from "@/content/pages/ContactsContent";
import "@/styles/pages/contacts.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Kitchen & Home Appliances Service | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "Appliance repairs and service in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS ",
  "alternates": {
    "canonical": "/contacts"
  }
};

export default function Page() {
  return <ContactsContent />;
}
