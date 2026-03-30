import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "etl",
    title: "IQData ETL",
    tagline: "Universal Extract Transform Load",
    description:
      "No-code universal ETL allowing configuration of all common data types including Databases, API, and File Data Types. Templates enable setup completion in under an hour.",
    features: [
      "No-code configuration for all common data types",
      "Database, REST API, and file-based integrations",
      "Built-in standard API authentication methods",
      "Automatic data format conversion to/from tabular format",
      "Pre-built templates for rapid setup (under 1 hour)",
      "Compatible with Postman parameters — no custom code needed",
    ],
    image: "/images/product-etl.jpg",
  },
  {
    id: "warehouse",
    title: "IQData Hosted Data Warehouse",
    tagline: "Secure Cloud Data Storage",
    description:
      "Secure hosted data store with remote data feed. API interface with data compression handling, suitable for combining data from multiple unlinked stores or sites.",
    features: [
      "Secure cloud-hosted data storage",
      "Remote data feed capabilities",
      "API interface with compression handling",
      "Multi-source data integration",
      "Centralised data management",
      "Combine data from unlinked stores or sites",
    ],
    image: "/images/product-dw.jpg",
  },
  {
    id: "plant",
    title: "IQData Job & Permit Management",
    tagline: "Plant Operations Made Simple",
    description:
      "Secure, cloud-hosted platform designed for plant operations and industrial environments. Mobile-friendly access with notifications, approvals, and comprehensive logging.",
    features: [
      "Mobile-friendly access from anywhere",
      "Notifications for alerts, actions, and approvals",
      "Shift event logging with commentary",
      "Job entries with photo attachments",
      "Permit creation and approval workflows",
      "Contractor and equipment status logging",
      "Laboratory data capture",
    ],
    image: "/images/product-plant.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Software Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Our Products
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              We have a range of software products to help manage your business.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                  {product.tagline}
                </p>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {product.title}
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {product.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-200 inline-block"
                >
                  Enquire
                </Link>
              </div>
              <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                <div className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want to See a Demo?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get in touch and we&apos;ll show you how our products can help
            streamline your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-accent px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 inline-block"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
