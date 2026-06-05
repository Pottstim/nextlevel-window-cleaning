// CameronNC.tsx — Next Level Window Cleaning
// Local SEO landing page for Cameron, NC
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { CheckCircle, MapPin, ArrowRight, Phone } from "lucide-react";
import { GALLERY } from "@/config/images";

const PHONE = "(323) 485-1020";
const PHONE_HREF = "tel:3234851020";
const HERO_IMG = GALLERY.gallery_03;

const services = [
  "Residential Window Cleaning",
  "Commercial Window Cleaning",
  "Pressure Washing — Driveways, Patios, Siding",
  "Soft Washing — Roofs, Painted Surfaces",
  "Gutter Cleaning",
  "Christmas Light Installation",
];

const neighborhoods = [
  "Downtown Cameron", "Cameron Village", "Carbonton Road area",
  "Hwy 24 corridor", "Gulf area", "Vass Road area",
];

export default function CameronNC() {
  useSEO(
    "Window Cleaning in Cameron, NC | Next Level Window Cleaning",
    "Professional window cleaning and exterior washing in Cameron, NC. Serving Harnett and Lee County homeowners. Locally owned by Adam Griffith.",
    "/service-areas/cameron-nc"
  );

  return (
    <Layout>
      <ServiceSchema
        name="Window Cleaning and Exterior Washing in Cameron, NC"
        description="Professional window cleaning and exterior washing in Cameron, NC. Serving Harnett and Lee County homeowners."
        url="/service-areas/cameron-nc"
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Service Areas","url":"/service-areas"},{"name":"Cameron, NC","url":"/service-areas/cameron-nc"}]} />

      {/* Hero */}
      <section className="relative min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Window cleaning Cameron NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.78) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-14">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <Link href="/service-areas"><span className="hover:text-white cursor-pointer">Service Areas</span></Link><span>/</span>
            <span className="text-white">Cameron, NC</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 mb-4">
            <MapPin size={13} className="text-white" />
            <span className="text-white text-xs font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>CAMERON, NC — SERVICE AREA</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Window Cleaning &amp; Exterior Washing in Cameron, NC
          </h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">
            Next Level Window Cleaning serves Cameron, NC and surrounding Harnett County communities. Professional, reliable, and locally trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-outline-white"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="py-14 bg-white">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Serving Cameron, NC with Pride</h2>
          <div className="ml-5 flex flex-col gap-4 text-gray-600 leading-relaxed">
            <p>Cameron is a growing community on the edge of Lee and Harnett counties, and Next Level Window Cleaning is proud to serve its homeowners and business owners with top-tier exterior cleaning services.</p>
            <p>Cameron homes deal with the same thing we do — pollen season hits hard and the humidity never really lets up. That combination means your windows, siding, and gutters need more attention than the average homeowner might expect. We handle it so you don't have to.</p>
            <p>We're fully insured and dedicated to delivering spotless results every time — no mess, no hassle.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-sky-tint">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h2 className="section-heading text-2xl text-gray-900 mb-6">Services in Cameron, NC</h2>
              <div className="ml-5 flex flex-col gap-3">
                {services.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: 'var(--brand-aqua)' }} />
                    <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-heading text-2xl text-gray-900 mb-6">Neighborhoods We Serve</h2>
              <div className="ml-5 flex flex-col gap-3">
                {neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-3">
                    <MapPin size={14} style={{ color: 'var(--brand-aqua)' }} />
                    <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="section-heading text-2xl text-gray-900 mb-6">Find Us Near Cameron, NC</h2>
          <div className="ml-5 rounded-2xl overflow-hidden shadow-lg h-64">
            <iframe
              title="Next Level Window Cleaning — Cameron NC"
              src="https://maps.google.com/maps?q=Cameron+NC+window+cleaning&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Service in Cameron, NC?"
        subtitle="Get a free estimate from your local window cleaning experts. Same-day response guaranteed."
      />
    </Layout>
  );
}
