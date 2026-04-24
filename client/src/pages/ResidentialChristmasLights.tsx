import useSEO from "@/hooks/useSEO";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { CheckCircle, ArrowRight, Phone, Lightbulb } from "lucide-react";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053588823/2Q9vFKpYTpE7ehgtZMKV35/about-owner-immczEsLDP9vspUAY9jzEb.webp";
const services = ["Professional installation on rooflines, trees, and shrubs","Custom design to match your home","Safe, secure mounting — no damage to your property","Takedown and storage at season's end","Commercial and HOA properties welcome"];
export default function ResidentialChristmasLights() {
  useSEO(
    "Christmas Light Installation in Sanford, NC | Next Level",
    "Professional holiday light installation and takedown for homes in Sanford and Lee County, NC. Stress-free, beautiful results every time."
  );
  return (
    <Layout>
      <section className="relative min-h-[380px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Christmas light installation Sanford NC" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(10,20,40,0.80) 0%, rgba(10,20,40,0.5) 60%, transparent 100%)' }} />
        </div>
        <div className="container relative z-10 py-16">
          <nav className="text-white/70 text-xs mb-4 flex items-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-white cursor-pointer">Home</span></Link><span>/</span>
            <Link href="/residential"><span className="hover:text-white cursor-pointer">Residential</span></Link><span>/</span>
            <span className="text-white">Christmas Lights</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-3 py-1 mb-4">
            <Lightbulb size={13} className="text-yellow-300" />
            <span className="text-yellow-200 text-xs font-bold" style={{ fontFamily: 'Manrope, sans-serif' }}>SEASONAL SERVICE</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Christmas Light Installation in Sanford, NC</h1>
          <p className="text-white/85 text-lg mb-6 max-w-lg">Professional holiday light installation and takedown. We handle everything so you can enjoy the season.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-free-estimate"><span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span></Link>
            <a href="tel:3234851020" className="btn-outline-white"><Phone size={16} /> (323) 485-1020</a>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white"><div className="container max-w-3xl">
        <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-4">Enjoy the Holidays Without the Hassle</h2>
        <p className="text-gray-600 leading-relaxed ml-5 mb-4">Holiday light installation is one of those jobs that sounds simple but takes hours — and involves ladders, tangled lights, and cold weather. Let us handle it. We install, maintain, and take down your lights professionally and safely.</p>
        <p className="text-gray-600 leading-relaxed ml-5">We work with homeowners and businesses throughout Sanford, NC. Book early — seasonal slots fill up fast.</p>
      </div></section>
      <section className="py-14 bg-sky-tint"><div className="container">
        <h2 className="section-heading text-2xl lg:text-3xl text-gray-900 mb-8">What's Included</h2>
        <div className="grid sm:grid-cols-2 gap-4 ml-5">
          {services.map((s) => (
            <div key={s} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              <CheckCircle size={17} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-aqua)' }} />
              <span className="text-gray-700 text-sm font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>{s}</span>
            </div>
          ))}
        </div>
      </div></section>
      <CTASection title="Book Your Holiday Light Installation" subtitle="Slots fill up fast. Contact us early to secure your spot in Sanford, NC." />
    </Layout>
  );
}
