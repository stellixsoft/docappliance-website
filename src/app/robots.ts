import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Mirrors the live robots.txt rules. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout/*", "/compare", "/customer/*", "/paypal/*", "/wishlist", "/request-quote*", "/media/document_assets/*", "/media/designer/", "/blackhole"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
