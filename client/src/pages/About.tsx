// About.tsx — Next Level Window Cleaning
import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import { Shield, Star, MapPin, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { ABOUT_HERO, ABOUT_DECK_RAILS } from "@/config/images";

// Phone number with local NC area code
const PHONE = "(910) 485-1020";
const PHONE_HREF = "tel:9104851020";

const values = [
  { icon: Shield, title: "Fully Insured", desc: "We carry full liability insurance on every job. You're protected." },
  { icon: Star, title: "Quality First", desc: "We don't cut corners. Every job gets our full attention and effort." },
  { icon: MapPin, title: "Locally Rooted", desc: "We live and work here in Sanford, NC. This community is our community." },
  { icon: CheckCircle, title: "Honest Pricing", desc: "Clear, upfront quotes. No surprises, no hidden fees." },
];

export default function About() {
  useSEO(
    "About Next Level Window Cleaning | Sanford, NC",
    "Meet Adam Griffith and the Next Level Window Cleaning team. Locally owned, fully insured, serving Sanford and Lee County, NC.",
    "/about"
  );
  return (
    <Layout>
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"About","url":"/about"}]} />
      {/* Hero */}
      <section className="relative min-h-[340px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_HERO} alt="About Next Level Window Cleaning" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.78) 0%, rgba(10,20,40,0.4) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-14">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>About Next Level Window Cleaning</h1>
          <p className="text-white/85 text-lg max-w-lg">We're a small, local team based right here in Sanford. Fully insured, and we stand behind every job we do — no corporate scripts, no shortcuts.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div>
              <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Our Story</h2>
              <div className="ml-5 flex flex-col gap-4 text-gray-600 leading-relaxed">
                <p>Next Level Window Cleaning was founded by Adam Griffith right here in Sanford, NC. Adam started this business because he saw a need for reliable, professional exterior cleaning services in the area — and wanted to build something he could be proud of in his own community.</p>
                <p>We're not a franchise or a national chain. We're a local business that cares about the people we serve. Every job we take on, we bring the same level of care and attention to detail — whether it's a single-family home or a commercial storefront.</p>
                <p>Our goal is simple: show up on time, do the job right, and leave every property looking better than we found it.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-80">
              <img src={ABOUT_DECK_RAILS} alt="Adam Griffith — Owner, Next Level Window Cleaning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-sky-tint">
        <div className="container max-w-4xl mx-auto">
          <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-5 ml-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                  <Icon size={20} style={{ color: 'var(--brand-aqua)' }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area mention */}
      <section className="py-14 bg-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Serving Sanford &amp; Lee County</h2>
          <p className="text-gray-600 leading-relaxed mb-6">We're proud to serve homeowners and businesses throughout Sanford, Cameron, Spring Lake, Broadway, and surrounding communities in Lee County, NC.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/get-a-free-estimate"><span className="btn-primary">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href={PHONE_HREF} className="btn-coral"><Phone size={16} /> {PHONE}</a>
          </div>
        </div>
      </section>

      <CTASection title="Ready to Work With Us?" subtitle="Get a free estimate today — we respond the same day." />
    </Layout>
  );
}
