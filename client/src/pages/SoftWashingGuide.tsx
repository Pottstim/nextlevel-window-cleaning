import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { SchemaMarkup, BreadcrumbSchema, ServiceSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ChevronDown, ChevronUp, CheckCircle, ArrowRight, Phone, AlertTriangle } from "lucide-react";

const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const comparisonFaqs = [
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses high-pressure water (1,000–4,000 PSI) to blast dirt off hard surfaces like concrete and brick. Soft washing uses low-pressure water combined with biodegradable cleaning solutions to kill algae, mold, and mildew at the root. Pressure washing physically removes; soft washing chemically treats and cleans."
  },
  {
    q: "When should I use soft washing instead of pressure washing?",
    a: "Use soft washing for roofs, painted siding, stucco, vinyl siding, window frames, and any delicate surfaces. High pressure on these surfaces can strip paint, crack vinyl, damage shingle granules, and void roof warranties. Use pressure washing for concrete driveways, brick patios, and unpainted sidewalks."
  },
  {
    q: "Can pressure washing damage my home's exterior?",
    a: "Yes, absolutely. Improperly applied pressure washing can strip paint, gouge wood, crack vinyl siding, loosen mortar between bricks, and blast granules off asphalt shingles. That's why we calibrate pressure to each surface and default to soft washing for anything that can't handle high PSI. We'd rather take a little longer than cause damage."
  },
  {
    q: "How long do results from soft washing last?",
    a: "Soft washing kills algae, mold, and mildew at the root rather than just blasting the visible surface layer. Results typically last 1–3 years on roofs and siding, compared to 6–12 months with pressure washing alone. The cleaning solution creates a residual effect that continues working after application."
  },
  {
    q: "Is soft washing safe for all roof types?",
    a: "Yes — it's actually the only cleaning method recommended by asphalt shingle manufacturers. High-pressure washing can void your roof warranty. Soft washing uses low pressure and specialized cleaning solutions that are safe for shingles, tiles, and metal roofing. We use solutions that are biodegradable and won't harm your landscaping."
  },
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

export default function SoftWashingGuide() {
  useSEO(
    "Soft Washing vs. Pressure Washing | What NC Homeowners Need to Know",
    "Comprehensive comparison guide: soft washing vs pressure washing for NC homes. Learn which method is right for roofs, siding, driveways, and more. Serving Sanford, NC.",
    "/guides/soft-washing-vs-pressure-washing"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comparisonFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Soft Washing vs. Pressure Washing: What Every NC Homeowner Needs to Know",
    "description": "A comprehensive comparison of soft washing and pressure washing methods for North Carolina homes, with surface-specific guidance and professional recommendations.",
    "author": { "@type": "Organization", "name": "Next Level Window Cleaning" },
    "publisher": { "@type": "Organization", "name": "Next Level Window Cleaning" },
    "datePublished": "2026-06-06",
    "dateModified": "2026-06-06"
  };

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={articleSchema} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Guides", url: "/guides" },
        { name: "Soft Washing vs. Pressure Washing", url: "/guides/soft-washing-vs-pressure-washing" }
      ]} />

      <section className="relative bg-[var(--brand-charcoal)] text-white py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <p className="text-[var(--brand-aqua)] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Homeowner Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Soft Washing vs. Pressure Washing: What Every NC Homeowner Needs to Know
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            North Carolina humidity is relentless on home exteriors. Choosing the wrong cleaning method can do more damage than good. Here's how to decide.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Factor</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Pressure Washing</th>
                  <th className="text-left py-4 px-6 font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>Soft Washing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Water Pressure", "1,000–4,000 PSI", "Under 500 PSI (garden-hose level)"],
                  ["Best For", "Concrete, brick, stone, unpainted wood", "Roofs, vinyl siding, stucco, painted surfaces, window frames"],
                  ["How It Works", "Physical force blasts dirt/grime off", "Chemical solution kills organic growth at root"],
                  ["Roof Safety", "⚠ Can damage shingles and void warranty", "✅ Recommended by shingle manufacturers"],
                  ["Result Duration", "6–12 months", "1–3 years"],
                  ["NC Typical Use", "Driveway cleaning after pollen season", "Roof algae treatment, siding mold removal"],
                  ["Cost Range (NC)", "$200–$600 per project", "$300–$800 per project"],
                ].map(([factor, pressure, soft]) => (
                  <tr key={factor} className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">{factor}</td>
                    <td className="py-4 px-6 text-gray-600">{pressure}</td>
                    <td className="py-4 px-6 text-gray-600">{soft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Surface-Specific Guidance */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Which Method for Each Surface?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { surface: "Asphalt Roof Shingles", method: "Soft Wash Only", note: "Pressure washing voids most roof warranties. NC humidity breeds roof algae — soft washing kills it without damage.", safe: true },
              { surface: "Vinyl Siding", method: "Soft Wash", note: "Pressure can crack vinyl panels and force water behind them, causing mold inside walls.", safe: true },
              { surface: "Painted Wood Siding", method: "Soft Wash", note: "High pressure peels paint. Soft washing cleans without stripping.", safe: true },
              { surface: "Concrete Driveways", method: "High Pressure", note: "NC pollen and algae stain concrete deeply. Pressure washing removes what soft washing can't.", safe: false },
              { surface: "Brick Patios / Walkways", method: "High Pressure", note: "Brick can handle pressure. Gets deep into mortar lines for a thorough clean.", safe: false },
              { surface: "Window Frames", method: "Soft Wash", note: "Pressure near window seals risks water intrusion. Soft wash + hand detailing for glass.", safe: true },
              { surface: "Decks (Pressure-Treated Wood)", method: "Low Pressure or Soft Wash", note: "Too much pressure gouges wood grain. Gentle pressure + appropriate cleaner for best results.", safe: true },
              { surface: "Stucco Exteriors", method: "Soft Wash Only", note: "Stucco is porous and fragile. Any pressure can crack and pit the surface.", safe: true },
            ].map(({ surface, method, note, safe }) => (
              <div key={surface} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${safe ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                  <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{surface}</h3>
                </div>
                <p className="text-sm text-[var(--brand-aqua)] font-semibold mb-2">{method}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NC-Specific Context */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Why NC's Climate Makes This Decision Critical
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Sanford and the Sandhills region sit in a climate zone where humidity stays above 60% for most of the year. That creates ideal conditions for the kind of organic growth — algae, mold, mildew, and moss — that soft washing is specifically designed to kill. Pressure washing alone removes the visible layer but doesn't eliminate the root structure, so regrowth happens fast.</p>
            <p>Here's what that means for your home: if your roof has dark streaks (which are actually <em>Gloeocapsa magma</em>, a blue-green algae common across the Southeast), pressure washing will temporarily remove them but can strip protective granules from your shingles in the process. Soft washing with a sodium hypochlorite-based solution kills the algae at the root and prevents regrowth for 2–3 years — without touching your roof warranty.</p>
            <p>Similarly, North Carolina's heavy pollen season (February through May) layers a yellow film on every exterior surface. Soft washing dissolves pollen without the abrasive force that can etch it into softer materials.</p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8 flex items-start gap-4">
              <AlertTriangle size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-800 mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>Warning for NC Homeowners</p>
                <p className="text-sm text-amber-700">Many fly-by-night pressure washing services use the same high-pressure setting on every surface. This is how roofs get damaged, siding gets cracked, and water gets forced behind exterior walls. Always confirm your provider knows the difference between pressure washing and soft washing — and uses the right one for each surface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {comparisonFaqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTASection title="Get the Right Cleaning for Your Home" subtitle="We assess every surface individually. Free estimate, same-day response." />
    </Layout>
  );
}
