import Image from "next/image";
import Link from "next/link";

const partners = [
  "Lightyear",
  "CyberCert (SMB1001)",
  "MYOB",
  "Microsoft Partner",
  "AWS",
];

const customers = ["Gold Coast", "Bupa", "Veolia", "SSWA"];

const values = [
  {
    title: "Automation First",
    description:
      "We believe in eliminating manual processes wherever possible, freeing your team to focus on what matters.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Data Integrity",
    description:
      "Accurate data is the foundation of good business decisions. We ensure your data is clean, secure, and reliable.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We build lasting relationships with our clients, some of whom have been with us for over 12 years.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "Security is a top priority. We are SMB1001 accredited, ensuring your data and systems are protected.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              We are a technology company providing solutions for businesses
              seeking to{" "}
              <span className="text-white font-semibold">automate</span> their
              data capturing,{" "}
              <span className="text-white font-semibold">streamline</span> their
              systems or{" "}
              <span className="text-white font-semibold">report</span> on their
              data.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-surface"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 text-accent rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Partnerships & Vendors
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white px-8 py-4 rounded-xl shadow-sm flex items-center justify-center min-w-[160px]"
              >
                <span className="font-semibold text-gray-600">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Trusted By
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {customers.map((customer) => (
              <div
                key={customer}
                className="bg-surface px-8 py-4 rounded-xl flex items-center justify-center min-w-[160px]"
              >
                <span className="font-semibold text-gray-600">{customer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Fill out some info and we will be in touch shortly.
          </p>
          <Link
            href="/contact"
            className="bg-white text-accent px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
