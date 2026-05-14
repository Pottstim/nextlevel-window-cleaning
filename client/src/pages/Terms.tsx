import useSEO from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Terms() {
  useSEO(
    "Terms of Service | Next Level Window Cleaning",
    "Terms of service for Next Level Window Cleaning.",
    "/terms"
  );
  return (
    <Layout>
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Terms of Service</h1>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container max-w-2xl prose text-gray-600">
          <p>Effective Date: {new Date().getFullYear()}</p>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing our website and using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
          <h2>2. Services</h2>
          <p>
            Next Level Window Cleaning provides professional residential and commercial window cleaning, pressure washing, soft washing, gutter cleaning, and Christmas light installation services in Sanford, NC and surrounding areas.
          </p>
          <h2>3. Estimates and Pricing</h2>
          <p>
            All estimates are free and based on the information provided or an in-person assessment. Final pricing may be adjusted if the scope of work differs from the initial estimate.
          </p>
          <h2>4. Liability</h2>
          <p>
            While we take the utmost care in providing our services and carry full liability insurance, we are not liable for pre-existing damage to your property, including but not limited to failing window seals, loose siding, or flaking paint.
          </p>
          <h2>5. Contact Information</h2>
          <p>
            For any questions or concerns regarding these terms, please contact us at info@nextlevelwindowsnc.com or (323) 485-1020.
          </p>
        </div>
      </section>
    </Layout>
  );
}
