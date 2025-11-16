'use client';

import Image from "next/image";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import { products, categories } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Tot ce ai nevoie pentru Birou și Creativitate
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Papetărie de calitate premium, rechizite pentru birou și materiale artistice profesionale. 
              Comandă telefonic sau prin email.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-bold text-center shadow-lg"
              >
                Vezi Produsele
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-bold text-center"
              >
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>

        {/* Modern wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              className="fill-gray-50"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Produse Recomandate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descoperă cele mai populare produse
            </p>
          </div>

          <ProductGallery products={featuredProducts} />

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-bold text-lg"
            >
              Vezi Toate Produsele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
