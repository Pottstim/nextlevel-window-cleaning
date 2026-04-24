// GetEstimate.tsx — Next Level Window Cleaning
// Main conversion page with residential and commercial estimate forms
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, CheckCircle, Home as HomeIcon, Building2 } from "lucide-react";

type FormType = "residential" | "commercial";

function SuccessMessage() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={32} className="text-green-500" />
      </div>
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>We Got Your Request!</h3>
      <p className="text-gray-600 mb-6">We'll review your details and get back to you — usually the same day. You can also reach us directly at <a href="tel:3234851020" className="font-semibold" style={{ color: 'var(--brand-aqua)' }}>(323) 485-1020</a>.</p>
      <Link href="/"><span className="btn-primary">Back to Home</span></Link>
    </div>
  );
}

function ResidentialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "", service: "", timeframe: "", bestTime: "", notes: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  if (submitted) return <SuccessMessage />;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Your Name *</label><input required name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="Jane Smith" /></div>
        <div><label className="form-label">Phone Number *</label><input required name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(910) 555-0100" /></div>
      </div>
      <div><label className="form-label">Email Address</label><input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="jane@example.com" /></div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Property Address *</label><input required name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="123 Main St" /></div>
        <div><label className="form-label">City *</label><input required name="city" value={form.city} onChange={handleChange} className="form-input" placeholder="Sanford" /></div>
      </div>
      <div><label className="form-label">Service Needed *</label>
        <select required name="service" value={form.service} onChange={handleChange} className="form-input">
          <option value="">Select a service...</option>
          <option value="window-cleaning">Window Cleaning</option>
          <option value="pressure-washing">Pressure Washing</option>
          <option value="soft-washing">Soft Washing</option>
          <option value="gutter-cleaning">Gutter Cleaning</option>
          <option value="christmas-lights">Christmas Lights</option>
          <option value="multiple">Multiple Services</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Preferred Timeframe</label>
          <select name="timeframe" value={form.timeframe} onChange={handleChange} className="form-input">
            <option value="">No preference</option>
            <option value="asap">As soon as possible</option>
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="this-month">This month</option>
          </select>
        </div>
        <div><label className="form-label">Best Time to Reach You</label>
          <select name="bestTime" value={form.bestTime} onChange={handleChange} className="form-input">
            <option value="">Any time</option>
            <option value="morning">Morning (7am–12pm)</option>
            <option value="afternoon">Afternoon (12pm–5pm)</option>
            <option value="evening">Evening (5pm–7pm)</option>
          </select>
        </div>
      </div>
      <div><label className="form-label">Additional Notes</label><textarea name="notes" value={form.notes} onChange={handleChange} className="form-input" rows={3} placeholder="Any details about your property or specific concerns..." /></div>
      <input type="hidden" name="lead_type" value="residential" />
      <input type="hidden" name="source_page" value="/get-a-free-estimate" />
      <button type="submit" className="btn-coral text-base py-3.5 justify-center">Submit Estimate Request</button>
      <p className="text-xs text-gray-400 text-center">We typically respond the same day. Your information is never shared.</p>
    </form>
  );
}

function CommercialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ businessName: "", contactName: "", phone: "", email: "", address: "", propertyType: "", service: "", frequency: "", scope: "", schedule: "", notes: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  if (submitted) return <SuccessMessage />;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Business Name *</label><input required name="businessName" value={form.businessName} onChange={handleChange} className="form-input" placeholder="Acme Retail LLC" /></div>
        <div><label className="form-label">Contact Name *</label><input required name="contactName" value={form.contactName} onChange={handleChange} className="form-input" placeholder="John Smith" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Phone *</label><input required name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(910) 555-0100" /></div>
        <div><label className="form-label">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="john@business.com" /></div>
      </div>
      <div><label className="form-label">Property Address *</label><input required name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="456 Commerce Blvd, Sanford, NC" /></div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">Type of Property</label>
          <select name="propertyType" value={form.propertyType} onChange={handleChange} className="form-input">
            <option value="">Select...</option>
            <option value="retail">Retail Storefront</option>
            <option value="office">Office Building</option>
            <option value="restaurant">Restaurant / Café</option>
            <option value="medical">Medical / Dental</option>
            <option value="property-mgmt">Property Management</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div><label className="form-label">Service Needed</label>
          <select name="service" value={form.service} onChange={handleChange} className="form-input">
            <option value="">Select...</option>
            <option value="window-cleaning">Window Cleaning</option>
            <option value="pressure-washing">Pressure Washing</option>
            <option value="soft-washing">Soft Washing</option>
            <option value="multiple">Multiple Services</option>
          </select>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className="form-label">One-Time or Recurring?</label>
          <select name="frequency" value={form.frequency} onChange={handleChange} className="form-input">
            <option value="">Select...</option>
            <option value="one-time">One-Time</option>
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div><label className="form-label">Estimated Scope</label><input name="scope" value={form.scope} onChange={handleChange} className="form-input" placeholder="e.g., 3 storefronts, 2-story building" /></div>
      </div>
      <div><label className="form-label">Preferred Schedule</label><input name="schedule" value={form.schedule} onChange={handleChange} className="form-input" placeholder="e.g., Early morning before 8am, weekdays only" /></div>
      <div><label className="form-label">Notes</label><textarea name="notes" value={form.notes} onChange={handleChange} className="form-input" rows={3} placeholder="Any special requirements, access notes, or questions..." /></div>
      <input type="hidden" name="lead_type" value="commercial" />
      <input type="hidden" name="source_page" value="/get-a-free-estimate" />
      <button type="submit" className="btn-coral text-base py-3.5 justify-center">Submit Commercial Bid Request</button>
      <p className="text-xs text-gray-400 text-center">We respond the same business day. Your information is never shared.</p>
    </form>
  );
}

export default function GetEstimate() {
  const [formType, setFormType] = useState<FormType>("residential");
  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-2xl text-center">
          <nav className="text-gray-400 text-xs mb-4 flex items-center justify-center gap-1.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            <Link href="/"><span className="hover:text-gray-600 cursor-pointer">Home</span></Link><span>/</span>
            <span className="text-gray-600">Get a Free Estimate</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Get a Free Estimate</h1>
          <p className="text-gray-600 mb-2">Fill out the form below and we'll get back to you the same day.</p>
          <p className="text-sm text-gray-500">Prefer to call? <a href="tel:3234851020" className="font-semibold" style={{ color: 'var(--brand-aqua)' }}>(323) 485-1020</a> — call or text anytime.</p>
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
          <a href="tel:3234851020" className="btn-coral text-base px-8 py-3.5 inline-flex">
            <Phone size={17} /> Call or Text (323) 485-1020
          </a>
        </div>
      </section>
    </Layout>
  );
}
