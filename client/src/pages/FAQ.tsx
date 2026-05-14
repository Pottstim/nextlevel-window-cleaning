// FAQ.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SchemaMarkup } from "@/components/SchemaMarkup";

// Phone number with local NC area code
const PHONE = "(323) 485-1020";
const PHONE_HREF = "tel:3234851020";

const faqs = [
  { category: "About the Business", items: [
    { q: "Are you insured?", a: "Yes. Next Level Window Cleaning carries full liability insurance on every job. We can provide a certificate of insurance for commercial clients or property managers upon request." },
    { q: "Are you locally owned?", a: "Yes. We're based right here in Sanford, NC. Owner Adam Griffith started this business to serve his neighbors with honest, professional exterior cleaning." },
    { q: "What areas do you serve?", a: "We serve Sanford, Cameron, Spring Lake, Broadway, and surrounding towns in Lee County, NC. Not sure if we cover your area? Just give us a call." },
  ]},
  { category: "Estimates & Pricing", items: [
    { q: "How do estimates work?", a: "Fill out our estimate form online or give us a call. We'll review your property details and get back to you quickly — usually the same day. There's no obligation." },
    { q: "Are estimates free?", a: "Yes, estimates are always free. We'll give you a clear, upfront quote before any work begins." },
    { q: "How do I pay?", a: "We accept cash, check, and major credit cards. Payment is due upon completion of service unless other arrangements are made for recurring commercial accounts." },
  ]},
  { category: "Window Cleaning", items: [
    { q: "How often should windows be cleaned?", a: "Most homeowners benefit from professional window cleaning 2–4 times per year. Homes near busy roads or with heavy tree cover may need more frequent service." },
    { q: "Do I need to be home?", a: "For exterior-only cleaning, you don't need to be present. For interior cleaning, we'll coordinate a time that works for you." },
    { q: "Do you clean screens?", a: "Yes. We remove, clean, and reinstall window screens as part of our standard service." },
    { q: "Do you bring your own equipment?", a: "Yes. We bring all professional-grade equipment and supplies. You don't need to provide anything." },
  ]},
  { category: "Pressure Washing & Soft Washing", items: [
    { q: "Is pressure washing safe for siding?", a: "Yes, when done correctly. We adjust pressure levels based on the surface type. Vinyl and wood siding require lower pressure than concrete — we know the difference and take care accordingly." },
    { q: "What is soft washing?", a: "Soft washing uses low-pressure water combined with biodegradable cleaning solutions to safely remove algae, mold, and staining from delicate surfaces like roofs, painted siding, and stucco." },
    { q: "How long do results last?", a: "Pressure washing results typically last 6–12 months depending on the surface and environment. Soft washing treatments can last 1–3 years because the solution kills algae and mold at the root." },
  ]},
  { category: "Commercial Services", items: [
    { q: "Do you offer commercial recurring service?", a: "Yes. We offer weekly, bi-weekly, and monthly service agreements for commercial clients. Recurring clients get priority scheduling and consistent results." },
    { q: "Can you work around our business hours?", a: "Absolutely. We offer early morning and off-hours scheduling so your cleaning is done before customers arrive." },
    { q: "Do you work with property managers?", a: "Yes. We work with property managers who oversee multiple commercial properties. We can coordinate service across locations and provide consistent invoicing." },
  ]},
  { category: "Christmas Lights", items: [
    { q: "Do you install Christmas lights seasonally?", a: "Yes! We offer professional holiday light installation and takedown for both residential and commercial properties. Seasonal slots fill up fast — contact us early to secure your spot." },
    { q: "Do you provide the lights or do I need to supply them?", a: "We can work with your existing lights or help you select and source lights for your property. Ask us about options when you request your estimate." },
  ]},
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

export default function FAQ() {
  useSEO(
    "FAQs | Next Level Window Cleaning Sanford, NC",
    "Answers to common questions about window cleaning, pressure washing, and exterior services in Sanford, NC. Locally owned and fully insured.",
    "/faq"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => category.items).map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <Layout>
      <SchemaMarkup schema={faqSchema} />
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-2xl text-center">
          <nav className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-gray-600 cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-gray-600">FAQ</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Frequently Asked Questions</h1>
          <p className="text-gray-600">Answers to the questions we hear most often. Don't see yours? <a href={PHONE_HREF} className="font-semibold" style={{ color: 'var(--brand-aqua)' }}>Give us a call.</a></p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container max-w-2xl">
          {faqs.map(({ category, items }) => (
            <div key={category} className="mb-10">
              <h2 className="section-heading text-xl text-gray-900 mb-5">{category}</h2>
              <div className="ml-5 flex flex-col gap-3">
                {items.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Still Have Questions?" subtitle="Call or text us anytime — we're happy to help." />
    </Layout>
  );
}
