# Architecture & SEO Recommendations

**Date:** May 2026
**Reviewer:** Zo

## 1. High-Level Architecture
This project is an exceptionally well-organized modern React implementation. Utilizing Vite, React 19, Tailwind CSS v4, Radix/Shadcn UI, and `wouter` creates a highly efficient, lean stack that avoids the bloat of heavier frameworks. 

**Strengths:**
* **Aesthetics:** The code includes explicit design directives ("Local Pride Modernism"), which shows a strong, disciplined approach to UI.
* **SEO Execution:** Exceptional attention to metadata. The codebase includes comprehensive Open Graph tags, Twitter cards, and a highly detailed Local Business Schema (JSON-LD).
* **Backend integration:** The project is running an Express server bundled via `esbuild` (`server/index.ts`), cleanly separated from the frontend.

## 2. Critical Vulnerability: Client-Side Rendering (CSR)
Currently, the live website is served as a **Client-Side Rendered (CSR) SPA**. 

While your Express server (`server/index.ts`) does an excellent job of dynamically injecting the `<title>` and `<meta name="description">` into the `index.html` file based on the route, it still returns an empty `<div id="root"></div>` for the actual body content. The browser has to download, parse, and execute the JavaScript bundle before any text, images, or Schema markup (injected via React) appears.

While Googlebot can render JavaScript, CSR incurs a heavy penalty on First Contentful Paint (FCP) and Time to Interactive (TTI). For a local service business, Local SEO is your lifeblood. Serving an empty HTML body is a suboptimal architectural choice compared to Server-Side Rendering (SSR) or Static Site Generation (SSG).

## 3. Recommended Action Plan
**Fix the delivery pipeline to ensure static HTML reaches the browser.**

**Option A: Implement a Puppeteer Prerender Script (Easiest)**
You can easily port the `prerender.js` script used in your `mgsalvage` repository to this project. 
1. Loop over the routes defined in `server/seoMap.ts`.
2. Spin up a local server during the build process.
3. Use Puppeteer to visit each route, wait for React to hydrate and the SEO tags to be injected, and capture the fully rendered HTML.
4. Save the HTML to the respective folder in `dist/public` (e.g., `dist/public/about/index.html`).
This allows you to keep your current stack while reaping the SEO benefits of SSG.

**Option B: Migrate to Astro (Best Performance)**
Given your clean component structure, you could drop your React components into an Astro shell with virtually zero refactoring. Use `client:load` only where interactivity is needed, and ship zero-JS static HTML for the rest of the page. This would immediately spike your Core Web Vitals to 100 for local search.