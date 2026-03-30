import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "Central Reporting for 100+ Independent Optometry Practices",
    category: "Power BI Reporting",
    description:
      "Implemented a centralised Power BI reporting solution that aggregates data across more than 100 independent optometry practices, providing real-time insights and consistent analytics across the network.",
    outcomes: [
      "Unified reporting across 100+ locations",
      "Real-time business performance visibility",
      "Standardised KPI tracking",
    ],
    image: "/images/service-powerbi.png",
  },
  {
    title: "Plant Data Reporting for Desalination and Waste Water Treatment",
    category: "Data Integration",
    description:
      "Developed comprehensive data reporting solutions for desalination and waste water treatment sites, enabling real-time plant monitoring and compliance reporting.",
    outcomes: [
      "Automated compliance reporting",
      "Real-time plant monitoring dashboards",
      "Historical trend analysis",
    ],
    image: "/images/product-plant.jpg",
  },
  {
    title: "Permit Management for Plant Maintenance Work and Isolations",
    category: "Job & Permit Management",
    description:
      "Deployed a digital permit management system for plant maintenance operations, replacing paper-based processes with automated approval workflows and mobile access.",
    outcomes: [
      "Eliminated paper-based permit processes",
      "Mobile access for field workers",
      "Automated approval workflows",
    ],
    image: "/images/service-automation.png",
  },
  {
    title: "EDI Order and Invoice Automation between Wholesalers and Repco",
    category: "Business Automation",
    description:
      "Implemented EDI-compliant automation for order and invoice processing between wholesale suppliers and Repco, significantly reducing manual data entry and processing errors.",
    outcomes: [
      "Eliminated manual order entry",
      "Reduced invoice processing errors",
      "Improved supplier relationship management",
    ],
    image: "/images/product-etl.jpg",
  },
  {
    title: "Accounts Payable Invoice Receipt Automation with Lightyear",
    category: "Business Automation",
    description:
      "Integrated Lightyear AP automation platform with existing accounting systems, streamlining the invoice receipt and approval process across the organisation.",
    outcomes: [
      "Automated invoice capture and matching",
      "Streamlined approval workflows",
      "Reduced processing time by significant margin",
    ],
    image: "/images/product-dw.jpg",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Our Work
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Find out more about some of the solutions we provide for our
              clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 !== 0 ? "lg:col-start-2" : ""}>
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {study.category}
                  </span>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {study.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">
                      Key Outcomes:
                    </p>
                    {study.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-green-500 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">
                          {outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                  <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-accent to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want Similar Results?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let us help you automate and streamline your business processes.
          </p>
          <Link
            href="/contact"
            className="bg-white text-accent px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 inline-block"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
