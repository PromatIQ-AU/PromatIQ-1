import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PromatIQ - Business Process Automation | Simplified Solutions",
  description:
    "Automating Business Processes and Data Feeds. Data Integration, Database Management, Reporting and BI. Over 20 years of data management experience.",
  keywords: [
    "business automation",
    "data integration",
    "Power BI",
    "ETL",
    "database management",
    "EDI",
    "Australia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-primary antialiased">
        <Script
          id="hs-script-loader"
          src="//js-ap1.hs-scripts.com/441944092.js"
          strategy="afterInteractive"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
