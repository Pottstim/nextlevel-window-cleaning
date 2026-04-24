// OurWork.tsx — Next Level Window Cleaning
// Design: Local Pride Modernism — real job photos, masonry grid, before/after slider, aqua service badges
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import BeforeAfter from "@/components/BeforeAfter";
import { ArrowRight, Facebook } from "lucide-react";

const BEFORE_IMG = "/manus-storage/before-after-before_2bea0ebd.jpg";
const AFTER_IMG = "/manus-storage/before-after-after_faba211b.jpg";

const galleryItems = [
  {
    img: "/manus-storage/gallery_09_8d96bd3c.jpg",
    label: "Soft Wash — House & Deck Rails",
    location: "Sanford, NC",
    service: "Soft Washing",
    featured: true,
  },
  {
    img: "/manus-storage/gallery_10_5b1362dd.jpg",
    label: "Deck Rail Cleaning",
    location: "Sanford, NC",
    service: "Soft Washing",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_01_9f404602.jpg",
    label: "Residential Window Cleaning",
    location: "Sanford, NC",
    service: "Window Cleaning",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_02_f1eae76f.jpg",
    label: "Exterior House Washing",
    location: "Sanford, NC",
    service: "Soft Washing",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_03_24de3848.jpg",
    label: "Window & Siding Cleaning",
    location: "Lee County, NC",
    service: "Window Cleaning",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_04_b6c4cecb.jpg",
    label: "Residential Exterior Wash",
    location: "Sanford, NC",
    service: "Soft Washing",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_05_612a64a8.jpg",
    label: "House Soft Washing",
    location: "Cameron, NC",
    service: "Soft Washing",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_06_ec82e12a.jpg",
    label: "Siding & Window Cleaning",
    location: "Sanford, NC",
    service: "Window Cleaning",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_07_5c146c2d.jpg",
    label: "Full Exterior Cleaning",
    location: "Lee County, NC",
    service: "Soft Washing",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_08_50371040.jpg",
    label: "Residential Window Cleaning",
    location: "Spring Lake, NC",
    service: "Window Cleaning",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_11_ad03b31d.jpg",
    label: "Pressure Washing — Driveway",
    location: "Sanford, NC",
    service: "Pressure Washing",
    featured: false,
  },
  {
    img: "/manus-storage/gallery_12_195f532c.jpg",
    label: "Exterior Cleaning Results",
    location: "Sanford, NC",
    service: "Soft Washing",
    featured: false,
  },
];

const serviceColors: Record<string, string> = {
  "Window Cleaning": "#0ea5e9",
  "Soft Washing": "#06b6d4",
  "Pressure Washing": "#f97316",
  "Commercial": "#6366f1",
};

export default function OurWork() {
  useSEO(
    "Our Work | Window Cleaning & Pressure Washing Results | Sanford, NC",
    "See before-and-after results from Next Level Window Cleaning. Real jobs, real results for homes and businesses in Sanford, NC."
  );
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-3xl text-center">
          <nav className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-gray-600 cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-gray-600">Our Work</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Our Work
          </h1>
          <p className="text-gray-600 mb-4 max-w-xl mx-auto">
            Real jobs, real results. Every photo below is an actual job completed by Adam and the Next Level team in Sanford, NC and surrounding areas.
          </p>
          <a
            href="https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Facebook size={16} /> See More on Facebook <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-center">
            {[
              { num: "100+", label: "Jobs Completed" },
              { num: "5★", label: "Average Rating" },
              { num: "3", label: "Service Types" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-2xl font-extrabold" style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>{num}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER SHOWCASE ── */}
      <section className="py-14 bg-sky-tint">
        <div className="container">
          <div className="mb-8">
            <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-2">
              Before &amp; After
            </h2>
            <p className="text-gray-500 text-sm ml-5">
              Drag the slider to reveal the transformation — a real job in Sanford, NC.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <BeforeAfter
              beforeSrc={BEFORE_IMG}
              afterSrc={AFTER_IMG}
              beforeLabel="Before"
              afterLabel="After"
              alt="Window cleaning before and after Sanford NC"
              aspectRatio="3/4"
            />
            <p className="text-center text-xs text-gray-400 mt-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Christmas light installation — Sanford, NC
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 bg-white">
        <div className="container">
          {/* Featured large photo */}
          <div className="mb-5">
            <div className="relative rounded-2xl overflow-hidden group" style={{ maxHeight: '520px' }}>
              <img
                src={galleryItems[0].img}
                alt={galleryItems[0].label}
                className="w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{ maxHeight: '520px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span
                  className="text-xs font-bold text-white px-3 py-1.5 rounded-full mb-2 inline-block"
                  style={{ backgroundColor: serviceColors[galleryItems[0].service] || 'var(--brand-aqua)' }}
                >
                  {galleryItems[0].service}
                </span>
                <p className="text-white font-extrabold text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>{galleryItems[0].label}</p>
                <p className="text-white/70 text-sm">{galleryItems[0].location}</p>
              </div>
            </div>
          </div>

          {/* Remaining photos in 3-col grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.slice(1).map(({ img, label, location, service }, i) => (
              <div key={i} className="service-card overflow-hidden group">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs font-bold text-white px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: serviceColors[service] || 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}
                    >
                      {service}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More photos CTA */}
          <div className="mt-10 text-center p-8 bg-sky-tint rounded-2xl">
            <h3 className="font-extrabold text-gray-900 text-xl mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
              See More of Our Work
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              We post before-and-after photos and job updates regularly on Facebook.
            </p>
            <a
              href="https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <Facebook size={16} /> Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      <CTASection title="Want Results Like These?" subtitle="Get a free estimate for your home or business in Sanford, NC." />
    </Layout>
  );
}
