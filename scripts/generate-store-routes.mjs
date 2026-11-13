// Generates one route per ported store CMS page (sales.docappliance.com), on the same paths as today.
// The middleware rewrites the sales host to /store/*, so a page for /financing lives at app/store/financing.
import fs from "node:fs";
import path from "node:path";

const pages = JSON.parse(fs.readFileSync(new URL("./store-pages-manifest.json", import.meta.url)));
const robots = JSON.parse(fs.readFileSync(new URL("./store-robots.json", import.meta.url)));

for (const p of pages) {
  if (p.route === "/home") continue; // redirected to / (next.config.ts)
  if (p.route === "/promotions") continue; // live rebates grid, hand-built (src/app/store/promotions)
  const dir = path.join("src/app/store", p.route === "/" ? "" : p.route);
  fs.mkdirSync(dir, { recursive: true });
  const meta = {
    title: { absolute: p.title },
    description: p.description || undefined,
    alternates: { canonical: p.route },
    ...(robots[p.route] === "noindex" ? { robots: { index: false } } : {}),
  };
  fs.writeFileSync(
    path.join(dir, "page.tsx"),
    `import type { Metadata } from "next";
import ${p.component} from "@/content/store/${p.component}";
import "@/styles/store/pages/${p.slug}.css";

export const metadata: Metadata = ${JSON.stringify(meta, null, 2)};

export default function Page() {
  return <${p.component} />;
}
`,
  );
}
console.log(pages.length, "store routes");
