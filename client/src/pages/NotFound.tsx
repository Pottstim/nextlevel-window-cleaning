// NotFound.tsx — Next Level Window Cleaning
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Home, Phone, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-24 bg-sky-tint flex items-center">
        <div className="container max-w-xl text-center">
          <div className="text-8xl font-extrabold mb-4"
            style={{ color: 'var(--brand-aqua)', fontFamily: 'Manrope, sans-serif', opacity: 0.25 }}>
            404
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}>
            Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <span className="btn-primary"><Home size={16} /> Back to Home</span>
            </Link>
            <Link href="/get-a-free-estimate">
              <span className="btn-coral">Get a Free Estimate <ArrowRight size={16} /></span>
            </Link>
            <a href="tel:9193489808"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold text-white text-sm"
              style={{ backgroundColor: 'var(--brand-charcoal)', fontFamily: 'Manrope, sans-serif' }}>
              <Phone size={16} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
