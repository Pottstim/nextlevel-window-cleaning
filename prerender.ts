import puppeteer from "puppeteer";
import express from "express";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { seoMap } from "./server/seoMap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "dist/public");

async function main() {
  if (!existsSync(distDir)) {
    console.error("dist/public directory not found. Please build the project first.");
    process.exit(1);
  }

  const routes = Object.keys(seoMap);
  console.log(`Found ${routes.length} routes to prerender.`);

  const app = express();
  app.use(express.static(distDir));

  // SPA fallback
  app.use((req, res) => {
    res.sendFile(path.resolve(distDir, "index.html"));
  });

  const server = app.listen(0, async () => {
    const port = (server.address() as any).port;
    console.log(`Local server started on port ${port}`);

    try {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
      const page = await browser.newPage();

      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        await page.goto(`http://localhost:${port}${route}`, {
          waitUntil: "networkidle2",
        });
        // Wait for dynamic SEO elements to inject before capturing HTML
        await page.waitForSelector('link[rel="canonical"]', { timeout: 5000 }).catch(() => {});
        await page.waitForSelector('script[type="application/ld+json"]', { timeout: 5000 }).catch(() => {});

        // Wait for React to hydrate and SEOHead to update the document
        // We look for a change in the <title> tag, or just wait 1s.
        await new Promise(r => setTimeout(r, 1500));

        const html = await page.content();

        const isRoot = route === "/";
        const fileDir = isRoot ? distDir : path.join(distDir, route.replace(/^\//, ""));
        const filePath = path.join(fileDir, "index.html");

        if (!isRoot) {
          await fs.mkdir(fileDir, { recursive: true });
        }

        await fs.writeFile(filePath, html);
        console.log(`  Saved ${filePath}`);
      }

      await browser.close();
      console.log("Prerendering completed successfully.");
    } catch (e) {
      console.error("Error during prerendering:", e);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

main();