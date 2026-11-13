import type { Metadata } from "next";
import ContactsContent from "@/content/store/ContactsContent";
import "@/styles/store/pages/contacts.css";

export const metadata: Metadata = {
  "title": {
    "absolute": "Shop Kitchen & Home Appliances | Doctor Appliance | Estill Springs, TN; Knoxville, TN; Phoenix, AZ; Salina, KS"
  },
  "description": "We have everyday savings on quality home appliances. Shop our showrooms in Estill Springs, TN; Knoxville, TN; Phoenix, AZ; and Salina, KS for instant savings. ",
  "alternates": {
    "canonical": "/contacts"
  }
};

export default function Page() {
  return <ContactsContent />;
}
