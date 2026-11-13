/**
 * sitemap.xml for sales.docappliance.com (the middleware maps /sitemap.xml on that host here).
 * For the demo it serves the live store's sitemap, which already lists every category and product URL
 * this app answers. Once the new backend owns the catalog, generate it from that instead.
 */
export const dynamic = "force-dynamic";
const revalidate = 86400;

const LIVE_SITEMAP = "https://cdn.avbportal.com/magento-media/sitemaps/h0136/sitemap.xml";

export async function GET() {
  const res = await fetch(LIVE_SITEMAP, { next: { revalidate } });
  const xml = await res.text();
  return new Response(xml, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
