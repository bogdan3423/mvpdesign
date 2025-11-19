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
      <section className="relative overflow-hidden bg-orange-500">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/imageupdate.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Gradient overlay for text contrast - top-to-bottom on mobile, left-to-right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 via-60% to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent z-[1]"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              Tot ce ai nevoie pentru Birou și Creativitate
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed" style={{ fontSize: 'larger' }}>
              <b>Papetărie de calitate premium, rechizite pentru birou și materiale artistice profesionale. 
              Comandă telefonic sau prin email.</b>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-bold text-center shadow-lg"
              >
                <b>Vezi Produsele</b>
              </Link>
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition-colors font-bold text-center shadow-lg"
              >
                <b>Contactează-ne acum!</b>
              </Link>
            </div>
          </div>
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
