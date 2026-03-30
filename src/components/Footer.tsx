import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="PromatIQ"
              width={160}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Automating Business Processes and Data Feeds. Over 20 years of
              data management experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#powerbi"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Power BI Reporting
                </Link>
              </li>
              <li>
                <Link
                  href="/services#automation"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#dba"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  DBA Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products#etl"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  IQData ETL
                </Link>
              </li>
              <li>
                <Link
                  href="/products#warehouse"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Hosted Data Warehouse
                </Link>
              </li>
              <li>
                <Link
                  href="/products#plant"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Job & Permit Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:Sales@Promatiq.com"
                  className="hover:text-white transition-colors"
                >
                  Sales@Promatiq.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+61730079173"
                  className="hover:text-white transition-colors"
                >
                  +61 7 3007 9173
                </a>
              </li>
              <li>Mon - Fri: 8am - 5pm AEST</li>
            </ul>
            <div className="mt-4">
              <a
                href="https://au.linkedin.com/company/promatiq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Promatiq PTY LTD. All Rights
            Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
