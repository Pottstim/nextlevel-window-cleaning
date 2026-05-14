// ServiceAreas.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { MapPin, ArrowRight } from "lucide-react";

// Phone number with local NC area code
const PHONE = "(910) 555-0100";
const PHONE_HREF = "tel:9105550100";

const areas = [
  { name: "Sanford, NC", slug: "/service-areas/sanford-nc", county: "Lee County", primary: true, desc: "Our home base. We serve all neighborhoods throughout Sanford, NC." },
  { name: "Cameron, NC", slug: null, county: "Moore County", primary: false, desc: "Serving homeowners and businesses in Cameron and surrounding areas." },
  { name: "Spring Lake, NC", slug: null, county: "Cumberland County", primary: false, desc: "Professional exterior cleaning for Spring Lake properties." },
  { name: "Broadway, NC", slug: null, county: "Lee County", primary: false, desc: "Window cleaning, pressure washing, and more in Broadway, NC." },
  { name: "Carbonton, NC", slug: null, county: "Lee County", primary: false, desc: "Serving Carbonton and the surrounding Lee County area." },
  { name: "Lemon Springs, NC", slug: null, county: "Lee County", primary: false, desc: "Exterior cleaning services available in Lemon Springs." },
];

export default function ServiceAreas() {
  useSEO(
    "Service Areas | Next Level Window Cleaning | Sanford, NC",
    "Next Level Window Cleaning serves Sanford, Cameron, Spring Lake, Broadway, and surrounding Lee County, NC communities.",
    "/service-areas"
  );
  return (
    <Layout>
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-3xl text-center">
          <nav className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-gray-600 cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-gray-600">Service Areas</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Window Cleaning Service Areas in Lee County, NC</h1>
          <p className="text-gray-600">We serve Sanford, NC and surrounding communities in Lee County and beyond. Not sure if we cover your area? Just call us.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {areas.map(({ name, slug, county, primary, desc }) => (
              <div key={name} className={`service-card p-5 ${primary ? 'border-2' : ''}`}
                style={primary ? { borderColor: 'var(--brand-aqua)' } : {}}>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-aqua)' }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{name}</h3>
                      {primary && <span className="text-xs font-bold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>Primary</span>}
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{county}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                    {slug ? (
                      <Link href={slug}><span className="text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>Learn more <ArrowRight size={13} /></span></Link>
                    ) : (
                      <Link href="/get-a-free-estimate"><span className="text-sm font-semibold flex items-center gap-1" style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif' }}>Get an estimate <ArrowRight size={13} /></span></Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-sky-tint rounded-2xl text-center">
            <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Don't See Your City?</h3>
            <p className="text-gray-600 text-sm mb-4">We may still be able to serve you. Give us a call and we'll let you know.</p>
            <a href={PHONE_HREF} className="btn-primary inline-flex">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Book Service?" subtitle="Get a free estimate for your property today." />
    </Layout>
  );
}
