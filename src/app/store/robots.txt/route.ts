/** robots.txt for sales.docappliance.com, mirroring the live rules. */
const body = `sitemap: https://sales.docappliance.com/sitemap.xml

user-agent: *
Allow: /
Disallow: /checkout/*
Disallow: /compare
Disallow: /customer/*
Disallow: /paypal/*
Disallow: /wishlist
Disallow: /request-quote*
Disallow: /media/document_assets/*
Disallow: /media/designer/
Disallow: /blackhole
`;

export function GET() {
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
