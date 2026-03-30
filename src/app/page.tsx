import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Power BI Reporting & Analytics",
    description:
      "Fast-track your business analytics reporting path to Power BI with standard templates and integrations to most accounting systems.",
    image: "/images/service-powerbi.png",
    href: "/services#powerbi",
  },
  {
    title: "Business System Automation & EDI",
    description:
      "Eliminate manual data entry by automating time-consuming tasks that frequently produce errors and inaccuracies.",
    image: "/images/service-automation.png",
    href: "/services#automation",
  },
  {
    title: "DBA Services & Database Management",
    description:
      "Let us take the worry out of managing your SQL services at a fraction of the cost of a full-time DBA.",
    image: "/images/service-dba.png",
    href: "/services#dba",
  },
];

const products = [
  {
    title: "IQData ETL",
    description:
      "Universal Extract Transform Load Application, facilitating quick integrations with no-code configuration.",
    image: "/images/product-etl.jpg",
    href: "/products#etl",
  },
  {
    title: "IQData Hosted Data Warehouse",
    description:
      "Secure Hosted Data Store with Remote Data Feed, suitable for combining data from multiple unlinked stores or sites.",
    image: "/images/product-dw.jpg",
    href: "/products#warehouse",
  },
  {
    title: "IQData Job & Permit Management",
    description:
      "Site Work Job Management and Permit Control with Approval Workflows, notifications and mobile access.",
    image: "/images/product-plant.jpg",
    href: "/products#plant",
  },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "12+", label: "Years Client Retention" },
  { value: "100+", label: "Integrations Delivered" },
  { value: "24/7", label: "System Monitoring" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Business Process Automation"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
              Business Process Automation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Simplified
              <br />
              <span className="text-accent-light">Solutions</span>
            </h1>
            <ul className="text-gray-300 text-lg space-y-2 mb-8 animate-fade-in-up animation-delay-400">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-light rounded-full" />
                Automating Business Processes and Data Feeds
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-light rounded-full" />
                Data Integration
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-light rounded-full" />
                Database Management
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-accent-light rounded-full" />
                Reporting and BI
              </li>
            </ul>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/about"
                className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                Learn More
              </Link>
              <Link
                href="/case-studies"
                className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Our Services
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              We have over 20 years of data management experience relating to
              interfaces, databases, applications and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 inline-block"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              Software Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Our Products
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              We have a range of software products to help manage your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group bg-surface rounded-2xl overflow-hidden border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 inline-block"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Interested in working together? Fill out some info and we will be in
            touch shortly.
          </p>
          <Link
            href="/contact"
            className="bg-white text-accent px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
