import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "powerbi",
    title: "Power BI Reporting & Analytics",
    subtitle: "Fast-Track Your Business Analytics",
    description:
      "Fast-track your business analytics reporting path to Power BI with a range of standard templates and integrations to most accounting systems.",
    features: [
      "Integrations with Xero, MYOB, SAP B1, Sage, Syspro, Dynamics, Pronto",
      "Sales and purchases analytics",
      "Accounts payable and receivable reporting",
      "Demand forecasting dashboards",
      "Custom metrics tailored to your business",
      "Standard templates for rapid deployment",
    ],
    image: "/images/service-powerbi.png",
  },
  {
    id: "automation",
    title: "Business System Automation & EDI",
    subtitle: "Eliminate Manual Data Entry",
    description:
      "Eliminate manual data entry by automating time-consuming tasks that frequently produce errors and inaccuracies in business operations.",
    features: [
      "Removes manual data capture from business processes",
      "Prevents mistakes and inaccuracies in data entry",
      "EDI compliance with industry standards",
      "Automated order, delivery, and invoice processing",
      "File integration with accounting systems",
      "Seamless integration into existing workflows",
    ],
    image: "/images/service-automation.png",
  },
  {
    id: "dba",
    title: "DBA Services & Database Management",
    subtitle: "Expert SQL Database Administration",
    description:
      "Many businesses are heavily dependent on SQL databases which are frequently forgotten about until there is an issue. Let us take the worry out of managing your SQL services at a fraction of the cost of a full-time DBA.",
    features: [
      "Proactive database monitoring and maintenance",
      "Performance tuning and optimisation",
      "Backup and disaster recovery planning",
      "Security auditing and compliance",
      "Migration and upgrade assistance",
      "Cost-effective alternative to full-time DBA",
    ],
    image: "/images/service-dba.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-light font-semibold text-sm tracking-widest uppercase mb-4">
              Our Expertise
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Our Services
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              We have over 20 years of data management experience relating to
              interfaces, databases, applications and reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
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
                  {service.subtitle}
                </p>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
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
                    src={service.image}
                    alt={service.title}
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
            Need a Custom Solution?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Every business is different. Let us understand your needs and build
            the right solution for you.
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
