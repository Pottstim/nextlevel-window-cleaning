// OurWork.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { ArrowRight, Facebook } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053588823/2Q9vFKpYTpE7ehgtZMKV35/hero-window-cleaning-bd4k27QyRUkKtJYTJxskGD.webp";
const PRESSURE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053588823/2Q9vFKpYTpE7ehgtZMKV35/pressure-washing-h6rFi5EsLLVCkny9S7NBDx.webp";
const COMMERCIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053588823/2Q9vFKpYTpE7ehgtZMKV35/commercial-cleaning-2LfYXgPvdXkMYqw2zwpNwA.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053588823/2Q9vFKpYTpE7ehgtZMKV35/about-owner-immczEsLDP9vspUAY9jzEb.webp";

const galleryItems = [
  { img: HERO_IMG, label: "Residential Window Cleaning", location: "Sanford, NC", service: "Window Cleaning" },
  { img: PRESSURE_IMG, label: "Driveway Pressure Washing", location: "Sanford, NC", service: "Pressure Washing" },
  { img: COMMERCIAL_IMG, label: "Commercial Storefront Cleaning", location: "Sanford, NC", service: "Commercial" },
  { img: ABOUT_IMG, label: "Exterior Soft Washing", location: "Lee County, NC", service: "Soft Washing" },
  { img: HERO_IMG, label: "Residential Window Cleaning", location: "Cameron, NC", service: "Window Cleaning" },
  { img: PRESSURE_IMG, label: "Patio Pressure Washing", location: "Spring Lake, NC", service: "Pressure Washing" },
];

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
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Our Work</h1>
          <p className="text-gray-600 mb-4">Real jobs, real results. See what we've been up to in Sanford, NC and surrounding areas.</p>
          <a href="https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/" target="_blank" rel="noopener noreferrer"
            className="btn-primary inline-flex">
            <Facebook size={16} /> See More on Facebook <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems.map(({ img, label, location, service }, i) => (
              <div key={i} className="service-card overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={img} alt={label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>
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
            <h3 className="font-extrabold text-gray-900 text-xl mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>See More of Our Work</h3>
            <p className="text-gray-600 text-sm mb-5">We post before-and-after photos and job updates regularly on Facebook.</p>
            <a href="https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/" target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex">
              <Facebook size={16} /> Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      <CTASection title="Want Results Like These?" subtitle="Get a free estimate for your home or business in Sanford, NC." />
    </Layout>
  );
}
