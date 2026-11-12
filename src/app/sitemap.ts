import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site.url}${route === "/" ? "/" : route}`, changeFrequency: "weekly" }));
}
