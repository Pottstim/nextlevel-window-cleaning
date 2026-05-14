// images.ts — Next Level Window Cleaning
// Centralized image configuration for Cloudflare Pages deployment
// All images served from CloudFront CDN

// CloudFront base URL for all images
const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053588823/2Q9vFKpYTpE7ehgtZMKV35";

// Logo
export const LOGO_URL = `${CDN_BASE}/nextlevel-logo_ee9ca002.png`;

// Hero images
export const HERO_WINDOW_CLEANING = `${CDN_BASE}/hero-window-cleaning-bd4k27QyRUkKtJYTJxskGD.webp`;
export const HERO_GENERATED = `${CDN_BASE}/hero-generated-v1-n8YeMmynmW4YiJFzATdXJt.webp`;

// Gallery images (real job photos)
export const GALLERY = {
  gallery_01: `${CDN_BASE}/gallery_01_9f404602.jpg`,
  gallery_02: `${CDN_BASE}/gallery_02_f1eae76f.jpg`,
  gallery_03: `${CDN_BASE}/gallery_03_24de3848.jpg`,
  gallery_04: `${CDN_BASE}/gallery_04_b6c4cecb.jpg`,
  gallery_05: `${CDN_BASE}/gallery_05_612a64a8.jpg`,
  gallery_06: `${CDN_BASE}/gallery_06_ec82e12a.jpg`,
  gallery_07: `${CDN_BASE}/gallery_07_5c146c2d.jpg`,
  gallery_08: `${CDN_BASE}/gallery_08_50371040.jpg`,
  gallery_09: `${CDN_BASE}/gallery_09_8d96bd3c.jpg`,
  gallery_10: `${CDN_BASE}/gallery_10_5b1362dd.jpg`,
  gallery_11: `${CDN_BASE}/gallery_11_ad03b31d.jpg`,
  gallery_12: `${CDN_BASE}/gallery_12_195f532c.jpg`,
};

// Before/After images
export const BEFORE_AFTER = {
  before: `${CDN_BASE}/before-after-before_2bea0ebd.jpg`,
  after: `${CDN_BASE}/before-after-after_faba211b.jpg`,
};

// Christmas lights
export const CHRISTMAS_LIGHTS = `${CDN_BASE}/christmas-lights_14661dc9.jpg`;

// Convenience exports for common images
export const RESIDENTIAL_WINDOW_CLEANING_HERO = GALLERY.gallery_08;
export const PRESSURE_WASHING_HERO = GALLERY.gallery_11;
export const SOFT_WASHING_HERO = GALLERY.gallery_09;
export const COMMERCIAL_HERO = GALLERY.gallery_06;
export const ABOUT_HERO = GALLERY.gallery_01;
export const ABOUT_DECK_RAILS = GALLERY.gallery_10;
