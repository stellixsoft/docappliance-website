import type { Metadata } from "next";

export const metadata: Metadata = { title: "Appliance Sales | Doctor Appliance", robots: { index: false } };

/**
 * Placeholder for sales.docappliance.com. Requests to that host are rewritten to /store/*
 * by src/middleware.ts, so the store can be built here with its existing URLs
 * (/catalog/..., /product/..., /checkout/...).
 */
export default function StoreHome() {
  return (
    <main style={{ padding: "4rem 1rem", textAlign: "center", fontFamily: "Open Sans, sans-serif" }}>
      <h1>Appliance Sales</h1>
      <p>The store front end will be built in this section.</p>
    </main>
  );
}
