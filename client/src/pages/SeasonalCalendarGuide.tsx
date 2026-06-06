import useSEO from "@/hooks/useSEO";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { SchemaMarkup, BreadcrumbSchema } from "@/components/SchemaMarkup";
import CTASection from "@/components/CTASection";
import { ArrowRight, Phone, Calendar, Thermometer, Leaf, Cloud, Snowflake, Sun, Wind, TreeDeciduous, AlertTriangle } from "lucide-react";

const PHONE = "(919) 348-9808";
const PHONE_HREF = "tel:9193489808";

const seasonalFaqs = [
  { q: "When does pollen season start for window cleaning in North Carolina?", a: "NC pollen season typically runs from late February through May, with peak intensity in March–April when pine and oak pollen blanket everything. This is when professional window cleaning makes the biggest visible difference. We recommend late April or early May for a post-pollen deep clean, once the yellow dust has settled." },
  { q: "How often should I pressure wash my driveway in NC?", a: "Once a year is the baseline for most NC driveways. However, homes under heavy tree cover (common in Sanford and Lee County) often need it every 6–9 months due to faster algae growth in shaded, humid conditions. Schedule your pressure washing after pollen season (May–June) and again in early fall (October) for best results." },
  { q: "What's the best time of year to book Christmas light installation?", a: "Book by September for the best availability. Installation begins in October and runs through mid-December. Takedown starts January. Our calendar fills up fast — especially for commercial properties that want lights up before their holiday displays are announced." },
  { q: "Can you clean gutters in winter?", a: "Yes — winter gutter cleaning is actually critical. Clogged gutters combined with freezing temperatures create ice dams that can damage your roof. We clean gutters year-round, though we avoid scheduling on days with active ice or snow for safety reasons." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors">
        <span className="font-bold text-gray-900 text-sm pr-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{q}</span>
        {open ? <span className="text-[var(--brand-aqua)]">▲</span> : <span className="text-gray-400">▼</span>}
      </button>
      {open && <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white border-t border-gray-100">{a}</div>}
    </div>
  );
}

const months = [
  { name: "January", icon: Snowflake, temp: "30–50°F", focus: "Interior Window Cleaning", tasks: "With outdoor temps low, January is ideal for interior window cleaning. Warm water-fed pole work is limited outdoors but possible on milder days.", services: ["Interior window cleaning", "Commercial recurring service (slower season — easier booking)", "Gutter inspection for ice dam damage"] },
  { name: "February", icon: Thermometer, temp: "33–56°F", focus: "Pre-Pollen Prep", tasks: "February is your last chance to get windows spotless before NC pollen season hits. Early soft washing prevents heavy spring algae blooms.", services: ["Exterior window cleaning (pre-pollen)", "Soft washing for early algae treatment", "Commercial storefront prep for spring"] },
  { name: "March", icon: Wind, temp: "42–67°F", focus: "Pollen Season Begins", tasks: "NC's infamous yellow dust arrives. Exterior window cleaning during peak pollen is counterproductive — focus on interior work and surface prep instead.", services: ["Interior window cleaning", "Pre-season pressure washing of patios and decks", "Gutter cleaning — clear winter debris before spring rains"] },
  { name: "April", icon: Leaf, temp: "49–75°F", focus: "Peak Pollen + Gutter Season", tasks: "Pollen at maximum intensity. Gutters fill with pollen-laced debris. The humidity rises — algae starts growing visibly on siding and driveways.", services: ["Gutter cleaning + downspout flushing", "Book late-April post-pollen exterior window cleaning", "Soft wash roof and siding to kill spring algae"] },
  { name: "May", icon: TreeDeciduous, temp: "57–83°F", focus: "Post-Pollen Deep Clean", tasks: "Pollen subsides. This is the single best month for comprehensive exterior cleaning. Clean everything — you'll see the results all summer.", services: ["Exterior window cleaning (best time of year)", "Pressure washing: driveways, patios, walkways", "Soft washing: siding, decks, fences", "Book Christmas light installation early — September slots fill by July"] },
  { name: "June", icon: Sun, temp: "65–90°F", focus: "Summer Maintenance", tasks: "Hot and humid. Algae and mildew grow aggressively on north-facing surfaces. Soft washing treatments last longer in this weather because they kill roots, not just surfaces.", services: ["Pressure washing for summer entertaining", "Soft wash treatment for shaded/north-facing siding", "Commercial recurring service (summer curb appeal)"] },
  { name: "July", icon: Thermometer, temp: "69–93°F", focus: "Peak Algae Season", tasks: "The humidity spikes and algae takes over. Driveways turn green. Windows haze over from humidity and road dust. This is the month soft washing earns its keep — it prevents regrowth longer than pressure washing alone.", services: ["Pressure washing: driveways, sidewalks, pool decks", "Soft washing: siding, fences, retaining walls", "Commercial storefront maintenance"] },
  { name: "August", icon: Cloud, temp: "68–91°F", focus: "Hurricane Prep Begins", tasks: "Peak hurricane season approaches. Clear gutters and downspouts now to prevent water damage during heavy rains. Trim overhanging branches that could scrape windows in high winds.", services: ["Gutter cleaning + downspout flush (hurricane prep)", "Exterior window cleaning", "Book Christmas lights now if you haven't already — slots are filling"] },
  { name: "September", icon: Calendar, temp: "61–84°F", focus: "Christmas Light Booking + Fall Prep", tasks: "Last call for Christmas light installation booking (October–November slots). The weather cools — prime time for pressure washing before fall leaf drop.", services: ["Pressure washing: clean surfaces before leaf fall", "Exterior window cleaning — post-summer haze removal", "Christmas light consultation and booking", "Gutter prep — inspect before leaves fall"] },
  { name: "October", icon: Leaf, temp: "49–73°F", focus: "Leaf Season + Light Install", tasks: "NC leaves fall heavy in October–November. Gutters fill fast. Christmas light installation begins for commercial and early-booking residential clients.", services: ["Gutter cleaning — two cleanings often needed during leaf season", "Christmas light installation begins", "Pressure washing for fall entertaining", "Soft wash roof treatment"] },
  { name: "November", icon: Wind, temp: "39–64°F", focus: "Leaf Cleanup + Holidays", tasks: "Leaves are peaking. Gutters need final cleaning before winter. Christmas light installation in full swing — most residential installs happen now.", services: ["Final gutter cleaning before winter", "Christmas light installation (peak season)", "Exterior window cleaning — holiday ready", "Pressure washing: clear leaves and debris from driveways"] },
  { name: "December", icon: Snowflake, temp: "32–53°F", focus: "Holiday + Year-End", tasks: "Christmas lights glowing. Temperatures drop — water-fed pole work is limited on freezing days, but mild NC winters mean many days are still workable.", services: ["Last Christmas light installations (early December)", "Interior window cleaning — holiday guests", "Commercial year-end service", "Plan next year's cleaning schedule"] },
];

export default function SeasonalCalendar() {
  useSEO(
    "Complete Exterior Cleaning Calendar for NC Homes | 2026 | Next Level",
    "Month-by-month guide to maintaining your home's exterior in North Carolina. When to clean windows, pressure wash driveways, clear gutters, soft wash siding, and install Christmas lights — all optimized for NC's unique climate.",
    "/guides/seasonal-cleaning-calendar-nc"
  );

  return (
    <Layout>
      <BreadcrumbSchema items={[{"name":"Home","url":"/"},{"name":"Guides","url":"/guides"},{"name":"Seasonal Cleaning Calendar","url":"/guides/seasonal-cleaning-calendar-nc"}]} />
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": seasonalFaqs.map(faq => ({
          "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      }} />

      {/* Hero */}
      <section className="relative bg-[var(--brand-charcoal)] text-white py-20 md:py-28">
        <div className="container max-w-4xl text-center">
          <p className="text-[var(--brand-aqua)] font-semibold text-sm uppercase tracking-widest mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Home Maintenance Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>The Complete Exterior Cleaning Calendar for NC Homes</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">North Carolina's unique climate — pollen, humidity, hurricanes, and leaf fall — requires a different cleaning rhythm than most states. Here's exactly what to do and when, month by month.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-a-free-estimate" className="inline-flex items-center gap-2 bg-[var(--brand-coral)] text-white px-7 py-3.5 rounded-lg font-bold hover:opacity-90 transition-opacity" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Get a Free Estimate <ArrowRight size={18} />
            </Link>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <Phone size={18} /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* NC Climate Context */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>Why NC Homes Need a Different Cleaning Schedule</h2>
          <div className="flex flex-col gap-4 ml-5 text-gray-600 leading-relaxed">
            <p>North Carolina sits in a climatic sweet spot that's beautiful to live in but brutal on building exteriors. We get four distinct seasons — but with a twist: long, intense pollen seasons (late February–May), extended humidity-driven algae growth (June–September), active hurricane seasons (August–October), and heavy leaf fall (October–November). A standard "wash once in spring" schedule that works in drier climates doesn't cut it here.</p>
            <p>The key insight: in NC, cleaning is <em>preventative</em>, not cosmetic. A gutter cleaned before hurricane season prevents thousands in water damage. Soft washing applied in spring prevents months of siding algae. Windows cleaned post-pollen stay clear far longer than windows cleaned during peak yellow dust. The calendar below reflects 15+ years of Sanford and Lee County exterior maintenance experience.</p>
          </div>
        </div>
      </section>

      {/* Month-by-Month Calendar */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>Month-by-Month Calendar</h2>
          <div className="flex flex-col gap-6">
            {months.map(({ name, icon: Icon, temp, focus, tasks, services }, i) => (
              <div key={name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-aqua)]/10 flex items-center justify-center">
                      <Icon size={22} className="text-[var(--brand-aqua)]" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl text-gray-900" style={{ fontFamily: 'Manrope, sans-serif' }}>{name}</h3>
                      <p className="text-sm text-gray-500">{temp} · {focus}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ml-5 mb-3 leading-relaxed">{tasks}</p>
                <div className="ml-5 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span key={s} className="bg-[var(--brand-aqua)]/5 border border-[var(--brand-aqua)]/20 rounded-full px-3 py-1 text-xs font-semibold text-[var(--brand-aqua)]" style={{ fontFamily: 'Manrope, sans-serif' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>Seasonal Cleaning FAQ</h2>
          <div className="space-y-3">
            {seasonalFaqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Plan Your Year?" subtitle="Get a free estimate and let us build a seasonal cleaning schedule tailored to your home." />
    </Layout>
  );
}
