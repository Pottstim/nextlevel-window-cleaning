// SanfordNC.tsx — Next Level Window Cleaning
// Local SEO landing page for Sanford, NC — primary service area
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { CheckCircle, MapPin, ArrowRight, Phone } from "lucide-react";
import { GALLERY } from "@/config/images";

// Phone number with local NC area code
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
  "Downtown Sanford", "West Sanford", "Carbonton Road area",
  "Deep River area", "Tramway", "Lemon Springs",
];

export default function SanfordNC() {
  useSEO(
    "Window Cleaning in Sanford, NC | Next Level Window Cleaning",
    "Top-rated window cleaning and exterior washing in Sanford, NC. Locally owned by Adam Griffith. Serving Lee County homeowners and businesses.",
    "/service-areas/sanford-nc"
  );
  return (
    <Layout>
      <ServiceSchema 
        name="Window Cleaning and Exterior Washing in Sanford, NC" 
        description="Top-rated window cleaning and exterior washing in Sanford, NC. Locally owned by Adam Griffith. Serving Lee County homeowners and businesses." 
        url="/service-areas/sanford-nc" 
      />
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Service Areas","url":"/service-areas"},{"name":"Sanford, NC","url":"/service-areas/sanford-nc"}]} />
      {/* Hero */}
      <section className="relative min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Window cleaning Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.78) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-14">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <Link href="/service-areas"><span className="hover:text-white cursor-pointer">Service Areas</span></Link><span>/</span>
            <span className="text-white">Sanford, NC</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-3 py-1 mb-4">
            <MapPin size={13} className="text-white" />
            <span className="text-white text-xs font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>SANFORD, NC — PRIMARY SERVICE AREA</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Window Cleaning &amp; Exterior Washing in Sanford, NC
          </h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">
            Next Level Window Cleaning is based right here in Sanford, NC. We serve homeowners and businesses throughout Lee County.
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
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Your Local Exterior Cleaning Experts</h2>
          <div className="ml-5 flex flex-col gap-4 text-gray-600 leading-relaxed">
            <p>Next Level Window Cleaning is locally owned and operated in Sanford, NC. Owner Adam Griffith started this business to provide his neighbors with professional, reliable exterior cleaning at honest prices.</p>
            <p>Sanford's humid climate means algae, mold, and pollen build up fast on windows, driveways, and siding. We know the local conditions and use the right methods for each surface type.</p>
            <p>We're fully insured and serve all neighborhoods throughout Sanford and Lee County — from residential homes to commercial storefronts.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-sky-tint">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h2 className="section-heading text-2xl text-gray-900 mb-6">Services in Sanford, NC</h2>
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
          <h2 className="section-heading text-2xl text-gray-900 mb-6">Find Us in Sanford, NC</h2>
          <div className="ml-5 rounded-2xl overflow-hidden shadow-lg h-64">
            <iframe
              title="Next Level Window Cleaning — Sanford NC"
              src="https://maps.google.com/maps?q=Sanford+NC+window+cleaning&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for Service in Sanford, NC?"
        subtitle="Get a free estimate from your local window cleaning experts. We respond the same day."
      />
    </Layout>
  );
}
