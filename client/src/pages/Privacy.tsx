import useSEO from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Privacy() {
  useSEO(
    "Privacy Policy | Next Level Window Cleaning",
    "Privacy policy for Next Level Window Cleaning.",
    "/privacy"
  );
  return (
    <Layout>
      <section className="py-12 bg-sky-tint border-b border-gray-200">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Manrope, sans-serif' }}>Privacy Policy</h1>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container max-w-2xl prose text-gray-600">
          <p>Effective Date: {new Date().getFullYear()}</p>
          <p>
            At Next Level Window Cleaning, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website or services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, and physical address when you request a free estimate or contact us for services.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information strictly to provide window cleaning and exterior washing services, respond to your inquiries, and schedule appointments. We do not sell or rent your personal information to third parties.
          </p>
          <h2>Security</h2>
          <p>
            We implement appropriate security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at info@nextlevelwindowsnc.com or (919) 348-9808.
          </p>
        </div>
      </section>
    </Layout>
  );
}
