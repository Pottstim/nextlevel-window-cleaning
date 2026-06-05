// Contact.tsx — Next Level Window Cleaning
// Email delivery via Web3Forms (https://web3forms.com) — free, no backend required
// TO ACTIVATE: Replace YOUR_WEB3FORMS_ACCESS_KEY below with the key from web3forms.com/access
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, CheckCircle, Facebook, Loader2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

// ─── WEB3FORMS CONFIG ────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com/access
// 2. Enter your email (info@nextlevelwindowsnc.com or your Gmail)
// 3. Copy the Access Key and paste it below
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
// ─────────────────────────────────────────────────────────────────────────────

// Phone number with local NC area code
const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

function SuccessMessage() {
  return (
    <div className="text-center py-10">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={28} className="text-green-500" />
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>Message Sent!</h3>
      <p className="text-gray-600 text-sm">We'll get back to you the same day. You can also reach us at <a href={PHONE_HREF} className="font-semibold" style={{ color: 'var(--brand-aqua)' }}>{PHONE}</a>.</p>
    </div>
  );
}

export default function Contact() {
  useSEO(
    "Contact Us | Next Level Window Cleaning in Sanford, NC",
    "Get a free exterior cleaning estimate. Call or message our team for window washing, gutter cleaning, and pressure washing in the Sandhills.",
    "/contact"
  );
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Contact Form Submission — ${form.name}`,
          from_name: "Next Level Window Cleaning Website",
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(`Something went wrong. Please call us at ${PHONE}.`);
      }
    } catch {
      setError(`Network error. Please call us at ${PHONE}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Contact","url":"/contact"}]} />
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-3xl text-center">
          <nav className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-gray-600 cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-gray-600">Contact</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Contact Next Level Window Cleaning</h1>
          <p className="text-gray-600">We're easy to reach. Call, text, or fill out the form below.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Contact info */}
            <div>
              <h2 className="section-heading text-xl text-gray-900 mb-6">Get in Touch</h2>
              <div className="ml-5 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                    <Phone size={18} style={{ color: 'var(--brand-aqua)' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>Phone / Text</p>
                    <a href={PHONE_HREF} className="text-gray-600 hover:text-gray-900 transition-colors">{PHONE}</a>
                    <p className="text-xs text-gray-400 mt-0.5">Call or text anytime</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                    <Mail size={18} style={{ color: 'var(--brand-aqua)' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>Email</p>
                    <a href="mailto:info@nextlevelwindowsnc.com" className="text-gray-600 hover:text-gray-900 transition-colors">info@nextlevelwindowsnc.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                    <MapPin size={18} style={{ color: 'var(--brand-aqua)' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>Service Area</p>
                    <p className="text-gray-600 text-sm">Sanford, NC and surrounding areas<br />Lee County, NC</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                    <Clock size={18} style={{ color: 'var(--brand-aqua)' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>Hours</p>
                    <p className="text-gray-600 text-sm">Monday–Saturday: 7am – 6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-aqua-light)' }}>
                    <Facebook size={18} style={{ color: 'var(--brand-aqua)' }} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>Facebook</p>
                    <a href="https://www.facebook.com/people/Next-Level-Window-Cleaning/61579913446585/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Next Level Window Cleaning</a>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-100 relative mt-8 ml-5">
                <iframe
                  title="Next Level Window Cleaning Service Area — Sanford NC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52303.37!2d-79.1775!3d35.4799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5b1e9d4e4e4b%3A0x0!2sSanford%2C%20NC!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-sky-tint rounded-2xl p-6 lg:p-8">
              <h2 className="font-extrabold text-gray-900 text-xl mb-5" style={{ fontFamily: 'Manrope, sans-serif' }}>Send a Message</h2>
              {submitted ? <SuccessMessage /> : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Honeypot spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  <div><label className="form-label">Your Name *</label><input required name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Jane Smith" /></div>
                  <div><label className="form-label">Phone *</label><input required name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(919) 348-9808" /></div>
                  <div><label className="form-label">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="jane@example.com" /></div>
                  <div><label className="form-label">Message *</label><textarea required name="message" value={form.message} onChange={handleChange} className="form-input" rows={4} placeholder="Tell us what you need..." /></div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" disabled={loading} className="btn-coral py-3 justify-center disabled:opacity-60">
                    {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Message"}
                  </button>
                  <p className="text-xs text-gray-400 text-center">We respond the same day.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
