'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGalleryProps {
  products: Product[];
}

export default function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg hover:text-orange-500 transition-colors"
              aria-label="Închide detaliile produsului"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-full bg-gray-100">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-orange-500/90 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                  {selectedProduct.subcategory}
                </div>
              </div>

              <div className="p-8 lg:p-10 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Preț orientativ
                  </span>
                  <span className="text-3xl font-extrabold text-orange-500">
                    {selectedProduct.price.toFixed(2)} lei
                  </span>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold text-gray-800">Categorie: </span>
                    {selectedProduct.category}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Subcategorie: </span>
                    {selectedProduct.subcategory}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+40123456789"
                    className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-orange-600"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Comandă telefonic
                  </a>
                  <a
                    href={`mailto:orders@mvpdesign.ro?subject=Solicitare%20oferta:%20${encodeURIComponent(selectedProduct.name)}&body=Bună%20ziua,%0D%0A%0D%0AAș%20dori%20o%20ofertă%20pentru:%0D%0AProdus:%20${encodeURIComponent(selectedProduct.name)}%0D%0ACategorie:%20${encodeURIComponent(selectedProduct.subcategory)}%0D%0AID%20produs:%20${selectedProduct.id}%0D%0A%0D%0AMențiuni:%0D%0A-%20Cantitate%20dorita:%0D%0A-%20Dimensiuni%20/Specificatii:%0D%0A%0D%0AVă%20mulțumesc!`}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Solicită ofertă prin email
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={`/produse/produs/${selectedProduct.id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Vezi pagina produsului
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-800"
                  >
                    Închide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
