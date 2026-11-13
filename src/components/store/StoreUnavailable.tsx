import Link from "next/link";

/**
 * Shown when the live store refuses a request and the page is not in the saved snapshot
 * (see data/store-snapshot and README), instead of an error page.
 */
export function StoreUnavailable() {
  return (
    <div style={{ maxWidth: 720, margin: "80px auto", padding: "0 16px", textAlign: "center", font: "400 16px/24px Helvetica, Arial, sans-serif" }}>
      <h1 style={{ font: "700 24px/32px Helvetica, Arial, sans-serif", margin: "0 0 12px" }}>This page is not available in the demo right now</h1>
      <p style={{ margin: "0 0 24px", color: "#616161" }}>
        The product data could not be loaded. Please try again in a few minutes, or browse another category.
      </p>
      <Link href="/" style={{ display: "inline-block", padding: "10px 24px", background: "#0066cc", color: "#fff", borderRadius: 4, textDecoration: "none" }}>
        Back to the store
      </Link>
    </div>
  );
}
