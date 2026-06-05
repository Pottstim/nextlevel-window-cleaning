// GetEstimate.tsx — Next Level Window Cleaning
// Email delivery via Web3Forms (https://web3forms.com) — free, no backend required
// TO ACTIVATE: Replace YOUR_WEB3FORMS_ACCESS_KEY or set VITE_WEB3FORMS_KEY in environment
import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, CheckCircle, Home as HomeIcon, Building2, Loader2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

// ─── WEB3FORMS CONFIG ────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com/access
// 2. Enter your email (info@nextlevelwindowsnc.com or your Gmail)
// 3. Copy the Access Key and paste it below, OR set VITE_WEB3FORMS_KEY in environment
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";
// ─────────────────────────────────────────────────────────────────────────────

// Phone number with local NC area code
const PHONE = "(323) 485-1020";
const PHONE_HREF = "tel:3234851020";

type FormType = "residential" | "commercial";

function SuccessMessage() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={32} className="text-green-500" />
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>We Got Your Request!</h3>
      <p className="text-gray-600 mb-6">We'll review your details and get back to you — usually the same day. You can also reach us directly at <a href={PHONE_HREF} className="font-semibold" style={{ color: 'var(--brand-aqua)' }}>{PHONE}</a>.</p>
      <Link href="/"><span className="btn-primary">Back to Home</span></Link>
    </div>
  );
}

async function submitToWeb3Forms(payload: Record<string, string>) {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: WEB3FORMS_KEY, from_name: "Next Level Window Cleaning Website", ...payload }),
  });
  return res.json();
}

function ResidentialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "", service: "", timeframe: "", bestTime: "", notes: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await submitToWeb3Forms({
        subject: `New Residential Estimate Request — ${form.name} — ${form.service}`,
        name: form.name,
        phone: form.phone,
        email: form.email || "Not provided",
        address: `${form.address}, ${form.city}`,
        service: form.service,
        timeframe: form.timeframe || "No preference",
        best_time_to_call: form.bestTime || "Any time",
        notes: form.notes || "None",
        lead_type: "Residential",
        botcheck: "",
      });
      if (data.success) setSubmitted(true);
      else setError(`Something went wrong. Please call us at ${PHONE}.`);
    } catch {
      setError(`Network error. Please call us at ${PHONE}.`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessMessage />;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Your Name *</label><input required name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Jane Smith" /></div>
        <div><label className="form-label">Phone Number *</label><input required name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(323) 485-1020" /></div>
      </div>
      <div><label className="form-label">Email Address</label><input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="jane@example.com" /></div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Property Address *</label><input required name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="123 Main St" /></div>
        <div><label className="form-label">City *</label><input required name="city" value={form.city} onChange={handleChange} className="form-input" placeholder="Sanford" /></div>
      </div>
      <div><label className="form-label">Service Needed *</label>
        <select required name="service" value={form.service} onChange={handleChange} className="form-input">
          <option value="">Select a service...</option>
          <option value="Window Cleaning">Window Cleaning</option>
          <option value="Pressure Washing">Pressure Washing</option>
          <option value="Soft Washing">Soft Washing</option>
          <option value="Gutter Cleaning">Gutter Cleaning</option>
          <option value="Christmas Lights">Christmas Lights</option>
          <option value="Multiple Services">Multiple Services</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Preferred Timeframe</label>
          <select name="timeframe" value={form.timeframe} onChange={handleChange} className="form-input">
            <option value="">No preference</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="This week">This week</option>
            <option value="Next week">Next week</option>
            <option value="This month">This month</option>
          </select>
        </div>
        <div><label className="form-label">Best Time to Reach You</label>
          <select name="bestTime" value={form.bestTime} onChange={handleChange} className="form-input">
            <option value="">Any time</option>
            <option value="Morning (7am–12pm)">Morning (7am–12pm)</option>
            <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
            <option value="Evening (5pm–7pm)">Evening (5pm–7pm)</option>
          </select>
        </div>
      </div>
      <div><label className="form-label">Additional Notes</label><textarea name="notes" value={form.notes} onChange={handleChange} className="form-input" rows={3} placeholder="Any details about your property or specific concerns..." /></div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-coral text-base py-3.5 justify-center disabled:opacity-60">
        {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Submit Estimate Request"}
      </button>
      <p className="text-xs text-gray-400 text-center">We typically respond the same day. Your information is never shared.</p>
    </form>
  );
}

function CommercialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ businessName: "", contactName: "", phone: "", email: "", address: "", propertyType: "", service: "", frequency: "", scope: "", schedule: "", notes: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await submitToWeb3Forms({
        subject: `New Commercial Bid Request — ${form.businessName} — ${form.service}`,
        business_name: form.businessName,
        contact_name: form.contactName,
        phone: form.phone,
        email: form.email || "Not provided",
        address: form.address,
        property_type: form.propertyType || "Not specified",
        service: form.service || "Not specified",
        frequency: form.frequency || "Not specified",
        scope: form.scope || "Not specified",
        preferred_schedule: form.schedule || "Not specified",
        notes: form.notes || "None",
        lead_type: "Commercial",
        botcheck: "",
      });
      if (data.success) setSubmitted(true);
      else setError(`Something went wrong. Please call us at ${PHONE}.`);
    } catch {
      setError(`Network error. Please call us at ${PHONE}.`);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessMessage />;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Business Name *</label><input required name="businessName" value={form.businessName} onChange={handleChange} className="form-input" placeholder="Acme Retail LLC" /></div>
        <div><label className="form-label">Contact Name *</label><input required name="contactName" value={form.contactName} onChange={handleChange} className="form-input" placeholder="John Smith" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Phone *</label><input required name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(323) 485-1020" /></div>
        <div><label className="form-label">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="john@business.com" /></div>
      </div>
      <div><label className="form-label">Property Address *</label><input required name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="456 Commerce Blvd, Sanford, NC" /></div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Type of Property</label>
          <select name="propertyType" value={form.propertyType} onChange={handleChange} className="form-input">
            <option value="">Select...</option>
            <option value="Retail Storefront">Retail Storefront</option>
            <option value="Office Building">Office Building</option>
            <option value="Restaurant / Café">Restaurant / Café</option>
            <option value="Medical / Dental">Medical / Dental</option>
            <option value="Property Management">Property Management</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div><label className="form-label">Service Needed</label>
          <select name="service" value={form.service} onChange={handleChange} className="form-input">
            <option value="">Select...</option>
            <option value="Window Cleaning">Window Cleaning</option>
            <option value="Pressure Washing">Pressure Washing</option>
            <option value="Soft Washing">Soft Washing</option>
            <option value="Multiple Services">Multiple Services</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">One-Time or Recurring?</label>
          <select name="frequency" value={form.frequency} onChange={handleChange} className="form-input">
            <option value="">Select...</option>
            <option value="One-Time">One-Time</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div><label className="form-label">Estimated Scope</label><input name="scope" value={form.scope} onChange={handleChange} className="form-input" placeholder="e.g., 3 storefronts, 2-story building" /></div>
      </div>
      <div><label className="form-label">Preferred Schedule</label><input name="schedule" value={form.schedule} onChange={handleChange} className="form-input" placeholder="e.g., Early morning before 8am, weekdays only" /></div>
      <div><label className="form-label">Notes</label><textarea name="notes" value={form.notes} onChange={handleChange} className="form-input" rows={3} placeholder="Any special requirements, access notes, or questions..." /></div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-coral text-base py-3.5 justify-center disabled:opacity-60">
        {loading ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Submit Commercial Bid Request"}
      </button>
      <p className="text-xs text-gray-400 text-center">We respond the same business day. Your information is never shared.</p>
    </form>
  );
}

export default function GetEstimate() {
  useSEO(
    "Get a Free Estimate | Next Level Window Cleaning Sanford, NC",
    "Request a free window cleaning or pressure washing estimate in Sanford, NC. Same-day response. Locally owned, fully insured.",
    "/get-a-free-estimate"
  );
  const [formType, setFormType] = useState<FormType>("residential");
  return (
    <Layout>
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Get a Free Estimate","url":"/get-a-free-estimate"}]} />
      {/* Header */}
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-2xl text-center">
          <nav className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-gray-600 cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-gray-600">Get a Free Estimate</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Get a Free Estimate</h1>
          <p className="text-gray-600 mb-2">Fill out the form below and we'll get back to you the same day.</p>
          <p className="text-sm text-gray-500">Prefer to call? <a href={PHONE_HREF} className="font-semibold" style={{ color: 'var(--brand-aqua)' }}>{PHONE}</a> — call or text anytime.</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-white">
        <div className="container max-w-2xl">
          {/* Type selector */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200 mb-8">
            <button onClick={() => setFormType("residential")}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm transition-colors ${formType === "residential" ? "text-white" : "text-gray-600 bg-white hover:bg-gray-50"}`}
              style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: formType === "residential" ? 'var(--brand-aqua)' : undefined }}>
              <HomeIcon size={16} /> Residential
            </button>
            <button onClick={() => setFormType("commercial")}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 font-bold text-sm transition-colors border-l border-gray-200 ${formType === "commercial" ? "text-white" : "text-gray-600 bg-white hover:bg-gray-50"}`}
              style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: formType === "commercial" ? 'var(--brand-aqua)' : undefined }}>
              <Building2 size={16} /> Commercial
            </button>
          </div>

          {formType === "residential" ? <ResidentialForm /> : <CommercialForm />}

          {/* Trust signals */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-5">
            {["Fully Insured", "Locally Owned", "Same-Day Response", "No Spam, Ever"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold" style={{ fontFamily: 'Manrope, sans-serif' }}>
                <CheckCircle size={13} style={{ color: 'var(--brand-aqua)' }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact alternative */}
      <section className="py-10 bg-sky-tint">
        <div className="container max-w-2xl text-center">
          <p className="text-gray-600 mb-3">Rather talk to someone directly?</p>
          <a href={PHONE_HREF} className="btn-coral text-base px-8 py-3.5 inline-flex">
            <Phone size={17} /> Call or Text {PHONE}
          </a>
        </div>
      </section>
    </Layout>
  );
}
