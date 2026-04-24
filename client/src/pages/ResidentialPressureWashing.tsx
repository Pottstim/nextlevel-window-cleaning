// ResidentialPressureWashing.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Phone } from "lucide-react";

const PRESSURE_IMG = "/manus-storage/gallery_11_ad03b31d.jpg";

const surfaces = ["Driveways & Sidewalks","Patios & Decks","Siding & Brick","Fences","Garage Floors","Retaining Walls"];
const faqs = [
  { q: "Is pressure washing safe for my siding?", a: "Yes, when done correctly. We adjust pressure levels based on the surface type. Vinyl and wood siding require lower pressure than concrete — we know the difference." },
  { q: "How often should I pressure wash my driveway?", a: "Once a year is a good baseline for most driveways in North Carolina. Homes with heavy tree cover or shade may benefit from more frequent cleaning." },
  { q: "Will pressure washing remove all stains?", a: "Most stains — algae, mold, mildew, dirt, and grime — come off completely. Some deep oil stains may require additional treatment, which we can discuss during your estimate." },
  { q: "Do I need to move my vehicles or furniture?", a: "We ask that you clear the area being cleaned. We'll let you know exactly what to move when we schedule the job." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{q}</span>
        {open ? <ChevronUp size={18} className="flex-shrink-0 text-[var(--brand-aqua)]" /> : <ChevronDown size={18} className="flex-shrink-0 text-gray-400" />}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100">{a}</div>}
    </div>
  );
}

export default function ResidentialPressureWashing() {
  useSEO(
    "Pressure Washing in Sanford, NC | Next Level Window Cleaning",
    "Professional pressure washing for driveways, sidewalks, decks, and fences in Sanford and Lee County, NC. Locally owned, fully insured."
  );
  return (
    <Layout>
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={PRESSURE_IMG} alt="Pressure washing Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.75) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link>
            <span>/</span>
            <Link href="/residential"><span className="hover:text-white cursor-pointer">Residential</span></Link>
            <span>/</span>
            <span className="text-white">Pressure Washing</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Residential Pressure Washing in Sanford, NC
          </h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">
            Remove years of grime, algae, and stains from your driveway, patio, siding, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href="tel:3234851020" className="btn-outline-white"><Phone size={16} /> (323) 485-1020</a>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container max-w-3xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Restore Your Home's Exterior</h2>
          <p className="text-gray-600 leading-relaxed ml-5 mb-4">
            North Carolina's humidity and tree cover mean algae, mold, and grime build up fast on driveways, patios, and siding. Pressure washing is one of the most effective ways to restore your home's exterior and protect surfaces from long-term damage.
          </p>
          <p className="text-gray-600 leading-relaxed ml-5">
            We use professional-grade equipment and adjust pressure levels for each surface type — so you get a thorough clean without any risk of damage.
          </p>
        </div>
      </section>

      <section className="py-14 bg-sky-tint">
        <div className="container">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">Surfaces We Clean</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ml-5">
            {surfaces.map((s) => (
              <div key={s} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle size={17} style={{ color: 'var(--brand-aqua)' }} />
                <span className="text-gray-700 text-sm font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container max-w-2xl">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-6">Pressure Washing FAQs</h2>
          <div className="ml-5 flex flex-col gap-3">
            {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Restore Your Exterior?" subtitle="Get a free pressure washing estimate for your Sanford, NC home." />
    </Layout>
  );
}
