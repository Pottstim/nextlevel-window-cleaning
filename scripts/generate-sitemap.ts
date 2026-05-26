import { seoMap } from "../server/seoMap.ts";
import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://nextlevelwindowsnc.com";
const OUTPUT = path.resolve(import.meta.dirname, "../dist/public/sitemap.xml");

// Routes to exclude from sitemap
const EXCLUDE = new Set(["/404", "/privacy", "/terms"]);

const routes = Object.keys(seoMap).filter((r) => !EXCLUDE.has(r));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>monthly</changefreq>
    <priority>${route === "/" ? "1.0" : route.startsWith("/service-areas/") ? "0.8" : "0.6"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, xml);
console.log(`Sitemap generated: ${OUTPUT} (${routes.length} routes)`);
