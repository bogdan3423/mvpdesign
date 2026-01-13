import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MVP DESIGN - Everything for Your Creative and Office Needs",
  description: "Quality stationery and office supplies. Order by phone or email. Office supplies, school supplies, and art materials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for instant loading */}
        <link rel="preload" as="image" href="/Poze-produse/A4-SRA4.png" type="image/png" />
        <link rel="preload" as="image" href="/Poze-produse/A3-SRA3.png" type="image/png" />
        <link rel="preload" as="image" href="/Poze-produse/sticker1.png" type="image/png" />
        <link rel="preload" as="image" href="/Poze-produse/Afis-2.png" type="image/png" />
        <link rel="preload" as="image" href="/Poze-produse/brosura-cu-mai-multe-file-MVP-Design.png" type="image/png" />
        <link rel="preload" as="image" href="/Poze-produse/carte-de-vizita.png" type="image/png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
