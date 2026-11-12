// Generates one route per ported page so every live URL keeps working (same paths as today).
import fs from "node:fs";
import path from "node:path";
// Pages the live site serves with robots=noindex.
const NOINDEX = new Set(["/request-quote"]);
// Hand-built routes (not CMS pages) that still belong in the sitemap.
const EXTRA_ROUTES = ["/promotions"];
const pages = JSON.parse(fs.readFileSync(new URL("./pages-manifest.json", import.meta.url)));
for (const p of pages) {
  const dir = path.join("src/app/(service)", p.route === "/" ? "" : p.route);
  fs.mkdirSync(dir, { recursive: true });
  const meta = { title: { absolute: p.title }, description: p.description || undefined, alternates: { canonical: p.route }, ...(NOINDEX.has(p.route) ? { robots: { index: false } } : {}) };
  fs.writeFileSync(
    path.join(dir, "page.tsx"),
    `import type { Metadata } from "next";
import ${p.component} from "@/content/pages/${p.component}";
import "@/styles/pages/${p.slug}.css";

export const metadata: Metadata = ${JSON.stringify(meta, null, 2)};

export default function Page() {
  return <${p.component} />;
}
`,
  );
}
fs.writeFileSync(
  "src/data/routes.ts",
  `/** Every public URL of the service site (used by sitemap.xml). Keep in sync with the live site for SEO. */\nexport const routes = ${JSON.stringify([...pages.map((p) => p.route), ...EXTRA_ROUTES].sort(), null, 2)} as const;\n`,
);
console.log(pages.length, "routes");
